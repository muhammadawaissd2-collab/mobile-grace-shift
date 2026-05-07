// v3: condition-specific tests/exercises, anatomy/mechanism/pathology details
const fs = require('fs');

const disorders = JSON.parse(fs.readFileSync('src/data/disorders.json', 'utf8'));
const exercises = JSON.parse(fs.readFileSync('src/data/exercises.json', 'utf8'));
const tests = JSON.parse(fs.readFileSync('/tmp/tests_index.json', 'utf8'));

// ---------- ANATOMY by region ----------
const ANATOMY = {
  'Cervical': 'Seven cervical vertebrae (C1–C7) form a lordotic curve. C1 (atlas) and C2 (axis) provide ~50% of cervical rotation. Facet joints orient ~45° in lower segments allowing flexion/extension and rotation. Stabilised by deep cervical flexors (longus colli/capitis), suboccipitals, scalenes, SCM and posterior cervical extensors. Neural structures: spinal cord, exiting nerve roots C1–C8 and the vertebral artery passing through transverse foramina C6–C1.',
  'Thoracic': 'Twelve thoracic vertebrae articulate with ribs via costovertebral and costotransverse joints, producing a kyphotic curve. Facet orientation favours rotation while limiting flexion/extension. Stabilised by erector spinae, multifidus, rotatores, rhomboids, middle/lower trapezius and the diaphragm/intercostals.',
  'Lumbar': 'Five lumbar vertebrae (L1–L5) form a lordotic curve over the sacrum. Sagittally oriented facets favour flexion/extension and limit rotation. Intervertebral discs (anulus fibrosus + nucleus pulposus) bear axial load. Stabilised by multifidus, transversus abdominis, erector spinae, quadratus lumborum and the thoracolumbar fascia. Cauda equina contains L2–S5 nerve roots.',
  'Shoulder': 'Glenohumeral joint is a shallow ball-and-socket relying on the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis), labrum and capsuloligamentous complex. Scapulothoracic articulation, AC and SC joints contribute to ~60° scapular rotation during arm elevation (scapulohumeral rhythm). Subacromial space contains supraspinatus tendon, long head of biceps and subacromial bursa.',
  'Elbow': 'Hinge (ulnohumeral, radiohumeral) and pivot (proximal radioulnar) joints. Medial collateral ligament (UCL) resists valgus; lateral collateral ligament complex resists varus and posterolateral rotatory instability. Common extensor origin (lateral epicondyle) and common flexor origin (medial epicondyle). Ulnar nerve passes through cubital tunnel.',
  'Wrist/Hand': 'Eight carpal bones in two rows form the radiocarpal and midcarpal joints. The TFCC stabilises the distal radioulnar joint. The carpal tunnel (transverse carpal ligament + carpal arch) houses the median nerve and 9 flexor tendons. Intrinsic muscles (thenar, hypothenar, lumbricals, interossei) drive fine motor control.',
  'Hip': 'Deep ball-and-socket joint with a fibrocartilaginous labrum. Iliofemoral, pubofemoral and ischiofemoral ligaments form a strong capsule. Primary movers: gluteals, iliopsoas, adductors, hip rotators (piriformis et al.), and hamstrings. Vascular supply via medial/lateral femoral circumflex arteries — clinically relevant in femoral neck fractures.',
  'Knee': 'Modified hinge: tibiofemoral and patellofemoral joints. Static stabilisers: ACL/PCL, MCL/LCL, menisci, capsule. Dynamic stabilisers: quadriceps (especially VMO for patellar tracking), hamstrings, popliteus, gastrocnemius. Q-angle and patellofemoral alignment influence patellar tracking and load distribution.',
  'Foot/Ankle': 'Talocrural (mortise) joint provides dorsiflexion/plantarflexion; subtalar joint controls inversion/eversion. Lateral ligament complex (ATFL > CFL > PTFL) most commonly injured. Plantar fascia, intrinsic foot muscles and three arches (medial/lateral longitudinal, transverse) support load transfer. Gastroc-soleus complex inserts via Achilles tendon.',
  'TMJ': 'Bilateral condyle-fossa joint with an interposed articular disc; allows rotation (early opening) then translation (full opening). Stabilised by temporomandibular ligament, joint capsule, and masticatory muscles (temporalis, masseter, medial/lateral pterygoid). Closely linked to upper cervical posture and the trigeminal nerve.',
};

