import { useState, useMemo, useEffect, Fragment } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { muscleGroups as rawMuscleData, exercises } from "@/data";
import { RegionTag } from "@/components/EBPBadge";
import { DetailPanel } from "@/components/DetailPanel";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search, ChevronDown, ChevronRight, Dumbbell, Zap, Users, Activity, Layers, ClipboardCheck, ArrowRight,
} from "lucide-react";
import { BookmarkButton } from "@/components/BookmarkButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { findRelatedTests } from "@/lib/related-tests";
import type { Exercise } from "@/types";

/**
 * The muscles JSON is a mix of:
 *  - Pre-grouped entries: { id, name, region, muscles: [{ name, origin, insertion, primary_action, ... }] }
 *  - Flat single-muscle entries: { id, name, region, action, origin, insertion, innervation, ... }
 *
 * Both types are normalised here to a single MuscleGroup shape so the page
 * renders ALL underlying muscles (no data lost).
 */
type NormalisedMuscle = {
  name: string;
  origin?: string;
  insertion?: string;
  primary_action?: string;
  secondary_action?: string;
  innervation?: string;
  blood_supply?: string;
  clinical_notes?: string;
};

type NormalisedGroup = {
  id: number;
  name: string;
  region: string;
  muscles: NormalisedMuscle[];
};

const muscleGroups: NormalisedGroup[] = (rawMuscleData as unknown as any[]).map((entry, index) => {
  // Pre-grouped entry
  if (Array.isArray(entry?.muscles)) {
    return {
      id: typeof entry.id === "number" ? entry.id : 1000 + index,
      name: entry.name || "Unnamed Group",
      region: entry.region || "Other",
      muscles: entry.muscles.map((m: any) => ({
        name: m.name,
        origin: m.origin,
        insertion: m.insertion,
        primary_action: m.primary_action ?? m.action,
        secondary_action: m.secondary_action,
        innervation: m.innervation,
        blood_supply: m.blood_supply,
        clinical_notes: m.clinical_notes,
      })),
    };
  }
  // Flat single-muscle entry → wrap as a 1-muscle group
  return {
    id: typeof entry.id === "number" ? entry.id : 5000 + index,
    name: entry.name || "Muscle",
    region: entry.region || "Other",
    muscles: [
      {
        name: entry.name,
        origin: entry.origin,
        insertion: entry.insertion,
        primary_action: entry.primary_action ?? entry.action,
        secondary_action: entry.secondary_action,
        innervation: entry.innervation,
        blood_supply: entry.blood_supply,
        clinical_notes: entry.clinical_notes,
      },
    ],
  };
});

function getExercisesForMuscleGroup(groupName: string, muscleNames: string[]) {
  const names = muscleNames.map(n => n.toLowerCase());
  const gName = groupName.toLowerCase();

  return exercises.filter(ex => {
    const allMuscles = [
      ...(ex.primary_muscles || []),
      ...(ex.secondary_muscles || []),
      ...(ex.tertiary_muscles || []),
      ...(ex.other_muscles || []),
      ...(ex.target_muscles || []),
    ].map(m => m.toLowerCase());

    return allMuscles.some(m =>
      names.some(n => m.includes(n.split(" ")[0]) || n.includes(m.split(" ")[0])) ||
      m.includes(gName.split(" ")[0]) || gName.includes(m.split(" ")[0])
    );
  });
}

function classifyExerciseForMuscle(ex: Exercise, muscleName: string): "primary" | "secondary" | "other" {
  const mLower = muscleName.toLowerCase();
  const check = (arr: string[]) => arr?.some(m => m.toLowerCase().includes(mLower.split(" ")[0]) || mLower.includes(m.toLowerCase().split(" ")[0]));
  if (check(ex.primary_muscles || [])) return "primary";
  if (check(ex.secondary_muscles || []) || check(ex.tertiary_muscles || [])) return "secondary";
  return "other";
}

