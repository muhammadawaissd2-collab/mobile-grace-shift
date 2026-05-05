// Append hockey-specific injuries to sports-injuries.json
const fs = require('fs');
const sports = JSON.parse(fs.readFileSync('src/data/sports-injuries.json', 'utf8'));
let id = Math.max(...sports.map(s => s.id)) + 1;

const HOCKEY = [
  {
    name: "MCL Sprain (Hockey)",
    region: "Knee",
    category: "Musculoskeletal", subcategory: "Ligament",
    description: "Medial collateral ligament sprain from valgus stress, common when a hockey player is checked or catches an edge with the foot planted.",
    causes: ["Direct lateral blow to knee", "Awkward edge catch with valgus load", "Player-on-player contact"],
    mechanism: "Valgus force ± external rotation to a planted lower extremity overstretching the superficial MCL fibres.",
    signs_symptoms: ["Medial knee pain", "Localised tenderness over MCL", "Pain with valgus stress", "Mild effusion (Grade II+)", "Instability sensation in higher grades"],
    msk_tests: ["Valgus Stress Test (0° and 30°)", "Swain Test", "Anterior Drawer (rule out ACL)", "Lachman’s Test"],
    diagnostic_tips: "MRI for Grade III or suspected combined ACL/meniscal injury (unhappy triad). Distinguish isolated MCL (good prognosis) from multi-ligamentous injury.",
    pt_plan: {
      acute: "POLICE protocol, hinged knee brace 0–90°, isometric quads/glutes, gait re-education with crutches if antalgic.",
      subacute: "Restore full ROM, progressive closed-chain strengthening, proprioception, stationary bike → skating treadmill.",
      return_to_sport: "On-ice skating progression: straight-line → edges → cutting → contact drills. Functional hop battery and skate-specific agility prior to clearance."
    },
    prevention: ["Hip/glute strengthening", "Neuromuscular control programs", "Skate-fit and edge work", "Rule enforcement on body checking"],
    severity: "Grade I–III",
    recovery_time: "2–8 weeks (Grade I–II); 8–12+ weeks Grade III"
  },
  {
    name: "Hip Adductor Strain (Hockey Groin)",
    region: "Hip",
    category: "Musculoskeletal", subcategory: "Muscle",
    description: "Acute or overuse strain of the adductor longus, the most common groin injury in ice hockey, driven by the explosive abduction–adduction cycle of the skating stride.",
    causes: ["Forceful eccentric adductor load on push-off", "Pre-season deconditioning", "Adductor:abductor strength imbalance <80%"],
    mechanism: "Eccentric overload of the adductor longus during the stride recovery phase or sudden change of direction.",
    signs_symptoms: ["Groin pain at adductor origin", "Pain on resisted adduction", "Pain on passive abduction stretch", "Difficulty with crossovers"],
    msk_tests: ["Squeeze Test (0°, 45°, 90°)", "Adductor Resistance Test", "Thomas Test", "FABER Test", "Palpation of adductor longus origin"],
    diagnostic_tips: "Adductor squeeze <80% of baseline indicates injury or risk. Rule out hip joint pathology (FAI, labral tear) and inguinal-related groin pain.",
    pt_plan: {
      acute: "Relative rest, isometric adductor squeezes (pain-free), soft-tissue work, address compensations.",
      subacute: "Copenhagen Adduction Protocol, hip hinge mechanics, lateral lunges, sled pushes.",
      return_to_sport: "On-ice progression: straight skating → crossovers → game-speed agility. Adductor strength ≥90% of abductor strength prior to clearance."
    },
    prevention: ["Copenhagen Adduction Exercise (preseason)", "Adequate off-season conditioning", "Address strength asymmetries", "Adductor:abductor ratio monitoring"],
    severity: "Grade I–III",
    recovery_time: "1–6 weeks"
  },
  {
    name: "Hip Labral Tear / FAI (Hockey)",
    region: "Hip",
    category: "Sports", subcategory: "Joint",
    description: "Femoroacetabular impingement and acetabular labral pathology common in hockey players due to repetitive deep hip flexion and internal rotation in the skating posture.",
    causes: ["Cam/pincer morphology", "Repetitive hip flexion–IR (skating stance)", "Prior hip injury"],
    mechanism: "Repetitive abutment of the femoral head–neck against the acetabular rim, damaging the labrum and chondral surface.",
    signs_symptoms: ["Anterior hip/groin pain (C-sign)", "Catching/clicking", "Pain with prolonged sitting", "Reduced hip IR", "Pain after skating"],
    msk_tests: ["FADIR (Anterior Impingement Test)", "FABER Test", "Log Roll Test", "Scour Test", "Resisted Straight Leg Raise"],
    diagnostic_tips: "MR arthrogram is gold standard for labral tears. AP pelvis + Dunn lateral X-rays for cam/pincer morphology.",
    pt_plan: {
      acute: "Activity modification, avoid deep flexion–IR, manual therapy for capsule, isometric glutes.",
      subacute: "Posterior chain strengthening (glute med/max), trunk stability, motor control retraining of hip mechanics.",
      return_to_sport: "Sport-specific reloading; surgical referral if conservative care fails after 8–12 weeks."
    },
    prevention: ["Hip mobility programs", "Glute/core strengthening", "Skating technique optimisation", "Early intervention for symptomatic athletes"],
    severity: "Variable",
    recovery_time: "6–12 weeks conservative; 4–6 months post-arthroscopy"
  },
  {
    name: "AC Joint Sprain (Hockey)",
    region: "Shoulder",
    category: "Musculoskeletal", subcategory: "Joint",
    description: "Acromioclavicular joint sprain, classically from a hockey player being checked into the boards landing on the point of the shoulder with arm adducted.",
    causes: ["Direct fall onto adducted shoulder (boards/ice)", "Player-to-player collision"],
    mechanism: "Inferior force on acromion driving scapula away from clavicle, sprainingthe AC ± coracoclavicular ligaments.",
    signs_symptoms: ["Pain over AC joint", "Step deformity (Grade III+)", "Pain on cross-body adduction", "Painful arc 170–180°"],
    msk_tests: ["Cross-Body Adduction Test", "AC Resisted Extension Test (O’Brien’s)", "Paxinos Test", "Piano-key Sign"],
    diagnostic_tips: "Rockwood classification (I–VI) on weighted AP X-rays. Grade I–II conservative; III controversial; IV–VI surgical.",
    pt_plan: {
      acute: "Sling 1–2 weeks, ice, pendular exercises, scapular setting.",
      subacute: "ROM restoration, scapular stabilisers, rotator cuff strengthening, avoid early heavy bench press.",
      return_to_sport: "Pain-free full ROM, ≥90% strength, sport-specific contact drills tolerated. Shoulder pad with AC donut pad."
    },
    prevention: ["Protective shoulder pads with AC protection", "Safe checking technique", "Rule enforcement"],
    severity: "Grade I–VI (Rockwood)",
    recovery_time: "2–6 weeks (I–II); 6–12 weeks (III); surgical for IV–VI"
  },
  {
    name: "Wrist Fracture / Scaphoid Fracture (Hockey)",
    region: "Wrist/Hand",
    category: "Musculoskeletal", subcategory: "Bone",
    description: "Distal radius or scaphoid fracture from a fall onto an outstretched hand, typically when a player loses balance or is tripped on the ice.",
    causes: ["FOOSH onto ice", "Hit into boards with hand extended", "Stick or skate-blade impact"],
    mechanism: "Axial load through extended wrist; scaphoid waist most commonly fractured carpal bone.",
    signs_symptoms: ["Anatomical snuffbox tenderness", "Pain with axial load through thumb", "Reduced grip strength", "Wrist swelling"],
    msk_tests: ["Anatomical Snuffbox Palpation", "Scaphoid Compression Test", "Watson’s (Scaphoid Shift) Test", "Tuning Fork Test"],
    diagnostic_tips: "Initial X-rays may be negative for scaphoid fractures — re-image at 10–14 days or MRI/CT if high suspicion. Untreated → AVN of proximal pole.",
    pt_plan: {
      acute: "Immobilisation (thumb spica for scaphoid; cast for distal radius). Maintain shoulder/elbow ROM, fitness via lower-body conditioning.",
      subacute: "Post-immobilisation: progressive wrist ROM, grip strengthening, putty work, scar mobilisation.",
      return_to_sport: "Functional grip and stick-handling tolerance, protective wrist guard. Clearance 6–12 weeks (distal radius); 12+ weeks (scaphoid)."
    },
    prevention: ["Proper falling technique", "Wrist guards (recreational)", "Strength and proprioception of upper limb"],
    severity: "Mild to Severe",
    recovery_time: "6–12 weeks (distal radius); 12–16 weeks (scaphoid)"
  },
  {
    name: "Concussion (Hockey)",
    region: "Cervical",
    category: "Neurological", subcategory: "Acute",
    description: "Sport-related concussion from body checking, head contact with the boards, ice or another player. A leading injury in ice hockey at all levels of play.",
    causes: ["Body check to head", "Impact with boards/glass/ice", "Stick or puck contact", "Fighting"],
    mechanism: "Linear and rotational acceleration of the brain producing transient neurometabolic dysfunction.",
    signs_symptoms: ["Headache", "Dizziness", "Photophobia", "Cognitive fog", "Balance dysfunction", "Sleep disturbance", "Emotional lability"],
    msk_tests: ["SCAT6", "VOMS (Vestibular/Ocular Motor Screen)", "BESS", "King-Devick Test", "Buffalo Concussion Treadmill Test"],
    diagnostic_tips: "Clinical diagnosis. CT only to rule out structural injury per criteria. Persistent symptoms >2 weeks → multimodal rehab.",
    pt_plan: {
      acute: "Relative rest 24–48 hrs, then symptom-limited sub-threshold aerobic activity.",
      subacute: "Cervicovestibular rehab, oculomotor retraining, graded exertion using Buffalo protocol.",
      return_to_sport: "6-step graduated return-to-play protocol; full contact only after asymptomatic and medically cleared."
    },
    prevention: ["Rule enforcement (head contact penalties)", "Neck strengthening programs", "Properly fitted helmets", "Education on reporting symptoms"],
    severity: "Mild to Severe",
    recovery_time: "7–28 days typical; longer for persistent symptoms"
  },
  {
    name: "Cervical Spine Injury / Burner (Hockey)",
    region: "Cervical",
    category: "Neurological", subcategory: "Nerve",
    description: "Brachial plexus traction injury (burner/stinger) or, more seriously, axial cervical compression from head-first contact with the boards — historically a catastrophic injury risk in ice hockey.",
    causes: ["Head-first impact into boards", "Lateral neck flexion with shoulder depression in checking", "Spear-tackle mechanism"],
    mechanism: "Lateral flexion + shoulder depression stretches the upper trunk of the brachial plexus; axial loading risks vertebral fracture/cord injury.",
    signs_symptoms: ["Transient unilateral arm burning/numbness", "Weakness in C5–C6 distribution", "Neck pain", "Bilateral symptoms = red flag for cord injury"],
    msk_tests: ["Spurling’s Test", "Cervical Distraction Test", "Upper Limb Tension Test (Median)", "Shoulder Abduction Relief Test", "Sharp-Purser Test (rule out instability)"],
    diagnostic_tips: "Bilateral symptoms, lower-extremity involvement or persistent deficit = emergency. Imaging (MRI) for any persisting neurology >24 hours.",
    pt_plan: {
      acute: "Rule out red flags. Activity modification, gentle cervical mobility, isometrics.",
      subacute: "Deep cervical flexor training, scapular stabilisers, neural mobilisation if indicated.",
      return_to_sport: "Pain-free full ROM, normal neurology, full strength. Education on safe checking technique."
    },
    prevention: ["Heads-up hockey education (no head-first contact)", "Neck strengthening", "Rule enforcement (boarding/checking from behind)", "STOP patches on jerseys"],
    severity: "Mild to Catastrophic",
    recovery_time: "Days (burner) to lifelong (cord injury)"
  },
  {
    name: "Lacerations (Skate Blade)",
    region: "Systemic/Any",
    category: "Sports", subcategory: "Acute",
    description: "Skate-blade lacerations are a hockey-specific injury risk, ranging from minor cuts to life-threatening neck or femoral artery lacerations.",
    causes: ["Errant skate blade in scrum/fall", "Player kicks up on collision"],
    mechanism: "Sharp skate edge cutting through skin, fascia and underlying neurovascular structures.",
    signs_symptoms: ["Bleeding wound", "Possible tendon/nerve involvement (extremities)", "Massive haemorrhage if neck/femoral artery"],
    msk_tests: ["Distal neurovascular exam", "Active/passive movement of distal joints", "Capillary refill", "Two-point discrimination"],
    diagnostic_tips: "Always assess distal motor, sensory and vascular function. Neck lacerations = trauma centre referral.",
    pt_plan: {
      acute: "Wound closure (medical), tetanus prophylaxis, immobilisation if tendon repair.",
      subacute: "Scar management, progressive ROM, tendon-glide protocols if applicable.",
      return_to_sport: "Wound healed, full ROM, protective gear (cut-resistant neck guard, wrist/Achilles guards)."
    },
    prevention: ["Cut-resistant neck guards (mandatory youth/strongly recommended pro)", "Wrist guards", "Skate-cut socks", "Mouth guards"],
    severity: "Minor to Life-threatening",
    recovery_time: "Days to weeks"
  },
  {
    name: "High Ankle Sprain / Syndesmosis (Hockey)",
    region: "Foot/Ankle",
    category: "Musculoskeletal", subcategory: "Ligament",
    description: "Injury to the distal tibiofibular syndesmosis, common in hockey when a skate is fixed in the boot and the lower leg externally rotates during a check or fall.",
    causes: ["External rotation of foot in fixed skate", "Boards collision with leg trapped"],
    mechanism: "Forced external rotation/dorsiflexion separating the tibia and fibula at the syndesmosis.",
    signs_symptoms: ["Pain above the ankle joint line", "Pain on push-off and stride", "Difficulty bearing weight", "Pain with ER stress"],
    msk_tests: ["Squeeze Test (Hopkins)", "External Rotation (Kleiger) Test", "Dorsiflexion–Compression Test", "Cotton Test", "Single-leg hop"],
    diagnostic_tips: "Weight-bearing AP/mortise X-rays for diastasis; MRI for grading. Higher disability and longer recovery than lateral ankle sprain.",
    pt_plan: {
      acute: "Boot/cast immobilisation, NWB → PWB per grade, isometrics, manage swelling.",
      subacute: "Progressive WB, ROM, calf and intrinsic foot strengthening, proprioception (BAPS, single-leg).",
      return_to_sport: "Skating progression with stable boot fit; full agility, jump and on-ice cutting prior to clearance."
    },
    prevention: ["Proper skate fit and lacing", "Ankle proprioception programs", "Avoid boards-trapping situations"],
    severity: "Grade I–III",
    recovery_time: "6–12 weeks (Grade II); surgical fixation may extend to 4–6 months"
  },
  {
    name: "Lumbar Disc Pathology (Hockey)",
    region: "Lumbar",
    category: "Musculoskeletal", subcategory: "Disc",
    description: "Discogenic low back pain or disc herniation in hockey players from the sustained flexed skating posture combined with rotational shooting and checking loads.",
    causes: ["Sustained lumbar flexion in skating stance", "Repetitive rotational shooting load", "Hip flexor tightness driving lumbar compensation"],
    mechanism: "Repetitive flexion–rotation loading the posterolateral annulus, predisposing to annular tears and herniation.",
    signs_symptoms: ["Low back pain ± radicular leg pain", "Pain with flexion and sitting", "Centralisation with extension (in many cases)", "Neurological symptoms if herniation"],
    msk_tests: ["Slump Test", "Straight Leg Raise (SLR)", "Crossed SLR", "Repeated Movement Testing (McKenzie)", "Lumbar Quadrant Test"],
    diagnostic_tips: "MRI only with persistent radicular signs >6 weeks or red flags (cauda equina, progressive deficit).",
    pt_plan: {
      acute: "Directional preference exercises, neural mobilisation, lumbopelvic motor control, pain education.",
      subacute: "Progressive loading (deadlifts, hip hinge), hip mobility, posterior chain strengthening.",
      return_to_sport: "Skating-specific endurance, anti-rotation core work, shooting load progression."
    },
    prevention: ["Hip mobility maintenance", "Core endurance training (McGill big-3)", "Address skating biomechanics"],
    severity: "Mild to Severe",
    recovery_time: "4–12 weeks; longer with radiculopathy"
  },
  {
    name: "Goalie Hip (Internal Snapping Hip / FAI)",
    region: "Hip",
    category: "Sports", subcategory: "Joint",
    description: "Hip pathology specific to goaltenders driven by repetitive butterfly position — extreme hip flexion, abduction and internal rotation thousands of times per season.",
    causes: ["Repetitive butterfly drops", "Cam morphology common in goalies", "High training volume"],
    mechanism: "Repetitive deep hip flexion–IR–abduction overloads the labrum, capsule and iliopsoas.",
    signs_symptoms: ["Anterior hip/groin pain", "Snapping/clicking sensation", "Pain after games/practice", "Loss of hip IR"],
    msk_tests: ["FADIR Test", "FABER Test", "Iliopsoas Snap Test", "Resisted SLR (psoas)", "Hip IR ROM measurement"],
    diagnostic_tips: "MR arthrogram if labral tear suspected. Differential: athletic pubalgia, adductor tendinopathy.",
    pt_plan: {
      acute: "Activity modification, manual therapy, address capsular and soft-tissue restrictions.",
      subacute: "Glute med/max strengthening, anti-rotation core, hip control in butterfly position.",
      return_to_sport: "Graded butterfly load, position-specific drills, monitor weekly load."
    },
    prevention: ["Butterfly load management", "Hip mobility and strength program", "Goalie-specific off-ice conditioning"],
    severity: "Variable",
    recovery_time: "6–16 weeks conservative"
  },
  {
    name: "Slap Shot / Wrist Tendinopathy (Hockey)",
    region: "Wrist/Hand",
    category: "Sports", subcategory: "Tendon",
    description: "Overuse tendinopathy of the wrist flexors/extensors and forearm musculature from repetitive shooting and stick handling, especially with poor stick mechanics or excessive volume.",
    causes: ["High shooting volume", "Poor stick flex selection", "Inadequate forearm conditioning"],
    mechanism: "Repetitive eccentric loading of wrist tendons during shot release and stick handling.",
    signs_symptoms: ["Forearm/wrist pain on shooting", "Tenderness over wrist tendons", "Pain with resisted wrist flexion/extension", "Grip fatigue"],
    msk_tests: ["Resisted Wrist Flexion/Extension", "Cozen’s Test", "Mill’s Test", "Finkelstein’s Test (rule out de Quervain’s)", "Grip Dynamometry"],
    diagnostic_tips: "Mostly clinical. US to confirm tendinopathy if persistent. Rule out distal radius stress reaction in adolescents.",
    pt_plan: {
      acute: "Load reduction, isometric loading, manual therapy, address upper-quadrant chain.",
      subacute: "Heavy slow resistance for wrist tendons, eccentric loading, grip endurance.",
      return_to_sport: "Graded shooting volume, stick-flex review, in-season monitoring."
    },
    prevention: ["Forearm strengthening preseason", "Appropriate stick flex", "Shot volume monitoring"],
    severity: "Mild to Moderate",
    recovery_time: "4–12 weeks"
  }
];

