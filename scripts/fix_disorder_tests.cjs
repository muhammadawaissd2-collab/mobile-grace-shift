// Re-enrich disorders with proper test parsing + region-based fallback
const fs = require('fs');
const disorders = JSON.parse(fs.readFileSync('src/data/disorders.json', 'utf8'));

// Robust test parsing: split on '},\n{' inside the array
const stContent = fs.readFileSync('src/data/special-tests.ts', 'utf8');
const arrStart = stContent.indexOf('[');
const arrEnd = stContent.lastIndexOf('];');
const arrText = stContent.slice(arrStart + 1, arrEnd);
// crude split
const blocks = arrText.split(/\n\},\s*\n\{/).map((b, i, all) => {
  if (i === 0) b = b.replace(/^\s*\{/, '');
  if (i === all.length - 1) b = b.replace(/\}\s*$/, '');
  return b;
});
const tests = [];
for (const b of blocks) {
  const name = (b.match(/"name":\s*"([^"]+)"/) || [])[1];
  const region = (b.match(/"region":\s*"([^"]+)"/) || [])[1];
  const condition = (b.match(/"condition":\s*"([^"]+)"/) || [])[1];
  if (name) tests.push({ name, region: region || '', condition: condition || '' });
}
console.log('parsed tests:', tests.length);

// Fallback standard MSK tests per region
const FALLBACK = {
  'Cervical': ["Spurling's Test", "Cervical Distraction Test", "Upper Limb Tension Test", "Sharp-Purser Test", "Cervical Flexion-Rotation Test"],
  'Thoracic': ["Thoracic Spring Test", "Adam's Forward Bend Test", "Slump Test", "Rib Compression Test"],
  'Lumbar': ["Straight Leg Raise (SLR)", "Slump Test", "Prone Instability Test", "FABER Test", "Centralisation (McKenzie)"],
  'Shoulder': ["Hawkins-Kennedy Test", "Neer's Test", "Empty Can (Jobe) Test", "Apprehension Test", "O'Brien's Active Compression Test"],
  'Elbow': ["Cozen's Test", "Mill's Test", "Reverse Cozen's", "Resisted Wrist Extension", "Valgus Stress Test (Elbow)"],
  'Wrist/Hand': ["Phalen's Test", "Tinel's Sign", "Finkelstein's Test", "Watson's (Scaphoid Shift) Test", "Anatomical Snuffbox Palpation"],
  'Hip': ["FADIR Test", "FABER Test", "Thomas Test", "Trendelenburg Test", "Resisted Straight Leg Raise"],
  'Knee': ["Lachman's Test", "Anterior Drawer Test", "McMurray's Test", "Valgus Stress Test (30°)", "Patellar Apprehension Test"],
  'Foot/Ankle': ["Anterior Drawer (Ankle)", "Talar Tilt Test", "Squeeze Test (Syndesmosis)", "Thompson's Test", "Windlass Test"],
  'TMJ': ["TMJ Palpation", "Mandibular Range of Motion", "Joint Loading Test", "Chvostek's Sign"],
};

const TEST_REGION_MAP = {
  'Cervical': ['Cervical', 'Cervical Spine'],
  'Thoracic': ['Thoracic', 'Thoracic Spine'],
  'Lumbar': ['Lumbar', 'Lumbar Spine', 'Lumbar/SIJ'],
  'Shoulder': ['Shoulder'],
  'Elbow': ['Elbow', 'Elbow/Wrist/Hand'],
  'Wrist/Hand': ['Wrist', 'Hand', 'Elbow/Wrist/Hand'],
  'Hip': ['Hip', 'Hip/Pelvis', 'Hip/Femur'],
  'Knee': ['Knee'],
  'Foot/Ankle': ['Ankle', 'Foot', 'Ankle/Foot', 'Lower Extremity'],
  'TMJ': ['TMJ', 'Cervical'],
};

let updated = 0;
disorders.forEach(d => {
  const regs = TEST_REGION_MAP[d.region] || [];
  const matching = tests.filter(t => regs.some(r => t.region.includes(r)));
  // condition match preference
  const nameWords = d.name.toLowerCase().split(/\s+/);
  const conditionMatch = matching.filter(t => t.condition && nameWords.some(w => w.length > 3 && t.condition.toLowerCase().includes(w)));
  const combined = [...new Map([...conditionMatch, ...matching].map(t => [t.name, t])).values()];
  let picked = combined.slice(0, 5).map(t => t.name);
  if (picked.length < 4) {
    const fb = FALLBACK[d.region] || [];
    for (const f of fb) {
      if (!picked.includes(f)) picked.push(f);
      if (picked.length >= 5) break;
    }
  }
  d.msk_tests = picked;
  if (picked.length) updated++;
});

fs.writeFileSync('src/data/disorders.json', JSON.stringify(disorders, null, 2));
console.log(`Updated msk_tests for ${updated}/${disorders.length} disorders.`);
