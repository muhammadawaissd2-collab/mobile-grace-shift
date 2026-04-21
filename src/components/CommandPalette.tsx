import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Activity, AlertTriangle, BookOpen, Dumbbell, GitBranch, HeartPulse, Stethoscope, Trophy, Zap } from "lucide-react";
import {
  exercises, muscleGroups, disorders, ebpGuidelines, sportsInjuries, differentialDiagnoses,
} from "@/data";
import { specialTests } from "@/data/special-tests";
import { manualTechniques } from "@/data/manual-therapy";

type Item = { id: string; label: string; sub?: string; path: string; icon: React.ReactNode; group: string };

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  // Build a flat searchable index — memoized once
  const index = useMemo<Item[]>(() => {
    const items: Item[] = [];
    disorders.forEach(d => items.push({
      id: `d-${d.id}`, label: d.name, sub: `${d.region} • ${d.category}`,
      path: `/disorders?id=${d.id}`, icon: <AlertTriangle className="h-4 w-4 text-amber-400" />, group: "Disorders",
    }));
    exercises.forEach(e => items.push({
      id: `e-${e.id}`, label: e.name, sub: `${e.region} • ${e.category}`,
      path: `/exercises?id=${e.id}`, icon: <Dumbbell className="h-4 w-4 text-emerald-400" />, group: "Exercises",
    }));
    (muscleGroups as any[]).forEach((mg, gi) => {
      const id = typeof mg?.id === "number" ? mg.id : 9000 + gi;
      items.push({
        id: `mg-${id}`, label: mg?.name ?? "Muscle", sub: `Muscle group • ${mg?.region ?? "Other"}`,
        path: `/muscles?id=${id}`, icon: <Activity className="h-4 w-4 text-rose-400" />, group: "Muscles",
      });
      const subMuscles = Array.isArray(mg?.muscles) ? mg.muscles : [];
      subMuscles.forEach((m: any, i: number) => items.push({
        id: `m-${id}-${i}`, label: m?.name ?? "Muscle", sub: `Muscle • ${mg?.name ?? ""}`,
        path: `/muscles?id=${id}`, icon: <Activity className="h-4 w-4 text-rose-300" />, group: "Muscles",
      }));
    });
    specialTests.forEach((t, i) => items.push({
      id: `t-${i}`, label: t.name, sub: `${t.region} • ${t.condition}`,
      path: `/special-tests?id=${i}`, icon: <Stethoscope className="h-4 w-4 text-sky-400" />, group: "Special Tests",
    }));
    manualTechniques.forEach(m => items.push({
      id: `mt-${m.id}`, label: m.name, sub: `Manual • ${m.category}`,
      path: `/manual-therapy?id=${m.id}`, icon: <HeartPulse className="h-4 w-4 text-purple-400" />, group: "Manual Therapy",
    }));
    ebpGuidelines.forEach(g => items.push({
      id: `g-${g.id}`, label: g.condition, sub: `EBP ${g.grade} • ${g.region}`,
      path: `/ebp?id=${g.id}`, icon: <BookOpen className="h-4 w-4 text-indigo-400" />, group: "EBP",
    }));
    sportsInjuries.forEach(s => items.push({
      id: `s-${s.id}`, label: s.name, sub: `${s.sport} • ${s.region}`,
      path: `/sports-injuries?id=${s.id}`, icon: <Trophy className="h-4 w-4 text-yellow-400" />, group: "Sports Injuries",
    }));
    differentialDiagnoses.forEach(dd => items.push({
      id: `dd-${dd.id}`, label: dd.name, sub: `Differential • ${dd.body_region}`,
      path: `/differential-diagnosis?id=${dd.id}`, icon: <GitBranch className="h-4 w-4 text-teal-400" />, group: "Differential Dx",
    }));
    return items;
  }, []);

  // Cmd/Ctrl + K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  // Reset query on close
  useEffect(() => { if (!open) setQ(""); }, [open]);

  // Filter + cap results to keep it fast
  const filtered = useMemo(() => {
    if (!q.trim()) return index.slice(0, 30);
    const needle = q.toLowerCase();
    return index.filter(i => i.label.toLowerCase().includes(needle) || i.sub?.toLowerCase().includes(needle)).slice(0, 100);
  }, [q, index]);

  // Group results
  const grouped = useMemo(() => {
    const g: Record<string, Item[]> = {};
    filtered.forEach(i => { (g[i.group] ||= []).push(i); });
    return g;
  }, [filtered]);

  const go = (path: string) => { onOpenChange(false); navigate(path); };

  const quickActions = [
    { label: "AI Assistant", path: "/ai-search", icon: <Zap className="h-4 w-4 text-primary" /> },
    { label: "AI Diagnosis", path: "/ai-diagnosis", icon: <Stethoscope className="h-4 w-4 text-primary" /> },
    { label: "AI Assessment", path: "/ai-assessment", icon: <Stethoscope className="h-4 w-4 text-primary" /> },
    { label: "Physio Plan", path: "/physio-plan", icon: <Dumbbell className="h-4 w-4 text-primary" /> },
  ];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search disorders, muscles, tests, exercises, EBP…" value={q} onValueChange={setQ} />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>No results found.</CommandEmpty>
        {!q && (
          <CommandGroup heading="Quick Actions">
            {quickActions.map(a => (
              <CommandItem key={a.path} onSelect={() => go(a.path)} className="gap-2">
                {a.icon}<span>{a.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {Object.entries(grouped).map(([group, items]) => (
          <CommandGroup key={group} heading={`${group} (${items.length})`}>
            {items.slice(0, 15).map(i => (
              <CommandItem key={i.id} value={`${i.label} ${i.sub}`} onSelect={() => go(i.path)} className="gap-2">
                {i.icon}
                <div className="flex flex-col min-w-0">
                  <span className="truncate text-sm">{i.label}</span>
                  {i.sub && <span className="truncate text-xs text-muted-foreground">{i.sub}</span>}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
