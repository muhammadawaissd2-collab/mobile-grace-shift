import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark, Dumbbell, Users, AlertTriangle, Activity, ClipboardCheck, Hand, BookOpen, Trash2, ArrowRight, Stethoscope, Sparkles, type LucideIcon } from "lucide-react";
import { useBookmarks, BookmarkType } from "@/contexts/BookmarkContext";
import { PageHeader } from "@/components/PageHeader";

const TYPE_META: Record<BookmarkType, { label: string; icon: LucideIcon; path: (id: number) => string; color: string }> = {
  exercise: { label: "Exercises", icon: Dumbbell, path: id => `/exercises?id=${id}`, color: "text-teal-400" },
  muscle: { label: "Muscle Groups", icon: Users, path: id => `/muscles?id=${id}`, color: "text-blue-400" },
  impairment: { label: "Impairments", icon: AlertTriangle, path: id => `/disorders?id=${id}`, color: "text-amber-400" },
  disorder: { label: "Disorders", icon: AlertTriangle, path: id => `/disorders?id=${id}`, color: "text-amber-400" },
  "sports-injury": { label: "Sports Injuries", icon: Activity, path: id => `/sports-injuries?id=${id}`, color: "text-red-400" },
  "special-test": { label: "MSK Special Tests", icon: ClipboardCheck, path: id => `/special-tests?id=${id}`, color: "text-pink-400" },
  "manual-technique": { label: "Manual Therapy", icon: Hand, path: id => `/manual-therapy?id=${id}`, color: "text-cyan-400" },
  "ebp-guideline": { label: "EBP Guidelines", icon: BookOpen, path: id => `/ebp?id=${id}`, color: "text-purple-400" },
  "differential-diagnosis": { label: "Differential Diagnosis", icon: Stethoscope, path: id => `/differential-diagnosis?id=${id}`, color: "text-indigo-400" },
  flashcard: { label: "Flashcards", icon: Sparkles, path: () => `/`, color: "text-yellow-400" },
};

const ORDER: BookmarkType[] = ["exercise", "muscle", "disorder", "impairment", "sports-injury", "differential-diagnosis", "special-test", "manual-technique", "ebp-guideline", "flashcard"];

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark, clearAll } = useBookmarks();
  const navigate = useNavigate();

  const grouped = useMemo(() => {
    const map: Partial<Record<BookmarkType, typeof bookmarks>> = {};
    bookmarks.forEach(b => {
      if (!map[b.type]) map[b.type] = [];
      map[b.type]!.push(b);
    });
    return map;
  }, [bookmarks]);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <PageHeader
        icon={Bookmark}
        title="Bookmarks"
        subtitle={`${bookmarks.length} saved item${bookmarks.length !== 1 ? "s" : ""} across all modules — tap any card to open it in its page.`}
        actions={
          bookmarks.length > 0 ? (
            <button
              onClick={() => { if (confirm("Clear all bookmarks?")) clearAll(); }}
              className="text-xs font-medium text-muted-foreground hover:text-destructive flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border/50 hover:border-destructive/40 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" /> Clear all
            </button>
          ) : undefined
        }
      />

      {bookmarks.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Bookmark className="h-10 w-10 mx-auto mb-2 opacity-40" />
          <p className="text-sm">No bookmarks yet.</p>
          <p className="text-xs mt-1">Tap the bookmark icon on any exercise, muscle, impairment, test or technique to save it here.</p>
        </div>
      )}

      <div className="space-y-6">
        {ORDER.filter(t => grouped[t]?.length).map(type => {
          const meta = TYPE_META[type];
          const items = grouped[type]!;
          const Icon = meta.icon;
          return (
            <section key={type}>
              <h2 className="font-display text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon className={`h-4 w-4 ${meta.color}`} />
                {meta.label}
                <span className="text-muted-foreground/60 text-xs font-normal">({items.length})</span>
              </h2>
              <div className="space-y-1.5">
                {items.map(b => (
                  <div key={`${b.type}-${b.id}`} className="elevated !p-3 flex items-center justify-between gap-2 group mb-2">
                    <button
                      onClick={() => navigate(meta.path(b.id))}
                      className="flex-1 min-w-0 text-left flex items-center gap-2"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary shrink-0" />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">{b.name}</span>
                    </button>
                    <button
                      onClick={() => toggleBookmark(b.id, b.type, b.name)}
                      className="text-muted-foreground/60 hover:text-red-400 shrink-0"
                      title="Remove bookmark"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