// ---------- MECHANISM (by name keywords + region/category fallback) ----------
function buildMechanism(d) {
  const n = d.name.toLowerCase();
  // Specific patterns
  const map = [
    [/whiplash/, 'Sudden acceleration–deceleration force (typically rear-end MVA) producing rapid cervical hyperextension followed by hyperflexion. Strains facet capsules, anterior longitudinal ligament, intervertebral disc and deep cervical musculature; can sensitise nociceptors and produce central sensitisation.'],
    [/disc herniation|disc prolapse/, 'Repetitive flexion-rotation loading or sudden compressive force causes nucleus pulposus migration through annular fibres, with chemical (inflammatory mediators) and mechanical irritation of adjacent nerve root and dural sleeve.'],
    [/radiculopathy/, 'Compression or chemical irritation of a spinal nerve root (disc material, osteophyte, foraminal stenosis) produces dermatomal sensory loss, myotomal weakness and altered reflexes.'],
    [/spondylosis|degenerative/, 'Age-related disc dehydration → loss of disc height → uncovertebral/facet joint hypertrophy, osteophytes and segmental stiffness with episodic mechanical pain.'],
    [/stenosis/, 'Progressive narrowing of central canal or lateral foramen by disc bulge, ligamentum flavum hypertrophy and facet osteophytes; vascular compromise of nerve roots produces neurogenic claudication or radicular symptoms.'],
    [/spondylolisthesis|spondylolysis/, 'Repetitive lumbar extension-rotation (e.g. fast bowling, gymnastics) creates pars interarticularis stress fracture; bilateral defects allow anterior vertebral translation.'],
    [/torticollis/, 'Acute SCM spasm / facet locking after sleeping posture or sudden movement; pain-driven muscle guarding fixes head in side-bent rotated position.'],
    [/headache.*cervic|cervicogenic head/, 'Convergence of upper cervical (C1–C3) afferents on the trigeminocervical nucleus refers nociception from upper cervical joints/muscles to the head.'],
    [/rotator cuff|supraspinatus|infraspinatus|subscapularis/, 'Repetitive overhead loading, eccentric overload, age-related tendon degeneration and/or compressive contact under the acromion produce intratendinous disorganisation, partial- or full-thickness tearing.'],
    [/impingement|subacromial pain/, 'Reduced subacromial space (postural, scapular dyskinesis, acromial morphology, GIRD) compresses supraspinatus tendon and bursa during elevation, producing pain and tendinopathic change.'],
    [/frozen shoulder|adhesive capsulitis/, 'Synovial inflammation (freezing) followed by capsular fibrosis (frozen) and gradual remodelling (thawing). Strong association with diabetes, thyroid disease and prolonged immobilisation.'],
    [/labral|slap|bankart/, 'Traction (FOOSH with arm overhead, biceps load) or translation (anterior dislocation) injures the glenoid labrum at its capsulolabral attachment, creating instability and clicking.'],
    [/dislocation|instability/, 'Capsuloligamentous failure under load — traumatic (anterior/posterior force) or atraumatic (capsular laxity, repetitive microtrauma) — exceeds passive restraint and allows abnormal joint translation.'],
    [/ac joint|acromioclavicular/, 'Direct fall on the point of the shoulder disrupts AC and coracoclavicular ligaments to varying degrees (Rockwood I–VI).'],
    [/lateral epicondyl|tennis elbow/, 'Repetitive wrist extension and gripping loads the common extensor origin (esp. ECRB), producing collagen disorganisation and angiofibroblastic tendinopathy at the lateral epicondyle.'],
    [/medial epicondyl|golfer/, 'Repetitive wrist flexion/pronation overloads the common flexor-pronator origin at the medial epicondyle producing tendinopathic change.'],
    [/cubital tunnel|ulnar nerve/, 'Compression of the ulnar nerve at the cubital tunnel by repetitive elbow flexion, direct pressure or osteophytes; nerve subluxation may exacerbate.'],
    [/carpal tunnel/, 'Increased pressure within the carpal tunnel (repetitive wrist motion, fluid retention, synovial thickening) compresses the median nerve, producing ischaemic neural dysfunction.'],
    [/de quervain/, 'Stenosing tenosynovitis of the first dorsal compartment (APL & EPB) from repetitive thumb abduction/radial deviation.'],
    [/trigger finger/, 'Stenosing flexor tenosynovitis at the A1 pulley produces nodular tendon thickening and catching during flexion.'],
    [/dupuytren/, 'Progressive myofibroblast-driven fibrosis of palmar fascia produces palpable nodules and cords with finger flexion contracture.'],
    [/scaphoid/, 'FOOSH with wrist hyperextension/radial deviation transmits force through the scaphoid; tenuous retrograde blood supply predisposes to non-union/AVN.'],
    [/femoroacetabular|fai|cam|pincer/, 'Bony morphology (cam = femoral head-neck offset loss; pincer = acetabular over-coverage) produces abnormal contact during hip flexion/IR, damaging labrum and chondral surface.'],
    [/labral.*hip|hip labral/, 'Repetitive end-range hip motion in setting of FAI morphology shears the acetabular labrum (often anterosuperior).'],
    [/gluteal tendinopathy|trochanteric|greater trochanteric pain/, 'Compressive load on gluteus medius/minimus tendons against the greater trochanter (adduction posture, ITB tension) produces tendinopathy and bursal irritation.'],
    [/piriformis/, 'Hypertrophy or spasm of piriformis compresses the sciatic nerve in the deep gluteal space producing buttock pain with radicular features.'],
    [/snapping hip/, 'Iliopsoas tendon over iliopectineal eminence (internal) or ITB over greater trochanter (external) produces palpable/audible snap during hip motion.'],
    [/hip osteoarthritis|hip oa/, 'Progressive articular cartilage loss with subchondral sclerosis, osteophytosis and capsular thickening — anterior groin pain and capsular pattern stiffness (IR > flexion > abduction).'],
    [/acl/, 'Non-contact pivoting deceleration with knee valgus and tibial IR (or hyperextension) ruptures the ACL; commonly associated with meniscal/MCL injury (O\'Donoghue triad).'],
    [/pcl/, 'Posterior force on flexed tibia (dashboard injury) or hyperflexion stresses the PCL.'],
    [/mcl/, 'Valgus force to a partially flexed knee (lateral blow, ski injury) injures the MCL.'],
    [/lcl/, 'Varus force to the knee or hyperextension injures the LCL/posterolateral corner.'],
    [/meniscus|meniscal/, 'Twisting on a loaded, flexed knee shears the meniscus; degenerative tears develop with chronic loading and altered biomechanics.'],
    [/patellar tendin|jumper/, 'Repetitive eccentric loading of the extensor mechanism (jumping, deceleration) produces tendinopathic change at the inferior pole of the patella.'],
    [/patellofemoral|pfps/, 'Maltracking of the patella in the trochlear groove — driven by hip weakness (glute med), VMO insufficiency, ITB tightness or foot pronation — increases retropatellar contact stress.'],
    [/iliotibial|itb/, 'Repetitive friction or compression of the distal ITB against the lateral femoral epicondyle during 30° knee flexion (runners, cyclists).'],
    [/osgood|osgood-schlatter/, 'Traction apophysitis at the tibial tubercle from repetitive quadriceps pull during the adolescent growth spurt.'],
    [/sinding-larsen|jumper.*pole/, 'Traction apophysitis at the inferior patellar pole in skeletally immature athletes.'],
    [/lateral ankle sprain|atfl|ankle sprain/, 'Forced inversion and plantarflexion stretches/tears the lateral ligament complex (ATFL most commonly, then CFL).'],
    [/high ankle|syndesmosis/, 'External rotation of the dorsiflexed foot disrupts the distal tibiofibular syndesmosis and interosseous membrane.'],
    [/achilles tendin/, 'Repetitive eccentric loading and accumulated load above tendon capacity produce mid-portion or insertional tendinopathy with collagen disorganisation and neovascularisation.'],
    [/achilles rupture/, 'Sudden eccentric loading of a weakened/degenerated tendon (push-off, missed step) produces complete rupture, classically 2–6 cm above insertion.'],
    [/plantar fascia|plantar fasciitis|plantar heel/, 'Repetitive tensile load on the plantar fascia (especially at calcaneal origin) — overuse, increased BMI, reduced ankle DF — produces collagen degeneration and pain at first steps.'],
    [/morton/, 'Mechanical irritation and perineural fibrosis of an interdigital nerve (commonly 3rd web space) from compressive footwear and forefoot loading.'],
    [/hallux valgus/, 'Progressive lateral deviation of the great toe at the 1st MTP joint — multifactorial (genetics, footwear, first-ray hypermobility) — alters forefoot loading.'],
    [/tmj|temporomandibular/, 'Disc displacement (with/without reduction), joint capsulitis, masticatory muscle hyperactivity (bruxism/clenching) and parafunctional habits drive TMJ pain and dysfunction.'],
    [/concussion/, 'Biomechanical force to the head/body produces transient neurometabolic cascade (ionic flux, glutamate release, mitochondrial dysfunction) without structural change on standard imaging.'],
    [/fracture/, 'Bone fails when applied load exceeds its strength — high-energy trauma, repetitive submaximal loading (stress fracture) or pathological weakening (osteoporosis, tumour).'],
    [/post.*arthroplasty|joint replacement/, 'Surgical resection of arthritic articular surfaces and prosthetic implantation; rehab dictated by surgical approach (anterior/posterior/lateral), fixation (cemented/uncemented) and tissue healing constraints.'],
    [/post.*acl/, 'Following ACL graft (BPTB, hamstring or quad tendon), graft undergoes ligamentisation over 6–12+ months. Rehab progression respects graft revascularisation and load tolerance.'],
    [/post.*rotator cuff repair/, 'Surgical reattachment of torn cuff tendon to greater tuberosity (single/double row). Tendon-to-bone healing matures over 12+ weeks; rehab strictly phase-based with sling, then PROM, AAROM, AROM and progressive loading.'],
    [/spinal fusion/, 'Surgical immobilisation of a spinal segment with instrumentation and bone graft; adjacent segment compensation increases over time.'],
    [/laminectomy|decompression/, 'Surgical removal of lamina/ligamentum flavum/disc material to decompress neural structures; rehab focuses on neural mobility, segmental control and graded loading.'],
  ];
  for (const [re, txt] of map) {
    if (re.test(n)) return txt;
  }
  // Category fallback
  const cat = d.category;
  if (cat === 'Sports') return `Sport-specific mechanism: cumulative or peak load (e.g. acceleration/deceleration, change of direction, repetitive overhead/throwing) exceeds tissue capacity in ${ANATOMY[d.region] ? d.region : 'the involved region'}, producing structural strain and inflammatory response.`;
  if (cat === 'Post-surgical') return `Surgical intervention alters local tissue mechanics; mechanism of presenting symptoms is dictated by surgical approach, tissue healing timeline and protective phase precautions.`;
  if (cat === 'Neurological') return `Mechanical compression, traction or chemical irritation of neural structures along the relevant pathway produces altered conduction with pain, paraesthesia, sensory or motor deficit.`;
  if (cat === 'Rheumatological') return `Systemic inflammatory or autoimmune process drives synovial inflammation, capsular thickening, cartilage and bone erosion in susceptible joints.`;
  return `Mechanical overload (repetitive microtrauma or single-event force) exceeds tissue capacity in the ${d.region.toLowerCase()} region, producing local nociceptive input and protective motor responses.`;
}

