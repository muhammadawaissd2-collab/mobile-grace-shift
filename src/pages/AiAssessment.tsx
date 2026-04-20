import { useState } from "react";
import { Stethoscope, FileOutput, Loader2, WifiOff } from "lucide-react";
import { callAi } from "@/lib/ai-client";
import { useOnline } from "@/hooks/use-online";

export default function AiAssessmentPage() {
  const [history, setHistory] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const online = useOnline();

  const handleAssessment = async () => {
    if (!history.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const text = await callAi("assessment", history.trim());
      setResult(text);
    } catch (err) {
      setResult(`⚠️ ${err instanceof Error ? err.message : "Failed to reach AI."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto animate-fade-in relative z-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl elevated-icon flex items-center justify-center">
          <Stethoscope className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl sm:text-3xl text-foreground font-medium tracking-wide">AI Assessment</h1>
          <p className="text-sm sm:text-base text-foreground/60 leading-snug mt-1">Generate a comprehensive clinical assessment plan.</p>
        </div>
      </div>

      {!online && (
        <div className="elevated mb-4 !p-3 flex items-center gap-2 text-sm text-foreground/70">
          <WifiOff className="h-4 w-4" /> Offline — AI disabled.
        </div>
      )}

      <div className="elevated mb-6 !p-6">
        <label className="block text-sm font-medium text-primary/80 mb-3 uppercase tracking-widest">Patient History & Context</label>
        <textarea
          value={history}
          onChange={(e) => setHistory(e.target.value)}
          placeholder="e.g. 28yo female runner, anterior knee pain increasing over last 3 weeks..."
          className="w-full h-32 p-4 rounded-xl bg-background/50 border border-primary/20 focus:outline-none focus:ring-1 focus:ring-primary shadow-inner text-base resize-none mb-4"
        />
        <button
          onClick={handleAssessment}
          disabled={loading || !history.trim() || !online}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <FileOutput className="h-5 w-5" />}
          {loading ? "Generating Plan..." : "Generate Assessment"}
        </button>
      </div>

      {result && (
        <div className="inner-elevated p-6 animate-fade-in border border-primary/5">
          <h2 className="text-xl font-medium text-primary mb-4">Assessment Report</h2>
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line leading-relaxed">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
