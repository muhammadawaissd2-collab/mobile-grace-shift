import { forwardRef, HTMLAttributes } from "react";

interface EBPBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  level: string;
}

export const EBPBadge = forwardRef<HTMLSpanElement, EBPBadgeProps>(
  function EBPBadge({ level, className = "", ...rest }, ref) {
    const normalized = level?.toLowerCase() || "";
    if (normalized.includes("strong"))
      return <span ref={ref} className={`ebp-badge-strong ${className}`} {...rest}>EBP Strong</span>;
    if (normalized.includes("moderate"))
      return <span ref={ref} className={`ebp-badge-moderate ${className}`} {...rest}>EBP Moderate</span>;
    if (normalized.includes("limited"))
      return <span ref={ref} className={`ebp-badge-limited ${className}`} {...rest}>EBP Limited</span>;
    return <span ref={ref} className={`ebp-badge-moderate ${className}`} {...rest}>{level}</span>;
  },
);

interface DifficultyBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  difficulty: string;
}

export const DifficultyBadge = forwardRef<HTMLSpanElement, DifficultyBadgeProps>(
  function DifficultyBadge({ difficulty, className = "", ...rest }, ref) {
    const normalized = difficulty?.toLowerCase() || "";
    if (normalized.includes("beginner"))
      return <span ref={ref} className={`difficulty-beginner ${className}`} {...rest}>Beginner</span>;
    if (normalized.includes("intermediate"))
      return <span ref={ref} className={`difficulty-intermediate ${className}`} {...rest}>Intermediate</span>;
    if (normalized.includes("advanced"))
      return <span ref={ref} className={`difficulty-advanced ${className}`} {...rest}>Advanced</span>;
    return <span ref={ref} className={`difficulty-beginner ${className}`} {...rest}>{difficulty}</span>;
  },
);

interface RegionTagProps extends HTMLAttributes<HTMLSpanElement> {
  region: string;
}

export const RegionTag = forwardRef<HTMLSpanElement, RegionTagProps>(
  function RegionTag({ region, className = "", ...rest }, ref) {
    return <span ref={ref} className={`region-tag ${className}`} {...rest}>{region}</span>;
  },
);
