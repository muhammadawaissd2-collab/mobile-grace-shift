import { useState } from "react";
import { SearchIcon, Bot, Loader2, Sparkles, WifiOff } from "lucide-react";
import { callAi } from "@/lib/ai-client";
import { useOnline } from "@/hooks/use-online";

export default function AiSearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const online = useOnline();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const text = await callAi("search", query.trim());
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
          <SearchIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl sm:text-3xl text-foreground font-medium tracking-wide">AI Assistant</h1>
          <p className="text-sm sm:text-base text-foreground/60 leading-snug mt-1">Search diagnoses, rehab plans, and clinical concepts.</p>
        </div>
      </div>

      {!online && (
        <div className="elevated mb-4 !p-3 flex items-center gap-2 text-sm text-foreground/70">
          <WifiOff className="h-4 w-4" /> You are offline. AI is disabled until you reconnect.
        </div>
      )}

      <div className="elevated mb-6 !p-6">
        <label className="block text-sm font-medium text-primary/80 mb-3 uppercase tracking-widest">What are you looking for?</label>
        <div className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g. Rehab plan for moderate Achilles tendinopathy..."
            className="w-full pl-12 pr-4 h-14 rounded-xl bg-background/50 border border-primary/20 focus:outline-none focus:ring-1 focus:ring-primary shadow-inner text-base"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim() || !online}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />}
          {loading ? "Searching..." : "Search with AI"}
        </button>
      </div>

      {result && (
        <div className="inner-elevated p-6 animate-fade-in border border-primary/5">
          <h2 className="text-xl font-medium text-primary mb-4 flex items-center gap-2">
            <Bot className="h-5 w-5" /> AI Response
          </h2>
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/90 whitespace-pre-line leading-relaxed">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
