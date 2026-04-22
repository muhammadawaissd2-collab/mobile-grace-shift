/**
 * Authoritative Muscle → Special Test mapping.
 *
 * Curated from:
 *  - Magee DJ. Orthopedic Physical Assessment (7th ed.)
 *  - Hattam P, Smeatham A. Special Tests in Musculoskeletal Examination
 *  - Brotzman SB. Clinical Orthopaedic Rehabilitation
 *  - Kendall FP. Muscles: Testing and Function
 *  - Cleland JA. Orthopaedic Clinical Examination
 *
 * Each key is a normalised muscle name (lowercase, trimmed).
 * Each value is a list of canonical Special Test names (must match the `name`
 * field in src/data/special-tests.ts).
 *
 * Only include tests that DIRECTLY assess the muscle, its tendon, the
 * pathology it commonly produces, or its specific MMT/length test.
 * Do NOT include region-only tests here — those are intentionally excluded
 * to prevent false-positive linking.
 */

export const MUSCLE_TEST_MAP: Record<string, string[]> = {
  // ============ ROTATOR CUFF ============
  "supraspinatus": ["Empty Can / Jobe Test", "Full Can Test", "Drop Arm Test", "Painful Arc", "Neer Impingement Test", "Hawkins-Kennedy Test"],
  "infraspinatus": ["External Rotation Lag Sign", "Resisted External Rotation (Infraspinatus)", "Hornblower's Sign"],
  "teres minor": ["Hornblower's Sign", "External Rotation Lag Sign"],
  "subscapularis": ["Lift-Off Test (Gerber)", "Belly-Press Test", "Internal Rotation Lag Sign (Gerber)", "Bear-Hug Test"],

  // ============ SHOULDER GIRDLE ============
  "deltoid": ["Deltoid Extension Lag Sign", "Drop Arm Test"],
  "biceps brachii": ["Speed Test", "Yergason Test", "Biceps Load Test II", "Upper Cut Test"],
  "long head of biceps": ["Speed Test", "Yergason Test", "Upper Cut Test"],
  "pectoralis major": ["Pectoralis Major Length Test", "Cross-Body Adduction"],
  "pectoralis minor": ["Pectoralis Minor Length Test", "Costoclavicular Test"],
  "serratus anterior": ["Serratus Wall Push-Up (Winging) Test", "Scapular Assistance Test"],
  "rhomboid major": ["Rhomboid Test (Kendall)", "Scapular Retraction Test"],
  "rhomboid minor": ["Rhomboid Test (Kendall)", "Scapular Retraction Test"],
  "trapezius": ["Lower Trapezius MMT (Kendall)", "Scapular Retraction Test"],
  "upper trapezius": ["Upper Trapezius Length Test"],
  "middle trapezius": ["Middle Trapezius MMT (Kendall)", "Scapular Retraction Test"],
  "lower trapezius": ["Lower Trapezius MMT (Kendall)", "Scapular Assistance Test"],
  "latissimus dorsi": ["Latissimus Dorsi Length Test"],
  "levator scapulae": ["Levator Scapulae Length Test"],

  // ============ ELBOW / FOREARM ============
  "brachialis": ["Resisted Elbow Flexion (Brachialis)"],
  "brachioradialis": ["Resisted Elbow Flexion (Mid-prone)"],
  "triceps brachii": ["Triceps Tendon Reflex", "Resisted Elbow Extension"],
  "extensor carpi radialis brevis": ["Cozen's Test", "Mill's Test", "Maudsley Test"],
  "extensor carpi radialis longus": ["Cozen's Test", "Mill's Test"],
  "extensor digitorum": ["Maudsley Test", "Cozen's Test"],
  "flexor carpi radialis": ["Reverse Cozen / Golfer Test"],
  "flexor carpi ulnaris": ["Reverse Cozen / Golfer Test", "Tinel Sign at Cubital Tunnel"],
  "pronator teres": ["Pronator Teres Syndrome Test"],
  "supinator": ["Resisted Supination Test"],
  "abductor pollicis longus": ["Finkelstein Test"],
  "extensor pollicis brevis": ["Finkelstein Test"],
  "flexor pollicis longus": ["Pinch Grip Test"],
  "flexor digitorum profundus": ["Pinch Grip Test", "FDP Integrity Test"],
  "flexor digitorum superficialis": ["FDS Integrity Test"],
  "adductor pollicis": ["Froment's Sign"],
  "first dorsal interosseous": ["Froment's Sign"],

  // ============ NECK / CRANIO-CERVICAL ============
  "deep neck flexors": ["Cranio-cervical Flexion Test (CCFT)"],
  "longus colli": ["Cranio-cervical Flexion Test (CCFT)"],
  "longus capitis": ["Cranio-cervical Flexion Test (CCFT)"],
  "sternocleidomastoid": ["Sternocleidomastoid Length Test"],
  "scalenes": ["Adson Test", "Scalene Length Test"],
  "anterior scalene": ["Adson Test"],
  "suboccipitals": ["Cervical Flexion-Rotation Test (CFRT)"],

  // ============ TRUNK ============
  "rectus abdominis": ["Beevor Sign", "Trunk Curl MMT"],
  "transversus abdominis": ["Pressure Biofeedback (PBU) Test"],
  "internal oblique": ["Trunk Rotation MMT"],
  "external oblique": ["Trunk Rotation MMT"],
  "multifidus": ["Prone Instability Test"],
  "erector spinae": ["Sorensen Endurance Test"],
  "quadratus lumborum": ["QL Length Test"],

  // ============ HIP / PELVIS ============
  "iliopsoas": ["Thomas Test", "Modified Thomas Test", "Stinchfield (Resisted SLR)"],
  "psoas major": ["Thomas Test", "Modified Thomas Test"],
  "iliacus": ["Thomas Test"],
  "rectus femoris": ["Modified Thomas Test", "Ely's Test", "Active Knee Extension Test"],
  "tensor fasciae latae": ["Ober Test", "Modified Ober Test"],
  "gluteus maximus": ["Prone Hip Extension MMT (Kendall)"],
  "gluteus medius": ["Trendelenburg Test", "Side-Lying Hip Abduction MMT"],
  "gluteus minimus": ["Trendelenburg Test"],
  "piriformis": ["Piriformis Stretch Test (FAIR)", "Pace's Sign", "Beatty Test"],
  "adductor longus": ["Adductor Squeeze Test"],
  "adductor magnus": ["Adductor Squeeze Test"],
  "adductor brevis": ["Adductor Squeeze Test"],
  "gracilis": ["Adductor Squeeze Test"],
  "pectineus": ["Adductor Squeeze Test"],

  // ============ KNEE / THIGH ============
  "quadriceps femoris": ["Quadriceps Active Test", "Single-Leg Decline Squat"],
  "vastus medialis": ["VMO Activation Test"],
  "hamstrings": ["Active Knee Extension Test", "90-90 Hamstring Test", "Bent-Knee Stretch Test"],
  "biceps femoris": ["90-90 Hamstring Test", "Bent-Knee Stretch Test"],
  "semitendinosus": ["90-90 Hamstring Test"],
  "semimembranosus": ["90-90 Hamstring Test"],
  "popliteus": ["Garrick Test", "Dial Test"],
  "iliotibial band": ["Ober Test", "Modified Ober Test", "Noble Compression Test"],

  // ============ LOWER LEG / FOOT ============
  "gastrocnemius": ["Thompson Test (Simmonds)", "Gastrocnemius Length Test", "Single-Heel Raise Test"],
  "soleus": ["Single-Heel Raise Test", "Soleus Length Test (Bent-Knee)"],
  "tibialis anterior": ["Resisted Dorsiflexion-Inversion (Tib Ant)"],
  "tibialis posterior": ["Tibialis Posterior MMT", "Single-Heel Raise (Posterior Tibial)", "Too Many Toes Sign"],
  "peroneus longus": ["Resisted Eversion (Peroneal)"],
  "peroneus brevis": ["Resisted Eversion (Peroneal)"],
  "fibularis longus": ["Resisted Eversion (Peroneal)"],
  "fibularis brevis": ["Resisted Eversion (Peroneal)"],
  "flexor hallucis longus": ["FHL Resisted Test"],
  "extensor hallucis longus": ["EHL MMT"],
  "plantar fascia": ["Windlass Test"],
  "achilles tendon": ["Thompson Test (Simmonds)", "Single-Heel Raise Test"],

  // ============ TMJ / FACE ============
  "masseter": ["TMJ Compression Test", "Mandibular ROM (3-knuckle test)"],
  "temporalis": ["TMJ Compression Test"],
  "lateral pterygoid": ["Lateral Deviation on Opening"],
  "medial pterygoid": ["TMJ Compression Test"],
};

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .replace(/\s+m\.?$/i, "")
    .replace(/^m\.?\s+/i, "")
    .trim();

/**
 * Strict, evidence-based lookup of tests for a single muscle.
 * Returns canonical test names (or [] if no curated mapping exists).
 */
export function getTestsForMuscle(muscleName: string): string[] {
  if (!muscleName) return [];
  const key = norm(muscleName);
  if (MUSCLE_TEST_MAP[key]) return MUSCLE_TEST_MAP[key];

  // Try to find a partial key match (e.g. "Pectoralis Major (Sternal)" → "pectoralis major")
  for (const k of Object.keys(MUSCLE_TEST_MAP)) {
    if (key.includes(k) || k.includes(key)) return MUSCLE_TEST_MAP[k];
  }
  return [];
}
