/* Rewrites src/data/disorders.json with a curated, deduplicated set
   using standard PT taxonomy:
   Regions: Cervical, Thoracic, Lumbar, Shoulder, Elbow, Wrist/Hand, Hip, Knee, Foot/Ankle, TMJ
   Categories: Musculoskeletal, Neurological, Rheumatological, Post-surgical, Sports
*/
const fs = require('fs');
const path = require('path');

const REGIONS = ["Cervical","Thoracic","Lumbar","Shoulder","Elbow","Wrist/Hand","Hip","Knee","Foot/Ankle","TMJ"];
const CATEGORIES = ["Musculoskeletal","Neurological","Rheumatological","Post-surgical","Sports"];

// Curated list — name, region, category, subcategory, short description
const RAW = [
  // --- CERVICAL ---
  ["Cervical Facet Joint Syndrome","Cervical","Musculoskeletal","Joint","Facet-mediated cervical pain with extension/rotation provocation."],
  ["Cervical Disc Herniation","Cervical","Musculoskeletal","Disc","Posterolateral disc protrusion causing radicular arm symptoms."],
  ["Cervical Radiculopathy","Cervical","Neurological","Nerve root","Compression of cervical nerve root producing dermatomal pain, weakness."],
  ["Cervical Myelopathy","Cervical","Neurological","Spinal cord","Spinal cord compression with UMN signs and gait disturbance."],
  ["Cervicogenic Headache","Cervical","Musculoskeletal","Headache","Headache referred from upper cervical (C1–C3) structures."],
  ["Whiplash Associated Disorder","Cervical","Musculoskeletal","Trauma","Acceleration–deceleration neck injury with multi-system symptoms."],
  ["Cervical Spondylosis","Cervical","Musculoskeletal","Degenerative","Age-related degeneration of cervical discs and facets."],
  ["Cervical Sprain/Strain","Cervical","Musculoskeletal","Soft tissue","Acute ligamentous or muscular injury of the neck."],
  ["Torticollis (Acute)","Cervical","Musculoskeletal","Soft tissue","Acute painful restriction with lateral flexion deformity."],
  ["Thoracic Outlet Syndrome","Cervical","Neurological","Nerve compression","Compression of brachial plexus/vessels at scalene/costoclavicular space."],
  ["Cervical Rheumatoid Arthritis","Cervical","Rheumatological","Inflammatory","Atlantoaxial instability and facet erosion in RA."],
  ["Post Cervical Fusion (ACDF)","Cervical","Post-surgical","Fusion","Rehabilitation following anterior cervical discectomy and fusion."],

  // --- THORACIC ---
  ["Thoracic Hyperkyphosis","Thoracic","Musculoskeletal","Postural","Increased thoracic curve with postural and mobility deficits."],
  ["Thoracic Facet Dysfunction","Thoracic","Musculoskeletal","Joint","Segmental hypomobility producing localized thoracic pain."],
  ["Costochondritis","Thoracic","Musculoskeletal","Joint","Inflammation of costochondral junctions causing anterior chest pain."],
  ["Rib Dysfunction","Thoracic","Musculoskeletal","Joint","Rib hypomobility with respiration-related pain."],
  ["T4 Syndrome","Thoracic","Neurological","Autonomic","Upper thoracic dysfunction producing glove-like UE paresthesia."],
  ["Scheuermann's Disease","Thoracic","Musculoskeletal","Developmental","Adolescent rigid hyperkyphosis with vertebral wedging."],
  ["Thoracic Disc Herniation","Thoracic","Musculoskeletal","Disc","Rare disc protrusion causing band-like trunk pain."],
  ["Ankylosing Spondylitis","Thoracic","Rheumatological","Inflammatory","Axial spondyloarthropathy with progressive spinal fusion."],
  ["Post Thoracotomy Syndrome","Thoracic","Post-surgical","Thoracic","Persistent intercostal pain after thoracic surgery."],

  // --- LUMBAR ---
  ["Lumbar Disc Herniation","Lumbar","Musculoskeletal","Disc","Nucleus pulposus displacement with possible nerve root contact."],
  ["Lumbar Radiculopathy (Sciatica)","Lumbar","Neurological","Nerve root","Radicular pain along sciatic distribution from nerve root irritation."],
  ["Lumbar Spinal Stenosis","Lumbar","Neurological","Stenosis","Central/foraminal narrowing with neurogenic claudication."],
  ["Lumbar Facet Syndrome","Lumbar","Musculoskeletal","Joint","Facet-mediated pain worse with extension and ipsilateral rotation."],
  ["Spondylolysis","Lumbar","Musculoskeletal","Bone","Pars interarticularis stress fracture, common in young athletes."],
  ["Spondylolisthesis","Lumbar","Musculoskeletal","Bone","Anterior translation of one vertebra over another."],
  ["Sacroiliac Joint Dysfunction","Lumbar","Musculoskeletal","Joint","SI joint pain with cluster-positive provocation tests."],
  ["Piriformis Syndrome","Lumbar","Neurological","Nerve compression","Sciatic nerve irritation by piriformis muscle."],
  ["Cauda Equina Syndrome","Lumbar","Neurological","Emergency","Compression of cauda equina — saddle anesthesia, bowel/bladder loss."],
  ["Non-Specific Low Back Pain","Lumbar","Musculoskeletal","Mechanical","Mechanical LBP without specific structural diagnosis."],
  ["Degenerative Disc Disease (Lumbar)","Lumbar","Musculoskeletal","Degenerative","Age-related disc dehydration and height loss."],
  ["Lumbar Sprain/Strain","Lumbar","Musculoskeletal","Soft tissue","Acute ligamentous/muscular lumbar injury."],
  ["Coccydynia","Lumbar","Musculoskeletal","Bone","Pain at the coccyx aggravated by sitting."],
  ["Post Lumbar Microdiscectomy","Lumbar","Post-surgical","Spine","Rehabilitation after lumbar discectomy."],
  ["Post Lumbar Fusion","Lumbar","Post-surgical","Fusion","Rehabilitation after lumbar interbody/posterolateral fusion."],
  ["Axial Spondyloarthritis","Lumbar","Rheumatological","Inflammatory","Inflammatory back pain in young adults with morning stiffness."],

  // --- SHOULDER ---
  ["Subacromial Pain Syndrome","Shoulder","Musculoskeletal","Tendon","Painful arc with rotator cuff/bursa irritation under acromion."],
  ["Rotator Cuff Tendinopathy","Shoulder","Musculoskeletal","Tendon","Degenerative tendinopathy of supraspinatus/infraspinatus."],
  ["Rotator Cuff Tear (Partial)","Shoulder","Musculoskeletal","Tendon","Partial-thickness cuff tear with weakness and pain."],
  ["Rotator Cuff Tear (Full-Thickness)","Shoulder","Musculoskeletal","Tendon","Full-thickness cuff tear with marked weakness."],
  ["Adhesive Capsulitis","Shoulder","Musculoskeletal","Capsule","Frozen shoulder with global capsular restriction."],
  ["Glenohumeral Osteoarthritis","Shoulder","Musculoskeletal","Degenerative","Cartilage loss and osteophytes at the GH joint."],
  ["AC Joint Sprain","Shoulder","Musculoskeletal","Joint","Acromioclavicular ligament injury (Rockwood I–VI)."],
  ["AC Joint Osteoarthritis","Shoulder","Musculoskeletal","Degenerative","Degenerative AC joint pain over the top of the shoulder."],
  ["SLAP Lesion","Shoulder","Sports","Labrum","Superior labrum anterior–posterior tear, often overhead athletes."],
  ["Bankart Lesion","Shoulder","Sports","Labrum","Anteroinferior labral tear after anterior dislocation."],
  ["Anterior Shoulder Instability","Shoulder","Musculoskeletal","Instability","Recurrent anterior GH subluxation/dislocation."],
  ["Multidirectional Instability","Shoulder","Musculoskeletal","Instability","Symptomatic instability in ≥2 directions."],
  ["Biceps Tendinopathy (LHB)","Shoulder","Musculoskeletal","Tendon","Long head of biceps tendinopathy in bicipital groove."],
  ["Calcific Tendinopathy","Shoulder","Musculoskeletal","Tendon","Calcium hydroxyapatite deposits in cuff tendons."],
  ["Scapular Dyskinesis","Shoulder","Musculoskeletal","Motor control","Altered scapulothoracic motion contributing to shoulder pain."],
  ["Post Rotator Cuff Repair","Shoulder","Post-surgical","Tendon","Rehabilitation following arthroscopic cuff repair."],
  ["Post Total Shoulder Arthroplasty","Shoulder","Post-surgical","Arthroplasty","Rehabilitation after anatomic/reverse TSA."],
  ["Throwing Shoulder (GIRD)","Shoulder","Sports","Capsule","Glenohumeral internal rotation deficit in overhead athletes."],

  // --- ELBOW ---
  ["Lateral Epicondylalgia","Elbow","Musculoskeletal","Tendon","Common extensor tendinopathy ('tennis elbow')."],
  ["Medial Epicondylalgia","Elbow","Musculoskeletal","Tendon","Common flexor–pronator tendinopathy ('golfer's elbow')."],
  ["Distal Biceps Tendinopathy/Rupture","Elbow","Musculoskeletal","Tendon","Distal biceps insertional pathology or rupture."],
  ["Olecranon Bursitis","Elbow","Musculoskeletal","Bursa","Inflammation of olecranon bursa — swelling at the elbow tip."],
  ["Cubital Tunnel Syndrome","Elbow","Neurological","Nerve compression","Ulnar nerve compression at the cubital tunnel."],
  ["Radial Tunnel Syndrome","Elbow","Neurological","Nerve compression","Posterior interosseous/radial nerve compression."],
  ["Elbow Osteoarthritis","Elbow","Musculoskeletal","Degenerative","Degenerative changes at humeroulnar/radiocapitellar joints."],
  ["UCL Sprain (Elbow)","Elbow","Sports","Ligament","Ulnar collateral ligament injury — overhead throwers."],
  ["Little Leaguer's Elbow","Elbow","Sports","Apophysitis","Medial epicondyle apophysitis in youth throwers."],
  ["Post Elbow Arthroscopy","Elbow","Post-surgical","Arthroscopy","Rehabilitation after elbow arthroscopic procedures."],

  // --- WRIST/HAND ---
  ["Carpal Tunnel Syndrome","Wrist/Hand","Neurological","Nerve compression","Median nerve compression at the carpal tunnel."],
  ["De Quervain's Tenosynovitis","Wrist/Hand","Musculoskeletal","Tendon","APL/EPB tenosynovitis at the radial styloid."],
  ["Trigger Finger","Wrist/Hand","Musculoskeletal","Tendon","Stenosing tenosynovitis at A1 pulley with catching."],
  ["TFCC Injury","Wrist/Hand","Musculoskeletal","Ligament","Triangular fibrocartilage complex tear — ulnar-sided wrist pain."],
  ["Scapholunate Ligament Injury","Wrist/Hand","Musculoskeletal","Ligament","SL ligament tear with dorsal radial wrist pain."],
  ["Wrist Osteoarthritis","Wrist/Hand","Musculoskeletal","Degenerative","Degenerative changes at radiocarpal/midcarpal joints."],
  ["CMC Osteoarthritis (Thumb)","Wrist/Hand","Musculoskeletal","Degenerative","Trapeziometacarpal joint OA."],
  ["Dupuytren's Contracture","Wrist/Hand","Musculoskeletal","Fascia","Palmar fascia thickening with finger flexion contracture."],
  ["Distal Radius Fracture (Post)","Wrist/Hand","Post-surgical","Fracture","Rehabilitation after Colles/Smith fracture management."],
  ["Mallet Finger","Wrist/Hand","Musculoskeletal","Tendon","Disruption of terminal extensor tendon at DIP."],
  ["Boutonnière Deformity","Wrist/Hand","Musculoskeletal","Tendon","Central slip injury with PIP flexion / DIP extension."],
  ["Rheumatoid Arthritis (Hand)","Wrist/Hand","Rheumatological","Inflammatory","Symmetric polyarthritis with MCP/PIP involvement."],

  // --- HIP ---
  ["Femoroacetabular Impingement","Hip","Musculoskeletal","Joint","Cam/pincer morphology causing labral/chondral injury."],
  ["Acetabular Labral Tear","Hip","Musculoskeletal","Labrum","Tear of acetabular labrum — groin pain, clicking."],
  ["Hip Osteoarthritis","Hip","Musculoskeletal","Degenerative","Degenerative changes of the hip joint."],
  ["Greater Trochanteric Pain Syndrome","Hip","Musculoskeletal","Tendon","Gluteus medius/minimus tendinopathy ± trochanteric bursitis."],
  ["Proximal Hamstring Tendinopathy","Hip","Musculoskeletal","Tendon","Insertional hamstring tendinopathy at ischial tuberosity."],
  ["Hip Adductor Strain","Hip","Sports","Soft tissue","Acute or chronic adductor longus injury."],
  ["Athletic Pubalgia (Sports Hernia)","Hip","Sports","Soft tissue","Lower abdominal/adductor injury without true hernia."],
  ["Iliopsoas Tendinopathy","Hip","Musculoskeletal","Tendon","Anterior hip pain with iliopsoas overload, snapping hip."],
  ["Snapping Hip Syndrome","Hip","Musculoskeletal","Soft tissue","Internal/external/intra-articular snapping at the hip."],
  ["Piriformis/Deep Gluteal Syndrome","Hip","Neurological","Nerve compression","Sciatic nerve entrapment in deep gluteal space."],
  ["Femoral Neck Stress Fracture","Hip","Sports","Bone","Stress fracture in runners — high-risk if superior cortex."],
  ["Post Total Hip Arthroplasty","Hip","Post-surgical","Arthroplasty","Rehabilitation after THA (anterior/posterior approach)."],
  ["Post Hip Arthroscopy (FAI)","Hip","Post-surgical","Arthroscopy","Rehabilitation after labral repair / FAI correction."],

  // --- KNEE ---
  ["Patellofemoral Pain Syndrome","Knee","Musculoskeletal","Joint","Anterior knee pain with stairs/squat/prolonged sitting."],
  ["Patellar Tendinopathy","Knee","Sports","Tendon","'Jumper's knee' — tendinopathy of patellar tendon."],
  ["Quadriceps Tendinopathy","Knee","Musculoskeletal","Tendon","Tendinopathy of quadriceps tendon at superior pole of patella."],
  ["IT Band Syndrome","Knee","Sports","Soft tissue","Lateral knee pain with running — distal IT band irritation."],
  ["Pes Anserine Bursitis/Tendinopathy","Knee","Musculoskeletal","Tendon","Medial knee pain at pes anserine insertion."],
  ["ACL Tear","Knee","Sports","Ligament","Anterior cruciate ligament rupture — pivoting injury."],
  ["PCL Tear","Knee","Sports","Ligament","Posterior cruciate injury — dashboard or fall on flexed knee."],
  ["MCL Sprain","Knee","Sports","Ligament","Medial collateral ligament sprain (Grade I–III)."],
  ["LCL Sprain","Knee","Sports","Ligament","Lateral collateral ligament sprain."],
  ["Medial Meniscus Tear","Knee","Musculoskeletal","Meniscus","Medial meniscus tear with joint line pain, mechanical symptoms."],
  ["Lateral Meniscus Tear","Knee","Musculoskeletal","Meniscus","Lateral meniscus tear with lateral joint line symptoms."],
  ["Knee Osteoarthritis","Knee","Musculoskeletal","Degenerative","Tibiofemoral and/or PF cartilage degeneration."],
  ["Osgood-Schlatter Disease","Knee","Sports","Apophysitis","Tibial tubercle apophysitis in adolescent athletes."],
  ["Sinding-Larsen-Johansson Syndrome","Knee","Sports","Apophysitis","Inferior patellar pole apophysitis in adolescents."],
  ["Patellar Instability/Dislocation","Knee","Musculoskeletal","Instability","Lateral patellar subluxation/dislocation."],
  ["Baker's Cyst","Knee","Musculoskeletal","Soft tissue","Popliteal cyst — posterior knee fullness."],
  ["Post ACL Reconstruction","Knee","Post-surgical","Ligament","Criterion-based rehabilitation after ACLR."],
  ["Post Meniscectomy/Repair","Knee","Post-surgical","Meniscus","Rehabilitation after partial meniscectomy or repair."],
  ["Post Total Knee Arthroplasty","Knee","Post-surgical","Arthroplasty","Rehabilitation after TKA."],

  // --- FOOT/ANKLE ---
  ["Lateral Ankle Sprain","Foot/Ankle","Sports","Ligament","ATFL ± CFL inversion injury."],
  ["High Ankle Sprain (Syndesmosis)","Foot/Ankle","Sports","Ligament","Tibiofibular syndesmotic injury — external rotation mechanism."],
  ["Chronic Ankle Instability","Foot/Ankle","Musculoskeletal","Instability","Recurrent giving way after ankle sprains."],
  ["Achilles Tendinopathy","Foot/Ankle","Musculoskeletal","Tendon","Mid-portion or insertional Achilles tendinopathy."],
  ["Achilles Tendon Rupture","Foot/Ankle","Sports","Tendon","Acute rupture — positive Thompson test."],
  ["Plantar Fasciopathy","Foot/Ankle","Musculoskeletal","Fascia","Plantar heel pain worse with first steps."],
  ["Posterior Tibial Tendon Dysfunction","Foot/Ankle","Musculoskeletal","Tendon","PTT insufficiency leading to acquired flatfoot."],
  ["Peroneal Tendinopathy","Foot/Ankle","Musculoskeletal","Tendon","Lateral ankle tendinopathy ± subluxation."],
  ["Tarsal Tunnel Syndrome","Foot/Ankle","Neurological","Nerve compression","Posterior tibial nerve compression at medial ankle."],
  ["Morton's Neuroma","Foot/Ankle","Neurological","Nerve","Interdigital nerve perineural fibrosis (commonly 3rd web)."],
  ["Hallux Valgus","Foot/Ankle","Musculoskeletal","Deformity","Valgus deviation of the great toe with bunion."],
  ["Hallux Rigidus","Foot/Ankle","Musculoskeletal","Degenerative","First MTP osteoarthritis with limited extension."],
  ["Metatarsal Stress Fracture","Foot/Ankle","Sports","Bone","Stress fracture commonly of 2nd/3rd metatarsal."],
  ["Sever's Disease","Foot/Ankle","Sports","Apophysitis","Calcaneal apophysitis in active children."],
  ["Ankle Osteoarthritis","Foot/Ankle","Musculoskeletal","Degenerative","Tibiotalar OA, often post-traumatic."],
  ["Post Ankle Lateral Ligament Reconstruction","Foot/Ankle","Post-surgical","Ligament","Rehabilitation after Broström repair."],
  ["Post Achilles Repair","Foot/Ankle","Post-surgical","Tendon","Rehabilitation after Achilles tendon repair."],

  // --- TMJ ---
  ["TMJ Disc Displacement (with Reduction)","TMJ","Musculoskeletal","Joint","Reciprocal click with disc reduction during opening."],
  ["TMJ Disc Displacement (without Reduction)","TMJ","Musculoskeletal","Joint","Closed lock — restricted opening, deflection to affected side."],
  ["Myogenous TMD","TMJ","Musculoskeletal","Soft tissue","Masticatory muscle pain and dysfunction."],
  ["TMJ Osteoarthritis","TMJ","Musculoskeletal","Degenerative","Degenerative changes of the TMJ with crepitus."],
  ["TMJ Hypermobility/Subluxation","TMJ","Musculoskeletal","Instability","Excessive condylar translation, may lock open."],
  ["Bruxism-related TMD","TMJ","Musculoskeletal","Soft tissue","Parafunctional clenching/grinding driving TMD symptoms."],
];