// ---------- PATHOLOGY (specific) ----------
function buildPathology(d) {
  const n = d.name.toLowerCase();
  const map = [
    [/tendin|tendon/, 'Tendinopathic continuum (Cook & Purdam): reactive tendinopathy → tendon dysrepair → degenerative tendinopathy. Histology shows collagen disorganisation, increased ground substance, neovascularisation and absence of classic inflammatory infiltrate.'],
    [/disc herniation|disc prolapse/, 'Annular fissuring with nucleus pulposus migration; chemical mediators (TNF-α, PLA2) sensitise the nerve root in addition to mechanical compression.'],
    [/osteoarthritis|degenerative joint|spondylosis|hip oa|knee oa/, 'Cartilage softening and fibrillation, subchondral sclerosis, osteophyte formation, capsular thickening and synovial inflammation. Loss of proteoglycans and altered chondrocyte metabolism drive progression.'],
    [/rheumatoid/, 'Autoimmune synovitis with pannus formation eroding cartilage and subchondral bone; symmetrical small-joint polyarthritis with morning stiffness >1 h.'],
    [/ankylosing/, 'Seronegative spondyloarthropathy with enthesitis, syndesmophyte formation and progressive vertebral fusion (bamboo spine); HLA-B27 association.'],
    [/sprain|ligament/, 'Grade I (microtearing, no laxity) – Grade II (partial tear, mild laxity) – Grade III (complete rupture, gross laxity) of collagen fibres with associated capsular/synovial irritation.'],
    [/strain|muscle tear/, 'Disruption of muscle fibres at the myotendinous junction (most commonly), graded I–III based on extent, with haematoma, oedema and protective spasm.'],
    [/bursitis|bursa/, 'Inflammation of synovial-lined bursa from compressive load, friction or systemic inflammatory disease, producing thickening and effusion.'],
    [/nerve|neuropathy|radiculopathy|tunnel/, 'Sunderland classification (I–V) describes severity from neurapraxia (conduction block) through axonotmesis to neurotmesis. Compression produces ischaemia, demyelination and eventually axonal loss.'],
    [/labral|labrum|slap|bankart/, 'Fibrocartilaginous labral tear at the capsulolabral junction; classified by location (anterior/superior/posterior) and morphology (fraying, flap, bucket-handle, SLAP I–IV).'],
    [/meniscus|meniscal/, 'Tear patterns: longitudinal/bucket-handle, radial, oblique/parrot-beak, horizontal cleavage, complex. Vascular zones (red-red, red-white, white-white) determine healing potential.'],
    [/fracture/, 'Cortical and/or trabecular bone failure; classification by location, pattern (transverse, oblique, spiral, comminuted), displacement and articular involvement.'],
    [/dislocation/, 'Complete loss of articular congruity with capsuloligamentous disruption; recurrent episodes accelerate articular damage (Hill-Sachs, bony Bankart).'],
    [/instability/, 'Pathological excess of physiological joint motion due to capsuloligamentous insufficiency, neuromuscular control deficit, or both.'],
    [/concussion/, 'Functional rather than structural injury — neurometabolic cascade with ionic flux, glutamate release, mitochondrial dysfunction and reduced cerebral blood flow.'],
    [/headache/, 'Mixed nociceptive and neuropathic mechanism with peripheral sensitisation of cervical/cranial nociceptors and central sensitisation in the trigeminocervical complex.'],
    [/dystrophy|crps/, 'Complex regional pain syndrome with autonomic dysfunction, neurogenic inflammation and central sensitisation following minor trauma or surgery.'],
    [/dupuytren/, 'Myofibroblast proliferation in palmar aponeurosis with type III collagen deposition, nodule then cord formation.'],
  ];
  for (const [re, txt] of map) {
    if (re.test(n)) return txt;
  }
  return `Pathology localised to the ${d.subcategory ? d.subcategory.toLowerCase() : 'involved tissue'} of the ${d.region.toLowerCase()} region, with characteristic findings on examination and (where indicated) imaging.`;
}

