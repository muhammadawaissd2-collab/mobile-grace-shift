// Thin client for the unified ai-assistant edge function.
import { supabase } from "@/integrations/supabase/client";

export type AiMode = "search" | "diagnosis" | "assessment" | "plan";

export async function callAi(mode: AiMode, input: string, corpus?: unknown): Promise<string> {
  if (!navigator.onLine) {
    throw new Error("You are offline. AI features require an internet connection.");
  }
  const { data, error } = await supabase.functions.invoke("ai-assistant", {
    body: { mode, input, corpus },
  });
  if (error) {
    const msg = (error as { message?: string })?.message || "AI request failed";
    throw new Error(msg);
  }
  if (data?.error) throw new Error(data.error);
  return data?.text || "No response generated.";
}
