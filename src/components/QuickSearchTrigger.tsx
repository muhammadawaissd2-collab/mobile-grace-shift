import { Search } from "lucide-react";

export function QuickSearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full elevated !p-3 flex items-center gap-3 text-left tap-scale group hover:border-primary/30 transition-colors"
    >
      <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      <span className="text-sm text-muted-foreground flex-1">Search disorders, tests, muscles…</span>
      <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-secondary/60 text-muted-foreground border border-border/50">
        ⌘ K
      </kbd>
    </button>
  );
}