// ---------- DESCRIPTION rebuilder (3–4 lines, removes generic boilerplate) ----------
function rebuildDescription(d) {
  // Strip prior auto-appended boilerplate after first sentence
  let base = (d.description || '').split(/\.\s+/)[0];
  if (base && !base.endsWith('.')) base += '.';

  const region = d.region;
  const cat = d.category;

  const anatomyBrief = {
    'Cervical': 'Affects cervical motion segments and surrounding cervicoscapular musculature.',
    'Thoracic': 'Involves the thoracic spine, costovertebral articulations and posterior chain.',
    'Lumbar': 'Involves the lumbar motion segments, paraspinals and lumbopelvic complex.',
    'Shoulder': 'Affects the glenohumeral joint, rotator cuff and scapulothoracic complex.',
    'Elbow': 'Involves the elbow joint complex and surrounding myotendinous structures.',
    'Wrist/Hand': 'Affects the carpus and/or hand intrinsic and extrinsic structures.',
    'Hip': 'Involves the hip joint, surrounding capsuloligamentous structures and gluteal complex.',
    'Knee': 'Affects the tibiofemoral and/or patellofemoral joint and surrounding stabilisers.',
    'Foot/Ankle': 'Involves the ankle mortise, subtalar joint and/or foot soft tissues.',
    'TMJ': 'Affects the temporomandibular joint and masticatory system.',
  }[region] || `Affects structures in the ${region} region.`;

  const presentLine = `Typical presentation includes localised pain reproduced by mechanical loading or specific positions, with reproducible findings on physical examination.`;

  const mgmtLine = {
    'Post-surgical': 'Rehabilitation is strictly phase-based, respecting tissue healing constraints, surgical precautions and load tolerance.',
    'Sports': 'Management is criterion-based: protect early, restore mobility and motor control, then progressively load to sport-specific demand.',
    'Neurological': 'Management addresses neural mobility, source of compression/irritation and graded reloading of the involved myotomes.',
    'Rheumatological': 'Co-managed with medical care; PT focuses on joint protection, ROM preservation, graded loading and patient education.',
    'Musculoskeletal': 'Phase-based PT: modulate symptoms, restore mobility and motor control, then graded loading and return to function.',
  }[cat] || 'Phase-based PT management progressing from symptom modulation to functional loading.';

  return [base, anatomyBrief, presentLine, mgmtLine].filter(Boolean).join(' ');
}

// ---------- TEST MATCHING (condition-specific) ----------
function regionsFor(disorderRegion) {
  const map = {
    'Cervical': ['Cervical', 'Cervical Spine'],
    'Thoracic': ['Thoracic', 'Thoracic Spine', 'Thoracic/Rib'],
    'Lumbar': ['Lumbar', 'Lumbar Spine', 'Lumbar/SIJ', 'SIJ'],
    'Shoulder': ['Shoulder'],
    'Elbow': ['Elbow', 'Elbow/Wrist/Hand'],
    'Wrist/Hand': ['Wrist', 'Hand', 'Elbow/Wrist/Hand'],
    'Hip': ['Hip', 'Hip/Pelvis', 'Hip/Femur'],
    'Knee': ['Knee'],
    'Foot/Ankle': ['Ankle', 'Foot', 'Ankle/Foot'],
    'TMJ': ['TMJ', 'Cervical'],
  };
  return map[disorderRegion] || [disorderRegion];
}

