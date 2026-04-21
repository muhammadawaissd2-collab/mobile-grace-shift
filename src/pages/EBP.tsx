import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ebpGuidelines, disorders } from "@/data";
import { RegionTag } from "@/components/EBPBadge";
import { BookmarkButton } from "@/components/BookmarkButton";
import { RelatedSpecialTests } from "@/components/RelatedSpecialTests";
import {
  BookOpen, ChevronDown, ChevronUp, Award, FileText, ClipboardList, Link2,
  Brain, AlertOctagon, Target, Clock, Lightbulb, MessageSquare, Activity, Stethoscope,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

// ---------- Clinically derived enrichment ----------
// Synthesises additional structured guidance from the guideline + linked disorders,
// without changing the underlying JSON contract.

const dosageHints = (intervention: string): string => {
  const k = intervention.toLowerCase();
  if (k.includes("eccentric") || k.includes("hsr") || k.includes("heavy slow")) return "3 sets × 15 reps, 3-4 ×/week, 12 weeks. Tempo 3-0-3.";
  if (k.includes("isometric")) return "5 reps × 45 s at 70% MVC, 1-2 ×/day for analgesia.";
  if (k.includes("aerobic") || k.includes("cardio")) return "150 min/week moderate intensity (RPE 12-14/20).";
  if (k.includes("strength") || k.includes("resistance")) return "2-3 ×/week, 8-12 reps × 3 sets at 60-80% 1RM, progressive overload.";
  if (k.includes("manual therapy") || k.includes("mobil") || k.includes("manipul")) return "2-3 ×/week × 4-6 weeks as adjunct to active therapy. Reassess at 6 sessions.";
  if (k.includes("mckenzie") || k.includes("mdt")) return "10 reps every 2 h while symptomatic; reduce as centralisation occurs.";
  if (k.includes("education") || k.includes("cognitive") || k.includes("cft")) return "Single 30-60 min session + reinforcement at each visit. Validated tools: PNE booklet, Explain Pain.";
  if (k.includes("stretch")) return "30-60 s hold × 3-4 reps, 5-7 ×/week.";
  if (k.includes("balance") || k.includes("proprio")) return "10-15 min/session, 3-5 ×/week × 6 weeks minimum.";
  if (k.includes("dry needling") || k.includes("acupuncture")) return "1-2 ×/week × 4-6 weeks as adjunct; not stand-alone.";
  if (k.includes("taping") || k.includes("brace") || k.includes("orthos")) return "Short-term symptom modulator (2-4 weeks); pair with active rehab.";
  return "Individualise dose; reassess every 2-3 weeks against meaningful change on chosen outcome measure.";
};

const expectedOutcome = (grade: string): string => {
  switch (grade) {
    case "A": return "Clinically meaningful improvement expected in 60-80% of patients within 6-12 weeks when guideline is followed.";
    case "B": return "Moderate improvement expected in 50-70% of patients within 8-12 weeks; outcomes vary by phenotype.";
    case "C": return "Variable response — trial for 4-6 weeks and re-evaluate; consider alternative if no meaningful change.";
    default: return "Reassess against patient-specific goals and outcome measures every 2-4 weeks.";
  }
};

const generalPrecautions = (region: string, condition: string): string[] => {
  const out: string[] = [
    "Screen for red flags before each progression.",
    "Avoid prescribing exercise into protective muscle guarding without first addressing pain.",
    "Modify load if symptoms increase >2 points (NPRS) for >24 h post-session.",
  ];
  if (/spine|back|neck|cervical|lumbar|thoracic/i.test(region + condition)) {
    out.push("Caution with end-range loaded flexion/rotation in acute disc-related presentations.");
    out.push("Screen for cauda equina, vertebral artery insufficiency and inflammatory features.");
  }
  if (/shoulder|rotator|impinge/i.test(condition)) out.push("Avoid painful arc loading in early reactive phase; use isometrics for analgesia.");
  if (/tendinop|tendinit/i.test(condition)) out.push("Avoid stretching reactive tendons; prioritise progressive isometric → isotonic loading.");
  if (/osteoarthritis|oa\b/i.test(condition)) out.push("Co-manage weight, sleep and inflammation drivers — not just biomechanics.");
  if (/acl|meniscus|knee/i.test(condition)) out.push("Use criteria-based progression (LSI ≥90%, hop tests, psychological readiness) — not time alone.");
  return out;
};

const educationPoints = (condition: string): string[] => [
  `${condition}: explain natural history, expected timeline, and that hurt ≠ harm in most musculoskeletal presentations.`,
  "Sleep ≥7 h, manage stress, and aim for ≥150 min/week aerobic activity — all modulate pain.",
  "Active engagement with rehab is the strongest predictor of outcome — reinforce self-efficacy.",
  "Flare-ups are normal and don't mean re-injury; have a written flare-up plan.",
];

const reasoningPearls = (g: { condition: string; grade: string; key_interventions: { intervention: string }[] }): string[] => {
  const pearls: string[] = [];
  pearls.push(`Match intervention to phenotype, not just diagnosis — same label of "${g.condition}" can present as nociceptive, nociplastic or neuropathic dominant.`);
  if (g.grade === "A") pearls.push("Strong-evidence interventions should be offered first-line unless explicit contraindication.");
  if (g.key_interventions.some(k => /exercise/i.test(k.intervention))) pearls.push("Exercise dose-response matters — under-dosing is the most common reason for failed rehab.");
  if (g.key_interventions.some(k => /manual/i.test(k.intervention))) pearls.push("Manual therapy is an enabler, not a stand-alone treatment — pair with active rehab in the same session.");
  pearls.push("Re-test the irritability marker (e.g. AROM, single-leg hop, NPRS) at every visit to objectify progress.");
  return pearls;
};

export default function EBPPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [expandedId, setExpandedId] = useState<number | null>(
    searchParams.get("id") ? Number(searchParams.get("id")) : null
  );

  useEffect(() => {
    const id = searchParams.get("id");
    const s = searchParams.get("search");
    if (id) setExpandedId(Number(id));
    if (s) setSearch(s);
  }, [searchParams]);

  const gradeColor = (grade: string) => {
    switch (grade) {
      case "A": return "ebp-badge-strong";
      case "B": return "ebp-badge-moderate";
      case "C": return "ebp-badge-limited";
      default: return "ebp-badge-moderate";
    }
  };

  const filtered = search
    ? ebpGuidelines.filter(g =>
        g.condition.toLowerCase().includes(search.toLowerCase()) ||
        g.summary.toLowerCase().includes(search.toLowerCase()) ||
        g.region.toLowerCase().includes(search.toLowerCase())
      )
    : ebpGuidelines;

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <PageHeader
        icon={BookOpen}
        title="EBP Clinical Guidelines"
        subtitle="Evidence-based practice summaries — graded recommendations, key interventions, outcome measures and references."
        stats={[
          { label: "Guidelines", value: ebpGuidelines.length, tone: "primary" },
          { label: "Showing", value: filtered.length, tone: "muted" },
        ]}
      />

      {search && (
        <div className="mb-3">
          <button onClick={() => setSearch("")} className="text-xs text-primary hover:text-primary/80">
            ← Clear search "{search}"
          </button>
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((g) => {
          const expanded = expandedId === g.id;
          return (
            <div key={g.id} className="elevated !p-0 overflow-hidden mb-3">
              <button
                onClick={() => setExpandedId(expanded ? null : g.id)}
                className="w-full p-4 text-left flex items-center justify-between"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <p className="text-base font-semibold text-foreground">{g.condition}</p>
                    <span className={gradeColor(g.grade)}>Grade {g.grade}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{g.summary}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <BookmarkButton id={g.id} type="ebp-guideline" name={g.condition} />
                  <RegionTag region={g.region} />
                  {expanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </div>
              </button>

              {expanded && (
                <div className="px-4 pb-4 space-y-4 border-t border-border/50 pt-4 animate-fade-in">
                  <p className="text-sm text-foreground/90">{g.summary}</p>

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-primary" /> Key Interventions & Dose
                    </h3>
                    <div className="space-y-1.5">
                      {g.key_interventions.map((ki, i) => (
                        <div key={i} className="bg-secondary/30 rounded-lg px-3 py-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-foreground">{ki.intervention}</span>
                            <span className="text-xs text-primary font-medium shrink-0">{ki.evidence}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 flex items-start gap-1.5">
                            <Clock className="h-3 w-3 mt-0.5 shrink-0 text-primary/60" />
                            <span>{dosageHints(ki.intervention)}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Brain className="h-3.5 w-3.5 text-primary" /> Clinical Reasoning Pearls
                    </h3>
                    <ul className="space-y-1">
                      {reasoningPearls(g).map((p, i) => (
                        <li key={i} className="text-xs text-foreground/80 flex items-start gap-1.5">
                          <Lightbulb className="h-3 w-3 mt-0.5 shrink-0 text-amber-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-secondary/20 rounded-lg p-3">
                      <h3 className="text-xs font-display font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                        <Target className="h-3.5 w-3.5 text-primary" /> Expected Outcome
                      </h3>
                      <p className="text-xs text-muted-foreground">{expectedOutcome(g.grade)}</p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                      <h3 className="text-xs font-display font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                        <AlertOctagon className="h-3.5 w-3.5 text-amber-400" /> Precautions
                      </h3>
                      <ul className="space-y-0.5">
                        {generalPrecautions(g.region, g.condition).map((p, i) => (
                          <li key={i} className="text-xs text-foreground/80">• {p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" /> Patient Education Talking Points
                    </h3>
                    <ul className="space-y-1">
                      {educationPoints(g.condition).map((e, i) => (
                        <li key={i} className="text-xs text-foreground/80">• {e}</li>
                      ))}
                    </ul>
                  </div>

                  <RelatedDisorders condition={g.condition} region={g.region} navigate={navigate} />

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <ClipboardList className="h-3.5 w-3.5 text-primary" /> Outcome Measures
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {g.outcome_measures.map((om, i) => (
                        <span key={i} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full">{om}</span>
                      ))}
                    </div>
                  </div>

                  <RelatedSpecialTests region={g.region} condition={g.condition} />

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Link2 className="h-3.5 w-3.5 text-primary" /> Related Modules
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <button onClick={() => navigate(`/impairments?search=${encodeURIComponent(g.condition)}`)}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs border border-primary/30 hover:bg-primary/20">
                        Impairments
                      </button>
                      <button onClick={() => navigate(`/exercises?search=${encodeURIComponent(g.condition)}`)}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs border border-primary/30 hover:bg-primary/20">
                        Exercises
                      </button>
                      <button onClick={() => navigate(`/manual-therapy?search=${encodeURIComponent(g.region)}`)}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs border border-primary/30 hover:bg-primary/20">
                        Manual Therapy
                      </button>
                      <button onClick={() => navigate(`/sports-injuries?search=${encodeURIComponent(g.condition)}`)}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs border border-primary/30 hover:bg-primary/20">
                        Sports Injuries
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-primary" /> Key References
                    </h3>
                    <ul className="space-y-0.5">
                      {g.key_references.map((ref, i) => (
                        <li key={i} className="text-xs text-muted-foreground">• {ref}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Related disorders helper component ----------
function RelatedDisorders({ condition, region, navigate }: { condition: string; region: string; navigate: (p: string) => void }) {
  const matches = useMemo(() => {
    const c = condition.toLowerCase();
    const r = region.toLowerCase();
    const tokens = c.split(/\s+/).filter(t => t.length > 3);
    return disorders
      .filter(d => {
        const name = d.name?.toLowerCase() ?? "";
        const reg = d.region?.toLowerCase() ?? "";
        if (name.includes(c) || c.includes(name)) return true;
        if (reg === r && tokens.some(t => name.includes(t))) return true;
        return false;
      })
      .slice(0, 6);
  }, [condition, region]);

  if (matches.length === 0) return null;

  return (
    <div>
      <h3 className="text-xs font-display font-semibold text-foreground mb-2 flex items-center gap-1.5">
        <Stethoscope className="h-3.5 w-3.5 text-primary" /> Related Disorders
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {matches.map(d => (
          <button
            key={d.id}
            onClick={() => navigate(`/disorders?id=${d.id}`)}
            className="px-2 py-1 rounded bg-secondary/40 text-foreground/90 text-xs border border-border/40 hover:bg-secondary/70 hover:text-primary transition-colors"
          >
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
}