function pPlan(region, category){
  return {
    acute: "Protect tissue; modulate pain (manual therapy, modalities as adjunct); patient education on load management.",
    subacute: "Restore ROM and motor control; introduce graded isometric/isotonic loading specific to involved tissue.",
    chronic: "Progressive resistance, capacity building and functional/sport-specific loading aligned with patient goals."
  };
}

function build(item, idx){
  const [name, region, category, subcategory, description] = item;
  return {
    id: idx + 1,
    name,
    region,
    category,
    subcategory,
    description,
    causes: ["Mechanical overload","Tissue-specific risk factors","Biomechanical contributors"],
    key_findings: `Clinical findings consistent with ${name.toLowerCase()} on history and physical examination.`,
    diagnostic_tips: "Diagnosis is primarily clinical; imaging only when red flags present or if it will change management.",
    treatment_plan: pPlan(region, category),
    special_tests: [],
    msk_tests: [],
    red_flags: ["Unremitting night pain","Unexplained weight loss","Progressive neurological deficit","Fever/systemic symptoms"],
    ebp_level: "EBP Moderate",
    etiology: `Multifactorial; load, capacity and individual risk factors interact in ${name}.`,
    epidemiology: `${region} ${category.toLowerCase()} presentation commonly seen in physiotherapy practice.`,
    pathophysiology: "See condition-specific tissue model (e.g., tendinopathy continuum, OA process, nerve compression).",
    clinical_presentation: [description],
    signs_symptoms: ["Localized pain","Functional limitation","Provocation with specific loading"],
    imaging: ["Plain radiograph if indicated","MRI/US for soft-tissue characterization when needed"],
    prognosis: "Generally favourable with appropriate, progressive rehabilitation.",
    outcome_measures: ["NPRS (0–10)","PSFS","Region-specific PROM"],
    patient_education: ["Reassurance and pacing","Activity modification","Self-management strategies"],
    return_to_activity: "Criterion-based: pain control, ROM, strength symmetry and functional performance.",
    references: ["Cook & Purdam 2009","JOSPT CPGs","APTA Clinical Guidelines"],
  };
}

// Dedupe by lowercase name
const seen = new Set();
const out = [];
RAW.forEach((it) => {
  const key = it[0].trim().toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  out.push(build(it, out.length));
});

const target = path.join(__dirname,'..','src','data','disorders.json');
fs.writeFileSync(target, JSON.stringify(out, null, 2));
console.log(`Wrote ${out.length} disorders to ${target}`);
console.log('Regions:', [...new Set(out.map(o=>o.region))].join(', '));
console.log('Categories:', [...new Set(out.map(o=>o.category))].join(', '));