export default function MusclesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [regionFilter, setRegionFilter] = useState("all");
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(() => {
    const id = searchParams.get("id");
    return id ? new Set([Number(id)]) : new Set();
  });
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [openMuscleKey, setOpenMuscleKey] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) setExpandedGroups(prev => new Set([...prev, Number(id)]));
  }, [searchParams]);

  const regions = useMemo(
    () => [...new Set(muscleGroups.map(m => m.region))].sort(),
    [],
  );
  const totalMuscles = useMemo(
    () => muscleGroups.reduce((a, g) => a + g.muscles.length, 0),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return muscleGroups.filter(g => {
      const matchSearch = !q ||
        g.name.toLowerCase().includes(q) ||
        g.region.toLowerCase().includes(q) ||
        g.muscles.some(m => m.name?.toLowerCase().includes(q));
      const matchRegion = regionFilter === "all" || g.region === regionFilter;
      return matchSearch && matchRegion;
    });
  }, [search, regionFilter]);

  const filteredMuscleCount = filtered.reduce((a, g) => a + g.muscles.length, 0);
  const isFiltering = !!search || regionFilter !== "all";

  const toggleGroup = (id: number) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedGroups(new Set(filtered.map(g => g.id)));
  const collapseAll = () => setExpandedGroups(new Set());

  const handleExerciseClick = (ex: Exercise) => {
    setSelectedExercise(ex);
    setPanelOpen(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <PageHeader
        icon={Users}
        title="Muscle Atlas"
        subtitle="Comprehensive musculoskeletal reference — origin, insertion, action, innervation and clinical exercises for every muscle group."
        stats={[
          { label: "Groups", value: muscleGroups.length, tone: "primary" },
          { label: "Muscles", value: totalMuscles, tone: "primary" },
          { label: "Regions", value: regions.length },
          ...(isFiltering
            ? [{ label: "Showing", value: `${filtered.length} / ${filteredMuscleCount} muscles`, tone: "muted" as const }]
            : []),
        ]}
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-end">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search muscles, groups, regions…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-11 bg-secondary/50 border-border/50 text-sm"
          />
        </div>
        <Select value={regionFilter} onValueChange={setRegionFilter}>
          <SelectTrigger className="w-[180px] bg-secondary/50 border-border/50 h-11 text-sm">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            {regions.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="flex gap-1.5">
          <button
            onClick={expandAll}
            className="px-3 py-2 text-xs font-medium rounded-lg bg-secondary/60 border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-2 text-xs font-medium rounded-lg bg-secondary/60 border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Muscle group list */}
      <div className="space-y-3">
        {filtered.map((group) => {
          const isExpanded = expandedGroups.has(group.id);
          const groupExercises = isExpanded
            ? getExercisesForMuscleGroup(group.name, group.muscles.map(m => m.name).filter(Boolean))
            : [];
          const primaryExercises = groupExercises.filter(ex =>
            group.muscles.some(m => classifyExerciseForMuscle(ex, m.name) === "primary"),
          );
          const otherExercises = groupExercises.filter(ex =>
            !primaryExercises.some(p => p.id === ex.id),
          );
          const relevantTests = isExpanded
            ? findRelatedTests({
                region: group.region,
                muscleNames: group.muscles.map(m => m.name).filter(Boolean),
                limit: 8,
              })
            : [];

          return (
            <div key={group.id} className="elevated !p-0 overflow-hidden">
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-3 group hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {isExpanded
                      ? <ChevronDown className="h-4 w-4 text-primary" />
                      : <ChevronRight className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {group.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Layers className="h-3 w-3" />
                      {group.muscles.length} {group.muscles.length === 1 ? "muscle" : "muscles"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <BookmarkButton id={group.id} type="muscle" name={group.name} />
                  <RegionTag region={group.region} />
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-border/30 bg-secondary/10">
                  {/* Muscle table */}
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[180px]">Muscle</TableHead>
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[180px]">Origin</TableHead>
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[180px]">Insertion</TableHead>
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[160px]">
                            <span className="flex items-center gap-1.5">
                              <Zap className="h-3 w-3 text-primary" />
                              Primary action
                            </span>
                          </TableHead>
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[160px]">Secondary action</TableHead>
                          <TableHead className="text-xs font-semibold uppercase tracking-wider min-w-[140px]">Innervation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {group.muscles.map((muscle, idx) => {
                          const muscleKey = `${group.id}-${muscle.name}-${idx}`;
                          const isOpen = openMuscleKey === muscleKey;
                          const muscleTests = isOpen
                            ? findRelatedTests({
                                region: group.region,
                                muscleNames: [muscle.name].filter(Boolean) as string[],
                                limit: 6,
                              })
                            : [];
                          return (
                            <>
                              <TableRow
                                key={muscleKey}
                                onClick={() => setOpenMuscleKey(isOpen ? null : muscleKey)}
                                className={`${idx % 2 === 0 ? "bg-background/30" : "bg-secondary/10"} cursor-pointer hover:bg-primary/5 transition-colors`}
                                title="Tap to view MSK tests for this muscle"
                              >
                                <TableCell className="text-sm font-medium text-foreground py-3">
                                  <span className="flex items-center gap-1.5">
                                    {isOpen
                                      ? <ChevronDown className="h-3 w-3 text-primary shrink-0" />
                                      : <ChevronRight className="h-3 w-3 text-muted-foreground shrink-0" />}
                                    {muscle.name || "—"}
                                  </span>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground py-3">{muscle.origin || "—"}</TableCell>
                                <TableCell className="text-sm text-muted-foreground py-3">{muscle.insertion || "—"}</TableCell>
                                <TableCell className="text-sm text-foreground/90 font-medium py-3">{muscle.primary_action || "—"}</TableCell>
                                <TableCell className="text-sm text-muted-foreground py-3">{muscle.secondary_action || "—"}</TableCell>
                                <TableCell className="text-sm text-muted-foreground py-3">{muscle.innervation || "—"}</TableCell>
                              </TableRow>
                              {isOpen && (
                                <TableRow key={`${muscleKey}-tests`} className="bg-primary/5 hover:bg-primary/5">
                                  <TableCell colSpan={6} className="py-3 px-4">
                                    <div className="space-y-2">
                                      <p className="text-[10px] font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                                        <ClipboardCheck className="h-3 w-3" />
                                        MSK tests for {muscle.name}
                                        {muscleTests.length > 0 && (
                                          <span className="text-muted-foreground font-normal">({muscleTests.length})</span>
                                        )}
                                      </p>
                                      {muscleTests.length === 0 ? (
                                        <p className="text-xs text-muted-foreground italic">No directly-mapped MSK test in catalogue. Browse the Special Tests page for region-level tests.</p>
                                      ) : (
                                        <div className="grid sm:grid-cols-2 gap-2">
                                          {muscleTests.map(t => (
                                            <button
                                              key={t.id}
                                              onClick={(e) => { e.stopPropagation(); navigate(`/special-tests?search=${encodeURIComponent(t.name)}`); }}
                                              className="text-left glass-card !p-2.5 group hover:border-primary/40 transition-colors"
                                            >
                                              <div className="flex items-center justify-between gap-2 mb-0.5">
                                                <p className="text-xs font-semibold text-foreground group-hover:text-primary truncate">{t.name}</p>
                                                <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary shrink-0" />
                                              </div>
                                              <p className="text-[10px] text-muted-foreground truncate">{t.condition}</p>
                                              <div className="flex gap-2 mt-1 text-[10px]">
                                                <span className="text-primary/80">Sn {t.sensitivity}</span>
                                                <span className="text-muted-foreground">Sp {t.specificity}</span>
                                              </div>
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </TableCell>
                                </TableRow>
                              )}
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Linked exercises */}
                  {groupExercises.length > 0 && (
                    <div className="border-t border-border/30 p-4 md:p-5 space-y-3">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Dumbbell className="h-4 w-4 text-primary" />
                        Exercises for {group.name}
                        <span className="text-xs font-normal text-muted-foreground">({groupExercises.length})</span>
                      </h4>

                      {primaryExercises.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Activity className="h-3 w-3" />
                            Primary exercises
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {primaryExercises.slice(0, 24).map(ex => (
                              <button
                                key={ex.id}
                                onClick={() => handleExerciseClick(ex)}
                                className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 transition-colors"
                              >
                                {ex.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {otherExercises.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Other exercises</p>
                          <div className="flex flex-wrap gap-1.5">
                            {otherExercises.slice(0, 24).map(ex => (
                              <button
                                key={ex.id}
                                onClick={() => handleExerciseClick(ex)}
                                className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/50 hover:bg-secondary hover:text-foreground transition-colors"
                              >
                                {ex.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Relevant MSK Special Tests for this group */}
                  {relevantTests.length > 0 && (
                    <div className="border-t border-border/30 p-4 md:p-5 space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <ClipboardCheck className="h-4 w-4 text-primary" />
                        Relevant MSK Special Tests
                        <span className="text-xs font-normal text-muted-foreground">({relevantTests.length})</span>
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {relevantTests.map(t => (
                          <button
                            key={t.id}
                            onClick={() => navigate(`/special-tests?search=${encodeURIComponent(t.name)}`)}
                            className="text-left glass-card !p-2.5 group hover:border-primary/40 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <p className="text-xs font-semibold text-foreground group-hover:text-primary truncate">{t.name}</p>
                              <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary shrink-0" />
                            </div>
                            <p className="text-[10px] text-muted-foreground truncate">{t.condition}</p>
                            <div className="flex gap-2 mt-1 text-[10px]">
                              <span className="text-primary/80">Sn {t.sensitivity}</span>
                              <span className="text-muted-foreground">Sp {t.specificity}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="elevated text-center py-12 text-muted-foreground">
            <Search className="h-8 w-8 mx-auto mb-3 opacity-40" />
            <p className="text-sm">No muscle groups match your filters.</p>
          </div>
        )}
      </div>

      <DetailPanel
        open={panelOpen}
        onClose={() => { setPanelOpen(false); setSelectedExercise(null); }}
        type="exercise"
        data={selectedExercise}
      />
    </div>
  );
}