// Condition keyword → test name keywords (specific clinical mapping)
const COND_TEST_MAP = [
  [/whiplash|cervical sprain|cervical strain/, ['Spurling', 'Distraction', 'Sharp-Purser', 'Alar', 'Cervical Flexion-Rotation']],
  [/cervical disc|cervical radicul/, ['Spurling', 'Distraction', 'Upper Limb Tension', 'ULTT', 'Shoulder Abduction Relief']],
  [/cervical myelopathy/, ['Hoffmann', 'Babinski', 'Lhermitte', 'Clonus']],
  [/cervicogenic head|cervicogenic dizz/, ['Cervical Flexion-Rotation', 'Spurling', 'Cranio-Cervical Flexion']],
  [/torticollis/, ['Cervical AROM', 'Cervical Distraction']],
  [/upper cervical instab|atlantoaxial/, ['Sharp-Purser', 'Alar', 'Transverse Ligament', 'Anterior Shear']],
  [/thoracic outlet/, ['Adson', 'Roos', 'Wright', 'Costoclavicular', 'EAST']],
  [/rotator cuff|supraspinatus/, ['Empty Can', 'Jobe', 'Hawkins', 'Neer', 'Drop Arm', 'External Rotation Lag']],
  [/infraspinatus|teres minor/, ['External Rotation Lag', 'Hornblower', 'Patte']],
  [/subscapularis/, ['Lift-Off', 'Belly-Press', 'Bear Hug']],
  [/impingement|subacromial pain/, ['Hawkins', 'Neer', 'Painful Arc', 'Empty Can']],
  [/biceps|long head/, ['Speed', 'Yergason', 'O\'Brien', 'Upper Cut']],
  [/labral|slap/, ['O\'Brien', 'Crank', 'Anterior Slide', 'Speed', 'Biceps Load']],
  [/anterior shoulder instab|bankart/, ['Apprehension', 'Relocation', 'Surprise', 'Load and Shift']],
  [/posterior shoulder instab|reverse bankart/, ['Posterior Apprehension', 'Jerk', 'Kim']],
  [/multidirectional instab/, ['Sulcus Sign', 'Load and Shift', 'Apprehension']],
  [/ac joint|acromioclavicular/, ['Cross-Body Adduction', 'Paxinos', 'O\'Brien', 'AC Resisted Extension']],
  [/frozen shoulder|adhesive caps/, ['Capsular Pattern', 'Shoulder ROM', 'Coracoid Pain']],
  [/scapular dyskin/, ['Scapular Assistance', 'Scapular Retraction', 'SICK Scapula']],
  [/lateral epicondyl|tennis elbow/, ['Cozen', 'Mill', 'Maudsley', 'Resisted Wrist Extension']],
  [/medial epicondyl|golfer/, ['Reverse Cozen', 'Resisted Wrist Flexion', 'Medial Epicondyle Palpation']],
  [/ucl|valgus.*elbow/, ['Valgus Stress', 'Moving Valgus Stress', 'Milking Maneuver']],
  [/lcl.*elbow|posterolateral.*elbow/, ['Varus Stress', 'Posterolateral Rotatory Drawer', 'Pivot Shift Elbow']],
  [/cubital tunnel|ulnar nerve/, ['Tinel', 'Elbow Flexion Test', 'Froment', 'Wartenberg']],
  [/carpal tunnel|median nerve/, ['Phalen', 'Reverse Phalen', 'Tinel', 'Carpal Compression', 'Durkan']],
  [/de quervain/, ['Finkelstein', 'Eichhoff', 'WHAT', 'Resisted Thumb Extension']],
  [/scaphoid/, ['Anatomical Snuffbox', 'Scaphoid Compression', 'Watson']],
  [/tfcc/, ['TFCC Load', 'Press Test', 'Ulnar Fovea Sign']],
  [/scapholunate/, ['Watson', 'Scaphoid Shift']],
  [/lunotriquetral/, ['Reagan', 'Ballottement', 'Kleinman Shear']],
  [/trigger finger/, ['Active Flexion-Extension', 'Palpable Nodule A1']],
  [/hip oa|hip osteoarth/, ['FABER', 'FADIR', 'Scour', 'Log Roll', 'Hip ROM']],
  [/femoroacetabular|fai|cam|pincer/, ['FADIR', 'FABER', 'Anterior Impingement']],
  [/hip labral/, ['FADIR', 'Anterior Labral', 'Posterior Labral', 'Scour']],
  [/gluteal tendin|trochanteric|greater trochanteric/, ['Trendelenburg', 'Resisted External Derotation', 'FABER', 'Single Leg Stance 30s']],
  [/piriformis|deep gluteal/, ['FAIR', 'Pace', 'Beatty', 'Freiberg']],
  [/snapping hip/, ['Snapping Hip Test', 'Hip Circumduction']],
  [/iliopsoas|hip flexor/, ['Thomas Test', 'Modified Thomas', 'Resisted Hip Flexion']],
  [/sij|sacroiliac/, ['FABER', 'Distraction', 'Compression', 'Thigh Thrust', 'Gaenslen', 'Sacral Thrust']],
  [/hamstring/, ['Active Knee Extension', 'Slump', 'Puranen-Orava', 'Bent Knee Stretch']],
  [/adductor|groin/, ['Adductor Squeeze', 'Resisted Adduction', 'Palpation Pubic Tubercle']],
  [/lumbar disc|lumbar radicul/, ['Straight Leg Raise', 'SLR', 'Slump', 'Crossed SLR', 'Bowstring', 'Femoral Nerve']],
  [/lumbar stenosis|neurogenic claudic/, ['Bicycle Test', 'Two-Stage Treadmill', 'Lumbar Extension']],
  [/spondylolisthesis|spondylolysis/, ['One-Leg Hyperextension', 'Stork Test', 'Lumbar Extension']],
  [/lumbar instability|segmental instab/, ['Prone Instability', 'Active SLR', 'Aberrant Movement']],
  [/acl/, ['Lachman', 'Anterior Drawer', 'Pivot Shift']],
  [/pcl/, ['Posterior Drawer', 'Posterior Sag', 'Quadriceps Active']],
  [/mcl/, ['Valgus Stress 30', 'Valgus Stress 0']],
  [/lcl|posterolateral.*knee/, ['Varus Stress 30', 'Dial Test', 'Posterolateral Drawer']],
  [/meniscus|meniscal/, ['McMurray', 'Thessaly', 'Apley', 'Joint Line Tenderness', 'Bounce Home']],
  [/patellar tendin|jumper/, ['Single Leg Decline Squat', 'Patellar Tendon Palpation', 'Royal London Hospital']],
  [/patellofemoral|pfps/, ['Clarke', 'Patellar Grind', 'Step-Down', 'Single Leg Squat']],
  [/patellar dislocation|patellar instab/, ['Patellar Apprehension', 'Patellar Glide', 'J-Sign']],
  [/iliotibial|itb/, ['Ober', 'Noble Compression', 'Renne']],
  [/lateral ankle sprain|atfl/, ['Anterior Drawer', 'Talar Tilt', 'Ottawa Ankle']],
  [/syndesmosis|high ankle/, ['Squeeze', 'External Rotation', 'Cotton', 'Dorsiflexion-Compression']],
  [/achilles tendin|achilles rupture/, ['Thompson', 'Calf Squeeze', 'Royal London', 'Single Leg Heel Raise']],
  [/plantar fascia|plantar heel/, ['Windlass', 'Calcaneal Squeeze', 'First-Step Pain']],
  [/morton/, ['Mulder', 'Web Space Compression']],
  [/tarsal tunnel/, ['Tinel Tarsal', 'Eversion-Dorsiflexion']],
  [/tmj/, ['TMJ Palpation', 'TMJ AROM', 'Joint Loading', 'Mandibular Deviation']],
  [/concussion/, ['SCAT', 'BESS', 'King-Devick', 'VOMS', 'Vestibular-Ocular']],
];

