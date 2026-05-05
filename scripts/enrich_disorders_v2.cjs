// Enrich disorders: 3-4 line descriptions + matched exercises + MSK tests
const fs = require('fs');
const path = require('path');

const disorders = JSON.parse(fs.readFileSync('src/data/disorders.json', 'utf8'));
const exercises = JSON.parse(fs.readFileSync('src/data/exercises.json', 'utf8'));

// Parse special tests TS file (extract names + regions)
const stContent = fs.readFileSync('src/data/special-tests.ts', 'utf8');
const tests = [];
const blockRe = /\{\s*"name":\s*"([^"]+)"[^}]*?"region":\s*"([^"]+)"[^}]*?"condition":\s*"([^"]+)"/gs;
let m;
while ((m = blockRe.exec(stContent)) !== null) {
  tests.push({ name: m[1], region: m[2], condition: m[3] });
}

// Region mapping from disorder regions -> exercise regions
const regionMap = {
  'Cervical': ['Cervical Spine', 'Cervical', 'Spine'],
  'Thoracic': ['Thoracic Spine', 'Spine'],
  'Lumbar': ['Lumbar Spine', 'Lumbar', 'Spine', 'Core'],
  'Shoulder': ['Shoulder', 'Upper Extremity', 'Upper Limb'],
  'Elbow': ['Elbow/Wrist/Hand', 'Upper Extremity', 'Upper Limb'],
  'Wrist/Hand': ['Elbow/Wrist/Hand', 'Upper Extremity', 'Upper Limb'],
  'Hip': ['Hip', 'Lower Extremity', 'Lower Limb'],
  'Knee': ['Knee', 'Lower Extremity', 'Lower Limb'],
  'Foot/Ankle': ['Ankle/Foot', 'Lower Extremity', 'Lower Limb'],
  'TMJ': ['Cervical Spine', 'Cervical'],
};

const testRegionMap = {
  'Cervical': ['Cervical', 'Cervical Spine'],
  'Thoracic': ['Thoracic', 'Thoracic Spine', 'Spine'],
  'Lumbar': ['Lumbar', 'Lumbar Spine', 'Spine', 'Lumbar/SIJ'],
  'Shoulder': ['Shoulder'],
  'Elbow': ['Elbow', 'Elbow/Wrist/Hand'],
  'Wrist/Hand': ['Wrist', 'Hand', 'Elbow/Wrist/Hand'],
  'Hip': ['Hip'],
  'Knee': ['Knee'],
  'Foot/Ankle': ['Ankle', 'Foot', 'Ankle/Foot'],
  'TMJ': ['TMJ', 'Cervical'],
};

// Description templates by category to add 3-4 lines of clinical depth
function buildDescription(d) {
  const base = d.description || '';
  const region = d.region;
  const cat = d.category;
  const sub = d.subcategory || '';

  const regionText = {
    'Cervical': 'the cervical spine and surrounding cervicoscapular musculature',
    'Thoracic': 'the thoracic spine, costovertebral joints and posterior chain',
    'Lumbar': 'the lumbar spine, paraspinal muscles and lumbopelvic complex',
    'Shoulder': 'the glenohumeral joint, rotator cuff and scapulothoracic complex',
    'Elbow': 'the elbow joint, common extensor/flexor origin and forearm musculature',
    'Wrist/Hand': 'the wrist, carpal structures and intrinsic hand musculature',
    'Hip': 'the hip joint, gluteal complex and surrounding myofascial structures',
    'Knee': 'the tibiofemoral and patellofemoral joints and surrounding stabilisers',
    'Foot/Ankle': 'the ankle mortise, subtalar joint and intrinsic/extrinsic foot musculature',
    'TMJ': 'the temporomandibular joint, masticatory muscles and cervical interface',
  }[region] || `the ${region.toLowerCase()} region`;

  const catLine = {
    'Musculoskeletal': `Mechanical loading, postural strain or overuse can sensitise nociceptors locally and drive movement-evoked pain in ${regionText}.`,
    'Neurological': `Neural tissue irritation, compression or sensitisation along the relevant peripheral or central pathway can produce radicular, referred or dermatomal symptoms.`,
    'Rheumatological': `Underlying inflammatory or systemic process drives synovitis, capsular thickening and progressive functional loss when not adequately managed.`,
    'Post-surgical': `Tissue healing constraints, surgical approach and protective phase precautions strongly dictate the rehab progression and load tolerance.`,
    'Sports': `Sport-specific load demands, training error and biomechanical risk factors converge to overload tissue beyond its capacity.`,
  }[cat] || '';

  const presentLine = `Patients typically describe pain provoked by characteristic positions or activities, with reproducible findings on physical examination of ${regionText}.`;

  const mgmtLine = `Management is phase-based — protect and modulate symptoms early, then restore mobility, motor control and graded loading, progressing to functional and sport- or work-specific demands.`;

  return [base, catLine, presentLine, mgmtLine].filter(Boolean).join(' ');
}

function pickExercises(d) {
  const targetRegions = regionMap[d.region] || [];
  const matching = exercises.filter(e => targetRegions.includes(e.region));
  // Prefer one mobility, one strengthening, one stability if possible
  const buckets = { Mobility: [], Strengthening: [], Stability: [], Stretching: [], Other: [] };
  matching.forEach(e => {
    const c = e.category || 'Other';
    (buckets[c] || buckets.Other).push(e);
  });
  const picked = [];
  ['Mobility', 'Strengthening', 'Stability', 'Stretching'].forEach(c => {
    if (buckets[c] && buckets[c].length) picked.push(buckets[c][d.id % buckets[c].length]);
  });
  // pad to 5
  let i = 0;
  while (picked.length < 5 && matching.length) {
    const cand = matching[(d.id + i * 7) % matching.length];
    if (!picked.find(p => p.id === cand.id)) picked.push(cand);
    i++;
    if (i > matching.length) break;
  }
  return picked.slice(0, 5).map(e => ({ id: e.id, name: e.name, category: e.category }));
}

function pickTests(d) {
  const regs = testRegionMap[d.region] || [];
  const nameLower = d.name.toLowerCase();
  // Condition match first
  const exact = tests.filter(t => t.condition && nameLower.includes(t.condition.toLowerCase().split(' ')[0]));
  const regional = tests.filter(t => regs.some(r => t.region && t.region.includes(r)));
  const combined = [...new Map([...exact, ...regional].map(t => [t.name, t])).values()];
  return combined.slice(0, 5).map(t => t.name);
}

let descCount = 0, exCount = 0, tCount = 0;
disorders.forEach(d => {
  d.description = buildDescription(d);
  descCount++;
  const exs = pickExercises(d);
  if (exs.length) {
    d.recommended_exercises = exs;
    exCount++;
  }
  const ts = pickTests(d);
  if (ts.length) {
    d.msk_tests = ts;
    tCount++;
  }
});

fs.writeFileSync('src/data/disorders.json', JSON.stringify(disorders, null, 2));
console.log(`Updated ${disorders.length} disorders. Desc:${descCount} Exercises:${exCount} Tests:${tCount}`);
console.log('Total tests parsed:', tests.length);
