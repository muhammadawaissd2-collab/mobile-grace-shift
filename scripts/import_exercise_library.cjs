/* Rebuilds src/data/exercises.json from the uploaded Professional PT Exercise Library. */
const fs = require('fs');
const path = require('path');
const rows = JSON.parse(fs.readFileSync('/tmp/library.json', 'utf8'));

const REGION_MAP = {
  'Cervical Spine': 'Cervical Spine',
  'Thoracic Spine': 'Thoracic Spine',
  'Lumbar Spine': 'Lumbar Spine',
  'Core': 'Core/Trunk',
  'Pelvis & Hip': 'Hip',
  'Hip': 'Hip',
  'Knee': 'Knee',
  'Ankle & Foot': 'Ankle/Foot',
  'Ankle / Foot': 'Ankle/Foot',
  'Shoulder & Scapula': 'Shoulder',
  'Shoulder / Scapula': 'Shoulder',
  'Elbow': 'Elbow',
  'Wrist & Hand': 'Wrist/Hand',
  'Wrist / Hand': 'Wrist/Hand',
  'Neurological Rehabilitation': 'Neurological',
  'Neurorehabilitation': 'Neurological',
  'Vestibular': 'Vestibular',
  'Balance & Proprioception': 'Balance/Proprioception',
  'Balance / Proprioception': 'Balance/Proprioception',
  'Functional & Gait': 'Functional/Gait',
  'Functional': 'Functional/Gait',
  'Therapeutic Mobility': 'Functional/Gait',
  'HIIT, Plyometrics & Agility': 'HIIT/Plyometrics/Agility',
  'Sports Rehabilitation': 'Sports Rehabilitation',
  'Sports / S&C': 'Sports Rehabilitation',
  'General Strength & Resistance': 'General Strength',
  'Cardiopulmonary & Conditioning': 'Cardiopulmonary',
  'Cardiopulmonary': 'Cardiopulmonary',
  'Postoperative & Clinical Rehabilitation': 'Postoperative Rehabilitation',
  'Pilates / Therapeutic': 'Pilates / Therapeutic',
  "Pelvic Floor & Women's/Men's Health": 'Pelvic Floor',
  'Pelvic Floor': 'Pelvic Floor',
  'Aquatic Rehabilitation': 'Aquatic Rehabilitation',
};

const DEMAND = {
  'Mild': { difficulty: 'Beginner', intensity: 2 },
  'Mild–Moderate': { difficulty: 'Beginner', intensity: 3 },
  'Moderate': { difficulty: 'Intermediate', intensity: 5 },
  'Moderate–High': { difficulty: 'Intermediate', intensity: 6 },
  'High': { difficulty: 'Advanced', intensity: 8 },
  'High–Severe': { difficulty: 'Advanced', intensity: 9 },
  'High–Severe / Athletic': { difficulty: 'Advanced', intensity: 9 },
  'Severe / Athletic': { difficulty: 'Advanced', intensity: 10 },
};

const DOSAGE = {
  Beginner: '2–3 sets × 10–12 reps, daily to every other day; pain ≤ 3/10',
  Intermediate: '3 sets × 8–12 reps, 3–4× per week; 48 h between sessions',
  Advanced: '3–5 sets × 5–8 reps (or 4–6 quality efforts), 2–3× per week with full recovery',
};

function equipmentFor(name, region) {
  const n = name.toLowerCase();
  if (/band|tubing|theraband/.test(n)) return ['Resistance band'];
  if (/dumbbell|barbell|kettlebell|weighted|loaded|cable|machine|press|deadlift|clean|snatch/.test(n)) return ['Free weights'];
  if (/ball|bosu|foam|wobble|board|step|box|slide|roller|disc|cone|ladder|hurdle/.test(n)) return ['Equipment / props'];
  if (/bike|treadmill|rower|ergometer|aquatic|pool/.test(n)) return ['Equipment / props'];
  return ['Bodyweight'];
}

function ebpFor(category) {
  const c = category.toLowerCase();
  if (/rehabilitation|stabilization|strength|mobility|balance|gait|pelvic floor|conditioning/.test(c)) return 'EBP Strong';
  if (/plyometric|agility|power|motor control|neuromuscular|vestibular|pilates|aquatic/.test(c)) return 'EBP Moderate';
  return 'EBP Moderate';
}

const out = rows.map((r, i) => {
  const name = String(r['Exercise Name']).trim();
  const rawRegion = String(r['Body Region / System']).trim();
  const region = REGION_MAP[rawRegion] || rawRegion;
  const category = String(r['Clinical Category']).trim();
  const demand = String(r['Typical Demand']).trim();
  const d = DEMAND[demand] || { difficulty: 'Intermediate', intensity: 5 };
  const muscles = String(r['Targeted Muscle Group'] || '').split(/;|,/).map(s => s.trim()).filter(Boolean);
  const primary = muscles.slice(0, 2);
  const secondary = muscles.slice(2, 4);
  const tertiary = muscles.slice(4, 6);
  const other = muscles.slice(6);

  return {
    id: i + 1,
    name,
    description: `${name} is a ${demand.toLowerCase()} demand ${category.toLowerCase()} exercise for the ${rawRegion.toLowerCase()} region, targeting ${muscles.slice(0, 3).join(', ') || 'regional musculature'}.`,
    region,
    system: rawRegion,
    category,
    difficulty: d.difficulty,
    intensity: d.intensity,
    demand,
    ebp_level: ebpFor(category),
    target_muscles: muscles,
    primary_muscles: primary,
    secondary_muscles: secondary,
    tertiary_muscles: tertiary,
    other_muscles: other,
    instructions: `Set up in a stable, pain-free position appropriate for ${rawRegion.toLowerCase()}. Perform ${name} with controlled tempo, maintaining neutral alignment and steady breathing. Stop the set if symptoms exceed 3/10 or form breaks down.`,
    sets_reps: DOSAGE[d.difficulty],
    clinical_notes: `Typical demand: ${demand}. Progress only when the current dosage is completed with good control and no symptom flare for 24 h. Regress by reducing range, load or lever length.`,
    equipment: equipmentFor(name, region),
    load_dosage: DOSAGE[d.difficulty],
    tempo: d.difficulty === 'Advanced' ? 'Explosive concentric, controlled eccentric' : '2 s concentric — 1 s hold — 3 s eccentric',
    breathing: 'Exhale on effort, inhale on return; avoid breath holding.',
    cueing: ['Maintain neutral spine/joint alignment', 'Move through pain-free range only', 'Control the return phase'],
    contraindications: ['Acute unstable injury', 'Unhealed fracture or post-op precautions not yet cleared', 'Symptom reproduction above 3/10'],
    indications: [category],
  };
});

fs.writeFileSync(path.join(__dirname, '..', 'src/data/exercises.json'), JSON.stringify(out, null, 2));
console.log('exercises:', out.length, 'regions:', [...new Set(out.map(e => e.region))].length);