function pickTests(d) {
  const n = d.name.toLowerCase();
  const regs = regionsFor(d.region);

  // 1) condition-keyword mapping → look up matching tests by name
  const wantedKeywords = [];
  for (const [re, kws] of COND_TEST_MAP) {
    if (re.test(n)) { wantedKeywords.push(...kws); break; }
  }

  const picked = [];
  const pickedSet = new Set();
  function add(name) {
    if (!name) return;
    if (pickedSet.has(name)) return;
    pickedSet.add(name);
    picked.push(name);
  }

  for (const kw of wantedKeywords) {
    const found = tests.find(t =>
      t.name.toLowerCase().includes(kw.toLowerCase()) &&
      regs.some(r => (t.region || '').toLowerCase().includes(r.toLowerCase()))
    ) || tests.find(t => t.name.toLowerCase().includes(kw.toLowerCase()));
    if (found) add(found.name);
    else add(kw + ' Test');
    if (picked.length >= 5) break;
  }

  // 2) condition-name partial match against test.condition field
  if (picked.length < 5) {
    for (const t of tests) {
      if (!t.condition) continue;
      const cond = t.condition.toLowerCase();
      if (cond.split(/[\s/]+/).some(w => w.length > 4 && n.includes(w))) {
        add(t.name);
        if (picked.length >= 5) break;
      }
    }
  }

  // 3) region fallback (only if still empty)
  if (picked.length === 0) {
    const FALLBACK = {
      'Cervical': ["Spurling's Test", "Cervical Distraction Test", "Upper Limb Tension Test", "Cervical Flexion-Rotation Test"],
      'Thoracic': ["Thoracic Spring Test", "Adam's Forward Bend", "Slump Test", "Rib Compression"],
      'Lumbar': ["Straight Leg Raise (SLR)", "Slump Test", "Prone Instability Test", "FABER Test"],
      'Shoulder': ["Hawkins-Kennedy Test", "Neer's Test", "Empty Can (Jobe) Test", "Apprehension Test"],
      'Elbow': ["Cozen's Test", "Mill's Test", "Valgus Stress Test (Elbow)", "Tinel's at Cubital Tunnel"],
      'Wrist/Hand': ["Phalen's Test", "Tinel's Sign", "Finkelstein's Test", "Watson's Test"],
      'Hip': ["FADIR Test", "FABER Test", "Thomas Test", "Trendelenburg Test"],
      'Knee': ["Lachman's Test", "McMurray's Test", "Valgus Stress Test", "Patellar Apprehension"],
      'Foot/Ankle': ["Anterior Drawer (Ankle)", "Talar Tilt", "Squeeze Test", "Thompson's Test"],
      'TMJ': ["TMJ Palpation", "Mandibular ROM", "Joint Loading"],
    };
    for (const f of (FALLBACK[d.region] || [])) add(f);
  }

  return picked.slice(0, 5);
}

// ---------- EXERCISE MATCHING (condition-specific) ----------
const EX_REGIONS = {
  'Cervical': ['Cervical Spine', 'Cervical', 'Spine'],
  'Thoracic': ['Thoracic Spine', 'Spine'],
  'Lumbar': ['Lumbar Spine', 'Lumbar', 'Spine', 'Core'],
  'Shoulder': ['Shoulder', 'Upper Extremity', 'Upper Limb'],
  'Elbow': ['Elbow/Wrist/Hand', 'Upper Extremity', 'Upper Limb'],
  'Wrist/Hand': ['Elbow/Wrist/Hand', 'Upper Extremity', 'Upper Limb'],
  'Hip': ['Hip', 'Lower Extremity', 'Lower Limb', 'Core'],
  'Knee': ['Knee', 'Lower Extremity', 'Lower Limb'],
  'Foot/Ankle': ['Ankle/Foot', 'Lower Extremity', 'Lower Limb'],
  'TMJ': ['Cervical Spine', 'Cervical'],
};

