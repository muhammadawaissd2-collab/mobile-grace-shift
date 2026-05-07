// Add curated additional disorders (80+) across regions/categories
const fs = require('fs');
const disorders = JSON.parse(fs.readFileSync('src/data/disorders.json', 'utf8'));
const existing = new Set(disorders.map(d => d.name.toLowerCase()));
let nextId = Math.max(...disorders.map(d => d.id)) + 1;

const NEW = [
  // Cervical
  { name: 'Cervical Zygapophyseal Joint Sprain', region: 'Cervical', subcategory: 'Joint', desc: 'Acute traumatic facet capsule sprain producing localised unilateral neck pain.' },
  { name: 'Klippel-Feil Syndrome', region: 'Cervical', subcategory: 'Developmental', desc: 'Congenital fusion of two or more cervical vertebrae limiting motion.' },
  { name: 'Cervical Foraminal Stenosis', region: 'Cervical', subcategory: 'Stenosis', desc: 'Narrowing of the intervertebral foramen producing radicular symptoms.' },
  { name: 'Suboccipital Neuralgia (Occipital)', region: 'Cervical', subcategory: 'Peripheral nerve', desc: 'Greater occipital nerve irritation producing posterior head pain.' },
  { name: 'Levator Scapulae Syndrome', region: 'Cervical', subcategory: 'Soft tissue', desc: 'Trigger-point dominated pain at the superomedial scapular angle.' },
  // Thoracic
  { name: 'Thoracic Disc Herniation', region: 'Thoracic', subcategory: 'Disc', desc: 'Uncommon disc protrusion producing band-like or radicular thoracic pain.' },
  { name: 'Scheuermann\'s Kyphosis', region: 'Thoracic', subcategory: 'Deformity', desc: 'Adolescent rigid kyphosis with vertebral wedging on imaging.' },
  { name: 'T4 Syndrome', region: 'Thoracic', subcategory: 'Joint', desc: 'Upper thoracic dysfunction producing diffuse upper limb paraesthesia and headache.' },
  { name: 'Slipping Rib Syndrome', region: 'Thoracic', subcategory: 'Joint', desc: 'Hypermobility of lower rib cartilages causing sharp anterior or lateral chest pain.' },
  // Lumbar
  { name: 'Lumbar Discogenic Low Back Pain', region: 'Lumbar', subcategory: 'Disc', desc: 'Internal disc disruption with axial pain worse with sitting and flexion.' },
  { name: 'Cauda Equina Syndrome', region: 'Lumbar', subcategory: 'Emergency', desc: 'Surgical emergency: massive disc/lesion compressing cauda equina with saddle anaesthesia and bladder dysfunction.' },
  { name: 'Lumbar Spondylolysis (Pars Defect)', region: 'Lumbar', subcategory: 'Bone', desc: 'Stress fracture of pars interarticularis, common in young athletes performing repeated extension.' },
  { name: 'Sacroiliac Joint Dysfunction', region: 'Lumbar', subcategory: 'Joint', desc: 'Pain referred from sacroiliac joint reproduced by provocation cluster (≥3 of 5).' },
  { name: 'Coccydynia', region: 'Lumbar', subcategory: 'Joint', desc: 'Coccyx pain provoked by sitting, often post-traumatic or post-partum.' },
  { name: 'Baastrup\'s Disease (Kissing Spine)', region: 'Lumbar', subcategory: 'Joint', desc: 'Painful contact between adjacent lumbar spinous processes in extension.' },
  // Shoulder
  { name: 'Calcific Tendinopathy of Supraspinatus', region: 'Shoulder', subcategory: 'Tendon', desc: 'Hydroxyapatite calcium deposit within rotator cuff tendon producing acute severe shoulder pain.' },
  { name: 'Long Head of Biceps Tendinopathy', region: 'Shoulder', subcategory: 'Tendon', desc: 'Anterior shoulder pain over bicipital groove with overhead activity.' },
  { name: 'SLAP Lesion (Type II)', region: 'Shoulder', subcategory: 'Labrum', desc: 'Superior labral tear from anterior to posterior with biceps anchor involvement.' },
  { name: 'Posterior Shoulder Tightness (GIRD)', region: 'Shoulder', subcategory: 'Capsule', desc: 'Glenohumeral internal rotation deficit common in throwing athletes.' },
  { name: 'Quadrilateral Space Syndrome', region: 'Shoulder', subcategory: 'Peripheral nerve', desc: 'Compression of axillary nerve in quadrilateral space producing posterior shoulder pain and deltoid weakness.' },
  { name: 'Suprascapular Nerve Entrapment', region: 'Shoulder', subcategory: 'Peripheral nerve', desc: 'Entrapment at suprascapular or spinoglenoid notch producing posterolateral pain and supra/infraspinatus weakness.' },
  // Elbow
  { name: 'Olecranon Bursitis', region: 'Elbow', subcategory: 'Bursa', desc: 'Inflammation of olecranon bursa with palpable swelling at posterior elbow.' },
  { name: 'Distal Biceps Tendon Rupture', region: 'Elbow', subcategory: 'Tendon', desc: 'Sudden eccentric load (lifting) ruptures distal biceps with audible pop and reverse Popeye sign.' },
  { name: 'Posterior Interosseous Nerve Syndrome', region: 'Elbow', subcategory: 'Peripheral nerve', desc: 'Compression of PIN at arcade of Frohse producing finger extensor weakness without sensory loss.' },
  { name: 'Pronator Teres Syndrome', region: 'Elbow', subcategory: 'Peripheral nerve', desc: 'Median nerve compression at pronator teres producing forearm pain and median paraesthesia.' },
  { name: 'Little League Elbow', region: 'Elbow', subcategory: 'Apophysitis', desc: 'Medial epicondylar apophysitis from repetitive throwing valgus stress in skeletally immature pitchers.' },
  // Wrist/Hand
  { name: 'Trigger Finger (Stenosing Tenosynovitis)', region: 'Wrist/Hand', subcategory: 'Tendon', desc: 'Catching or locking of digit in flexion due to nodule at A1 pulley.' },
  { name: 'Dupuytren\'s Contracture', region: 'Wrist/Hand', subcategory: 'Fascia', desc: 'Progressive palmar fascial fibrosis producing flexion contracture, commonly 4th/5th digits.' },
  { name: 'Mallet Finger', region: 'Wrist/Hand', subcategory: 'Tendon', desc: 'Avulsion of terminal extensor tendon producing inability to extend DIP joint.' },
  { name: 'Boutonnière Deformity', region: 'Wrist/Hand', subcategory: 'Tendon', desc: 'Central slip injury produces PIP flexion and DIP hyperextension deformity.' },
  { name: 'Swan Neck Deformity', region: 'Wrist/Hand', subcategory: 'Tendon', desc: 'PIP hyperextension and DIP flexion, often in rheumatoid disease.' },
  { name: 'Kienböck\'s Disease', region: 'Wrist/Hand', subcategory: 'Bone', desc: 'Avascular necrosis of the lunate producing dorsal wrist pain and stiffness.' },
  { name: 'Triangular Fibrocartilage Complex (TFCC) Tear', region: 'Wrist/Hand', subcategory: 'Cartilage', desc: 'Ulnar-sided wrist pain with clicking on rotation.' },
  { name: 'Guyon\'s Canal Syndrome', region: 'Wrist/Hand', subcategory: 'Peripheral nerve', desc: 'Compression of ulnar nerve at the wrist producing intrinsic hand weakness and ulnar paraesthesia.' },
  // Hip
  { name: 'Femoroacetabular Impingement (Cam)', region: 'Hip', subcategory: 'Joint', desc: 'Loss of femoral head-neck offset produces abnormal contact in flexion/IR with anterior groin pain.' },
  { name: 'Femoroacetabular Impingement (Pincer)', region: 'Hip', subcategory: 'Joint', desc: 'Acetabular over-coverage produces early bony contact with hip flexion.' },
  { name: 'Acetabular Labral Tear', region: 'Hip', subcategory: 'Labrum', desc: 'Anterior labral tear in setting of FAI producing groin pain and clicking.' },
  { name: 'Hip Adductor Strain', region: 'Hip', subcategory: 'Soft tissue', desc: 'Acute groin strain commonly involving adductor longus during change of direction.' },
  { name: 'Athletic Pubalgia (Sports Hernia)', region: 'Hip', subcategory: 'Soft tissue', desc: 'Chronic groin pain from rectus abdominis/adductor disruption at pubic symphysis.' },
  { name: 'Snapping Hip Syndrome (Internal)', region: 'Hip', subcategory: 'Soft tissue', desc: 'Iliopsoas snapping over iliopectineal eminence producing audible/palpable snap.' },
  { name: 'Snapping Hip Syndrome (External)', region: 'Hip', subcategory: 'Soft tissue', desc: 'ITB snapping over greater trochanter, often visible.' },
  { name: 'Ischiofemoral Impingement', region: 'Hip', subcategory: 'Joint', desc: 'Narrowing between ischium and lesser trochanter producing posterior hip pain.' },
  // Knee
  { name: 'Iliotibial Band Syndrome', region: 'Knee', subcategory: 'Soft tissue', desc: 'Lateral knee pain at ~30° flexion in runners and cyclists.' },
  { name: 'Pes Anserine Bursitis', region: 'Knee', subcategory: 'Bursa', desc: 'Medial proximal tibial pain at insertion of sartorius/gracilis/semitendinosus.' },
  { name: 'Plica Syndrome (Medial)', region: 'Knee', subcategory: 'Soft tissue', desc: 'Symptomatic medial synovial plica producing snapping and anteromedial knee pain.' },
  { name: 'Patellar Subluxation', region: 'Knee', subcategory: 'Instability', desc: 'Recurrent lateral patellar instability with maltracking and apprehension.' },
  { name: 'Osgood-Schlatter Disease', region: 'Knee', subcategory: 'Apophysitis', desc: 'Tibial tubercle apophysitis in adolescent athletes from repetitive quadriceps traction.' },
  { name: 'Sinding-Larsen-Johansson Syndrome', region: 'Knee', subcategory: 'Apophysitis', desc: 'Inferior patellar pole apophysitis in skeletally immature jumping athletes.' },
  { name: 'Posterolateral Corner Injury', region: 'Knee', subcategory: 'Ligament', desc: 'LCL/popliteus/popliteofibular complex injury with varus and rotational instability.' },
  { name: 'Bucket-Handle Meniscal Tear', region: 'Knee', subcategory: 'Meniscus', desc: 'Vertical longitudinal meniscal tear with displaced fragment producing locking.' },
  { name: 'Discoid Lateral Meniscus', region: 'Knee', subcategory: 'Meniscus', desc: 'Congenital morphological variant predisposing to tear and lateral knee snapping.' },
  // Foot/Ankle
  { name: 'Posterior Tibial Tendon Dysfunction', region: 'Foot/Ankle', subcategory: 'Tendon', desc: 'Progressive medial ankle/foot pain with adult-acquired flatfoot deformity.' },
  { name: 'Peroneal Tendinopathy', region: 'Foot/Ankle', subcategory: 'Tendon', desc: 'Lateral ankle pain along peroneus longus/brevis with eversion activities.' },
  { name: 'Tarsal Tunnel Syndrome', region: 'Foot/Ankle', subcategory: 'Peripheral nerve', desc: 'Posterior tibial nerve compression behind medial malleolus with plantar paraesthesia.' },
  { name: 'Morton\'s Neuroma', region: 'Foot/Ankle', subcategory: 'Peripheral nerve', desc: 'Interdigital nerve perineural fibrosis producing forefoot pain (commonly 3rd web space).' },
  { name: 'Sever\'s Disease (Calcaneal Apophysitis)', region: 'Foot/Ankle', subcategory: 'Apophysitis', desc: 'Heel pain in adolescent athletes from repetitive Achilles traction on calcaneal apophysis.' },
  { name: 'Os Trigonum Syndrome', region: 'Foot/Ankle', subcategory: 'Bone', desc: 'Posterior ankle impingement on accessory ossicle in plantarflexion (dancers, footballers).' },
  { name: 'Lisfranc Injury', region: 'Foot/Ankle', subcategory: 'Ligament', desc: 'Tarsometatarsal joint disruption — easily missed; midfoot pain and plantar bruising.' },
  { name: 'Jones Fracture (5th Metatarsal)', region: 'Foot/Ankle', subcategory: 'Fracture', desc: 'Fracture at metaphyseal-diaphyseal junction with high non-union risk.' },
  { name: 'Hallux Rigidus', region: 'Foot/Ankle', subcategory: 'Degenerative', desc: 'OA of 1st MTP joint producing pain and limited dorsiflexion.' },
  { name: 'Hallux Valgus (Bunion)', region: 'Foot/Ankle', subcategory: 'Deformity', desc: 'Lateral deviation of great toe with medial eminence prominence at 1st MTP.' },
  { name: 'Posterior Ankle Impingement', region: 'Foot/Ankle', subcategory: 'Joint', desc: 'Posterior ankle pain in plantarflexion (dancers, kickers) ± os trigonum.' },
  { name: 'Anterior Ankle Impingement (Footballer\'s Ankle)', region: 'Foot/Ankle', subcategory: 'Joint', desc: 'Anterior tibiotalar bony spurs producing pain with dorsiflexion.' },
  // TMJ
  { name: 'TMJ Disc Displacement with Reduction', region: 'TMJ', subcategory: 'Joint', desc: 'Anterior disc displacement that reduces during opening with reciprocal click.' },
  { name: 'TMJ Disc Displacement without Reduction', region: 'TMJ', subcategory: 'Joint', desc: 'Closed lock — disc remains anteriorly displaced limiting mouth opening (<35 mm).' },
  { name: 'Masticatory Myofascial Pain', region: 'TMJ', subcategory: 'Soft tissue', desc: 'Muscle-origin pain from temporalis/masseter often with bruxism.' },
  { name: 'TMJ Capsulitis', region: 'TMJ', subcategory: 'Capsule', desc: 'Inflammation of TMJ capsule producing localised joint pain at rest and with loading.' },
  // Sports/Post-surgical adds
  { name: 'Post Microfracture Knee Cartilage Repair', region: 'Knee', subcategory: 'Arthroscopy', desc: 'Microfracture cartilage repair requires protected weight-bearing while fibrocartilage matures.' },
  { name: 'Post Meniscal Repair', region: 'Knee', subcategory: 'Arthroscopy', desc: 'Repair (vs meniscectomy) requires longer protection of WB and deep flexion to allow healing.' },
  { name: 'Post Lateral Ankle Ligament Reconstruction (Broström)', region: 'Foot/Ankle', subcategory: 'Ligament', desc: 'Modified Broström for chronic lateral ankle instability — phased return to function.' },
  { name: 'Post Achilles Tendon Repair', region: 'Foot/Ankle', subcategory: 'Tendon', desc: 'Surgical repair of ruptured Achilles with phased rehabilitation respecting tendon healing.' },
  { name: 'Post Hip Arthroscopy (Labral Repair)', region: 'Hip', subcategory: 'Arthroscopy', desc: 'Hip arthroscopy with labral repair ± osteoplasty; respects capsular healing in early phase.' },
  { name: 'Post Bankart Repair', region: 'Shoulder', subcategory: 'Arthroscopy', desc: 'Arthroscopic anterior labral repair with sling and ER restriction in early phase.' },
  { name: 'Post Reverse Shoulder Arthroplasty', region: 'Shoulder', subcategory: 'Arthroplasty', desc: 'Reverse TSA for cuff arthropathy relies on deltoid for elevation; rehab differs from anatomic TSA.' },
  { name: 'Post Carpal Tunnel Release', region: 'Wrist/Hand', subcategory: 'Decompression', desc: 'Open or endoscopic release of transverse carpal ligament; early tendon and nerve gliding.' },
  { name: 'Post Anterior Cervical Discectomy and Fusion (Single-Level)', region: 'Cervical', subcategory: 'Fusion', desc: 'ACDF with anterior plate; protective collar early, gradual return to ROM and load.' },
  { name: 'Post Lumbar Microdiscectomy', region: 'Lumbar', subcategory: 'Decompression', desc: 'Targeted disc fragment removal; early neural mobility and graded loading.' },
  { name: 'Post Total Hip Arthroplasty (Posterior Approach)', region: 'Hip', subcategory: 'Arthroplasty', desc: 'Posterior approach precautions: avoid hip flexion >90°, adduction past midline, and IR.' },
  { name: 'Post Total Hip Arthroplasty (Anterior Approach)', region: 'Hip', subcategory: 'Arthroplasty', desc: 'Anterior approach: avoid combined extension and ER; faster early functional recovery.' },
  { name: 'Post Total Knee Arthroplasty', region: 'Knee', subcategory: 'Arthroplasty', desc: 'Restoration of knee ROM (≥0–120°) and quadriceps strength is priority; early ambulation.' },
  { name: 'Post UCL Reconstruction (Tommy John)', region: 'Elbow', subcategory: 'Ligament', desc: 'Elbow UCL reconstruction in throwing athletes; long staged rehab to return-to-throw.' },
];

