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
 * Mobile-first professional page header.
 * Large display title with elevated icon chip, optional subtitle, stats and actions.
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
    <header className="mb-6 md:mb-8 animate-slide-up">
      {/* Soft glow backdrop behind header */}
      <div className="relative">
        <div className="absolute -inset-x-6 -top-6 h-32 bg-gradient-glow opacity-70 pointer-events-none" />

        <div className="relative flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <div
              className={`shrink-0 elevated-icon w-12 h-12 flex items-center justify-center ${iconClassName}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-[1.7rem] md:text-3xl font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
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
          <div className="mt-4 flex flex-wrap gap-2 no-scrollbar overflow-x-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`shrink-0 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wide ${
                  s.tone === "primary"
                    ? "bg-primary/14 border-primary/30 text-primary"
                    : s.tone === "muted"
                    ? "bg-secondary/50 border-border/60 text-muted-foreground"
                    : "bg-card/70 border-border/70 text-foreground/85 backdrop-blur"
                }`}
              >
                <span className="opacity-70 mr-1.5">{s.label}</span>
                <span className="font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