// Condition → preferred exercise name keywords
const COND_EX_MAP = [
  [/whiplash|cervical sprain|cervical strain|torticollis/, ['Chin Tuck', 'Deep Neck Flexor', 'Cervical Isometric', 'Cervical AROM', 'Upper Trapezius Stretch', 'Levator Scapulae']],
  [/cervical disc|cervical radicul/, ['Chin Tuck', 'Cervical Retraction', 'Median Nerve', 'Scapular Retraction', 'Deep Neck Flexor']],
  [/cervicogenic head|cervicogenic dizz/, ['Chin Tuck', 'Cranio-Cervical', 'Suboccipital', 'Cervical Self-Mobilisation', 'Thoracic Extension']],
  [/upper cervical instab|atlantoaxial/, ['Cranio-Cervical Flexion', 'Deep Neck Flexor', 'Chin Tuck']],
  [/thoracic hyperkyph|thoracic facet|costochon|tietze|rib hyper/, ['Thoracic Extension', 'Open Book', 'Thread the Needle', 'Wall Angel', 'Prone Y']],
  [/thoracic outlet/, ['Pec Minor Stretch', 'Brachial Plexus', 'Scalene Stretch', 'Scapular Retraction', 'Wall Angel']],
  [/rotator cuff|supraspinatus|infraspinatus|subscapularis|impingement|subacromial/, ['Side-Lying External Rotation', 'External Rotation', 'Empty Can', 'Prone Y', 'Prone T', 'Serratus Anterior', 'Scapular Retraction', 'Sleeper Stretch', 'Pendulum']],
  [/frozen shoulder|adhesive caps/, ['Pendulum', 'Wall Walk', 'Sleeper Stretch', 'Cross-Body Adduction', 'Shoulder Flexion']],
  [/labral|slap|bankart|anterior shoulder instab|posterior shoulder instab|multidirectional/, ['Rhythmic Stabilisation', 'Scapular Setting', 'External Rotation', 'Serratus', 'Closed-Chain']],
  [/ac joint|acromioclavicular/, ['Scapular Retraction', 'Prone Y', 'Prone T', 'Serratus']],
  [/scapular dyskin/, ['Serratus Anterior', 'Prone Y', 'Prone T', 'Wall Slide', 'Push-Up Plus', 'Scapular Setting']],
  [/biceps tendin|biceps tear/, ['Eccentric Biceps', 'Isometric Biceps', 'Biceps Stretch']],
  [/lateral epicondyl|tennis elbow/, ['Eccentric Wrist Extension', 'Tyler Twist', 'Wrist Extensor Stretch', 'Grip']],
  [/medial epicondyl|golfer/, ['Eccentric Wrist Flexion', 'Reverse Tyler Twist', 'Wrist Flexor Stretch', 'Pronation']],
  [/cubital tunnel|ulnar nerve/, ['Ulnar Nerve', 'Nerve Gliding - Ulnar']],
  [/carpal tunnel|median nerve.*wrist/, ['Median Nerve', 'Nerve Gliding - Median', 'Tendon Gliding']],
  [/de quervain/, ['Tendon Gliding', 'Eccentric Wrist Extension', 'Putty', 'Thumb']],
  [/trigger finger|tenosynovitis.*hand/, ['Tendon Gliding', 'Putty']],
  [/scaphoid|wrist sprain|tfcc/, ['Wrist Pronation/Supination', 'Dart Thrower', 'Grip']],
  [/dupuytren/, ['Tendon Gliding', 'Finger Extension']],
  [/hip oa|hip osteoarth|fai|hip labral|femoroacetab/, ['Clamshell', 'Hip 90/90', 'Hip Capsule', 'Hip Flexor Mobilisation', 'Bridge', 'Side-Lying Hip Abduction']],
  [/gluteal tendin|trochanteric|greater trochanteric/, ['Side-Lying Hip Abduction', 'Clamshell', 'Hip Hike', 'Single Leg Bridge', 'Banded Lateral']],
  [/piriformis|deep gluteal/, ['Piriformis Stretch', 'Figure-4', 'Hip 90/90', 'Sciatic Nerve']],
  [/snapping hip/, ['Hip Flexor Stretch', 'Half-Kneeling Hip Flexor', 'Clamshell', 'Bridge']],
  [/iliopsoas|hip flexor.*strain/, ['Hip Flexor Mobilisation', 'Half-Kneeling Hip Flexor', 'Standing Banded Hip Flexion', 'Thomas']],
  [/adductor|groin/, ['Adductor Squeeze', 'Copenhagen Plank', 'Single Leg Romanian', 'Side Plank']],
  [/hamstring/, ['Nordic Hamstring', 'Single Leg Romanian Deadlift', 'Hamstring Stretch', 'Prone Hamstring Curl', 'Razor Curl']],
  [/lumbar disc|lumbar radicul|sciatica/, ['McKenzie Press-Up', 'Prone Press-Up', 'Sciatic Nerve Slider', 'Sciatic Nerve Tensioner', 'Cat-Cow', 'Bird Dog']],
  [/lumbar stenosis|neurogenic claudic/, ['Lumbar Flexion', 'Pelvic Tilt', 'Cat-Cow', 'Bird Dog']],
  [/spondylolisthesis|spondylolysis|lumbar instability|segmental/, ['Multifidus Activation', 'Transversus Abdominis', 'Modified Curl-Up', 'Side Plank', 'Bird Dog', 'Dead Bug']],
  [/sij|sacroiliac/, ['Bridge', 'Clamshell', 'Side Plank', 'Bird Dog', 'Pelvic Tilt']],
  [/lumbar sprain|lumbar strain|mechanical low back/, ['Cat-Cow', 'Bird Dog', 'Dead Bug', 'McKenzie Press-Up', 'Pelvic Tilt']],
  [/acl/, ['Quad Set', 'Straight Leg Raise', 'Terminal Knee Extension', 'Single Leg Squat', 'Step-Down', 'Nordic Hamstring']],
  [/pcl/, ['Quad Set', 'Straight Leg Raise', 'Terminal Knee Extension', 'Wall Sit']],
  [/mcl|lcl/, ['Quad Set', 'Straight Leg Raise', 'Wall Sit', 'Single Leg Balance']],
  [/meniscus|meniscal/, ['Heel Slide', 'Quad Set', 'Mini Squat', 'Single-Leg Press', 'Step-Down']],
  [/patellar tendin|jumper/, ['Spanish Squat', 'Single Leg Decline Squat', 'Heavy Slow Resistance', 'Step-Down', 'VMO Dip']],
  [/patellofemoral|pfps/, ['VMO Dip', 'Step-Down', 'Single Leg Squat', 'Clamshell', 'Side-Lying Hip Abduction', 'Wall Sit']],
  [/iliotibial|itb/, ['ITB Stretch', 'Side-Lying Hip Abduction', 'Clamshell', 'Single Leg Bridge']],
  [/knee oa|knee osteoarth/, ['Quad Set', 'Straight Leg Raise', 'Wall Sit', 'Step-Up', 'Mini Squat']],
  [/lateral ankle sprain|atfl|ankle sprain/, ['Single-Leg Balance', 'BOSU', 'Peroneal Strengthening', 'Ankle Alphabet', 'Heel Raise']],
  [/syndesmosis|high ankle/, ['Heel Raise (Bilateral)', 'Single-Leg Balance', 'Peroneal Strengthening', 'Ankle Dorsiflexion Wall']],
  [/achilles tendin/, ['Achilles Eccentric Decline', 'Heel Drop', 'Heavy Slow Resistance Calf Raise', 'Single-Leg Heel Raise', 'Soleus Heel Raise']],
  [/achilles rupture/, ['Heel Raise (Bilateral)', 'Soleus Heel Raise', 'Single-Leg Heel Raise']],
  [/plantar fascia|plantar heel/, ['Short Foot', 'Toe Yoga', 'Ankle Dorsiflexion Wall Stretch', 'Heel Raise', 'Calf Stretch']],
  [/posterior tibial|tib post/, ['Tibialis Posterior Strengthening', 'Single-Leg Heel Raise', 'Short Foot']],
  [/peroneal/, ['Peroneal Strengthening', 'Single-Leg Balance', 'Ankle Inversion/Eversion']],
  [/tmj/, ['Chin Tuck', 'Cervical Self-Mobilisation', 'Deep Neck Flexor', 'Suboccipital']],
  [/post.*acl/, ['Quad Set', 'Straight Leg Raise', 'Heel Slide', 'Terminal Knee Extension', 'Mini Squat', 'Single Leg Balance']],
  [/post.*rotator cuff repair/, ['Pendulum', 'Wall Walk', 'Supine Shoulder Flexion', 'Scapular Setting', 'Side-Lying External Rotation']],
  [/post.*total hip|post.*hip arthroplasty/, ['Bridge', 'Clamshell', 'Quad Set', 'Standing Hip Abduction', 'Mini Squat']],
  [/post.*total knee|post.*knee arthroplasty/, ['Quad Set', 'Heel Slide', 'Straight Leg Raise', 'Terminal Knee Extension', 'Mini Squat']],
  [/post.*shoulder arthroplasty/, ['Pendulum', 'Wall Walk', 'Supine Shoulder Flexion', 'Scapular Setting']],
  [/post.*spinal fusion|post.*lumbar fusion/, ['Pelvic Tilt', 'Bridge', 'Cat-Cow', 'Bird Dog', 'Diaphragmatic Breathing']],
  [/post.*laminectomy|post.*decompression/, ['Sciatic Nerve Slider', 'Bird Dog', 'Bridge', 'Pelvic Tilt']],
];