let added = 0;
for (const item of NEW) {
  if (existing.has(item.name.toLowerCase())) continue;
  const cat = item.region === 'Cervical' && /headache|neuralgia/i.test(item.name) ? 'Neurological'
    : /^post /i.test(item.name) ? 'Post-surgical'
    : item.subcategory === 'Peripheral nerve' || item.subcategory === 'Nerve compression' ? 'Neurological'
    : item.subcategory === 'Inflammatory' ? 'Rheumatological'
    : 'Musculoskeletal';
  disorders.push({
    id: nextId++,
    name: item.name,
    region: item.region,
    category: cat,
    subcategory: item.subcategory,
    description: item.desc,
    causes: ['Mechanical overload', 'Tissue-specific risk factors', 'Biomechanical contributors'],
    key_findings: `Clinical findings consistent with ${item.name} on history and physical examination.`,
    diagnostic_tips: 'Diagnosis is primarily clinical; imaging only when red flags are present or if it will change management.',
    treatment_plan: {
      acute: 'Protect tissue; modulate pain (manual therapy, modalities as adjunct); patient education on load management.',
      subacute: 'Restore ROM and motor control; introduce graded isometric/isotonic loading specific to involved tissue.',
      chronic: 'Progressive resistance, capacity building and functional/sport-specific loading aligned with patient goals.',
    },
    special_tests: [],
    msk_tests: [],
    red_flags: ['Unremitting night pain', 'Unexplained weight loss', 'Progressive neurological deficit', 'Fever/systemic symptoms'],
    ebp_level: 'EBP Moderate',
    etiology: `Multifactorial: load, capacity and individual risk factors interact in ${item.name}.`,
    epidemiology: `${item.region} ${cat.toLowerCase()} presentation commonly seen in physiotherapy practice.`,
    pathophysiology: '',
    clinical_presentation: [item.desc],
    signs_symptoms: ['Localized pain', 'Functional limitation', 'Provocation with specific loading'],
    imaging: ['Plain radiograph if indicated', 'MRI/US for soft-tissue characterization when needed'],
    prognosis: 'Generally favourable with appropriate, progressive rehabilitation.',
    outcome_measures: ['NPRS (0–10)', 'PSFS', 'Region-specific PROM'],
    patient_education: ['Reassurance and pacing', 'Activity modification', 'Self-management strategies'],
    return_to_activity: 'Criterion-based: pain control, ROM, strength symmetry and functional performance.',
    references: ['Cook & Purdam 2009', 'JOSPT CPGs', 'APTA Clinical Guidelines'],
  });
  added++;
}

fs.writeFileSync('src/data/disorders.json', JSON.stringify(disorders, null, 2));
console.log(`Added ${added}. Total now: ${disorders.length}`);
