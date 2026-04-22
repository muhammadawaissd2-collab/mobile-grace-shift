// Special MSK Tests catalogue — sourced from Magee, Hattam & Smeatham, Brotzman, McKenzie etc.
// Auto-generated curated dataset; full clinical metadata for cross-page interlinking.

export interface SpecialTest {
  id: number;
  name: string;
  region: string;
  category: string;
  condition: string;
  purpose: string;
  position: string;
  procedure: string;
  positive_finding: string;
  sensitivity: string;
  specificity: string;
  clinical_pearls: string;
  related_impairments: string[];
  related_muscles: string[];
  related_exercises: string[];
  source_books: string[];
  evidence_level: string;
}

export const specialTests: SpecialTest[] = [
{
  "name": "Cozen's Test",
  "region": "Elbow/Wrist/Hand",
  "category": "Provocation",
  "condition": "Lateral Epicondylitis",
  "purpose": "Assess for lateral epicondylalgia (tennis elbow).",
  "position": "Seated.",
  "procedure": "Examiner stabilizes elbow, patient makes a fist, pronates, radially deviates and extends wrist against resistance.",
  "positive_finding": "Sudden severe pain in lateral epicondyle area.",
  "sensitivity": "High",
  "specificity": "Moderate",
  "clinical_pearls": "Classic test for tennis elbow.",
  "related_impairments": [
    "Lateral Epicondylalgia"
  ],
  "related_muscles": [
    "Extensor Carpi Radialis Brevis"
  ],
  "related_exercises": [
    "Eccentric Wrist Extension"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Moderate",
  "id": 30000
},
{
  "name": "Mill's Test",
  "region": "Elbow/Wrist/Hand",
  "category": "Stretching",
  "condition": "Lateral Epicondylitis",
  "purpose": "Assess for lateral epicondylalgia.",
  "position": "Seated.",
  "procedure": "Examiner passively pronates patient's forearm, flexes wrist fully, and extends elbow.",
  "positive_finding": "Pain over the lateral epicondyle.",
  "sensitivity": "High",
  "specificity": "Low",
  "clinical_pearls": "Often performed alongside Cozen's test.",
  "related_impairments": [
    "Lateral Epicondylalgia"
  ],
  "related_muscles": [
    "Extensor Carpi Radialis Brevis"
  ],
  "related_exercises": [
    "Wrist Extensor Stretch"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Moderate",
  "id": 30001
},
{
  "name": "Apley's Scratch Test",
  "region": "Shoulder",
  "category": "Mobility",
  "condition": "General Shoulder ROM",
  "purpose": "Assess combined overhead and behind-back shoulder ranges.",
  "position": "Standing/Seated.",
  "procedure": "Patient reaches behind head and down spine (Flex/ABD/ER) and behind back and up spine (Ext/ADD/IR).",
  "positive_finding": "Asymmetry, pain, or restriction.",
  "sensitivity": "Varies",
  "specificity": "Varies",
  "clinical_pearls": "Great functional screen before precise goniometry.",
  "related_impairments": [
    "Adhesive Capsulitis",
    "Rotator Cuff Tendinopathy"
  ],
  "related_muscles": [
    "Subscapularis",
    "Infraspinatus"
  ],
  "related_exercises": [
    "Wall Walk",
    "Sleeper Stretch"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Moderate",
  "id": 30002
},
{
  "name": "Homan's Sign",
  "region": "Lower Extremity",
  "category": "Vascular",
  "condition": "Deep Vein Thrombosis (DVT)",
  "purpose": "Assess for deep vein thrombosis in the calf.",
  "position": "Patient supine or seated with knee extended.",
  "procedure": "Examiner forcefully and abruptly dorsiflexes the patient's foot while squeezing the calf.",
  "positive_finding": "Deep calf pain.",
  "sensitivity": "50%",
  "specificity": "Low",
  "clinical_pearls": "Not reliable on its own. Strongly advised to use the Wells Criteria for DVT instead due to low accuracy and risk of clot dislodgement.",
  "related_impairments": [
    "Deep Vein Thrombosis (DVT)"
  ],
  "related_muscles": [
    "Gastrocnemius",
    "Soleus"
  ],
  "related_exercises": [],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Weak",
  "id": 20000
},
{
  "name": "Slocum Test",
  "region": "Knee",
  "category": "Ligament / Instability",
  "condition": "Anterolateral / Anteromedial Rotatory Instability (ALRI/AMRI)",
  "purpose": "Test for rotatory instability of the knee.",
  "position": "Supine with knee flexed to 90° and hip flexed to 45°.",
  "procedure": "For ALRI, foot is internally rotated 30°. For AMRI, foot is externally rotated 15°. Examiner sits on the foot and applies an anterior drawer force.",
  "positive_finding": "Excessive anterior tibial translation compared to the unaffected side.",
  "sensitivity": "Moderate",
  "specificity": "High",
  "clinical_pearls": "Used to differentiate single-plane instability from multi-plane rotatory instabilities common with combined ACL/MCL or ACL/LCL injuries.",
  "related_impairments": [
    "ACL Tear",
    "MCL Tear",
    "LCL Tear"
  ],
  "related_muscles": [
    "Quadriceps",
    "Hamstrings"
  ],
  "related_exercises": [
    "Closed Chain Knee Extension"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Moderate",
  "id": 20001
},
{
  "name": "Dial Test",
  "region": "Knee",
  "category": "Ligament / Instability",
  "condition": "Posterolateral Corner (PLC) Injury",
  "purpose": "Assess for posterolateral rotatory instability (PLC vs PCL involvement).",
  "position": "Prone or supine. Heels/ankles extended off the table.",
  "procedure": "Examiner externally rotates bilateral tibias at both 30° and 90° of knee flexion.",
  "positive_finding": ">10° increase in external rotation on the involved side compared with the contralateral side.",
  "sensitivity": "Moderate",
  "specificity": "High",
  "clinical_pearls": "Difference at 30° only = isolated PLC. Difference at 30° AND 90° = combined PLC and PCL injury.",
  "related_impairments": [
    "Posterolateral Corner (PLC) Injury",
    "PCL Tear"
  ],
  "related_muscles": [
    "Popliteus",
    "Biceps Femoris"
  ],
  "related_exercises": [
    "Hamstring Curls",
    "Popliteus Strengthening"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Strong",
  "id": 20002
},
{
  "name": "Quadriceps Active Test",
  "region": "Knee",
  "category": "Ligament / Instability",
  "condition": "PCL Tear",
  "purpose": "Evaluate posterior cruciate ligament integrity via the posterior sag.",
  "position": "Supine with knee flexed to 90°.",
  "procedure": "With foot stabilized on table, ask patient to actively slide foot forward down the table (isometric quadriceps contraction).",
  "positive_finding": "Anterior reduction of the posteriorly subluxed tibia.",
  "sensitivity": "98%",
  "specificity": "100%",
  "clinical_pearls": "Excellent to confirm PCL insufficiency when combined with Godfrey's Posterior Sag Sign.",
  "related_impairments": [
    "PCL Tear"
  ],
  "related_muscles": [
    "Quadriceps"
  ],
  "related_exercises": [
    "Isometric Quad Setting"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment",
    "Brukner & Khan"
  ],
  "evidence_level": "Strong",
  "id": 20003
},
{
  "name": "Bounce Home Test",
  "region": "Knee",
  "category": "Cartilage / Meniscus",
  "condition": "Meniscal Tear",
  "purpose": "Assess for mechanical block of knee extension, often meniscal.",
  "position": "Patient supine.",
  "procedure": "Examiner cups the heel and passively flexes the knee, then allows it to passively drop into extension.",
  "positive_finding": "Inability to reach full extension, or a rubbery end-feel with pain in the joint line.",
  "sensitivity": "47%",
  "specificity": "67%",
  "clinical_pearls": "Good for identifying loose bodies or 'bucket handle' meniscal tears locking the joint.",
  "related_impairments": [
    "Medial Meniscus Tear",
    "Lateral Meniscus Tear"
  ],
  "related_muscles": [
    "Popliteus"
  ],
  "related_exercises": [
    "AAROM Knee Extension"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Moderate",
  "id": 20004
},
{
  "name": "Ege's Test",
  "region": "Knee",
  "category": "Cartilage / Meniscus",
  "condition": "Meniscal Tear",
  "purpose": "Weight-bearing assessment for meniscal tears.",
  "position": "Standing with feet 30-40cm apart.",
  "procedure": "Medial Meniscus: Feet fully externally rotated, squat down then up. Lateral Meniscus: Feet fully internally rotated, squat.",
  "positive_finding": "Pain or a palpable/audible click over the joint line.",
  "sensitivity": "67%",
  "specificity": "81%",
  "clinical_pearls": "A weight-bearing equivalent of the McMurray Test. Often more clinically relevant as it replicates functional loading.",
  "related_impairments": [
    "Medial Meniscus Tear",
    "Lateral Meniscus Tear"
  ],
  "related_muscles": [
    "Quadriceps"
  ],
  "related_exercises": [
    "Shallow Squats"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Moderate-Strong",
  "id": 20005
},
{
  "name": "Thumb CMC Grind Test",
  "region": "Wrist/Hand",
  "category": "Provocation",
  "condition": "Thumb CMC Osteoarthritis",
  "purpose": "Assess for arthritis/degeneration of the 1st carpometacarpal joint.",
  "position": "Sitting.",
  "procedure": "Examiner grips the patient's 1st metacarpal and applies axial compression while rotating against the trapezium.",
  "positive_finding": "Pain, crepitus, or grinding at the CMC joint.",
  "sensitivity": "42-53%",
  "specificity": "80-93%",
  "clinical_pearls": "High specificity makes it useful for ruling in CMC OA. Differentiate from De Quervain's given the proximity.",
  "related_impairments": [
    "Thumb CMC Osteoarthritis"
  ],
  "related_muscles": [
    "Abductor Pollicis Longus",
    "Extensor Pollicis Brevis"
  ],
  "related_exercises": [
    "Thumb Radial Abduction Isometrics"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Strong",
  "id": 20006
},
{
  "name": "Lunotriquetral Ballottement Test (Reagan's)",
  "region": "Wrist/Hand",
  "category": "Instability",
  "condition": "Lunotriquetral Instability",
  "purpose": "Assess the stability of the lunotriquetral interosseous ligament.",
  "position": "Sitting.",
  "procedure": "Examiner grasps the lunate between thumb/index finger of one hand, and the triquetrum with the other. Apply dorsal-volar glides of the triquetrum on the lunate.",
  "positive_finding": "Excessive laxity, pain, or crepitus.",
  "sensitivity": "Good",
  "specificity": "Moderate",
  "clinical_pearls": "Important for diagnosing ulnar-sided wrist pain. Compare to the uninjured side.",
  "related_impairments": [
    "Wrist Instability",
    "TFCC Injury"
  ],
  "related_muscles": [
    "Extensor Carpi Ulnaris"
  ],
  "related_exercises": [
    "Wrist Stabilization with Dart Throws"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Moderate",
  "id": 20007
},
{
  "name": "Sign of the Buttock",
  "region": "Hip/Pelvis",
  "category": "Red Flag",
  "condition": "Gluteal/Pelvic Serious Pathology",
  "purpose": "Differentiate between lumbar/sciatic pain and serious posterior hip/pelvic pathology.",
  "position": "Supine.",
  "procedure": "Perform an SLR. If restricted, flex the knee and see if hip flexion increases. If hip flexion remains the same/restricted, it is a positive sign.",
  "positive_finding": "No increase in hip flexion when the knee is flexed.",
  "sensitivity": "High for major pathology",
  "specificity": "High",
  "clinical_pearls": "A critical Red Flag test for conditions like osteomyelitis, infectious sacroiliitis, fracture, or neoplasm. Requires immediate medical referral.",
  "related_impairments": [
    "Sacroiliitis",
    "Pelvic Neoplasm",
    "Gluteal Abscess"
  ],
  "related_muscles": [
    "Gluteus Maximus"
  ],
  "related_exercises": [],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Strong",
  "id": 20008
},
{
  "name": "Fulcrum Test",
  "region": "Hip/Femur",
  "category": "Red Flag",
  "condition": "Femoral Neck / Shaft Stress Fracture",
  "purpose": "Assess for stress fracture of the femoral shaft.",
  "position": "Patient seated on the edge of the bed.",
  "procedure": "Examiner places forearm under the distal thigh to act as a fulcrum, and applies downward pressure on the anterior distal femur.",
  "positive_finding": "Sharp pain mimicking the patient's symptoms.",
  "sensitivity": "High",
  "specificity": "High",
  "clinical_pearls": "Excellent screening tool before functional hop tests if stress fracture is suspected. Positive test mandates imaging.",
  "related_impairments": [
    "Stress Fracture (Femur)"
  ],
  "related_muscles": [
    "Quadriceps",
    "Hamstrings"
  ],
  "related_exercises": [],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Strong",
  "id": 20009
},

{
  "name": "Biceps Load Test II",
  "region": "Shoulder",
  "category": "Labral/SLAP",
  "condition": "SLAP Lesion",
  "purpose": "Detect SLAP lesions, especially in the presence of recurrent anterior instability.",
  "position": "Supine with shoulder initially abducted to 120°, externally rotated to maximal point, elbow flexed to 90°, and forearm supinated.",
  "procedure": "The examiner resists the patient's active elbow flexion.",
  "positive_finding": "Reproduction of pain deep in the shoulder during resisted elbow flexion.",
  "sensitivity": "89.7%",
  "specificity": "96.9%",
  "clinical_pearls": "Excellent test for identifying SLAP lesions Type II. Often used in throwing athletes.",
  "related_impairments": [
    "SLAP Tear",
    "Biceps Tendinopathy"
  ],
  "related_muscles": [
    "Biceps Brachii"
  ],
  "related_exercises": [
    "Biceps Curls",
    "Shoulder Stability Exercises"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Strong",
  "id": 10000
},
{
  "name": "Kim Test",
  "region": "Shoulder",
  "category": "Instability",
  "condition": "Posterior-Inferior Labral Tear",
  "purpose": "Detect posterior-inferior labral lesions.",
  "position": "Seated. Arm abducted to 90° with a flexed elbow.",
  "procedure": "Examiner elevates arm 45° diagonally upward while simultaneously applying axial load to the elbow and a posteroinferior force to the proximal humerus.",
  "positive_finding": "Sudden onset of posterior shoulder pain, accompanied by clicking/clunking.",
  "sensitivity": "80%",
  "specificity": "94%",
  "clinical_pearls": "Use in conjunction with the Jerk Test. Highly accurate for identifying posterior capsulolabral lesions.",
  "related_impairments": [
    "Posterior Labral Tear",
    "Posterior Shoulder Instability"
  ],
  "related_muscles": [
    "Infraspinatus",
    "Teres Minor",
    "Posterior Deltoid"
  ],
  "related_exercises": [
    "External Rotation (Resisted)",
    "Rowing"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Strong",
  "id": 10001
},
{
  "name": "Jerk Test",
  "region": "Shoulder",
  "category": "Instability",
  "condition": "Posterior Labral Tear",
  "purpose": "Detect posterior instability and posterior labral tears.",
  "position": "Seated. Arm internally rotated and forward flexed to 90°.",
  "procedure": "Examiner applies an axial load to the elbow and horizontally adducts the arm across the body.",
  "positive_finding": "Sudden jerk or clunk as the humeral head subluxates posteriorly. A second clunk may occur upon returning to the start position.",
  "sensitivity": "73%",
  "specificity": "98%",
  "clinical_pearls": "Combines well with the Kim Test; a positive test with pain strongly indicates a posteroinferior labral lesion.",
  "related_impairments": [
    "Posterior Labral Tear",
    "Posterior Shoulder Instability"
  ],
  "related_muscles": [
    "Infraspinatus",
    "Posterior Deltoid"
  ],
  "related_exercises": [
    "Scapular Retraction",
    "External Rotation"
  ],
  "source_books": [
    "Special Tests in Musculoskeletal Examination"
  ],
  "evidence_level": "Strong",
  "id": 10002
},
{
  "name": "Posterior Apprehension Test",
  "region": "Shoulder",
  "category": "Instability",
  "condition": "Posterior Instability / Reverse Bankart",
  "purpose": "Assess posterior instability of the glenohumeral joint.",
  "position": "Supine or seated. Shoulder elevated to 90° in the scapular plane with internal rotation.",
  "procedure": "Examiner applies a posterior force through the humerus.",
  "positive_finding": "Apprehension or resistance from the patient, not just pain.",
  "sensitivity": "19%",
  "specificity": "99%",
  "clinical_pearls": "High specificity but low sensitivity. Best used to confirm suspected severe posterior instability.",
  "related_impairments": [
    "Reverse Bankart Tear",
    "Posterior Shoulder Instability"
  ],
  "related_muscles": [
    "Subscapularis",
    "Infraspinatus"
  ],
  "related_exercises": [
    "Dynamic Stabilization",
    "Closed Kinetic Chain Shoulder"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Moderate",
  "id": 10003
},
{
  "name": "Crossed Straight Leg Raise",
  "region": "Lumbar Spine",
  "category": "Neurological",
  "condition": "Lumbar Disc Herniation",
  "purpose": "Identify large disc herniation or space-occupying lesion.",
  "position": "Supine.",
  "procedure": "Examiner performs a straight leg raise on the ASYMPTOMATIC leg.",
  "positive_finding": "Reproduction of sciatic pain symptoms down the SYMPTOMATIC (opposite) leg.",
  "sensitivity": "28%",
  "specificity": "90%",
  "clinical_pearls": "Very high specificity for a large central or axillary disc protrusion. If positive, strong indicator of disc path.",
  "related_impairments": [
    "Lumbar Disc Herniation (HNP)",
    "Sciatica"
  ],
  "related_muscles": [
    "Hamstrings",
    "Piriformis"
  ],
  "related_exercises": [
    "Nerve Glides",
    "McKenzie Extension"
  ],
  "source_books": [
    "Magee's Orthopedic Physical Assessment"
  ],
  "evidence_level": "Strong",
  "id": 10004
},
{
  "name": "Wells Criteria for DVT",
  "region": "Lower Extremity",
  "category": "Vascular",
  "condition": "Deep Vein Thrombosis",
  "purpose": "Clinical prediction rule to estimate the pre-test probability of DVT.",
  "position": "Various (primarily observation and palpation).",
  "procedure": "Score based on parameters: Active cancer, paralysis/paresis/plaster, recent immobilization/surgery, localized tenderness along deep venous system, entire leg swollen, calf swelling >3cm vs asymptomatic side, pitting edema, collateral non-varicose superficial veins, and alternative diagnosis as likely or more likely.",
  "positive_finding": "Score > 2 indicates high probability of DVT.",
  "sensitivity": "High (when combined with D-Dimer)",
  "specificity": "Moderate",
  "clinical_pearls": "Critical red-flag screen for patients indicating acute calf pain and swelling.",
  "related_impairments": [
    "Deep Vein Thrombosis (DVT)"
  ],
  "related_muscles": [
    "Gastrocnemius",
    "Soleus"
  ],
  "related_exercises": [
    "Ankle Pumps (post-clearance)"
  ],
  "source_books": [
    "Current Medical Diagnosis & Treatment"
  ],
  "evidence_level": "Strong",
  "id": 10005
},
{
  "name": "SCAT5 (Sport Concussion Assessment Tool)",
  "region": "Systemic/Any",
  "category": "Neurological",
  "condition": "Concussion",
  "purpose": "Assess athletes for sports-related concussion.",
  "position": "Seated/Standing.",
  "procedure": "Includes symptom evaluation, cognitive screening (Maddocks questions, SAC), neurological screening, and balance testing.",
  "positive_finding": "Deficits in any domains compared to baseline, or presence of concussion symptoms.",
  "sensitivity": "High",
  "specificity": "Moderate",
  "clinical_pearls": "Recommended to be used by trained medical professionals within acute phase of injury.",
  "related_impairments": [
    "Concussion",
    "Post-Concussion Syndrome"
  ],
  "related_muscles": [
    "Suboccipitals",
    "Cervical Paraspinals"
  ],
  "related_exercises": [
    "Vestibular Rehab",
    "Buffalo Concussion Protocol"
  ],
  "source_books": [
    "Consensus statement on concussion in sport"
  ],
  "evidence_level": "Strong",
  "id": 10006
},
{
  "name": "VOMS (Vestibular/Ocular Motor Screening)",
  "region": "Systemic/Any",
  "category": "Neurological",
  "condition": "Concussion",
  "purpose": "Assess vestibular and ocular motor impairments commonly seen post-concussion.",
  "position": "Seated.",
  "procedure": "Tests Smooth Pursuits, Saccades (horizontal/vertical), Near Point of Convergence, VOR (horizontal/vertical), and Visual Motion Sensitivity.",
  "positive_finding": "Provocation of symptoms (headache, dizziness, nausea, fogginess) > 2 points from baseline, or abnormal convergence distance.",
  "sensitivity": "High",
  "specificity": "Moderate-High",
  "clinical_pearls": "Highly sensitive for detecting concussion compared to SCAT5 alone. Vital for guiding vestibular PT interventions.",
  "related_impairments": [
    "Concussion",
    "Vestibular Dysfunction"
  ],
  "related_muscles": [
    "Extraocular Muscles"
  ],
  "related_exercises": [
    "Brock String",
    "Gaze Stabilization (VOR X1)"
  ],
  "source_books": [
    "Clinical practice guidelines for concussion"
  ],
  "evidence_level": "Strong",
  "id": 10007
},
{
  "name": "Balance Error Scoring System (BESS)",
  "region": "Systemic/Any",
  "category": "Neurological / Balance",
  "condition": "Concussion / Postural Instability",
  "purpose": "Objective assessment of postural stability.",
  "position": "Standing on firm and foam surfaces.",
  "procedure": "Three stances (double leg, single leg, tandem) tested with eyes closed for 20 seconds. Count errors (e.g., opening eyes, stepping out, hip >30deg flexion).",
  "positive_finding": "Increased error count indicating balance deficits.",
  "sensitivity": "Moderate",
  "specificity": "High",
  "clinical_pearls": "Excellent for establishing baselines and tracking progress in safe return to play for athletes.",
  "related_impairments": [
    "Concussion",
    "Ankle Sprain"
  ],
  "related_muscles": [
    "Lower Extremity Stabilizers",
    "Core"
  ],
  "related_exercises": [
    "Single Leg Stance",
    "Proprioceptive Board"
  ],
  "source_books": [
    "Sports Physical Therapy"
  ],
  "evidence_level": "Strong",
  "id": 10008
},
{
  "name": "Single Leg Decline Squat",
  "region": "Knee",
  "category": "Provocation",
  "condition": "Patellar Tendinopathy",
  "purpose": "Provoke symptoms associated with patellar 'Jumper's Knee'.",
  "position": "Standing on a 25-degree decline board.",
  "procedure": "Patient performs a single leg squat to 60-90 degrees flexion.",
  "positive_finding": "Pain located specifically at the inferior pole of the patella.",
  "sensitivity": "High",
  "specificity": "High",
  "clinical_pearls": "Better at provoking pathology than a flat-surface squat because it isolates the extensor mechanism by reducing calf/ankle joint contribution.",
  "related_impairments": [
    "Patellar Tendinopathy (Jumper's Knee)"
  ],
  "related_muscles": [
    "Quadriceps"
  ],
  "related_exercises": [
    "Eccentric Decline Squat",
    "Isometric Knee Extension"
  ],
  "source_books": [
    "Clinical Sports Medicine (Brukner & Khan)"
  ],
  "evidence_level": "Strong",
  "id": 10009
},

  {
    "id": 1,
    "name": "Spurling Test",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervical Radiculopathy",
    "purpose": "Reproduce radicular symptoms via foraminal compression.",
    "position": "Seated.",
    "procedure": "Extend, side-flex and rotate cervical spine to symptomatic side; apply axial compression (~7 kg).",
    "positive_finding": "Reproduction of radicular pain into ipsilateral arm.",
    "sensitivity": "50%",
    "specificity": "94%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 2,
    "name": "Cervical Distraction Test",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervical Radiculopathy",
    "purpose": "Relieve foraminal compression and reduce radicular pain.",
    "position": "Supine, head supported.",
    "procedure": "Apply ~14 kg distraction force through occiput and chin.",
    "positive_finding": "Reduction or relief of radicular symptoms.",
    "sensitivity": "44%",
    "specificity": "90%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 3,
    "name": "Upper Limb Tension Test 1 (Median)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervical Radiculopathy / Median nerve",
    "purpose": "Detect neural sensitisation of the median nerve.",
    "position": "Supine.",
    "procedure": "Sequentially: scapular depression, shoulder abduction 110°, forearm supination, wrist/finger ext, elbow ext, contralateral cervical SF.",
    "positive_finding": "Reproduction of patient symptoms; difference >10° vs unaffected side.",
    "sensitivity": "97%",
    "specificity": "22%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 4,
    "name": "Sharp-Purser Test",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Atlantoaxial instability",
    "purpose": "Assess transverse ligament integrity at C1-C2.",
    "position": "Seated, head in slight flexion.",
    "procedure": "Stabilise C2 spinous process; translate forehead posteriorly.",
    "positive_finding": "Clunk or symptom reduction with translation.",
    "sensitivity": "69%",
    "specificity": "96%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 5,
    "name": "Vertebral Artery Test (Hautant / De Kleyn)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Vertebrobasilar insufficiency",
    "purpose": "Screen for VBI before HVLA.",
    "position": "Supine; neck extended and rotated.",
    "procedure": "Hold position 30 sec each side; observe for signs.",
    "positive_finding": "5 Ds + 3 Ns: dizziness, drop attacks, diplopia, dysarthria, dysphagia, nausea, nystagmus, numbness.",
    "sensitivity": "Low",
    "specificity": "Low",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 6,
    "name": "Cervical Flexion-Rotation Test (CFRT)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervicogenic headache",
    "purpose": "Detect C1-C2 hypomobility.",
    "position": "Supine; full cervical flexion.",
    "procedure": "Passively rotate head to each side.",
    "positive_finding": "<32° rotation or asymmetry >10°.",
    "sensitivity": "91%",
    "specificity": "90%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 7,
    "name": "Cranio-cervical Flexion Test (CCFT)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Deep neck flexor dysfunction",
    "purpose": "Test endurance/activation of longus colli/capitis.",
    "position": "Supine; pressure biofeedback under cervical lordosis at 20 mmHg.",
    "procedure": "Patient performs gentle nodding to raise pressure 22-30 mmHg in 2-mmHg increments, hold 10 sec.",
    "positive_finding": "Inability to maintain target pressure or use of superficial flexors.",
    "sensitivity": "70-82%",
    "specificity": "70-82%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 8,
    "name": "Brachial Plexus Compression",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Brachial plexopathy",
    "purpose": "Identify brachial plexus irritation.",
    "position": "Seated.",
    "procedure": "Apply firm pressure to brachial plexus in supraclavicular fossa for 30 sec.",
    "positive_finding": "Local tenderness OR radiating symptoms into arm.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 9,
    "name": "Lhermitte Sign",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervical myelopathy",
    "purpose": "Detect spinal cord pathology.",
    "position": "Seated.",
    "procedure": "Passively flex cervical spine.",
    "positive_finding": "Electric-shock sensation down spine and into limbs.",
    "sensitivity": "3-27%",
    "specificity": "97%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 10,
    "name": "Hoffman Sign",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Upper motor neuron lesion",
    "purpose": "Detect cord involvement / cervical myelopathy.",
    "position": "Seated; relaxed hand.",
    "procedure": "Flick distal phalanx of middle finger downward.",
    "positive_finding": "Reflex flexion/adduction of thumb and index finger.",
    "sensitivity": "58%",
    "specificity": "78%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 11,
    "name": "Modified Wainner Cluster (Cervical Radiculopathy)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Cervical Radiculopathy",
    "purpose": "High-probability rule-in for cervical radic.",
    "position": "Various positions.",
    "procedure": "Combine: ULTT-A, Spurling, Distraction, cervical rotation <60°.",
    "positive_finding": "4/4 +ve = LR 30; 3/4 +ve = LR 6.",
    "sensitivity": "24% (4/4)",
    "specificity": "99% (4/4)",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 12,
    "name": "Roos Test (EAST)",
    "region": "Cervical Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Thoracic Outlet Syndrome",
    "purpose": "Provoke neurovascular compression.",
    "position": "Seated; arms in 90° abduction & external rotation.",
    "procedure": "Open and close hands repeatedly for 3 minutes.",
    "positive_finding": "Reproduction of arm pain, paraesthesia, weakness or pallor before 3 min.",
    "sensitivity": "84%",
    "specificity": "30%",
    "clinical_pearls": "Always combine with subjective history & cluster testing — single test rarely diagnostic.",
    "related_impairments": [
      "Cervical Radiculopathy",
      "Cervical Spondylosis",
      "Mechanical Neck Pain"
    ],
    "related_muscles": [
      "Sternocleidomastoid",
      "Scalenes",
      "Upper Trapezius",
      "Levator Scapulae"
    ],
    "related_exercises": [
      "Cervical Retraction",
      "Deep Neck Flexor Activation",
      "Scapular Setting"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 13,
    "name": "Neer Impingement Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subacromial Pain Syndrome",
    "purpose": "Reproduce subacromial impingement.",
    "position": "Seated; examiner stabilises scapula.",
    "procedure": "Passively flex shoulder fully in IR.",
    "positive_finding": "Pain in subacromial region.",
    "sensitivity": "79%",
    "specificity": "53%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 14,
    "name": "Hawkins-Kennedy Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subacromial Pain Syndrome",
    "purpose": "Provoke supraspinatus impingement.",
    "position": "Standing/seated.",
    "procedure": "Shoulder flexed 90°, elbow flexed 90°; passively internally rotate.",
    "positive_finding": "Pain in subacromial region.",
    "sensitivity": "79%",
    "specificity": "59%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 15,
    "name": "Empty Can / Jobe Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Supraspinatus tear/tendinopathy",
    "purpose": "Isolate supraspinatus contraction.",
    "position": "Standing.",
    "procedure": "Shoulder abducted 90°, scaption 30°, full IR (thumb down). Resist downward force.",
    "positive_finding": "Weakness ± pain.",
    "sensitivity": "69%",
    "specificity": "62%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 16,
    "name": "Full Can Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Supraspinatus tendinopathy",
    "purpose": "Isolate supraspinatus with less impingement.",
    "position": "Standing.",
    "procedure": "Same as Empty Can but thumb up. Resist downward force.",
    "positive_finding": "Weakness ± pain.",
    "sensitivity": "70%",
    "specificity": "81%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 17,
    "name": "Drop Arm Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Full-thickness rotator cuff tear",
    "purpose": "Detect supraspinatus tear.",
    "position": "Seated; shoulder passively abducted to 120°.",
    "procedure": "Patient slowly lowers arm to side.",
    "positive_finding": "Inability to control or sudden drop below 90°.",
    "sensitivity": "21-73%",
    "specificity": "77-88%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 18,
    "name": "External Rotation Lag Sign",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Supraspinatus / Infraspinatus tear",
    "purpose": "Detect ER tendon rupture.",
    "position": "Seated; arm at side, elbow 90°.",
    "procedure": "Examiner passively externally rotates to maximum then releases.",
    "positive_finding": "Inability to maintain ER (lag >5°).",
    "sensitivity": "70-100%",
    "specificity": "92-100%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 19,
    "name": "Internal Rotation Lag Sign (Gerber)",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subscapularis tear",
    "purpose": "Detect subscap rupture.",
    "position": "Standing; hand placed behind lumbar spine.",
    "procedure": "Examiner lifts hand off back; releases.",
    "positive_finding": "Inability to hold hand off back.",
    "sensitivity": "97%",
    "specificity": "96%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 20,
    "name": "Belly-Press Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subscapularis tear",
    "purpose": "Isolate subscapularis when IR painful.",
    "position": "Standing; hand on belly, elbow forward.",
    "procedure": "Patient presses into belly, keeping elbow forward.",
    "positive_finding": "Elbow drops back / wrist flexes.",
    "sensitivity": "40%",
    "specificity": "98%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 21,
    "name": "Lift-Off Test (Gerber)",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subscapularis tear",
    "purpose": "Test subscap function.",
    "position": "Standing; dorsum of hand on lumbar spine.",
    "procedure": "Patient lifts hand away from back.",
    "positive_finding": "Inability to lift hand off back.",
    "sensitivity": "17-62%",
    "specificity": "60-100%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 22,
    "name": "Speed Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Biceps tendinopathy / SLAP",
    "purpose": "Provoke biceps long head.",
    "position": "Standing; shoulder flexed 90°, elbow ext, forearm supinated.",
    "procedure": "Resist downward force.",
    "positive_finding": "Pain in bicipital groove.",
    "sensitivity": "32%",
    "specificity": "75%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 23,
    "name": "Yergason Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Biceps tendinopathy / Transverse lig.",
    "purpose": "Test biceps tendon stability/integrity.",
    "position": "Seated; elbow flexed 90°, forearm pronated.",
    "procedure": "Patient supinates against resistance + ER shoulder.",
    "positive_finding": "Pain in bicipital groove ± palpable subluxation.",
    "sensitivity": "12-43%",
    "specificity": "79-96%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 24,
    "name": "O'Brien Active Compression",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "SLAP lesion / AC joint",
    "purpose": "Differentiate SLAP from AC pathology.",
    "position": "Standing; arm flexed 90°, adducted 10°.",
    "procedure": "IR (thumb down), resist downward force; repeat in supination.",
    "positive_finding": "Pain \"deep\" with thumb down, relieved with palm up = SLAP.",
    "sensitivity": "47-78%",
    "specificity": "11-73%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 25,
    "name": "Crank Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "SLAP/labral tear",
    "purpose": "Detect labral pathology.",
    "position": "Supine; arm in 160° elevation.",
    "procedure": "Apply axial load through humerus + IR/ER.",
    "positive_finding": "Pain ± click.",
    "sensitivity": "46%",
    "specificity": "56%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 26,
    "name": "Apprehension Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Anterior shoulder instability",
    "purpose": "Detect anterior glenohumeral instability.",
    "position": "Supine; shoulder abducted 90°, elbow flexed 90°.",
    "procedure": "Slowly externally rotate.",
    "positive_finding": "Apprehension or \"going out\" sensation.",
    "sensitivity": "52-72%",
    "specificity": "96%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 27,
    "name": "Relocation Test (Jobe)",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Anterior shoulder instability",
    "purpose": "Confirm anterior instability.",
    "position": "Supine; from apprehension position.",
    "procedure": "Apply posterior force on humeral head.",
    "positive_finding": "Reduction of apprehension allows further ER.",
    "sensitivity": "30-81%",
    "specificity": "54-100%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 28,
    "name": "Sulcus Sign",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Inferior shoulder instability",
    "purpose": "Detect inferior laxity.",
    "position": "Seated; arm at side.",
    "procedure": "Apply caudal traction on humerus.",
    "positive_finding": "Visible sulcus >2 cm between acromion and humeral head.",
    "sensitivity": "28-72%",
    "specificity": "85%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 29,
    "name": "Load and Shift Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Multidirectional instability",
    "purpose": "Quantify glenohumeral translation.",
    "position": "Seated; humerus stabilised in glenoid.",
    "procedure": "Apply A-P then P-A force; grade translation.",
    "positive_finding": "Translation >50% of humeral head diameter.",
    "sensitivity": "50%",
    "specificity": "100%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 30,
    "name": "Cross-Body Adduction",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "AC joint pathology",
    "purpose": "Provoke AC joint.",
    "position": "Standing; arm flexed 90°.",
    "procedure": "Passively adduct across body.",
    "positive_finding": "Localised pain at AC joint.",
    "sensitivity": "77%",
    "specificity": "79%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 31,
    "name": "Paxinos Sign",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "AC joint pathology",
    "purpose": "Provoke AC joint via compression.",
    "position": "Seated; arm at side.",
    "procedure": "Examiner compresses acromion antero-superiorly + posterior clavicle inf.",
    "positive_finding": "Pain at AC joint.",
    "sensitivity": "79%",
    "specificity": "50%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 32,
    "name": "Scapular Assistance Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Scapular dyskinesis",
    "purpose": "Determine if scapular correction reduces symptoms.",
    "position": "Standing.",
    "procedure": "Patient elevates arm; examiner manually upward-rotates and posterior-tilts scapula.",
    "positive_finding": "Reduction of pain during elevation.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 33,
    "name": "Scapular Retraction Test",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Scapular dyskinesis",
    "purpose": "Assess effect of scapular stabilisation on RC strength.",
    "position": "Standing; supraspinatus test position.",
    "procedure": "Re-test Empty Can with scapula manually retracted.",
    "positive_finding": "Improved strength/pain with scapular retraction.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 34,
    "name": "Painful Arc",
    "region": "Shoulder",
    "category": "Orthopaedic / Special",
    "condition": "Subacromial impingement",
    "purpose": "Detect mid-range impingement.",
    "position": "Standing; active abduction.",
    "procedure": "Patient slowly abducts arm fully.",
    "positive_finding": "Pain between 60-120°, resolves above.",
    "sensitivity": "74%",
    "specificity": "81%",
    "clinical_pearls": "Combine 3+ tests for diagnostic certainty (e.g., Park cluster for impingement: Hawkins + painful arc + ER resistance).",
    "related_impairments": [
      "Subacromial Pain Syndrome",
      "Rotator Cuff Tear",
      "Glenohumeral Instability"
    ],
    "related_muscles": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Deltoid",
      "Serratus Anterior"
    ],
    "related_exercises": [
      "Pendulum",
      "Sleeper Stretch",
      "Scapular Setting",
      "External Rotation w/ Theraband"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination",
      "Brotzman Clinical Orthopaedic Rehabilitation"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 35,
    "name": "Cozen Test (Resisted Wrist Ext.)",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Lateral Epicondylalgia",
    "purpose": "Provoke common extensor tendon.",
    "position": "Seated; elbow ext, forearm pronated, wrist in slight ext.",
    "procedure": "Resist wrist extension.",
    "positive_finding": "Pain at lateral epicondyle.",
    "sensitivity": "84%",
    "specificity": "0-94%",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 36,
    "name": "Mill Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Lateral Epicondylalgia",
    "purpose": "Stretch ECRB to provoke pain.",
    "position": "Seated; elbow ext, forearm pronated.",
    "procedure": "Passively flex wrist + ulnar deviate while elbow held in extension.",
    "positive_finding": "Pain at lateral epicondyle.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 37,
    "name": "Maudsley Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Lateral Epicondylalgia",
    "purpose": "Stress ECRB selectively.",
    "position": "Seated; elbow ext, forearm pronated.",
    "procedure": "Resist 3rd finger extension at PIP.",
    "positive_finding": "Pain at lateral epicondyle.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 38,
    "name": "Reverse Cozen / Golfer Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Medial Epicondylalgia",
    "purpose": "Provoke common flexor tendon.",
    "position": "Seated; elbow ext, forearm supinated.",
    "procedure": "Resist wrist flexion.",
    "positive_finding": "Pain at medial epicondyle.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 39,
    "name": "Valgus Stress Test (Elbow)",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Medial collateral ligament (UCL)",
    "purpose": "Test UCL integrity.",
    "position": "Elbow flexed 20-30°.",
    "procedure": "Apply valgus force to elbow.",
    "positive_finding": "Increased gapping or pain medially.",
    "sensitivity": "66%",
    "specificity": "60%",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 40,
    "name": "Varus Stress Test (Elbow)",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Lateral collateral ligament",
    "purpose": "Test LCL integrity.",
    "position": "Elbow flexed 20-30°.",
    "procedure": "Apply varus force to elbow.",
    "positive_finding": "Increased gapping or pain laterally.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 41,
    "name": "Moving Valgus Stress Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "UCL injury (overhead athletes)",
    "purpose": "Sensitive provocation for UCL tear.",
    "position": "Shoulder abducted 90°, elbow flexed 120°.",
    "procedure": "Apply constant valgus force; quickly extend elbow.",
    "positive_finding": "Pain reproduced between 70-120°.",
    "sensitivity": "100%",
    "specificity": "75%",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 42,
    "name": "Tinel Sign at Cubital Tunnel",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Cubital tunnel syndrome",
    "purpose": "Detect ulnar nerve irritation.",
    "position": "Elbow extended.",
    "procedure": "Tap over ulnar nerve in cubital tunnel.",
    "positive_finding": "Tingling into ulnar 1.5 fingers.",
    "sensitivity": "70%",
    "specificity": "98%",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 43,
    "name": "Elbow Flexion Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Cubital tunnel syndrome",
    "purpose": "Provoke ulnar nerve compression.",
    "position": "Standing; elbow fully flexed, wrist extended.",
    "procedure": "Hold position 60 sec.",
    "positive_finding": "Tingling/numbness in ulnar distribution.",
    "sensitivity": "75%",
    "specificity": "99%",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 44,
    "name": "Pinch Grip Test",
    "region": "Elbow",
    "category": "Orthopaedic / Tendinopathy",
    "condition": "Anterior interosseous nerve syndrome",
    "purpose": "Detect AIN dysfunction.",
    "position": "Standing.",
    "procedure": "Patient pinches tip of thumb to tip of index finger.",
    "positive_finding": "Inability to make a circle (forms triangle).",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Confirm tendinopathy by combining Cozen + Mill + Maudsley.",
    "related_impairments": [
      "Lateral Epicondylalgia",
      "Medial Epicondylalgia",
      "Cubital Tunnel Syndrome"
    ],
    "related_muscles": [
      "ECRB",
      "ECRL",
      "Common Flexor",
      "Pronator Teres"
    ],
    "related_exercises": [
      "Eccentric Wrist Extensor Loading",
      "Tyler Twist",
      "Nerve Glides — Ulnar"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 45,
    "name": "Phalen Test",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Carpal Tunnel Syndrome",
    "purpose": "Provoke median nerve at wrist.",
    "position": "Seated; wrists fully flexed, dorsum of hands apposed.",
    "procedure": "Hold 60 sec.",
    "positive_finding": "Tingling in median distribution.",
    "sensitivity": "68%",
    "specificity": "73%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 46,
    "name": "Reverse Phalen",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Carpal Tunnel Syndrome",
    "purpose": "Provoke median nerve in extension.",
    "position": "Seated; palms pressed together, wrists ext to 90°.",
    "procedure": "Hold 60 sec.",
    "positive_finding": "Median nerve symptoms.",
    "sensitivity": "55%",
    "specificity": "79%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 47,
    "name": "Tinel Sign at Wrist",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Carpal Tunnel Syndrome",
    "purpose": "Detect median nerve irritation.",
    "position": "Wrist neutral.",
    "procedure": "Tap over carpal tunnel.",
    "positive_finding": "Tingling in median 3.5 fingers.",
    "sensitivity": "50%",
    "specificity": "77%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 48,
    "name": "Carpal Compression Test (Durkan)",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Carpal Tunnel Syndrome",
    "purpose": "Direct compression of median nerve.",
    "position": "Wrist neutral; thumbs over carpal tunnel.",
    "procedure": "Apply firm pressure for 30 sec.",
    "positive_finding": "Median nerve symptoms.",
    "sensitivity": "64-89%",
    "specificity": "83-96%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 49,
    "name": "Finkelstein Test",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "De Quervain's Tenosynovitis",
    "purpose": "Stress APL/EPB tendons.",
    "position": "Seated; thumb in palm, fist closed.",
    "procedure": "Ulnar deviate wrist passively.",
    "positive_finding": "Sharp pain at radial styloid.",
    "sensitivity": "81%",
    "specificity": "Moderate",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 50,
    "name": "Watson Scaphoid Shift",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Scapholunate instability",
    "purpose": "Detect SL ligament injury.",
    "position": "Seated.",
    "procedure": "Stabilise scaphoid tubercle while moving wrist from UD/ext into RD/flex.",
    "positive_finding": "Painful clunk as scaphoid relocates.",
    "sensitivity": "69%",
    "specificity": "64-100%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 51,
    "name": "Allen Test",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Vascular patency (radial/ulnar)",
    "purpose": "Assess hand vascular supply before arterial line.",
    "position": "Hand elevated; fist clenched.",
    "procedure": "Compress radial+ulnar arteries; release one at a time.",
    "positive_finding": "Pallor >5 sec when one artery released = poor flow in that vessel.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 52,
    "name": "Froment's Sign",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Ulnar nerve palsy (adductor pollicis)",
    "purpose": "Test adductor pollicis function.",
    "position": "Standing; pinch paper between thumb & index.",
    "procedure": "Examiner pulls paper away.",
    "positive_finding": "Compensatory thumb IP flexion (FPL substitution).",
    "sensitivity": "63%",
    "specificity": "94%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 53,
    "name": "Bunnel-Littler Test",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "Intrinsic vs capsular tightness (PIP)",
    "purpose": "Differentiate intrinsic from capsular tightness.",
    "position": "MCP held in extension then flexion.",
    "procedure": "Passively flex PIP in both positions.",
    "positive_finding": "PIP flexion limited in MCP ext but free in MCP flex = intrinsic tightness.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 54,
    "name": "TFCC Load Test",
    "region": "Wrist & Hand",
    "category": "Orthopaedic / Neurological",
    "condition": "TFCC injury",
    "purpose": "Provoke triangular fibrocartilage complex.",
    "position": "Wrist in ulnar deviation.",
    "procedure": "Apply axial compression + circumduct wrist.",
    "positive_finding": "Pain over ulnar wrist ± click.",
    "sensitivity": "66%",
    "specificity": "64%",
    "clinical_pearls": "Combine Phalen + Tinel + Carpal Compression + nocturnal symptoms (Kamath & Stothard CTS-6 score).",
    "related_impairments": [
      "Carpal Tunnel Syndrome",
      "De Quervain's",
      "Scapholunate Instability"
    ],
    "related_muscles": [
      "Flexor Pollicis Longus",
      "APL",
      "EPB",
      "Lumbricals"
    ],
    "related_exercises": [
      "Median Nerve Glides",
      "Tendon Gliding Series"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Special Tests in Musculoskeletal Examination",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 55,
    "name": "Adson Test",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "Thoracic Outlet Syndrome (Anterior Scalene)",
    "purpose": "Compress neurovascular bundle by anterior scalene.",
    "position": "Seated; arm by side, palpate radial pulse.",
    "procedure": "Patient extends/rotates head to tested side; deep breath; hold.",
    "positive_finding": "Diminished/absent radial pulse ± symptom reproduction.",
    "sensitivity": "79%",
    "specificity": "76%",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 56,
    "name": "Wright's Test (Hyperabduction)",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "TOS (Pectoralis Minor)",
    "purpose": "Compress under pec minor.",
    "position": "Seated; palpate pulse.",
    "procedure": "Passively abduct + ER shoulder to 90° then 180°; hold 1 min.",
    "positive_finding": "Diminished pulse ± symptoms.",
    "sensitivity": "70%",
    "specificity": "53%",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 57,
    "name": "Costoclavicular Test",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "TOS (Costoclavicular)",
    "purpose": "Compress between clavicle and 1st rib.",
    "position": "Seated; arms at side.",
    "procedure": "Patient retracts and depresses shoulders (military posture); hold 1 min.",
    "positive_finding": "Diminished pulse ± symptoms.",
    "sensitivity": "52%",
    "specificity": "Moderate",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 58,
    "name": "Slump Test",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "Adverse neural tension (lower limb / cord)",
    "purpose": "Detect neural sensitisation.",
    "position": "Sitting at edge of plinth.",
    "procedure": "Sequential: thoracic slump, cervical flex, knee ext, ankle DF.",
    "positive_finding": "Reproduction of symptoms; relieved with cervical extension.",
    "sensitivity": "83%",
    "specificity": "55%",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 59,
    "name": "Thoracic Spring Test",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "Thoracic hypomobility",
    "purpose": "Assess segmental P-A glide.",
    "position": "Prone.",
    "procedure": "Apply P-A pressure over each thoracic spinous process and TPs.",
    "positive_finding": "Stiffness, pain, or comparable sign.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 60,
    "name": "Rib Spring Test",
    "region": "Thoracic Spine",
    "category": "Orthopaedic / Neurodynamic",
    "condition": "Rib dysfunction",
    "purpose": "Detect rib hypomobility.",
    "position": "Prone.",
    "procedure": "Apply P-A pressure over rib angles.",
    "positive_finding": "Pain or restricted spring.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Thoracic mobility is critical for shoulder & cervical function (regional interdependence).",
    "related_impairments": [
      "Thoracic Outlet Syndrome",
      "T4 Syndrome",
      "Costovertebral Dysfunction"
    ],
    "related_muscles": [
      "Anterior Scalene",
      "Pectoralis Minor",
      "Subclavius"
    ],
    "related_exercises": [
      "Thoracic Extension over Roller",
      "First-Rib Mobilisation Stretch"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 61,
    "name": "Straight Leg Raise (SLR)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Lumbar Radiculopathy (L4-S1)",
    "purpose": "Detect lumbosacral nerve root irritation.",
    "position": "Supine; leg straight.",
    "procedure": "Passively raise leg keeping knee extended; note angle of symptom reproduction.",
    "positive_finding": "Reproduction of radicular pain between 30-70°.",
    "sensitivity": "91%",
    "specificity": "26%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 62,
    "name": "Crossed SLR",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Lumbar disc herniation (specific)",
    "purpose": "Highly specific for disc herniation.",
    "position": "Supine.",
    "procedure": "Raise UNAFFECTED leg.",
    "positive_finding": "Reproduction of symptoms in OPPOSITE (affected) leg.",
    "sensitivity": "29%",
    "specificity": "88%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 63,
    "name": "Slump Test (Lumbar)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Adverse neural tension",
    "purpose": "Sensitise nervous system.",
    "position": "Sitting.",
    "procedure": "Slump thoracolumbar; cervical flex; knee ext; ankle DF.",
    "positive_finding": "Reproduction of patient pain; relieved with cervical ext.",
    "sensitivity": "83%",
    "specificity": "55%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 64,
    "name": "Femoral Nerve Tension Test (PKB)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Upper lumbar radiculopathy (L2-L4)",
    "purpose": "Detect femoral nerve irritation.",
    "position": "Prone.",
    "procedure": "Passively flex knee; if neg, extend hip.",
    "positive_finding": "Pain in anterior thigh.",
    "sensitivity": "50%",
    "specificity": "100%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 65,
    "name": "Centralisation Test (McKenzie)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Discogenic low back pain",
    "purpose": "Identify directional preference.",
    "position": "Standing or prone.",
    "procedure": "10 reps repeated movements (extension or flexion).",
    "positive_finding": "Pain centralises (moves proximally) with one direction.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 66,
    "name": "Prone Instability Test",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Lumbar segmental instability",
    "purpose": "Determine if motor control will benefit.",
    "position": "Prone with legs off plinth, feet on floor.",
    "procedure": "Apply P-A pressure on lumbar spinous; pain. Repeat with patient lifting legs (engaging multifidus).",
    "positive_finding": "Pain in resting position but relieved with leg lift.",
    "sensitivity": "72%",
    "specificity": "58%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 67,
    "name": "Quadrant Test (Kemp)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Facet joint / foraminal stenosis",
    "purpose": "Reproduce facet or foraminal symptoms.",
    "position": "Standing.",
    "procedure": "Combine extension + side-flexion + rotation to symptomatic side.",
    "positive_finding": "Reproduction of LBP/radicular pain.",
    "sensitivity": "70%",
    "specificity": "20%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 68,
    "name": "Bicycle Test (van Gelderen)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Neurogenic claudication / vascular",
    "purpose": "Differentiate neurogenic vs vascular claudication.",
    "position": "Stationary bike, neutral spine then flexed spine.",
    "procedure": "Cycle in neutral until symptoms; then flexed spine.",
    "positive_finding": "Symptoms relieved by flexion = neurogenic; not relieved = vascular.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 69,
    "name": "Stork (Single-Leg Standing) Test",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Pars defect / spondylolysis",
    "purpose": "Provoke pars stress.",
    "position": "Standing on one leg.",
    "procedure": "Patient extends spine while standing on one leg.",
    "positive_finding": "Pain reproduced ipsilateral to stance leg.",
    "sensitivity": "50-55%",
    "specificity": "68-87%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 70,
    "name": "Beevor Sign",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "T10-12 motor lesion",
    "purpose": "Detect asymmetric abdominal innervation.",
    "position": "Supine; head lifted (½ sit-up).",
    "procedure": "Observe umbilicus.",
    "positive_finding": "Umbilicus deviates toward strongest side.",
    "sensitivity": "Moderate",
    "specificity": "High",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 71,
    "name": "Repeated Movements (McKenzie)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Mechanical LBP classification",
    "purpose": "Classify into derangement/dysfunction/postural.",
    "position": "Standing or prone.",
    "procedure": "Repeat 10 reps each direction; assess centralisation/peripheralisation.",
    "positive_finding": "Directional preference identified.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 72,
    "name": "Aberrant Movements during Flexion",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Lumbar instability",
    "purpose": "Identify motor control loss.",
    "position": "Standing.",
    "procedure": "Patient bends forward and returns; observe.",
    "positive_finding": "Painful arc, juddering, instability catch, Gower sign.",
    "sensitivity": "55%",
    "specificity": "60%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 73,
    "name": "Hoover Sign",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Non-organic / functional weakness",
    "purpose": "Detect inconsistent effort.",
    "position": "Supine.",
    "procedure": "Patient performs SLR of weak leg; examiner palpates UNAFFECTED heel.",
    "positive_finding": "Lack of downward pressure under unaffected heel.",
    "sensitivity": "63%",
    "specificity": "100%",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 74,
    "name": "Schober Test (Modified)",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Lumbar flexion ROM",
    "purpose": "Quantify lumbar mobility.",
    "position": "Standing; mark dimples of Venus midline + 5 cm below + 10 cm above.",
    "procedure": "Patient bends forward; remeasure.",
    "positive_finding": "Increase < 5 cm = restricted lumbar flexion.",
    "sensitivity": "95%",
    "specificity": "High",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 75,
    "name": "Treadmill Test",
    "region": "Lumbar Spine",
    "category": "Neurological / Orthopaedic",
    "condition": "Spinal stenosis vs vascular claudication",
    "purpose": "Provoke neurogenic claudication.",
    "position": "Walking on treadmill.",
    "procedure": "Walk until symptoms reproduced.",
    "positive_finding": "Symptoms relieved by lumbar flexion (rest in flexed posture) = neurogenic.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Use centralisation as the strongest mechanical predictor (McKenzie evidence base).",
    "related_impairments": [
      "Lumbar Radiculopathy",
      "Lumbar Disc Herniation",
      "Spinal Stenosis",
      "Spondylolysis"
    ],
    "related_muscles": [
      "Multifidus",
      "Erector Spinae",
      "Transversus Abdominis",
      "Quadratus Lumborum"
    ],
    "related_exercises": [
      "McKenzie Press-Up",
      "Bird-Dog",
      "Dead Bug",
      "Glute Bridge"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "The McKenzie Method (MDT)",
      "Hattam & Smeatham — Special Tests in Musculoskeletal Examination"
    ],
    "evidence_level": "Moderate-Strong"
  },
  {
    "id": 76,
    "name": "Distraction (Gapping) Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain",
    "purpose": "Stress anterior SIJ ligaments.",
    "position": "Supine.",
    "procedure": "Cross-arm pressure on ASIS in posterolateral direction.",
    "positive_finding": "Reproduction of SIJ pain.",
    "sensitivity": "60%",
    "specificity": "81%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 77,
    "name": "Compression Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain",
    "purpose": "Stress posterior SIJ ligaments.",
    "position": "Side-lying.",
    "procedure": "Apply downward pressure on iliac crest.",
    "positive_finding": "Reproduction of SIJ pain.",
    "sensitivity": "69%",
    "specificity": "69%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 78,
    "name": "Thigh Thrust",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain",
    "purpose": "Posterior shear of SIJ.",
    "position": "Supine; hip flexed 90°.",
    "procedure": "Apply axial force through femur posteriorly.",
    "positive_finding": "Reproduction of SIJ pain.",
    "sensitivity": "88%",
    "specificity": "69%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 79,
    "name": "Sacral Thrust",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain",
    "purpose": "Direct loading of sacrum.",
    "position": "Prone.",
    "procedure": "Apply P-A force over sacrum.",
    "positive_finding": "Reproduction of SIJ pain.",
    "sensitivity": "63%",
    "specificity": "75%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 80,
    "name": "Gaenslen Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain",
    "purpose": "Stress SIJ via opposing forces.",
    "position": "Supine; one leg dropped over edge.",
    "procedure": "Other knee pulled to chest; apply downward force on ext leg.",
    "positive_finding": "Reproduction of SIJ pain.",
    "sensitivity": "50-71%",
    "specificity": "71-77%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 81,
    "name": "Laslett SIJ Cluster",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ pain (definitive)",
    "purpose": "Strongest cluster for SIJ diagnosis.",
    "position": "Various.",
    "procedure": "Distraction + Compression + Thigh Thrust + Sacral Thrust + Gaenslen.",
    "positive_finding": "3+/5 positive (LR ~4.0).",
    "sensitivity": "91%",
    "specificity": "78%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 82,
    "name": "Active Straight Leg Raise (ASLR)",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "Pelvic girdle pain / load transfer",
    "purpose": "Assess load transfer through pelvis.",
    "position": "Supine.",
    "procedure": "Patient lifts straight leg 20 cm.",
    "positive_finding": "Difficulty/pain; relieved with manual pelvic compression.",
    "sensitivity": "87%",
    "specificity": "94%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 83,
    "name": "Gillet (Stork) Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "SIJ mobility (limited reliability)",
    "purpose": "Assess innominate motion.",
    "position": "Standing.",
    "procedure": "Therapist palpates PSIS + S2; patient flexes hip.",
    "positive_finding": "PSIS fails to move inferior relative to S2.",
    "sensitivity": "Low",
    "specificity": "Low",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 84,
    "name": "FABER (Patrick) Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "Hip OA / SIJ",
    "purpose": "Differentiate hip vs SIJ.",
    "position": "Supine; hip in flex/abd/ER (figure-4).",
    "procedure": "Apply downward force on flexed knee; stabilise contralateral ASIS.",
    "positive_finding": "Anterior pain = hip; posterior = SIJ.",
    "sensitivity": "57-77%",
    "specificity": "57-100%",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 85,
    "name": "Long-Sitting Test",
    "region": "Pelvis / SIJ",
    "category": "Orthopaedic / Provocation",
    "condition": "Functional leg length / SI dysfunction",
    "purpose": "Detect functional LLD from SI.",
    "position": "Supine then long-sitting.",
    "procedure": "Compare medial malleoli in supine and long-sit.",
    "positive_finding": "Length change between positions.",
    "sensitivity": "Low",
    "specificity": "Low",
    "clinical_pearls": "Single SIJ tests have poor accuracy — always cluster (Laslett 3/5).",
    "related_impairments": [
      "SIJ Dysfunction",
      "Pregnancy-related Pelvic Girdle Pain"
    ],
    "related_muscles": [
      "Glute Max",
      "Glute Med",
      "Multifidus",
      "TrA"
    ],
    "related_exercises": [
      "Pelvic Compression Belt + ASLR",
      "Glute Bridge",
      "Side-lying Clamshell"
    ],
    "source_books": [
      "Laslett 2008",
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong (clusters)"
  },
  {
    "id": 86,
    "name": "FADIR (Anterior Impingement)",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "FAI / Labral tear",
    "purpose": "Provoke femoroacetabular impingement.",
    "position": "Supine; hip flexed 90°.",
    "procedure": "Adduct + internally rotate hip.",
    "positive_finding": "Sharp anterior groin pain.",
    "sensitivity": "94-99%",
    "specificity": "5-25%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 87,
    "name": "FABER Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip OA / SIJ",
    "purpose": "Differentiate hip from SIJ pathology.",
    "position": "Supine; figure-4.",
    "procedure": "Apply downward pressure on knee.",
    "positive_finding": "Anterior pain = hip pathology; posterior = SIJ.",
    "sensitivity": "57-77%",
    "specificity": "57-100%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 88,
    "name": "Thomas Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip flexor tightness",
    "purpose": "Quantify hip flexor length.",
    "position": "Supine; knee to chest, opposite leg straight.",
    "procedure": "Observe extended leg.",
    "positive_finding": "Lifted thigh = iliopsoas; ext knee = rectus femoris; abducted = ITB.",
    "sensitivity": "89%",
    "specificity": "92%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 89,
    "name": "Modified Thomas Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip flexor / quad length",
    "purpose": "More precise than classic Thomas.",
    "position": "Sitting at edge of plinth, supine; pull one knee to chest.",
    "procedure": "Observe contralateral leg with hip in neutral.",
    "positive_finding": "Hip flex >0° = iliopsoas tight; knee ext >70° = rectus femoris tight.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 90,
    "name": "Ober Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "ITB / TFL tightness",
    "purpose": "Assess ITB length.",
    "position": "Side-lying; bottom hip and knee flexed; top leg ext + abducted.",
    "procedure": "Lower top leg into adduction.",
    "positive_finding": "Inability to adduct below horizontal.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 91,
    "name": "Trendelenburg Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip abductor weakness",
    "purpose": "Assess gluteus medius function.",
    "position": "Standing.",
    "procedure": "Single-leg stance for 30 sec.",
    "positive_finding": "Contralateral pelvic drop or trunk lean.",
    "sensitivity": "23-72%",
    "specificity": "76-77%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 92,
    "name": "Craig Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Femoral anteversion",
    "purpose": "Quantify femoral anteversion.",
    "position": "Prone; knee 90°.",
    "procedure": "Palpate greater troch; rotate hip until troch most lateral.",
    "positive_finding": "Tibia angle = degree of femoral anteversion (normal 8-15°).",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 93,
    "name": "Scour (Quadrant) Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip OA / labral tear",
    "purpose": "Loaded compression test.",
    "position": "Supine; knee fully flexed.",
    "procedure": "Apply axial load through femur while moving in arc of flex/abd → flex/add.",
    "positive_finding": "Reproduction of hip pain or click.",
    "sensitivity": "50-91%",
    "specificity": "29-43%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 94,
    "name": "Log Roll Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Femoral neck pathology / labral",
    "purpose": "Most specific intra-articular hip test.",
    "position": "Supine; legs ext.",
    "procedure": "Passively roll lower extremity into IR/ER.",
    "positive_finding": "Pain or apprehension.",
    "sensitivity": "30-66%",
    "specificity": "44-100%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 95,
    "name": "Resisted Straight Leg Raise (Stinchfield)",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip joint / iliopsoas pathology",
    "purpose": "Loaded test of hip joint and flexors.",
    "position": "Supine.",
    "procedure": "Patient flexes hip to 30°; resist downward.",
    "positive_finding": "Pain in groin.",
    "sensitivity": "59%",
    "specificity": "32%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 96,
    "name": "Hip Internal Rotation < 25°",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Hip OA (clinical criterion)",
    "purpose": "Diagnostic criterion for hip OA.",
    "position": "Supine or seated.",
    "procedure": "Measure passive IR.",
    "positive_finding": "<25° (with pain in flexion) suggests OA.",
    "sensitivity": "86%",
    "specificity": "54%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 97,
    "name": "Posterior Impingement Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Posterior FAI / instability",
    "purpose": "Provoke posterior labrum.",
    "position": "Supine at edge of plinth; hip in extension.",
    "procedure": "Apply external rotation + abduction.",
    "positive_finding": "Posterior hip pain or apprehension.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 98,
    "name": "Hip Apprehension",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Anterior hip instability",
    "purpose": "Detect anterior microinstability.",
    "position": "Supine at edge; leg off plinth.",
    "procedure": "Extend + ER hip.",
    "positive_finding": "Apprehension or anterior groin pain.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 99,
    "name": "Adductor Squeeze Test",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Adductor-related groin pain",
    "purpose": "Provoke adductor tendinopathy.",
    "position": "Supine; hips flexed 45° / 90°.",
    "procedure": "Squeeze examiner's fist between knees.",
    "positive_finding": "Reproduction of groin pain.",
    "sensitivity": "54-78%",
    "specificity": "Moderate",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 100,
    "name": "Piriformis Stretch Test (FAIR)",
    "region": "Hip",
    "category": "Orthopaedic / Functional",
    "condition": "Piriformis syndrome",
    "purpose": "Provoke sciatic nerve in piriformis.",
    "position": "Side-lying; symptomatic side up.",
    "procedure": "Hip flexed 60°, adducted, IR while knee flexed.",
    "positive_finding": "Posterior hip / sciatic pain.",
    "sensitivity": "88%",
    "specificity": "83%",
    "clinical_pearls": "Cluster groin pain tests — Doha agreement uses adductor, iliopsoas, inguinal & pubic-related categories.",
    "related_impairments": [
      "FAI",
      "Hip OA",
      "Adductor Tendinopathy",
      "Greater Trochanteric Pain"
    ],
    "related_muscles": [
      "Glute Medius",
      "Glute Maximus",
      "Iliopsoas",
      "TFL",
      "Adductors",
      "Piriformis"
    ],
    "related_exercises": [
      "Side-lying Hip Abduction",
      "Glute Bridge",
      "Copenhagen Adduction",
      "Hip CARs"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 101,
    "name": "Lachman Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "ACL tear",
    "purpose": "Most sensitive ACL test.",
    "position": "Supine; knee flexed 20-30°.",
    "procedure": "Stabilise femur; pull tibia anteriorly.",
    "positive_finding": "Excessive anterior translation, soft endpoint.",
    "sensitivity": "85%",
    "specificity": "94%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 102,
    "name": "Anterior Drawer Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "ACL tear (chronic)",
    "purpose": "Test ACL with knee flexed 90°.",
    "position": "Supine; knee 90°, foot stabilised.",
    "procedure": "Pull tibia anteriorly.",
    "positive_finding": "Excessive anterior translation.",
    "sensitivity": "55-92%",
    "specificity": "78-94%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 103,
    "name": "Pivot Shift Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "ACL tear (functional)",
    "purpose": "Detect ACL instability under axial load.",
    "position": "Supine; knee extended.",
    "procedure": "Apply valgus + IR + axial load while flexing knee.",
    "positive_finding": "Subluxation reduction \"clunk\" between 20-40° flexion.",
    "sensitivity": "24%",
    "specificity": "98%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 104,
    "name": "Posterior Drawer Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "PCL tear",
    "purpose": "Test PCL integrity.",
    "position": "Supine; knee 90°.",
    "procedure": "Push tibia posteriorly.",
    "positive_finding": "Excessive posterior translation.",
    "sensitivity": "90%",
    "specificity": "99%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 105,
    "name": "Posterior Sag Sign (Godfrey)",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "PCL tear",
    "purpose": "Visual inspection for PCL tear.",
    "position": "Supine; both hips & knees flexed 90°, feet supported.",
    "procedure": "Observe tibial profile from side.",
    "positive_finding": "Tibia sags posteriorly compared to other side.",
    "sensitivity": "46-100%",
    "specificity": "100%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 106,
    "name": "Valgus Stress Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "MCL injury",
    "purpose": "Test MCL.",
    "position": "0° and 30° knee flexion.",
    "procedure": "Apply valgus force.",
    "positive_finding": "Pain (Grade I), gapping <5 mm (II), >5 mm (III).",
    "sensitivity": "86-96%",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 107,
    "name": "Varus Stress Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "LCL injury",
    "purpose": "Test LCL.",
    "position": "0° and 30° knee flexion.",
    "procedure": "Apply varus force.",
    "positive_finding": "Gapping or pain.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 108,
    "name": "McMurray Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Meniscal tear",
    "purpose": "Detect meniscal pathology.",
    "position": "Supine; knee fully flexed.",
    "procedure": "Extend knee with valgus + ER (medial menisc) or varus + IR (lateral).",
    "positive_finding": "Pain ± palpable click.",
    "sensitivity": "53-58%",
    "specificity": "67-77%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 109,
    "name": "Apley Compression Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Meniscal tear",
    "purpose": "Differentiate meniscus from ligament.",
    "position": "Prone; knee 90°.",
    "procedure": "Compress + rotate; then distract + rotate.",
    "positive_finding": "Pain with compression = meniscus; with distraction = ligament.",
    "sensitivity": "13-41%",
    "specificity": "80-93%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 110,
    "name": "Thessaly Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Meniscal tear",
    "purpose": "Functional weight-bearing meniscal test.",
    "position": "Standing on tested leg, 5° then 20° knee flexion.",
    "procedure": "Patient rotates body and knee 3 times each direction.",
    "positive_finding": "Joint line discomfort or locking.",
    "sensitivity": "90% (medial)",
    "specificity": "97%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 111,
    "name": "Joint Line Tenderness",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Meniscal tear",
    "purpose": "Palpation for meniscal damage.",
    "position": "Supine; knee flexed.",
    "procedure": "Palpate medial and lateral joint line.",
    "positive_finding": "Localised tenderness.",
    "sensitivity": "63-83%",
    "specificity": "76-83%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 112,
    "name": "Patellar Apprehension Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Patellar instability",
    "purpose": "Detect lateral patellar instability.",
    "position": "Supine; knee in 30° flexion.",
    "procedure": "Apply lateral force on medial border of patella.",
    "positive_finding": "Apprehension or quad guarding.",
    "sensitivity": "32-39%",
    "specificity": "86-98%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 113,
    "name": "Patellar Grind (Clarke's) Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Patellofemoral pain",
    "purpose": "Provoke patellofemoral joint.",
    "position": "Supine; quads relaxed.",
    "procedure": "Apply distal pressure on superior patella; ask patient to contract quads.",
    "positive_finding": "Pain under patella.",
    "sensitivity": "49%",
    "specificity": "75%",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 114,
    "name": "Q-Angle Measurement",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Patellofemoral malalignment",
    "purpose": "Quantify lateral pull on patella.",
    "position": "Supine; knee extended.",
    "procedure": "Measure angle ASIS → centre patella → tibial tubercle.",
    "positive_finding": "M >15°, F >18°.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 115,
    "name": "Noble Compression Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "ITB Friction Syndrome",
    "purpose": "Provoke ITB at lateral femoral epicondyle.",
    "position": "Supine; knee flexed 90°.",
    "procedure": "Press on lat. epicondyle; passively extend knee.",
    "positive_finding": "Pain at ~30° flexion.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 116,
    "name": "Ober Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "ITB tightness",
    "purpose": "Assess ITB length.",
    "position": "Side-lying.",
    "procedure": "Adduct top leg in extension.",
    "positive_finding": "Inability to adduct below horizontal.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 117,
    "name": "Wilson Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Osteochondritis dissecans (OCD)",
    "purpose": "Provoke OCD lesion of medial femoral condyle.",
    "position": "Seated; knee flexed 90°.",
    "procedure": "Patient extends knee with tibia in IR; then in ER.",
    "positive_finding": "Pain at ~30° in IR; relieved with ER.",
    "sensitivity": "Low",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 118,
    "name": "Single-Leg Squat",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Lower limb biomechanics / glute med",
    "purpose": "Functional screening.",
    "position": "Single-leg stance.",
    "procedure": "Squat to 60° knee flex.",
    "positive_finding": "Knee valgus, pelvic drop, trunk lean.",
    "sensitivity": "High clinical",
    "specificity": "High clinical",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 119,
    "name": "Step-Down Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "PFP / glute weakness",
    "purpose": "Functional assessment.",
    "position": "Step on 20 cm box.",
    "procedure": "Lower opposite heel to floor 5 reps.",
    "positive_finding": "Knee valgus, pelvic drop, loss of balance.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 120,
    "name": "Patellar Tilt Test",
    "region": "Knee",
    "category": "Ligamentous / Meniscal / Patellofemoral",
    "condition": "Lateral retinacular tightness",
    "purpose": "Assess lateral retinaculum.",
    "position": "Supine; knee extended.",
    "procedure": "Lift lateral edge of patella.",
    "positive_finding": "Inability to elevate to horizontal.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Lachman > Anterior Drawer for acute ACL. Combine McMurray + Thessaly + JLT for meniscus.",
    "related_impairments": [
      "ACL Tear",
      "PCL Tear",
      "Meniscal Tear",
      "Patellofemoral Pain",
      "ITBS"
    ],
    "related_muscles": [
      "Quadriceps",
      "Hamstrings",
      "Gastrocnemius",
      "Glute Medius",
      "TFL"
    ],
    "related_exercises": [
      "Single-Leg Squat",
      "Spanish Squat",
      "Nordic Hamstring",
      "Step-Down"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 121,
    "name": "Anterior Drawer Test (Ankle)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "ATFL injury",
    "purpose": "Test anterior talofibular ligament.",
    "position": "Sitting; ankle in 10-15° plantarflexion.",
    "procedure": "Stabilise tibia; pull calcaneus anteriorly.",
    "positive_finding": "Increased anterior translation > opposite side.",
    "sensitivity": "74-78%",
    "specificity": "40-75%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 122,
    "name": "Talar Tilt Test (Inversion)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "CFL / ATFL injury",
    "purpose": "Test calcaneofibular ligament.",
    "position": "Sitting; ankle neutral or slight DF.",
    "procedure": "Invert calcaneus.",
    "positive_finding": "Excessive talar tilt vs unaffected.",
    "sensitivity": "67%",
    "specificity": "75%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 123,
    "name": "Talar Tilt (Eversion)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Deltoid ligament",
    "purpose": "Test deltoid ligament.",
    "position": "Same as above.",
    "procedure": "Evert calcaneus.",
    "positive_finding": "Excessive movement / pain.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 124,
    "name": "Squeeze Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "High ankle sprain (syndesmosis)",
    "purpose": "Stress syndesmosis.",
    "position": "Sitting; calf squeezed at mid-calf.",
    "procedure": "Compress tibia & fibula together.",
    "positive_finding": "Pain at distal syndesmosis.",
    "sensitivity": "30-50%",
    "specificity": "88-93%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 125,
    "name": "External Rotation Stress Test (Kleiger)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Syndesmosis injury",
    "purpose": "Stress syndesmosis directly.",
    "position": "Sitting; knee flexed 90°.",
    "procedure": "Stabilise tibia; ER foot.",
    "positive_finding": "Pain at anterolateral ankle.",
    "sensitivity": "20-71%",
    "specificity": "85%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 126,
    "name": "Thompson Test (Simmonds)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Achilles rupture",
    "purpose": "Detect Achilles tendon rupture.",
    "position": "Prone; foot off plinth.",
    "procedure": "Squeeze calf.",
    "positive_finding": "Absence of plantarflexion = positive (ruptured).",
    "sensitivity": "96%",
    "specificity": "93%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 127,
    "name": "Single-Heel Raise Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Achilles function / posterior tibial",
    "purpose": "Functional Achilles test.",
    "position": "Standing on one leg.",
    "procedure": "Patient performs heel raise.",
    "positive_finding": "Inability to perform 25 reps with normal arch.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 128,
    "name": "Windlass Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Plantar fasciitis",
    "purpose": "Stress plantar fascia.",
    "position": "Standing on step or seated.",
    "procedure": "Passively extend 1st MTP joint.",
    "positive_finding": "Reproduction of heel pain.",
    "sensitivity": "32%",
    "specificity": "100%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 129,
    "name": "Tinel Sign at Tarsal Tunnel",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Tarsal tunnel syndrome",
    "purpose": "Detect posterior tibial nerve irritation.",
    "position": "Sitting; foot relaxed.",
    "procedure": "Tap over posterior medial malleolus.",
    "positive_finding": "Tingling along medial foot.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 130,
    "name": "Morton Test (Squeeze)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Morton's neuroma",
    "purpose": "Compress metatarsal heads.",
    "position": "Sitting.",
    "procedure": "Squeeze metatarsal heads together transversely.",
    "positive_finding": "Sharp pain, paraesthesia, click (Mulder).",
    "sensitivity": "40-95%",
    "specificity": "70%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 131,
    "name": "Mulder Click Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Morton's neuroma",
    "purpose": "Provoke neuroma.",
    "position": "Sitting.",
    "procedure": "Compress 3rd-4th metatarsal heads while squeezing.",
    "positive_finding": "Palpable click + pain.",
    "sensitivity": "61%",
    "specificity": "100%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 132,
    "name": "Navicular Drop Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Pes planus / overpronation",
    "purpose": "Quantify dynamic pronation.",
    "position": "Sitting (subtalar neutral) → standing.",
    "procedure": "Measure navicular tuberosity height in both positions.",
    "positive_finding": "Drop > 10 mm.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 133,
    "name": "Foot Posture Index (FPI-6)",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Foot posture classification",
    "purpose": "Validated 6-item posture score.",
    "position": "Standing.",
    "procedure": "Score 6 criteria from -2 to +2 each.",
    "positive_finding": "Score classification: highly supinated to highly pronated.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 134,
    "name": "Ottawa Ankle Rules",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Ankle/foot fracture screen",
    "purpose": "Decision rule for X-ray.",
    "position": "Acute ankle injury.",
    "procedure": "Check: tenderness post. malleolus, navicular, base 5th MT, inability to bear weight.",
    "positive_finding": "Any positive criterion = X-ray indicated.",
    "sensitivity": "99.6%",
    "specificity": "40%",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 135,
    "name": "Compression / Bump Test",
    "region": "Ankle & Foot",
    "category": "Ligamentous / Tendon / Neurological",
    "condition": "Stress fracture (lower leg)",
    "purpose": "Provoke stress fracture.",
    "position": "Standing.",
    "procedure": "Apply axial compression through heel; tap heel.",
    "positive_finding": "Sharp pain at fracture site.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Use Ottawa rules to triage acute ankle/foot injuries before any provocation testing.",
    "related_impairments": [
      "Lateral Ankle Sprain",
      "Achilles Tendinopathy",
      "Plantar Fasciitis",
      "Morton's Neuroma"
    ],
    "related_muscles": [
      "Gastrocnemius",
      "Soleus",
      "Tibialis Posterior",
      "Peroneals"
    ],
    "related_exercises": [
      "Heel Raises (single leg)",
      "Eccentric Achilles Loading",
      "Towel Scrunches"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Brotzman Clinical Orthopaedic Rehabilitation",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 136,
    "name": "TMJ Compression Test",
    "region": "TMJ",
    "category": "Orthopaedic / Functional",
    "condition": "TMJ disc/joint pathology",
    "purpose": "Stress TMJ.",
    "position": "Supine.",
    "procedure": "Push mandible cranially through chin.",
    "positive_finding": "Pain in TMJ region.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always correlate with cervical spine and parafunctional habits (bruxism, posture).",
    "related_impairments": [
      "TMJ Disorder",
      "Bruxism",
      "Cervicogenic Headache"
    ],
    "related_muscles": [
      "Masseter",
      "Temporalis",
      "Pterygoids"
    ],
    "related_exercises": [
      "TMJ Resisted Opening",
      "Tongue-Up Mandible Drop"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 137,
    "name": "TMJ Distraction Test",
    "region": "TMJ",
    "category": "Orthopaedic / Functional",
    "condition": "TMJ pathology",
    "purpose": "Reduce intra-articular pressure.",
    "position": "Supine.",
    "procedure": "Apply caudal force to mandible (gloved thumb on molars).",
    "positive_finding": "Reduction or reproduction of pain.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always correlate with cervical spine and parafunctional habits (bruxism, posture).",
    "related_impairments": [
      "TMJ Disorder",
      "Bruxism",
      "Cervicogenic Headache"
    ],
    "related_muscles": [
      "Masseter",
      "Temporalis",
      "Pterygoids"
    ],
    "related_exercises": [
      "TMJ Resisted Opening",
      "Tongue-Up Mandible Drop"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 138,
    "name": "TMJ Click / Crepitus Palpation",
    "region": "TMJ",
    "category": "Orthopaedic / Functional",
    "condition": "Internal derangement (disc)",
    "purpose": "Auditory/palpatory disc displacement detection.",
    "position": "Sitting.",
    "procedure": "Palpate over TMJ during opening/closing.",
    "positive_finding": "Reciprocal click (opening + closing).",
    "sensitivity": "38-93%",
    "specificity": "69-100%",
    "clinical_pearls": "Always correlate with cervical spine and parafunctional habits (bruxism, posture).",
    "related_impairments": [
      "TMJ Disorder",
      "Bruxism",
      "Cervicogenic Headache"
    ],
    "related_muscles": [
      "Masseter",
      "Temporalis",
      "Pterygoids"
    ],
    "related_exercises": [
      "TMJ Resisted Opening",
      "Tongue-Up Mandible Drop"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 139,
    "name": "Mandibular ROM (3-knuckle test)",
    "region": "TMJ",
    "category": "Orthopaedic / Functional",
    "condition": "TMJ hypomobility",
    "purpose": "Assess functional mouth opening.",
    "position": "Sitting.",
    "procedure": "Patient inserts knuckles vertically into mouth.",
    "positive_finding": "<3 knuckles (~40 mm) = restricted opening.",
    "sensitivity": "High clinical",
    "specificity": "High clinical",
    "clinical_pearls": "Always correlate with cervical spine and parafunctional habits (bruxism, posture).",
    "related_impairments": [
      "TMJ Disorder",
      "Bruxism",
      "Cervicogenic Headache"
    ],
    "related_muscles": [
      "Masseter",
      "Temporalis",
      "Pterygoids"
    ],
    "related_exercises": [
      "TMJ Resisted Opening",
      "Tongue-Up Mandible Drop"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 140,
    "name": "Lateral Deviation on Opening",
    "region": "TMJ",
    "category": "Orthopaedic / Functional",
    "condition": "Disc displacement (one-sided)",
    "purpose": "Visual screen for asymmetric TMJ motion.",
    "position": "Sitting; mouth slowly opening.",
    "procedure": "Observe mandibular path.",
    "positive_finding": "C-shaped or S-shaped deviation.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always correlate with cervical spine and parafunctional habits (bruxism, posture).",
    "related_impairments": [
      "TMJ Disorder",
      "Bruxism",
      "Cervicogenic Headache"
    ],
    "related_muscles": [
      "Masseter",
      "Temporalis",
      "Pterygoids"
    ],
    "related_exercises": [
      "TMJ Resisted Opening",
      "Tongue-Up Mandible Drop"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham"
    ],
    "evidence_level": "Moderate"
  },
  {
    "id": 141,
    "name": "Babinski Sign",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Upper motor neuron lesion",
    "purpose": "Detect corticospinal tract dysfunction.",
    "position": "Supine; foot relaxed.",
    "procedure": "Stroke lateral plantar surface from heel to ball.",
    "positive_finding": "Extension of great toe ± fanning.",
    "sensitivity": "35%",
    "specificity": "99%",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 142,
    "name": "Clonus",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Upper motor neuron lesion",
    "purpose": "Detect hyperreflexia.",
    "position": "Supine.",
    "procedure": "Quickly dorsiflex ankle; sustain pressure.",
    "positive_finding": "≥3 beats of rhythmic contraction = sustained clonus.",
    "sensitivity": "Moderate",
    "specificity": "~95%",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 143,
    "name": "Hoffman Sign",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Cervical myelopathy",
    "purpose": "Detect UMN lesion in upper limb.",
    "position": "Sitting.",
    "procedure": "Flick distal phalanx of middle finger.",
    "positive_finding": "IP flexion of thumb / index reflex.",
    "sensitivity": "58%",
    "specificity": "78%",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 144,
    "name": "Romberg Test",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Proprioception / vestibular",
    "purpose": "Differentiate sensory ataxia.",
    "position": "Standing; feet together, eyes open then closed.",
    "procedure": "Hold 30 sec each.",
    "positive_finding": "Increased sway/falling with eyes closed.",
    "sensitivity": "20-67%",
    "specificity": "90-95%",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 145,
    "name": "Modified Sharpened Romberg",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Proprioception (advanced)",
    "purpose": "More sensitive Romberg.",
    "position": "Standing; tandem stance, eyes closed.",
    "procedure": "Hold 30 sec.",
    "positive_finding": "Inability to hold balance.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 146,
    "name": "Single-Leg Stance Test",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Balance / falls risk",
    "purpose": "Functional balance test.",
    "position": "Standing on one leg.",
    "procedure": "Time how long stance is held.",
    "positive_finding": "<5 sec eyes open = falls risk in elderly.",
    "sensitivity": "Moderate",
    "specificity": "Moderate",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 147,
    "name": "Functional Reach Test",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Balance / falls risk",
    "purpose": "Anticipatory postural control.",
    "position": "Standing; arm at 90° flex.",
    "procedure": "Reach forward without stepping; measure distance.",
    "positive_finding": "<15 cm = high falls risk.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 148,
    "name": "Timed Up & Go (TUG)",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Mobility / falls risk",
    "purpose": "Composite mobility test.",
    "position": "Sitting; rise, walk 3 m, return, sit.",
    "procedure": "Time the task.",
    "positive_finding": ">13.5 sec = falls risk.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 149,
    "name": "Berg Balance Scale",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Balance",
    "purpose": "14-item validated balance scale.",
    "position": "Various functional tasks.",
    "procedure": "Score 0-4 each item; total /56.",
    "positive_finding": "<45 = falls risk.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  {
    "id": 150,
    "name": "Mini-BESTest",
    "region": "Neurological / Whole Body",
    "category": "Neurological / Functional",
    "condition": "Balance (multidimensional)",
    "purpose": "14-item multidirectional balance.",
    "position": "Various tasks.",
    "procedure": "Score 0-2 each; total /28.",
    "positive_finding": "<19 = high falls risk.",
    "sensitivity": "High",
    "specificity": "High",
    "clinical_pearls": "Always combine UMN signs (Babinski + clonus + Hoffman + hyperreflexia) for UMN lesion confirmation.",
    "related_impairments": [
      "Stroke",
      "Spinal Cord Injury",
      "Cervical Myelopathy",
      "Falls Risk"
    ],
    "related_muscles": [
      "Postural muscles",
      "Trunk stabilisers"
    ],
    "related_exercises": [
      "Tandem Stance Progressions",
      "Single-Leg Balance",
      "Tai Chi"
    ],
    "source_books": [
      "Magee's Orthopedic Physical Assessment",
      "Hattam & Smeatham",
      "Shumway-Cook Motor Control"
    ],
    "evidence_level": "Strong"
  },
  // ============================================================
  // ADDITIONAL CURATED MSK TESTS — broaden coverage across regions
  // (foot intrinsics, core, face/TMJ, hand, hip, neuro, paeds)
  // ============================================================
  { id: 40001, name: "Slump Test", region: "Lumbar Spine", category: "Neurodynamic", condition: "Lumbar Radiculopathy / Neural Tension", purpose: "Assess for adverse neural tension of the sciatic nerve.", position: "Seated on edge of plinth.", procedure: "Patient slumps thoracic/lumbar spine, flexes neck, extends knee, then dorsiflexes ankle.", positive_finding: "Reproduction of radicular leg/back pain relieved by neck extension.", sensitivity: "0.84", specificity: "0.83", clinical_pearls: "More sensitive than SLR for lumbar disc herniation.", related_impairments: ["Lumbar Radiculopathy", "Disc Herniation"], related_muscles: ["Hamstrings", "Erector Spinae"], related_exercises: ["Neural Glides", "Slump Stretch"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40002, name: "Babinski Sign", region: "Neurological / Whole Body", category: "Neurological", condition: "Upper Motor Neuron Lesion", purpose: "Screen for UMN involvement.", position: "Supine.", procedure: "Stroke lateral plantar surface of foot from heel to MTP joints with blunt object.", positive_finding: "Extension of great toe with fanning of other toes.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Always abnormal in adults; normal in infants under 2 years.", related_impairments: ["Spinal Cord Injury", "Stroke", "Multiple Sclerosis"], related_muscles: ["Tibialis Anterior", "Extensor Hallucis Longus"], related_exercises: [], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40003, name: "Hoffmann's Sign", region: "Cervical Spine", category: "Neurological", condition: "Cervical Myelopathy", purpose: "Screen for cervical myelopathy / UMN lesion.", position: "Seated, hand relaxed.", procedure: "Examiner flicks distal phalanx of middle finger downward.", positive_finding: "Flexion of thumb and/or index finger.", sensitivity: "0.58", specificity: "0.78", clinical_pearls: "Combine with gait, Lhermitte and clonus for myelopathy cluster.", related_impairments: ["Cervical Myelopathy"], related_muscles: ["Flexor Pollicis Longus"], related_exercises: [], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Moderate" },
  { id: 40004, name: "Lhermitte's Sign", region: "Cervical Spine", category: "Neurological", condition: "Cervical Cord Compression / MS", purpose: "Detect dural irritation or cord compression.", position: "Long sitting.", procedure: "Passively flex patient's cervical spine.", positive_finding: "Electric shock-like sensation down spine or limbs.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Suggestive of MS, cervical myelopathy, or cord tumor.", related_impairments: ["Cervical Myelopathy", "Multiple Sclerosis"], related_muscles: [], related_exercises: [], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40005, name: "Beighton Score", region: "Neurological / Whole Body", category: "Mobility", condition: "Generalised Joint Hypermobility", purpose: "Quantify generalised hypermobility.", position: "Standing/sitting.", procedure: "Score 9 points: 5th MCP >90° (×2), thumb to forearm (×2), elbow >10° hyper (×2), knee >10° hyper (×2), palms to floor with knees straight (×1).", positive_finding: "Score ≥4/9 in adults indicates hypermobility.", sensitivity: "High", specificity: "High", clinical_pearls: "Use with Brighton criteria for hEDS screening.", related_impairments: ["Hypermobility Spectrum Disorder", "hEDS"], related_muscles: [], related_exercises: ["Joint Stabilisation Drills"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40006, name: "Tinel's Sign at Tarsal Tunnel", region: "Ankle & Foot", category: "Neurodynamic", condition: "Tarsal Tunnel Syndrome", purpose: "Detect posterior tibial nerve entrapment.", position: "Supine, ankle slightly everted.", procedure: "Tap posterior to medial malleolus over tarsal tunnel.", positive_finding: "Tingling/paresthesia radiating into plantar foot.", sensitivity: "0.58", specificity: "Moderate", clinical_pearls: "Often combined with dorsiflexion-eversion test.", related_impairments: ["Tarsal Tunnel Syndrome"], related_muscles: ["Tibialis Posterior", "Flexor Digitorum Longus"], related_exercises: ["Tibial Nerve Glides"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Moderate" },
  { id: 40007, name: "Windlass Test", region: "Ankle & Foot", category: "Provocation", condition: "Plantar Fasciitis", purpose: "Reproduce plantar fascia pain.", position: "Standing on step with MTPs over edge / non-weight bearing seated.", procedure: "Passively dorsiflex 1st MTP joint while ankle is dorsiflexed.", positive_finding: "Reproduction of plantar heel pain.", sensitivity: "0.32", specificity: "1.00", clinical_pearls: "Highly specific — when positive, strongly supports plantar fasciitis.", related_impairments: ["Plantar Fasciitis"], related_muscles: ["Plantar Fascia", "Flexor Digitorum Brevis"], related_exercises: ["Plantar Fascia Stretch", "Towel Curls"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },
  { id: 40008, name: "Mulder's Click", region: "Ankle & Foot", category: "Palpation", condition: "Morton's Neuroma", purpose: "Detect interdigital neuroma.", position: "Supine, foot relaxed.", procedure: "Squeeze metatarsal heads transversely while applying dorsal/plantar pressure between web spaces.", positive_finding: "Palpable click + reproduction of forefoot pain/paresthesia.", sensitivity: "0.62", specificity: "Moderate", clinical_pearls: "Most common at 3rd web space.", related_impairments: ["Morton's Neuroma"], related_muscles: ["Lumbricals", "Interossei"], related_exercises: ["Toe Splay", "Foot Intrinsic Activation"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40009, name: "Single-Leg Heel Raise Test", region: "Ankle & Foot", category: "Functional", condition: "Achilles Tendinopathy / Calf Insufficiency", purpose: "Assess endurance of plantarflexors.", position: "Standing on one leg, fingertip support on wall.", procedure: "Patient performs maximal heel raises through full ROM at 60bpm until failure.", positive_finding: "<25 reps (age-adjusted), pain, or loss of height.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Norm: 22-30 reps depending on age/sex.", related_impairments: ["Achilles Tendinopathy"], related_muscles: ["Gastrocnemius", "Soleus"], related_exercises: ["Heel Raises", "Eccentric Calf Drops"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },
  { id: 40010, name: "Foot Posture Index (FPI-6)", region: "Ankle & Foot", category: "Postural", condition: "Foot Pronation/Supination", purpose: "Quantify static foot posture.", position: "Relaxed bilateral standing.", procedure: "Score 6 items: talar head palpation, malleolar curvature, calcaneal inversion/eversion, talonavicular bulge, MLA, forefoot abduction (-2 to +2 each).", positive_finding: "Pronated >+6, supinated <-4.", sensitivity: "High", specificity: "High", clinical_pearls: "Validated, reliable, use bilaterally.", related_impairments: ["Pes Planus", "Pes Cavus"], related_muscles: ["Tibialis Posterior", "Peroneals"], related_exercises: ["Short Foot Exercise", "Tibialis Posterior Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40011, name: "Trendelenburg Test", region: "Hip", category: "Functional", condition: "Hip Abductor Weakness / Gluteus Medius", purpose: "Assess hip abductor strength.", position: "Standing.", procedure: "Patient stands on one leg for 30s; observe pelvis on non-stance side.", positive_finding: "Drop of contralateral hemipelvis >2cm or compensatory trunk lean.", sensitivity: "0.73", specificity: "0.77", clinical_pearls: "Indicates ipsilateral gluteus medius/minimus weakness.", related_impairments: ["Gluteal Tendinopathy", "Hip OA"], related_muscles: ["Gluteus Medius", "Gluteus Minimus"], related_exercises: ["Side-Lying Hip Abduction", "Single-Leg Squat"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40012, name: "FADIR Test", region: "Hip", category: "Provocation", condition: "Femoroacetabular Impingement (Cam/Pincer)", purpose: "Provoke anterior hip impingement.", position: "Supine.", procedure: "Hip flexed 90°, then adducted and internally rotated.", positive_finding: "Reproduction of anterior groin pain.", sensitivity: "0.94", specificity: "0.09", clinical_pearls: "High sensitivity, low specificity — good rule-out test.", related_impairments: ["FAI", "Labral Tear"], related_muscles: ["Iliopsoas", "Adductors"], related_exercises: ["Hip Mobility Drills"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40013, name: "FABER (Patrick's) Test", region: "Hip", category: "Provocation", condition: "Hip OA / SIJ Dysfunction", purpose: "Differentiate hip vs SIJ pathology.", position: "Supine.", procedure: "Place ankle on opposite knee (figure-4); apply gentle downward pressure on flexed knee.", positive_finding: "Anterior groin pain = hip; posterior pain = SIJ.", sensitivity: "0.57", specificity: "0.71", clinical_pearls: "Combine with other SIJ provocation tests (cluster of Laslett).", related_impairments: ["Hip OA", "SIJ Dysfunction"], related_muscles: ["Iliopsoas", "Piriformis"], related_exercises: ["Hip Flexor Stretch"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40014, name: "Thomas Test", region: "Hip", category: "Mobility", condition: "Hip Flexor Tightness", purpose: "Assess length of iliopsoas, rectus femoris and TFL.", position: "Supine on edge of plinth, knees to chest.", procedure: "Patient lowers one leg over edge while holding opposite knee.", positive_finding: "Hip remains flexed (psoas), knee extends (rectus), thigh abducts (TFL).", sensitivity: "0.89", specificity: "0.92", clinical_pearls: "Modified Thomas allows quantification with goniometer.", related_impairments: ["Anterior Hip Tightness"], related_muscles: ["Iliopsoas", "Rectus Femoris", "TFL"], related_exercises: ["Couch Stretch", "Kneeling Hip Flexor Stretch"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40015, name: "Ober's Test", region: "Hip", category: "Mobility", condition: "ITB / TFL Tightness", purpose: "Assess length of TFL and iliotibial band.", position: "Side-lying on unaffected side.", procedure: "Examiner abducts/extends top hip, then releases — knee can be flexed (Ober) or extended (modified Ober).", positive_finding: "Leg fails to adduct below horizontal.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Modified version (knee extended) is more reliable.", related_impairments: ["ITB Syndrome", "Greater Trochanteric Pain"], related_muscles: ["TFL", "Gluteus Medius"], related_exercises: ["ITB Foam Rolling", "TFL Release"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40016, name: "Phalen's Test", region: "Wrist & Hand", category: "Provocation", condition: "Carpal Tunnel Syndrome", purpose: "Reproduce median nerve symptoms.", position: "Seated, elbows flexed.", procedure: "Patient holds wrists in maximum flexion, dorsa together, for 60 seconds.", positive_finding: "Paresthesia in median nerve distribution within 60s.", sensitivity: "0.68", specificity: "0.73", clinical_pearls: "Combine with Tinel and CTS-6 cluster.", related_impairments: ["Carpal Tunnel Syndrome"], related_muscles: ["Flexor Retinaculum"], related_exercises: ["Median Nerve Glides"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40017, name: "Tinel's Sign at Wrist", region: "Wrist & Hand", category: "Provocation", condition: "Carpal Tunnel Syndrome", purpose: "Detect median nerve irritability.", position: "Seated, wrist supinated and slightly extended.", procedure: "Tap firmly over carpal tunnel/transverse carpal ligament.", positive_finding: "Paresthesia in median nerve distribution.", sensitivity: "0.50", specificity: "0.77", clinical_pearls: "Less sensitive than Phalen but more specific.", related_impairments: ["Carpal Tunnel Syndrome"], related_muscles: ["Median Nerve"], related_exercises: ["Median Nerve Glides", "Wrist Mobility"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40018, name: "Finkelstein's Test", region: "Wrist & Hand", category: "Provocation", condition: "De Quervain's Tenosynovitis", purpose: "Provoke 1st dorsal compartment tendons.", position: "Seated.", procedure: "Patient makes fist over thumb; examiner ulnarly deviates wrist.", positive_finding: "Sharp pain over radial styloid.", sensitivity: "0.81", specificity: "Moderate", clinical_pearls: "Eichhoff variant is more provocative but less specific.", related_impairments: ["De Quervain's Tenosynovitis"], related_muscles: ["Abductor Pollicis Longus", "Extensor Pollicis Brevis"], related_exercises: ["Thumb Tendon Glides", "Eccentric Wrist Loading"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40019, name: "Froment's Sign", region: "Wrist & Hand", category: "Neurological", condition: "Ulnar Nerve Palsy (Adductor Pollicis)", purpose: "Detect adductor pollicis weakness.", position: "Seated.", procedure: "Patient pinches paper between thumb and index finger; examiner pulls paper away.", positive_finding: "Compensatory IP joint flexion of thumb (FPL substitution).", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Suggests ulnar nerve compromise (e.g., cubital tunnel).", related_impairments: ["Ulnar Neuropathy", "Cubital Tunnel"], related_muscles: ["Adductor Pollicis", "Flexor Pollicis Longus"], related_exercises: ["Pinch Strengthening"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40020, name: "Grip Strength (Jamar Dynamometer)", region: "Wrist & Hand", category: "Functional", condition: "Hand/Forearm Weakness", purpose: "Quantify grip force.", position: "Seated, shoulder adducted, elbow 90°, forearm neutral.", procedure: "Three maximal grips per hand, 30s rest; record mean.", positive_finding: "Compare bilaterally and to age/sex norms; >10% deficit clinically significant.", sensitivity: "High", specificity: "High", clinical_pearls: "Predictor of all-cause mortality and frailty.", related_impairments: ["Sarcopenia", "Lateral Epicondylalgia", "CTS"], related_muscles: ["Forearm Flexors"], related_exercises: ["Grip Strengthening", "Putty Exercises"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40021, name: "TMJ Auscultation & Palpation", region: "TMJ", category: "Palpation", condition: "TMJ Disc Displacement", purpose: "Detect joint sounds and tenderness.", position: "Seated, mouth relaxed.", procedure: "Palpate lateral pole and posterior TMJ during opening/closing; auscultate with stethoscope.", positive_finding: "Click/crepitus, deviation, or tenderness during translation.", sensitivity: "0.83", specificity: "0.69", clinical_pearls: "Reciprocal click suggests disc displacement with reduction.", related_impairments: ["TMD", "Disc Displacement"], related_muscles: ["Masseter", "Temporalis", "Lateral Pterygoid"], related_exercises: ["Controlled Opening", "Tongue-Up Exercise"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40022, name: "Maximum Mouth Opening (Inter-incisal)", region: "TMJ", category: "Mobility", condition: "TMJ Hypomobility", purpose: "Quantify mandibular depression.", position: "Seated upright.", procedure: "Measure inter-incisal distance at maximum active opening.", positive_finding: "<35-40 mm or asymmetric C/S-shape deviation.", sensitivity: "High", specificity: "Moderate", clinical_pearls: "Three-finger width is functional norm.", related_impairments: ["TMD", "Trismus"], related_muscles: ["Lateral Pterygoid", "Masseter"], related_exercises: ["TheraBite Stretch", "Rocabado 6×6"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 40023, name: "Cranial Nerve Screen", region: "Neurological / Whole Body", category: "Neurological", condition: "Cranial Nerve Dysfunction", purpose: "Screen all 12 cranial nerves.", position: "Seated.", procedure: "Sequential testing: smell (I), vision/fields (II), pupils/EOM (III/IV/VI), facial sensation/jaw (V), facial muscles (VII), hearing (VIII), gag (IX/X), shoulder shrug (XI), tongue protrusion (XII).", positive_finding: "Any asymmetry, weakness, or absent response.", sensitivity: "High", specificity: "High", clinical_pearls: "Mandatory for any post-concussion or central pathology screen.", related_impairments: ["Stroke", "Concussion", "Bell's Palsy"], related_muscles: ["Facial muscles", "SCM", "Trapezius"], related_exercises: [], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40024, name: "Prone Instability Test", region: "Lumbar Spine", category: "Provocation", condition: "Lumbar Segmental Instability", purpose: "Detect lumbar instability.", position: "Prone with torso on plinth, feet on floor.", procedure: "PA pressure on lumbar segments → pain. Patient lifts legs off floor; repeat PA pressure.", positive_finding: "Pain present with feet down but absent with active leg lift = positive (active stabilisers compensate).", sensitivity: "0.61", specificity: "0.57", clinical_pearls: "Part of CPR for lumbar stabilisation exercise.", related_impairments: ["Lumbar Instability"], related_muscles: ["Multifidus", "TrA"], related_exercises: ["Bird Dog", "Dead Bug", "Multifidus Activation"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 40025, name: "Active Straight Leg Raise (ASLR)", region: "Pelvis / SIJ", category: "Functional", condition: "Pelvic Girdle Pain / Force Closure", purpose: "Assess load transfer through pelvis.", position: "Supine.", procedure: "Patient lifts straight leg 20cm; rate effort 0-5. Repeat with manual pelvic compression.", positive_finding: "Increased effort/pain that improves with compression suggests force closure deficit.", sensitivity: "0.87", specificity: "0.94", clinical_pearls: "Excellent test for postpartum PGP.", related_impairments: ["Pregnancy-related PGP", "SIJ Dysfunction"], related_muscles: ["TrA", "Pelvic Floor", "Gluteals"], related_exercises: ["TrA Activation", "Pelvic Floor Co-contraction"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 40026, name: "Sahrmann Core Stability Test", region: "Lumbar Spine", category: "Functional", condition: "Lumbopelvic Stability Deficit", purpose: "Grade abdominal/core control.", position: "Hook-lying with pressure biofeedback under lumbar spine at 40 mmHg.", procedure: "Progress through 5 levels (single-leg lower → bilateral leg lower) maintaining pressure.", positive_finding: "Inability to maintain pressure at level reflects deficit.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Useful for tracking core re-education progress.", related_impairments: ["Lumbopelvic Instability", "LBP"], related_muscles: ["Transversus Abdominis", "Internal Oblique"], related_exercises: ["Dead Bug Progressions", "Heel Slides"], source_books: ["Sahrmann — Movement System Impairments"], evidence_level: "Moderate" },
  { id: 40027, name: "Dix-Hallpike Manoeuvre", region: "Neurological / Whole Body", category: "Vestibular", condition: "Posterior Canal BPPV", purpose: "Diagnose posterior canal BPPV.", position: "Long sitting on plinth.", procedure: "Rotate head 45° to test side, rapidly lower to supine with head extended 20° below horizontal; observe nystagmus for 30s.", positive_finding: "Up-beating, torsional nystagmus toward affected ear with latency and fatigue.", sensitivity: "0.82", specificity: "0.71", clinical_pearls: "Follow positive test with Epley manoeuvre.", related_impairments: ["BPPV", "Vestibular Dysfunction"], related_muscles: [], related_exercises: ["Epley Manoeuvre", "Brandt-Daroff"], source_books: ["Herdman — Vestibular Rehabilitation"], evidence_level: "Strong" },
  { id: 40028, name: "Cervical Flexion-Rotation Test", region: "Cervical Spine", category: "Mobility", condition: "Cervicogenic Headache (C1-C2)", purpose: "Assess C1-C2 rotation.", position: "Supine, cervical spine in maximum flexion.", procedure: "Examiner rotates head passively to each side.", positive_finding: "Restricted rotation (<32° to symptomatic side) reproducing headache.", sensitivity: "0.91", specificity: "0.90", clinical_pearls: "Excellent diagnostic accuracy for cervicogenic headache.", related_impairments: ["Cervicogenic Headache"], related_muscles: ["Suboccipitals", "Obliquus Capitis"], related_exercises: ["C1-C2 SNAGs", "Suboccipital Release"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 40029, name: "Deep Neck Flexor Endurance Test", region: "Cervical Spine", category: "Functional", condition: "Cervical Motor Control Deficit", purpose: "Assess deep neck flexor endurance.", position: "Supine, knees bent.", procedure: "Patient performs cranio-cervical flexion (chin tuck) and lifts head ~2.5cm; hold while clinician times until skin folds reappear or chin pokes.", positive_finding: "<29s for women, <39s for men with neck pain.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Strong correlation with chronic neck pain.", related_impairments: ["Chronic Neck Pain", "Forward Head Posture"], related_muscles: ["Longus Colli", "Longus Capitis"], related_exercises: ["Chin Tucks", "CCF with Pressure Biofeedback"], source_books: ["Jull — Whiplash, Headache and Neck Pain"], evidence_level: "Strong" },
  { id: 40030, name: "Short Foot Test", region: "Ankle & Foot", category: "Functional", condition: "Foot Intrinsic Weakness", purpose: "Assess intrinsic foot muscle activation.", position: "Seated then standing.", procedure: "Patient draws 1st MTP toward heel without curling toes or extending hallux, lifting medial longitudinal arch.", positive_finding: "Inability to dome arch, toe clawing, or hallux extension compensation.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Foundational for foot rehab in pes planus and plantar fasciitis.", related_impairments: ["Pes Planus", "Plantar Fasciitis", "Intrinsic Weakness"], related_muscles: ["Abductor Hallucis", "Flexor Digitorum Brevis", "Quadratus Plantae"], related_exercises: ["Short Foot Exercise", "Toe Yoga"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },

  // ========== Muscle-specific tests added for authentic muscle→test mapping ==========
  { id: 50001, name: "Hornblower's Sign", region: "Shoulder", category: "MMT", condition: "Teres Minor / Posterior Cuff Tear", purpose: "Assess teres minor integrity.", position: "Seated, shoulder abducted 90° with elbow flexed 90° (in scapular plane).", procedure: "Patient resists external rotation; observe ability to maintain ER.", positive_finding: "Inability to externally rotate (hand falls forward like blowing a horn).", sensitivity: "0.95", specificity: "0.92", clinical_pearls: "Highly specific for combined teres minor + infraspinatus tear.", related_impairments: ["Massive Rotator Cuff Tear"], related_muscles: ["Teres Minor", "Infraspinatus"], related_exercises: ["External Rotation Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 50002, name: "Resisted External Rotation (Infraspinatus)", region: "Shoulder", category: "MMT", condition: "Infraspinatus Tendinopathy / Tear", purpose: "Isolate infraspinatus strength.", position: "Seated, arm at side, elbow flexed 90°.", procedure: "Patient externally rotates against resistance.", positive_finding: "Pain or weakness vs unaffected side.", sensitivity: "0.84", specificity: "0.53", clinical_pearls: "Combine with Drop Arm and Painful Arc for cuff cluster.", related_impairments: ["Rotator Cuff Tendinopathy"], related_muscles: ["Infraspinatus"], related_exercises: ["Side-Lying ER", "Theraband ER"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50003, name: "Bear-Hug Test", region: "Shoulder", category: "MMT", condition: "Subscapularis Tear", purpose: "Detect upper subscapularis tear.", position: "Seated, palm on opposite shoulder, elbow forward.", procedure: "Patient resists examiner lifting hand off shoulder (resisted IR).", positive_finding: "Inability to maintain hand position or weakness >20% vs other side.", sensitivity: "0.60", specificity: "0.92", clinical_pearls: "Sensitive for upper subscapularis fibers.", related_impairments: ["Subscapularis Tear"], related_muscles: ["Subscapularis"], related_exercises: ["IR Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 50004, name: "Upper Cut Test", region: "Shoulder", category: "Provocation", condition: "Long Head Biceps Tendinopathy", purpose: "Provoke biceps tendon.", position: "Standing, elbow flexed 90°, forearm supinated, hand fisted.", procedure: "Patient performs uppercut motion against resistance.", positive_finding: "Pain in bicipital groove.", sensitivity: "0.73", specificity: "0.78", clinical_pearls: "More sensitive than Speed for LHB pathology.", related_impairments: ["Biceps Tendinopathy", "SLAP"], related_muscles: ["Biceps Brachii", "Long Head of Biceps"], related_exercises: ["Biceps Eccentrics"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50005, name: "Deltoid Extension Lag Sign", region: "Shoulder", category: "MMT", condition: "Axillary Nerve Palsy / Deltoid Weakness", purpose: "Assess posterior deltoid + axillary nerve.", position: "Standing, examiner passively extends arm to end-range.", procedure: "Patient asked to maintain extension after release.", positive_finding: "Lag (drop) of arm > 5°.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Useful after shoulder dislocation to screen axillary nerve.", related_impairments: ["Axillary Nerve Injury"], related_muscles: ["Deltoid"], related_exercises: ["Deltoid Activation"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Moderate" },
  { id: 50006, name: "Pectoralis Major Length Test", region: "Shoulder", category: "Mobility", condition: "Pectoralis Major Tightness", purpose: "Quantify pec major length.", position: "Supine, hands behind head, elbows out.", procedure: "Observe distance from elbow to plinth.", positive_finding: "Elbow remains above plinth surface = tight pec major.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Differentiate sternal vs clavicular fibers with arm position.", related_impairments: ["Forward Shoulder Posture"], related_muscles: ["Pectoralis Major"], related_exercises: ["Doorway Pec Stretch"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50007, name: "Pectoralis Minor Length Test", region: "Shoulder", category: "Mobility", condition: "Pectoralis Minor Tightness", purpose: "Quantify pec minor length.", position: "Supine, arms by sides, palms up.", procedure: "Measure perpendicular distance from posterior acromion to plinth.", positive_finding: ">2.5 cm = shortened pec minor.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Tight pec minor → scapular anterior tilt → SAIS.", related_impairments: ["Subacromial Impingement", "TOS"], related_muscles: ["Pectoralis Minor"], related_exercises: ["Pec Minor Release", "Wall Slides"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50008, name: "Serratus Wall Push-Up (Winging) Test", region: "Shoulder", category: "MMT", condition: "Serratus Anterior Weakness / Long Thoracic Palsy", purpose: "Detect scapular winging.", position: "Standing, arms extended against wall.", procedure: "Patient performs wall push-up; observe medial scapular border.", positive_finding: "Medial border lifts off thorax (winging).", sensitivity: "High", specificity: "High", clinical_pearls: "Pathognomonic for long thoracic nerve palsy.", related_impairments: ["Long Thoracic Nerve Palsy", "Scapular Dyskinesis"], related_muscles: ["Serratus Anterior"], related_exercises: ["Serratus Punches", "Wall Slides"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 50009, name: "Rhomboid Test (Kendall)", region: "Shoulder", category: "MMT", condition: "Rhomboid Weakness", purpose: "Isolate rhomboid strength.", position: "Prone, arm in 90° abduction with full ER, elbow flexed 90°, hand near hip.", procedure: "Patient lifts hand from low back against gravity/resistance.", positive_finding: "Weakness compared to opposite side.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Position minimises trapezius contribution.", related_impairments: ["Scapular Dyskinesis"], related_muscles: ["Rhomboid Major", "Rhomboid Minor"], related_exercises: ["Prone Y/T/W", "Scapular Retraction"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50010, name: "Lower Trapezius MMT (Kendall)", region: "Shoulder", category: "MMT", condition: "Lower Trapezius Weakness", purpose: "Isolate lower trap strength.", position: "Prone, arm overhead in line with lower trap fibers (~145°), thumb up.", procedure: "Patient lifts arm against gravity/resistance.", positive_finding: "Weakness or substitution from upper trap.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Critical for SAIS rehab; commonly inhibited.", related_impairments: ["Subacromial Impingement", "Scapular Dyskinesis"], related_muscles: ["Lower Trapezius"], related_exercises: ["Prone Y", "Lower Trap Activation"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Strong" },
  { id: 50011, name: "Middle Trapezius MMT (Kendall)", region: "Shoulder", category: "MMT", condition: "Middle Trapezius Weakness", purpose: "Isolate middle trap strength.", position: "Prone, arm in 90° abduction with full ER, thumb up.", procedure: "Patient lifts arm horizontally against resistance.", positive_finding: "Weakness or rhomboid substitution.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Compare bilaterally for scapular control deficits.", related_impairments: ["Scapular Dyskinesis"], related_muscles: ["Middle Trapezius"], related_exercises: ["Prone T", "Band Pull-Apart"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50012, name: "Upper Trapezius Length Test", region: "Cervical Spine", category: "Mobility", condition: "Upper Trapezius Tightness", purpose: "Quantify upper trap length.", position: "Supine, examiner stabilises shoulder.", procedure: "Passively side-flex head to opposite side and rotate to same side; measure end-range.", positive_finding: "Restricted ROM or pulling sensation in upper trap.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Common finding in cervicogenic headache and chronic neck pain.", related_impairments: ["Cervicogenic Headache", "Chronic Neck Pain"], related_muscles: ["Upper Trapezius"], related_exercises: ["Upper Trap Stretch", "Cranio-cervical Flexion"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50013, name: "Latissimus Dorsi Length Test", region: "Shoulder", category: "Mobility", condition: "Latissimus Dorsi Tightness", purpose: "Quantify latissimus length.", position: "Supine, knees bent (posterior pelvic tilt), arms overhead.", procedure: "Patient brings arms to plinth above head with elbows extended.", positive_finding: "Arms fail to reach plinth or lumbar extension increases.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Tight lats → restricted overhead reach + lumbar compensation.", related_impairments: ["Shoulder Stiffness", "Forward Shoulder Posture"], related_muscles: ["Latissimus Dorsi"], related_exercises: ["Lat Stretch", "Overhead Mobility"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50014, name: "Levator Scapulae Length Test", region: "Cervical Spine", category: "Mobility", condition: "Levator Scapulae Tightness", purpose: "Quantify levator length.", position: "Supine.", procedure: "Passively flex, side-flex (away) and rotate (away) cervical spine while depressing ipsilateral scapula.", positive_finding: "Restricted range or pulling at superior medial scapula.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Frequently tight in desk workers with forward head posture.", related_impairments: ["Cervicogenic Headache", "Neck Pain"], related_muscles: ["Levator Scapulae"], related_exercises: ["Levator Scapulae Stretch", "Scapular Depression"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50015, name: "Resisted Elbow Flexion (Brachialis)", region: "Elbow", category: "MMT", condition: "Brachialis Strain / Climber's Elbow", purpose: "Isolate brachialis.", position: "Seated, forearm pronated.", procedure: "Patient resists elbow flexion in pronation (minimises biceps).", positive_finding: "Pain or weakness in anterior elbow.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Pronated position eliminates biceps contribution.", related_impairments: ["Brachialis Strain"], related_muscles: ["Brachialis"], related_exercises: ["Reverse Curls", "Hammer Curls"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50016, name: "Resisted Elbow Flexion (Mid-prone)", region: "Elbow", category: "MMT", condition: "Brachioradialis Strain", purpose: "Isolate brachioradialis.", position: "Seated, forearm in mid-prone (thumb up).", procedure: "Patient resists elbow flexion.", positive_finding: "Pain over anterolateral forearm.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Brachioradialis is best activated in neutral forearm.", related_impairments: ["Lateral Forearm Pain"], related_muscles: ["Brachioradialis"], related_exercises: ["Hammer Curls"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50017, name: "Pronator Teres Syndrome Test", region: "Elbow", category: "Provocation", condition: "Pronator Teres Syndrome", purpose: "Detect median nerve compression at pronator teres.", position: "Seated, elbow flexed 90°.", procedure: "Patient resists pronation while examiner extends elbow.", positive_finding: "Tingling/pain in median nerve distribution of forearm/hand.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Differentiates from carpal tunnel — symptoms include forearm pain.", related_impairments: ["Pronator Teres Syndrome"], related_muscles: ["Pronator Teres"], related_exercises: ["Median Nerve Glides"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50018, name: "Resisted Supination Test", region: "Elbow", category: "MMT", condition: "Supinator Strain / Radial Tunnel Syndrome", purpose: "Provoke supinator and posterior interosseous nerve.", position: "Seated, elbow extended.", procedure: "Patient resists supination from pronated start position.", positive_finding: "Pain in proximal lateral forearm (4 cm distal to lateral epicondyle).", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Differentiates radial tunnel from lateral epicondylalgia.", related_impairments: ["Radial Tunnel Syndrome"], related_muscles: ["Supinator"], related_exercises: ["Forearm Mobility"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50019, name: "Resisted Elbow Extension", region: "Elbow", category: "MMT", condition: "Triceps Strain / Tendinopathy", purpose: "Isolate triceps strength.", position: "Prone or seated, shoulder flexed 90°, elbow flexed 90°.", procedure: "Patient resists elbow extension.", positive_finding: "Pain or weakness at olecranon insertion.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Combine with palpation for triceps tendinopathy.", related_impairments: ["Triceps Tendinopathy"], related_muscles: ["Triceps Brachii"], related_exercises: ["Triceps Eccentrics"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50020, name: "FDP Integrity Test", region: "Wrist & Hand", category: "MMT", condition: "FDP Tendon Tear / Jersey Finger", purpose: "Test flexor digitorum profundus integrity.", position: "Seated, hand supinated, examiner stabilises PIP in extension.", procedure: "Patient flexes DIP joint.", positive_finding: "Inability to actively flex DIP = FDP rupture.", sensitivity: "High", specificity: "High", clinical_pearls: "Common in 'jersey finger' grasping injuries.", related_impairments: ["Jersey Finger", "FDP Avulsion"], related_muscles: ["Flexor Digitorum Profundus"], related_exercises: ["Tendon Glides"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50021, name: "FDS Integrity Test", region: "Wrist & Hand", category: "MMT", condition: "FDS Tendon Injury", purpose: "Test flexor digitorum superficialis isolation.", position: "Seated, examiner holds all other fingers in full extension.", procedure: "Patient flexes PIP joint of test finger.", positive_finding: "Inability to flex PIP in isolation = FDS deficit.", sensitivity: "High", specificity: "High", clinical_pearls: "Holding other fingers blocks FDP contribution.", related_impairments: ["FDS Laceration"], related_muscles: ["Flexor Digitorum Superficialis"], related_exercises: ["Tendon Glides"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50022, name: "Sternocleidomastoid Length Test", region: "Cervical Spine", category: "Mobility", condition: "SCM Tightness / Torticollis", purpose: "Quantify SCM length.", position: "Supine.", procedure: "Passively extend, side-flex (away) and rotate (toward) cervical spine.", positive_finding: "Restricted ROM or palpable tightness.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Bilateral tightness contributes to forward head posture.", related_impairments: ["Torticollis", "Forward Head Posture"], related_muscles: ["Sternocleidomastoid"], related_exercises: ["SCM Stretch"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50023, name: "Scalene Length Test", region: "Cervical Spine", category: "Mobility", condition: "Scalene Tightness / TOS", purpose: "Assess scalene muscle length.", position: "Supine.", procedure: "Side-flex head away, slight extension; differentiate by rotation: toward (anterior), neutral (middle), away (posterior).", positive_finding: "Restricted ROM or paresthesia (suggests TOS).", sensitivity: "Moderate", specificity: "Low", clinical_pearls: "Combine with vascular and neural TOS tests.", related_impairments: ["Thoracic Outlet Syndrome"], related_muscles: ["Anterior Scalene", "Middle Scalene", "Posterior Scalene"], related_exercises: ["Scalene Stretch", "1st Rib Mobilisation"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50024, name: "Pressure Biofeedback (PBU) Test", region: "Lumbar Spine", category: "Functional", condition: "Transversus Abdominis Activation Deficit", purpose: "Assess TrA isolated contraction.", position: "Prone with PBU under abdomen inflated to 70 mmHg.", procedure: "Patient draws in lower abdomen without breath-hold or spinal motion.", positive_finding: "Pressure decrease ≥4 mmHg = adequate TrA activation.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Gold-standard clinical TrA assessment.", related_impairments: ["Lumbopelvic Instability", "CLBP"], related_muscles: ["Transversus Abdominis"], related_exercises: ["Abdominal Drawing-In Manoeuvre"], source_books: ["Richardson — Therapeutic Exercise for Lumbopelvic Stabilisation"], evidence_level: "Strong" },
  { id: 50025, name: "Trunk Curl MMT", region: "Lumbar Spine", category: "MMT", condition: "Rectus Abdominis Weakness", purpose: "Grade rectus abdominis strength.", position: "Supine, knees bent.", procedure: "Patient curls trunk with hands progressively higher (thighs → chest → behind head).", positive_finding: "Inability to clear scapulae against tested arm position.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Grade 3-5 by hand position completed.", related_impairments: ["Core Weakness", "Diastasis Recti"], related_muscles: ["Rectus Abdominis"], related_exercises: ["Crunches", "Curl-up Progressions"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50026, name: "Trunk Rotation MMT", region: "Lumbar Spine", category: "MMT", condition: "Oblique Weakness", purpose: "Test internal/external oblique strength.", position: "Supine, knees bent, hands behind head.", procedure: "Patient curls and rotates trunk lifting opposite shoulder toward knee.", positive_finding: "Inability to lift scapula off plinth against rotation.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Tests ipsilateral IO + contralateral EO.", related_impairments: ["Core Weakness"], related_muscles: ["Internal Oblique", "External Oblique"], related_exercises: ["Bicycle Crunch", "Russian Twist"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Moderate" },
  { id: 50027, name: "Sorensen Endurance Test", region: "Lumbar Spine", category: "Functional", condition: "Lumbar Extensor Endurance Deficit", purpose: "Assess back extensor endurance.", position: "Prone with lower body strapped to plinth, upper body unsupported.", procedure: "Patient holds upper body horizontal as long as possible.", positive_finding: "<60s correlates with LBP risk; <90s subnormal.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Norm: ~120s for healthy adults.", related_impairments: ["Chronic Low Back Pain"], related_muscles: ["Erector Spinae", "Multifidus"], related_exercises: ["Prone Extensions", "Bird Dog"], source_books: ["McGill — Low Back Disorders"], evidence_level: "Strong" },
  { id: 50028, name: "QL Length Test", region: "Lumbar Spine", category: "Mobility", condition: "Quadratus Lumborum Tightness", purpose: "Assess QL length.", position: "Side-lying with affected side up, top arm overhead.", procedure: "Examiner side-flexes trunk away from tight side; measure ROM.", positive_finding: "Restricted side-flexion or pulling at lateral lumbar region.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Tight QL → asymmetric pelvis + LBP.", related_impairments: ["Lumbar Asymmetry", "LBP"], related_muscles: ["Quadratus Lumborum"], related_exercises: ["QL Stretch", "Side Plank"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50029, name: "Stinchfield (Resisted SLR)", region: "Hip", category: "Provocation", condition: "Iliopsoas Pathology / Intra-articular Hip", purpose: "Provoke iliopsoas + intra-articular hip pathology.", position: "Supine.", procedure: "Patient performs SLR to 30°, then resists downward pressure on thigh.", positive_finding: "Anterior groin pain reproducing symptoms.", sensitivity: "0.59", specificity: "0.32", clinical_pearls: "Sensitive but non-specific — combine with FADIR/FABER.", related_impairments: ["Iliopsoas Tendinopathy", "Hip OA"], related_muscles: ["Iliopsoas"], related_exercises: ["Hip Flexor Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Moderate" },
  { id: 50030, name: "Ely's Test", region: "Hip", category: "Mobility", condition: "Rectus Femoris Tightness", purpose: "Quantify rectus femoris length.", position: "Prone.", procedure: "Examiner passively flexes knee toward buttock.", positive_finding: "Hip flexes / pelvis tilts anteriorly (heel >10 cm from buttock).", sensitivity: "0.59", specificity: "0.85", clinical_pearls: "Common in athletes with anterior knee pain.", related_impairments: ["Rectus Femoris Tightness", "AKP"], related_muscles: ["Rectus Femoris"], related_exercises: ["Couch Stretch", "Quad Foam Rolling"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50031, name: "Active Knee Extension Test", region: "Hip", category: "Mobility", condition: "Hamstring Tightness", purpose: "Quantify hamstring length.", position: "Supine, hip flexed to 90°, contralateral leg flat.", procedure: "Patient actively extends knee until end-range.", positive_finding: "Knee extension deficit >20° from full extension.", sensitivity: "0.86", specificity: "0.92", clinical_pearls: "Reliable measure — use inclinometer for accuracy.", related_impairments: ["Hamstring Tightness", "Hamstring Strain"], related_muscles: ["Hamstrings", "Biceps Femoris", "Semitendinosus"], related_exercises: ["Nordic Hamstring", "Hamstring Stretch"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50032, name: "90-90 Hamstring Test", region: "Hip", category: "Mobility", condition: "Hamstring Tightness", purpose: "Alternative quantification of hamstring length.", position: "Supine with hip and knee flexed 90°.", procedure: "Patient actively extends knee maintaining 90° hip flexion.", positive_finding: "Knee extension deficit >20°.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Useful when SLR limited by other factors.", related_impairments: ["Hamstring Tightness"], related_muscles: ["Hamstrings"], related_exercises: ["Hamstring Stretch"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Moderate" },
  { id: 50033, name: "Bent-Knee Stretch Test", region: "Hip", category: "Provocation", condition: "Proximal Hamstring Tendinopathy", purpose: "Provoke proximal hamstring tendon.", position: "Supine, hip and knee maximally flexed.", procedure: "Examiner rapidly straightens knee while maintaining hip flexion.", positive_finding: "Pain at ischial tuberosity.", sensitivity: "0.84", specificity: "0.87", clinical_pearls: "More sensitive than passive SLR for high hamstring tendinopathy.", related_impairments: ["Proximal Hamstring Tendinopathy"], related_muscles: ["Hamstrings"], related_exercises: ["Isometric Hamstring Bridge"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50034, name: "Modified Ober Test", region: "Hip", category: "Mobility", condition: "ITB / TFL Tightness", purpose: "Assess ITB length with knee extended.", position: "Side-lying on unaffected side, lower hip and knee flexed.", procedure: "Examiner abducts and extends top hip with knee extended, then lowers leg.", positive_finding: "Leg fails to adduct below horizontal.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "More reliable than classic Ober — knee extension reduces rectus femoris contribution.", related_impairments: ["ITB Syndrome"], related_muscles: ["Tensor Fasciae Latae", "Iliotibial Band"], related_exercises: ["ITB Foam Rolling", "Hip Abductor Strengthening"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50035, name: "Side-Lying Hip Abduction MMT", region: "Hip", category: "MMT", condition: "Gluteus Medius Weakness", purpose: "Grade gluteus medius strength.", position: "Side-lying with test leg up, slight extension and external rotation.", procedure: "Patient abducts leg against gravity/resistance.", positive_finding: "Weakness or substitution from TFL (hip flexion + IR).", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Slight extension/ER isolates glute med from TFL.", related_impairments: ["Gluteal Tendinopathy", "Lateral Hip Pain"], related_muscles: ["Gluteus Medius"], related_exercises: ["Side Plank Hip Abduction", "Clamshell"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Strong" },
  { id: 50036, name: "Prone Hip Extension MMT (Kendall)", region: "Hip", category: "MMT", condition: "Gluteus Maximus Weakness", purpose: "Isolate gluteus maximus strength.", position: "Prone with knee flexed 90° (minimises hamstring).", procedure: "Patient lifts thigh from plinth against resistance.", positive_finding: "Weakness or hamstring substitution.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Knee flexion isolates glute max from hamstrings.", related_impairments: ["Glute Inhibition", "LBP"], related_muscles: ["Gluteus Maximus"], related_exercises: ["Glute Bridge", "Hip Thrust"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Strong" },
  { id: 50037, name: "Pace's Sign", region: "Hip", category: "MMT", condition: "Piriformis Syndrome", purpose: "Provoke piriformis with resisted abduction.", position: "Seated.", procedure: "Patient resists hip abduction and external rotation against examiner pressure.", positive_finding: "Pain/weakness in deep buttock.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Combine with FAIR + Beatty for piriformis cluster.", related_impairments: ["Piriformis Syndrome"], related_muscles: ["Piriformis"], related_exercises: ["Piriformis Stretch"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50038, name: "Beatty Test", region: "Hip", category: "Provocation", condition: "Piriformis Syndrome", purpose: "Reproduce piriformis pain.", position: "Side-lying with affected side up, knee flexed and resting on plinth.", procedure: "Patient lifts and holds upper knee above plinth.", positive_finding: "Deep buttock pain.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Complements FAIR test.", related_impairments: ["Piriformis Syndrome"], related_muscles: ["Piriformis"], related_exercises: ["Piriformis Stretch"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50039, name: "Single-Leg Decline Squat", region: "Knee", category: "Functional", condition: "Patellar Tendinopathy", purpose: "Provoke patellar tendon under load.", position: "Standing on 25° decline board.", procedure: "Patient performs single-leg squat to ~60° knee flexion.", positive_finding: "Pain at inferior patellar pole (VAS rating).", sensitivity: "0.78", specificity: "0.82", clinical_pearls: "Decline angle increases patellar tendon load.", related_impairments: ["Patellar Tendinopathy"], related_muscles: ["Quadriceps Femoris", "Vastus Medialis"], related_exercises: ["Decline Squat (Eccentric)", "Heavy Slow Resistance"], source_books: ["Hattam & Smeatham"], evidence_level: "Strong" },
  { id: 50040, name: "VMO Activation Test", region: "Knee", category: "MMT", condition: "VMO Inhibition", purpose: "Assess VMO selective activation.", position: "Long sitting with rolled towel under knee.", procedure: "Patient performs terminal knee extension; palpate VMO timing/bulk.", positive_finding: "Delayed or absent VMO contraction relative to vastus lateralis.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Common in PFPS; debated as isolated training target.", related_impairments: ["Patellofemoral Pain"], related_muscles: ["Vastus Medialis"], related_exercises: ["Terminal Knee Extension", "Wall Squat"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Moderate" },
  { id: 50041, name: "Garrick Test", region: "Knee", category: "Provocation", condition: "Popliteus Strain", purpose: "Test popliteus integrity.", position: "Seated with knee flexed 90°.", procedure: "Patient resists internal rotation of tibia.", positive_finding: "Pain in posterolateral knee.", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Often missed cause of posterolateral knee pain.", related_impairments: ["Popliteus Strain", "PLC Injury"], related_muscles: ["Popliteus"], related_exercises: ["Popliteus Activation"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50042, name: "Resisted Dorsiflexion-Inversion (Tib Ant)", region: "Ankle & Foot", category: "MMT", condition: "Tibialis Anterior Strain / Foot Drop", purpose: "Isolate tibialis anterior.", position: "Seated, foot in dorsiflexion + inversion.", procedure: "Patient resists examiner pushing into plantarflexion + eversion.", positive_finding: "Weakness or pain over anterior tibial compartment.", sensitivity: "High", specificity: "High", clinical_pearls: "Key for foot drop / L4 radiculopathy screen.", related_impairments: ["Foot Drop", "Anterior Compartment Syndrome"], related_muscles: ["Tibialis Anterior"], related_exercises: ["Tib Ant Strengthening", "Dorsiflexion with Band"], source_books: ["Kendall — Muscles: Testing and Function"], evidence_level: "Strong" },
  { id: 50043, name: "Tibialis Posterior MMT", region: "Ankle & Foot", category: "MMT", condition: "Tibialis Posterior Tendinopathy / Dysfunction", purpose: "Isolate tibialis posterior.", position: "Seated with foot in plantarflexion + inversion.", procedure: "Patient resists eversion force.", positive_finding: "Pain along medial ankle/arch or weakness.", sensitivity: "High", specificity: "High", clinical_pearls: "Core test for adult acquired flatfoot deformity.", related_impairments: ["PTTD", "Acquired Flatfoot"], related_muscles: ["Tibialis Posterior"], related_exercises: ["Tib Post Strengthening", "Heel Raises with Inversion"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },
  { id: 50044, name: "Single-Heel Raise (Posterior Tibial)", region: "Ankle & Foot", category: "Functional", condition: "Tibialis Posterior Insufficiency", purpose: "Assess tibialis posterior function during heel raise.", position: "Standing on one leg.", procedure: "Patient performs single-leg heel raise; observe heel inversion.", positive_finding: "Inability to invert heel during raise = PTT dysfunction.", sensitivity: "0.90", specificity: "0.87", clinical_pearls: "Hallmark sign of PTTD stage II.", related_impairments: ["PTTD"], related_muscles: ["Tibialis Posterior"], related_exercises: ["Single-Heel Raise Progression"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },
  { id: 50045, name: "Too Many Toes Sign", region: "Ankle & Foot", category: "Postural", condition: "Tibialis Posterior Dysfunction / Pes Planus", purpose: "Visualise hindfoot valgus / forefoot abduction.", position: "Standing, examiner views from behind.", procedure: "Count visible toes lateral to heel.", positive_finding: ">3 toes visible = forefoot abduction (PTTD sign).", sensitivity: "High", specificity: "High", clinical_pearls: "Quick visual screen, combine with single-heel raise.", related_impairments: ["PTTD", "Acquired Flatfoot"], related_muscles: ["Tibialis Posterior"], related_exercises: ["Short Foot", "Tib Post Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" },
  { id: 50046, name: "Resisted Eversion (Peroneal)", region: "Ankle & Foot", category: "MMT", condition: "Peroneal Tendinopathy / Tear", purpose: "Isolate peroneal tendons.", position: "Seated, foot in plantarflexion + eversion.", procedure: "Patient resists inversion force.", positive_finding: "Pain along lateral ankle/peroneal sheath.", sensitivity: "High", specificity: "High", clinical_pearls: "Combine with palpation behind lateral malleolus.", related_impairments: ["Peroneal Tendinopathy", "Lateral Ankle Pain"], related_muscles: ["Peroneus Longus", "Peroneus Brevis", "Fibularis Longus", "Fibularis Brevis"], related_exercises: ["Peroneal Strengthening with Band"], source_books: ["Brotzman's Clinical Orthopaedic Rehabilitation"], evidence_level: "Strong" },
  { id: 50047, name: "Gastrocnemius Length Test", region: "Ankle & Foot", category: "Mobility", condition: "Gastrocnemius Tightness", purpose: "Quantify gastrocnemius length.", position: "Supine with knee extended.", procedure: "Examiner passively dorsiflexes ankle with subtalar joint neutral.", positive_finding: "<10° dorsiflexion with knee straight (compare to bent-knee).", sensitivity: "Moderate", specificity: "Moderate", clinical_pearls: "Differentiate from soleus by knee position (knee straight = gastroc).", related_impairments: ["Equinus", "Plantar Fasciitis", "Achilles Tendinopathy"], related_muscles: ["Gastrocnemius"], related_exercises: ["Calf Stretch (Knee Straight)"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50048, name: "Soleus Length Test (Bent-Knee)", region: "Ankle & Foot", category: "Mobility", condition: "Soleus Tightness", purpose: "Isolate soleus length.", position: "Supine or kneeling.", procedure: "Dorsiflex ankle with knee flexed 90° (eliminates gastroc).", positive_finding: "<20° dorsiflexion with knee bent.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Knee flexion eliminates gastroc — true soleus length.", related_impairments: ["Achilles Tendinopathy", "Equinus"], related_muscles: ["Soleus"], related_exercises: ["Soleus Stretch (Bent Knee)"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50049, name: "FHL Resisted Test", region: "Ankle & Foot", category: "MMT", condition: "FHL Tendinopathy / Dancer's Tendinitis", purpose: "Isolate flexor hallucis longus.", position: "Seated with foot off plinth edge.", procedure: "Patient resists hallux extension while plantarflexing big toe.", positive_finding: "Pain along posteromedial ankle / behind medial malleolus.", sensitivity: "Moderate", specificity: "High", clinical_pearls: "Common in ballet dancers ('dancer's tendinitis').", related_impairments: ["FHL Tendinopathy"], related_muscles: ["Flexor Hallucis Longus"], related_exercises: ["Toe Flexion with Theraband"], source_books: ["Hattam & Smeatham"], evidence_level: "Moderate" },
  { id: 50050, name: "EHL MMT", region: "Ankle & Foot", category: "MMT", condition: "L5 Radiculopathy / EHL Weakness", purpose: "Test extensor hallucis longus (key L5 myotome).", position: "Seated.", procedure: "Patient resists examiner pushing big toe into flexion.", positive_finding: "Weakness compared with opposite side.", sensitivity: "High", specificity: "High", clinical_pearls: "Key myotome screen for L5 radiculopathy.", related_impairments: ["L5 Radiculopathy", "Foot Drop"], related_muscles: ["Extensor Hallucis Longus"], related_exercises: ["Hallux Extension Strengthening"], source_books: ["Magee's Orthopedic Physical Assessment"], evidence_level: "Strong" }
];

export const specialTestRegions = [...new Set(specialTests.map(t => t.region))].sort();
export const specialTestCategories = [...new Set(specialTests.map(t => t.category))].sort();