const defaults = {
  ebp_level: "EBP Strong",
  sport: "Ice Hockey",
  epidemiology: "Frequently reported in ice hockey at junior, collegiate and professional levels; hockey is among the highest-risk team sports for this injury pattern.",
  imaging: ["Imaging guided by clinical presentation; advanced imaging only if it changes management or red flags present"],
  return_to_play_criteria: [
    "Pain-free full ROM",
    "≥90% strength symmetry vs uninjured side",
    "Sport-specific on-ice testing passed (skating, agility, contact)",
    "Psychological readiness",
    "Cleared by medical team"
  ],
  outcome_measures: ["NPRS", "Region-appropriate PROM", "Sport-specific functional tests"],
  references: [
    "Brukner & Khan — Clinical Sports Medicine (5e, 2017)",
    "Hockey Canada / IIHF Medical Guidelines",
    "Tyler TF et al. — Adductor strain prevention in ice hockey (AJSM)",
    "McCrory et al. — Concussion in Sport Group consensus"
  ]
};

const enriched = HOCKEY.map(h => ({ id: id++, ...defaults, ...h }));
const updated = [...sports, ...enriched];
fs.writeFileSync('src/data/sports-injuries.json', JSON.stringify(updated, null, 2));
console.log(`Added ${enriched.length} hockey injuries. Total now: ${updated.length}`);