function pickExercises(d) {
  const n = d.name.toLowerCase();
  const targetRegions = EX_REGIONS[d.region] || [];
  const inRegion = exercises.filter(e => targetRegions.includes(e.region));

  let kws = [];
  for (const [re, k] of COND_EX_MAP) {
    if (re.test(n)) { kws = k; break; }
  }

  const picked = [];
  const seen = new Set();
  function add(ex) {
    if (!ex || seen.has(ex.id)) return;
    seen.add(ex.id);
    picked.push({ id: ex.id, name: ex.name, category: ex.category });
  }

  for (const kw of kws) {
    const cand = inRegion.find(e => e.name.toLowerCase().includes(kw.toLowerCase()))
              || exercises.find(e => e.name.toLowerCase().includes(kw.toLowerCase()));
    if (cand) add(cand);
    if (picked.length >= 6) break;
  }

  // Pad with region appropriate diversity
  if (picked.length < 5) {
    const buckets = { Mobility: [], Strengthening: [], Stability: [], Stretching: [] };
    inRegion.forEach(e => { (buckets[e.category] || (buckets[e.category] = [])).push(e); });
    for (const cat of ['Strengthening', 'Mobility', 'Stability', 'Stretching']) {
      const list = buckets[cat] || [];
      if (list.length) add(list[(d.id * 7) % list.length]);
      if (picked.length >= 5) break;
    }
  }

  return picked.slice(0, 6);
}

// ---------- APPLY ----------
let nMech = 0, nPath = 0, nDesc = 0, nTest = 0, nEx = 0;
disorders.forEach(d => {
  d.mechanism = buildMechanism(d); nMech++;
  d.pathophysiology = buildPathology(d); nPath++;
  d.anatomy = ANATOMY[d.region] || `Anatomy of the ${d.region} region.`;
  d.description = rebuildDescription(d); nDesc++;
  const t = pickTests(d);
  if (t.length) { d.msk_tests = t; nTest++; }
  const ex = pickExercises(d);
  if (ex.length) { d.recommended_exercises = ex; nEx++; }
});

fs.writeFileSync('src/data/disorders.json', JSON.stringify(disorders, null, 2));
console.log(`Updated ${disorders.length}. mechanism:${nMech} pathology:${nPath} desc:${nDesc} tests:${nTest} ex:${nEx}`);
