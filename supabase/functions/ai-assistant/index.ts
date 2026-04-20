// Unified AI assistant edge function backing AiSearch / AiDiagnosis / AiAssessment / PhysioPlan.
// Uses Lovable AI Gateway (no user API key required).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PROMPTS: Record<string, string> = {
  search: `You are an expert physiotherapy clinical assistant. Answer the user's clinical query in clear markdown:
### Summary
### Key Clinical Points
### Evidence-based Recommendations
### Related Pages (markdown links to /disorders, /exercises, /muscles, /special-tests, /ebp, /manual-therapy as relevant)
Be concise, evidence-based, under 350 words. Never invent citations.`,
  diagnosis: `You are an expert physiotherapist generating a differential diagnosis worksheet.
Given the patient's symptoms, return markdown with:
### Most Likely Diagnoses (top 3 with brief reasoning)
### Red Flags to Rule Out
### Recommended Special Tests
### Next Steps
Be cautious, conservative, and remind that this is a clinical decision-support tool, not a diagnosis.`,
  assessment: `You are an expert physiotherapist building a comprehensive clinical assessment plan.
Given the patient profile/history, return markdown with:
### Subjective Findings to Probe
### Objective Examination
- ROM, Strength, Palpation, Neuro, Functional
### Recommended Special Tests (with sensitivity/specificity if known)
### Working Hypothesis & Prognosis
Keep it structured, scannable, and clinically actionable.`,
  plan: `You are an expert physiotherapist generating a phased rehabilitation plan.
Given the condition/diagnosis, return markdown with:
### Phase 1 — Acute (0-2 weeks): goals, exercises, parameters
### Phase 2 — Subacute (2-6 weeks): progression, exercises, parameters
### Phase 3 — Strengthening (6-12 weeks): exercises, sets/reps, load
### Phase 4 — Return to Sport / Function: criteria, plyometrics, sport-specific
### Outcome Measures
Be specific with sets, reps, intensity. Reference EBP where possible.`,
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { mode, input, corpus } = await req.json();
    if (!mode || !PROMPTS[mode]) {
      return new Response(JSON.stringify({ error: "Invalid mode. Use search|diagnosis|assessment|plan" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!input || typeof input !== "string" || !input.trim()) {
      return new Response(JSON.stringify({ error: "Missing input" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = corpus
      ? `${input}\n\nLOCAL CORPUS (use to ground your answer):\n${JSON.stringify(corpus).slice(0, 10000)}`
      : input;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: PROMPTS[mode] },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits in Workspace → Usage." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const txt = await response.text();
      console.error("AI gateway error:", response.status, txt);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content || "";
    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-assistant error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
