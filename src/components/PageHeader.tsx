import type { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string | number;
  tone?: "default" | "primary" | "muted";
}

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  stats?: Stat[];
  iconClassName?: string;
  actions?: React.ReactNode;
}

/**
 * Unified, professional page header used across all main pages.
 * - Large display title with icon chip
 * - Optional subtitle
 * - Optional stat chips for counts / metadata
 * - Optional right-aligned actions slot
 */
export function PageHeader({
  icon: Icon,
  title,
  subtitle,
  stats,
  iconClassName = "",
  actions,
}: PageHeaderProps) {
  return (
    <header className="mb-7 md:mb-8">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div
            className={`shrink-0 elevated-icon w-11 h-11 flex items-center justify-center text-primary ${iconClassName}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-[0.95rem] text-muted-foreground mt-1.5 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {actions && <div className="shrink-0 flex items-center gap-2">{actions}</div>}
      </div>

      {stats && stats.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium tracking-wide ${
                s.tone === "primary"
                  ? "bg-primary/10 border-primary/25 text-primary"
                  : s.tone === "muted"
                  ? "bg-secondary/40 border-border/40 text-muted-foreground"
                  : "bg-secondary/60 border-border/50 text-foreground/85"
              }`}
            >
              <span className="opacity-70 mr-1.5">{s.label}</span>
              <span className="font-semibold">{s.value}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
