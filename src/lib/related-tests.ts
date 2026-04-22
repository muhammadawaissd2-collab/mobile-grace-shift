import { specialTests, type SpecialTest } from "@/data/special-tests";
import { getTestsForMuscle } from "./muscle-test-map";

const REGION_ALIASES: Record<string, string[]> = {
  "Cervical Spine": ["cervical", "neck"],
  "Thoracic Spine": ["thoracic", "mid back"],
  "Lumbar Spine": ["lumbar", "low back"],
  "Pelvis / SIJ": ["pelvis", "sij", "sacroiliac"],
  "Shoulder": ["shoulder", "rotator", "scapula"],
  "Elbow": ["elbow"],
  "Wrist & Hand": ["wrist", "hand", "carpal"],
  "Hip": ["hip", "groin"],
  "Knee": ["knee", "patell", "acl", "mcl", "lcl", "meniscus"],
  "Ankle & Foot": ["ankle", "foot", "achilles", "plantar"],
  "TMJ": ["tmj", "jaw"],
  "Neurological / Whole Body": ["nerve", "neuro", "tension"],
};

const norm = (s: string) => (s || "").toLowerCase();

/**
 * Find related special tests.
 *
 * IMPORTANT: When `muscleNames` is supplied, the result is restricted to the
 * authoritative MUSCLE_TEST_MAP only. This prevents random region-based
 * matches (e.g. a forearm muscle pulling shoulder tests just because both
 * share the "Upper Limb" region).
 *
 * For region/condition/exercise queries, fuzzy keyword scoring is still used.
 */
export function findRelatedTests(opts: {
  region?: string;
  condition?: string;
  muscleNames?: string[];
  exerciseName?: string;
  limit?: number;
}): SpecialTest[] {
  const { region, condition, muscleNames = [], exerciseName, limit = 6 } = opts;

  // ===== Strict muscle-driven lookup =====
  if (muscleNames.length > 0 && !condition && !exerciseName) {
    const wanted = new Set<string>();
    for (const m of muscleNames) {
      for (const name of getTestsForMuscle(m)) wanted.add(name.toLowerCase());
    }
    if (wanted.size === 0) return [];
    const matched = specialTests.filter(t => wanted.has(norm(t.name)));
    // Preserve clinical priority by keeping order from the map
    return matched.slice(0, limit);
  }

  // ===== Fuzzy multi-criteria scoring =====
  const regionTokens = region
    ? [norm(region), ...(REGION_ALIASES[region] || [])]
    : [];
  const condTokens = condition ? norm(condition).split(/[\s/&]+/).filter(w => w.length > 3) : [];
  const muscleTokens = muscleNames.map(norm).filter(Boolean);
  const exTokens = exerciseName ? norm(exerciseName).split(/\s+/).filter(w => w.length > 3) : [];

  const scored = specialTests.map(t => {
    let score = 0;
    const tRegion = norm(t.region);
    const tCond = norm(t.condition);
    const tName = norm(t.name);

    if (regionTokens.some(r => tRegion.includes(r) || r.includes(tRegion.split(" ")[0]))) score += 4;
    if (condTokens.some(c => tCond.includes(c) || tName.includes(c))) score += 5;
    if (condTokens.some(c => t.related_impairments.some(i => norm(i).includes(c)))) score += 3;
    if (muscleTokens.some(m => t.related_muscles.some(rm => norm(rm).includes(m) || m.includes(norm(rm).split(" ")[0])))) score += 2;
    if (exTokens.some(e => t.related_exercises.some(re => norm(re).includes(e)))) score += 2;

    return { t, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.t);
}
