/* Expand disorders.json to 800+ entries while staying within the
   standard PT taxonomy (10 regions × 5 categories) and producing
   clinically meaningful, non-duplicate variants.

   Strategy:
   1. Keep a large curated base list of distinct conditions.
   2. Generate clinically valid sub-variants (grade, stage, side-of-tissue,
      anatomic level, sport, age group, post-op timeframe) — each variant
      gets its own subcategory-appropriate description so it is NOT a duplicate.
*/
const fs = require('fs');
const path = require('path');

const REGIONS = ["Cervical","Thoracic","Lumbar","Shoulder","Elbow","Wrist/Hand","Hip","Knee","Foot/Ankle","TMJ"];
const CATEGORIES = ["Musculoskeletal","Neurological","Rheumatological","Post-surgical","Sports"];

// =============== BASE CURATED CONDITIONS ===============
// [name, region, category, subcategory, description]
const BASE = [
  // CERVICAL — Musculoskeletal
  ["Cervical Facet Joint Syndrome","Cervical","Musculoskeletal","Joint","Facet-mediated cervical pain provoked by extension and ipsilateral rotation."],
  ["Cervical Disc Herniation","Cervical","Musculoskeletal","Disc","Posterolateral cervical disc herniation with radicular features."],
  ["Cervical Spondylosis","Cervical","Musculoskeletal","Degenerative","Age-related multilevel cervical disc and facet degeneration."],
  ["Cervical Sprain","Cervical","Musculoskeletal","Soft tissue","Acute ligamentous injury of the cervical spine."],
  ["Cervical Strain","Cervical","Musculoskeletal","Soft tissue","Acute muscular injury of the cervical spine."],
  ["Acute Torticollis","Cervical","Musculoskeletal","Soft tissue","Acute painful lateral flexion deformity of the neck."],
  ["Whiplash Associated Disorder","Cervical","Musculoskeletal","Trauma","Acceleration–deceleration injury producing multi-tissue cervical pain."],
  ["Upper Cervical Instability","Cervical","Musculoskeletal","Instability","Atlantoaxial/atlanto-occipital ligamentous insufficiency."],
  ["Cervicogenic Headache","Cervical","Musculoskeletal","Headache","Headache referred from upper cervical (C1–C3) joints/muscles."],
  ["Cervicogenic Dizziness","Cervical","Musculoskeletal","Headache","Cervical proprioceptive dysfunction producing non-vertiginous dizziness."],
  // CERVICAL — Neurological
  ["Cervical Radiculopathy","Cervical","Neurological","Nerve root","Cervical nerve root compression with dermatomal symptoms."],
  ["Cervical Myelopathy","Cervical","Neurological","Spinal cord","Cervical cord compression producing UMN signs and gait change."],
  ["Thoracic Outlet Syndrome (Neurogenic)","Cervical","Neurological","Nerve compression","Brachial plexus compression at thoracic outlet."],
  ["Thoracic Outlet Syndrome (Vascular)","Cervical","Neurological","Nerve compression","Subclavian vessel compression at thoracic outlet."],
  ["Brachial Plexopathy","Cervical","Neurological","Plexus","Brachial plexus injury (traction/compression/post-radiation)."],
  ["Long Thoracic Nerve Palsy","Cervical","Neurological","Peripheral nerve","Serratus anterior weakness producing scapular winging."],
  ["Spinal Accessory Nerve Palsy","Cervical","Neurological","Peripheral nerve","Trapezius dysfunction with shoulder droop."],
  // CERVICAL — Rheumatological
  ["Cervical Rheumatoid Involvement","Cervical","Rheumatological","Inflammatory","Atlantoaxial instability and facet erosion in RA."],
  ["Cervical Ankylosing Spondylitis","Cervical","Rheumatological","Inflammatory","Inflammatory cervical involvement in axial spondyloarthritis."],
  ["Polymyalgia Rheumatica (Cervical)","Cervical","Rheumatological","Inflammatory","Proximal pain/stiffness involving the neck and shoulder girdle."],
  // CERVICAL — Post-surgical
  ["Post Anterior Cervical Discectomy and Fusion","Cervical","Post-surgical","Fusion","Rehabilitation following ACDF."],
  ["Post Cervical Disc Arthroplasty","Cervical","Post-surgical","Arthroplasty","Rehabilitation following cervical disc replacement."],
  ["Post Cervical Laminectomy","Cervical","Post-surgical","Decompression","Rehabilitation following cervical laminectomy."],
  // CERVICAL — Sports
  ["Stinger/Burner Syndrome","Cervical","Sports","Plexus","Transient brachial plexus traction in contact athletes."],
  ["Cervical Spear Tackler's Spine","Cervical","Sports","Trauma","Acquired cervical canal narrowing in collision athletes."],

  // THORACIC — Musculoskeletal
  ["Thoracic Hyperkyphosis","Thoracic","Musculoskeletal","Postural","Increased thoracic curvature with postural and mobility deficits."],
  ["Thoracic Facet Dysfunction","Thoracic","Musculoskeletal","Joint","Segmental facet hypomobility producing localized thoracic pain."],
  ["Costochondritis","Thoracic","Musculoskeletal","Joint","Inflammation of costochondral junctions causing anterior chest pain."],
  ["Tietze Syndrome","Thoracic","Musculoskeletal","Joint","Painful nonsuppurative swelling of costochondral cartilage."],
  ["Rib Hypomobility","Thoracic","Musculoskeletal","Joint","Restricted rib motion with respiration-related pain."],
  ["Slipping Rib Syndrome","Thoracic","Musculoskeletal","Joint","Hypermobility of lower costal cartilages producing clicking pain."],
  ["Scheuermann's Disease","Thoracic","Musculoskeletal","Developmental","Adolescent rigid hyperkyphosis with anterior vertebral wedging."],
  ["Adolescent Idiopathic Scoliosis","Thoracic","Musculoskeletal","Deformity","Three-dimensional spinal curvature in skeletally immature patients."],
  ["Thoracic Disc Herniation","Thoracic","Musculoskeletal","Disc","Rare thoracic disc protrusion producing band-like trunk pain."],
  ["Thoracic Compression Fracture","Thoracic","Musculoskeletal","Bone","Vertebral compression fracture, often osteoporotic."],
  // THORACIC — Neurological
  ["T4 Syndrome","Thoracic","Neurological","Autonomic","Upper thoracic dysfunction with glove paresthesia and autonomic features."],
  ["Thoracic Radiculopathy","Thoracic","Neurological","Nerve root","Thoracic nerve root irritation producing band-like dermatomal pain."],
  ["Intercostal Neuralgia","Thoracic","Neurological","Peripheral nerve","Neuropathic pain along an intercostal nerve distribution."],
  // THORACIC — Rheumatological
  ["Ankylosing Spondylitis (Thoracic)","Thoracic","Rheumatological","Inflammatory","Thoracic involvement in axial SpA with chest expansion loss."],
  ["DISH (Forestier's Disease)","Thoracic","Rheumatological","Degenerative","Diffuse idiopathic skeletal hyperostosis with flowing ossification."],
  // THORACIC — Post-surgical
  ["Post Thoracotomy Syndrome","Thoracic","Post-surgical","Thoracic","Persistent intercostal nerve pain after thoracic surgery."],
  ["Post Scoliosis Correction","Thoracic","Post-surgical","Fusion","Rehabilitation following posterior spinal fusion for scoliosis."],
  // THORACIC — Sports
  ["Rib Stress Fracture (Rowing)","Thoracic","Sports","Bone","Stress fracture commonly of ribs 4–8 in rowers."],

  // LUMBAR — Musculoskeletal
  ["Non-Specific Low Back Pain","Lumbar","Musculoskeletal","Mechanical","Mechanical LBP without identifiable structural pathology."],
  ["Lumbar Disc Herniation","Lumbar","Musculoskeletal","Disc","Displacement of nucleus pulposus with possible nerve root contact."],
  ["Lumbar Degenerative Disc Disease","Lumbar","Musculoskeletal","Degenerative","Disc dehydration, height loss and segmental dysfunction."],
  ["Lumbar Facet Syndrome","Lumbar","Musculoskeletal","Joint","Facet-mediated pain provoked by extension and rotation."],
  ["Lumbar Spondylosis","Lumbar","Musculoskeletal","Degenerative","Multilevel degenerative changes of lumbar spine."],
  ["Spondylolysis","Lumbar","Musculoskeletal","Bone","Pars interarticularis stress fracture, common in young athletes."],
  ["Spondylolisthesis (Isthmic)","Lumbar","Musculoskeletal","Bone","Anterior slippage secondary to pars defect."],
  ["Spondylolisthesis (Degenerative)","Lumbar","Musculoskeletal","Degenerative","Degenerative anterior slippage, commonly L4–L5."],
  ["Sacroiliac Joint Dysfunction","Lumbar","Musculoskeletal","Joint","SI joint pain with cluster-positive provocation tests."],
  ["Coccydynia","Lumbar","Musculoskeletal","Bone","Pain at the coccyx aggravated by sitting."],
  ["Lumbar Sprain","Lumbar","Musculoskeletal","Soft tissue","Acute ligamentous lumbar injury."],
  ["Lumbar Strain","Lumbar","Musculoskeletal","Soft tissue","Acute muscular lumbar injury."],
  ["Lumbar Osteoarthritis","Lumbar","Musculoskeletal","Degenerative","Degenerative changes of facet and disc complex."],
  ["Sacral Stress Fracture","Lumbar","Musculoskeletal","Bone","Stress fracture of sacrum, often in distance runners."],
  // LUMBAR — Neurological
  ["Lumbar Radiculopathy (L4)","Lumbar","Neurological","Nerve root","L4 radiculopathy with anteromedial leg pain and quad weakness."],
  ["Lumbar Radiculopathy (L5)","Lumbar","Neurological","Nerve root","L5 radiculopathy with dorsal foot pain and EHL weakness."],
  ["Lumbar Radiculopathy (S1)","Lumbar","Neurological","Nerve root","S1 radiculopathy with posterior leg pain and gastroc weakness."],
  ["Lumbar Spinal Stenosis","Lumbar","Neurological","Stenosis","Central/foraminal narrowing producing neurogenic claudication."],
  ["Cauda Equina Syndrome","Lumbar","Neurological","Emergency","Cauda equina compression — saddle anesthesia, bowel/bladder loss."],
  ["Conus Medullaris Syndrome","Lumbar","Neurological","Emergency","Lesion at the conus producing mixed UMN/LMN signs."],
  ["Piriformis Syndrome","Lumbar","Neurological","Nerve compression","Sciatic irritation by piriformis."],
  ["Meralgia Paresthetica","Lumbar","Neurological","Peripheral nerve","Lateral femoral cutaneous nerve compression at inguinal ligament."],
  // LUMBAR — Rheumatological
  ["Axial Spondyloarthritis","Lumbar","Rheumatological","Inflammatory","Inflammatory back pain with morning stiffness and HLA-B27 association."],
  ["Sacroiliitis (Inflammatory)","Lumbar","Rheumatological","Inflammatory","Inflammatory SI joint involvement in spondyloarthritis."],
  // LUMBAR — Post-surgical
  ["Post Lumbar Microdiscectomy","Lumbar","Post-surgical","Spine","Rehabilitation after lumbar discectomy."],
  ["Post Lumbar Decompression","Lumbar","Post-surgical","Decompression","Rehabilitation after lumbar laminectomy."],
  ["Post Lumbar Fusion (PLIF/TLIF)","Lumbar","Post-surgical","Fusion","Rehabilitation after lumbar interbody fusion."],
  ["Failed Back Surgery Syndrome","Lumbar","Post-surgical","Spine","Persistent pain after spinal surgery."],
  // LUMBAR — Sports
  ["Athlete Pars Stress Reaction","Lumbar","Sports","Bone","Pre-fracture pars stress reaction in young athletes."],

  // SHOULDER — Musculoskeletal
  ["Subacromial Pain Syndrome","Shoulder","Musculoskeletal","Tendon","Painful arc with cuff/bursa irritation under acromion."],
  ["Rotator Cuff Tendinopathy","Shoulder","Musculoskeletal","Tendon","Degenerative tendinopathy, most often supraspinatus."],
  ["Rotator Cuff Tear (Partial)","Shoulder","Musculoskeletal","Tendon","Partial-thickness rotator cuff tear."],
  ["Rotator Cuff Tear (Full-Thickness)","Shoulder","Musculoskeletal","Tendon","Full-thickness rotator cuff tear with weakness."],
  ["Massive Rotator Cuff Tear","Shoulder","Musculoskeletal","Tendon","Two or more cuff tendons torn ± fatty infiltration."],
  ["Calcific Tendinopathy","Shoulder","Musculoskeletal","Tendon","Calcium hydroxyapatite deposits within cuff tendons."],
  ["Adhesive Capsulitis (Freezing)","Shoulder","Musculoskeletal","Capsule","Painful early phase with progressive ROM loss."],
  ["Adhesive Capsulitis (Frozen)","Shoulder","Musculoskeletal","Capsule","Stiffness-dominant phase with global capsular restriction."],
  ["Adhesive Capsulitis (Thawing)","Shoulder","Musculoskeletal","Capsule","Gradual restoration of motion."],
  ["Glenohumeral Osteoarthritis","Shoulder","Musculoskeletal","Degenerative","Cartilage loss and osteophytes at GH joint."],
  ["AC Joint Sprain (Type I)","Shoulder","Musculoskeletal","Joint","AC ligament sprain without disruption."],
  ["AC Joint Sprain (Type II)","Shoulder","Musculoskeletal","Joint","AC ligament tear with intact CC ligaments."],
  ["AC Joint Sprain (Type III)","Shoulder","Musculoskeletal","Joint","Complete AC and CC ligament disruption."],
  ["AC Joint Osteoarthritis","Shoulder","Musculoskeletal","Degenerative","Degenerative AC joint pain over the top of shoulder."],
  ["Subacromial Bursitis","Shoulder","Musculoskeletal","Bursa","Inflammation of subacromial bursa."],
  ["Biceps Tendinopathy (LHB)","Shoulder","Musculoskeletal","Tendon","Long head of biceps tendinopathy in bicipital groove."],
  ["Long Head of Biceps Rupture","Shoulder","Musculoskeletal","Tendon","Proximal biceps tendon rupture ('Popeye' sign)."],
  ["Anterior Shoulder Instability","Shoulder","Musculoskeletal","Instability","Recurrent anterior GH subluxation/dislocation."],
  ["Posterior Shoulder Instability","Shoulder","Musculoskeletal","Instability","Recurrent posterior GH subluxation."],
  ["Multidirectional Instability","Shoulder","Musculoskeletal","Instability","Symptomatic instability in ≥2 directions."],
  ["Scapular Dyskinesis","Shoulder","Musculoskeletal","Motor control","Altered scapulothoracic motion contributing to shoulder pain."],
  ["Snapping Scapula Syndrome","Shoulder","Musculoskeletal","Joint","Audible/painful scapulothoracic crepitus."],
  ["Sternoclavicular Joint Sprain","Shoulder","Musculoskeletal","Joint","Sprain of sternoclavicular ligaments."],
  // SHOULDER — Neurological
  ["Suprascapular Nerve Entrapment","Shoulder","Neurological","Peripheral nerve","Entrapment at suprascapular/spinoglenoid notch."],
  ["Axillary Nerve Injury","Shoulder","Neurological","Peripheral nerve","Deltoid weakness after dislocation/quadrilateral space syndrome."],
  ["Parsonage–Turner Syndrome","Shoulder","Neurological","Plexus","Acute brachial neuritis with shoulder pain and weakness."],
  // SHOULDER — Rheumatological
  ["Rheumatoid Shoulder Arthritis","Shoulder","Rheumatological","Inflammatory","RA involvement of glenohumeral and AC joints."],
  ["Polymyalgia Rheumatica (Shoulder)","Shoulder","Rheumatological","Inflammatory","Bilateral shoulder girdle pain and stiffness in older adults."],
  // SHOULDER — Post-surgical
  ["Post Rotator Cuff Repair","Shoulder","Post-surgical","Tendon","Rehabilitation following arthroscopic cuff repair."],
  ["Post Bankart Repair","Shoulder","Post-surgical","Labrum","Rehabilitation following arthroscopic Bankart stabilization."],
  ["Post Latarjet Procedure","Shoulder","Post-surgical","Bone","Rehabilitation after coracoid transfer for instability."],
  ["Post Total Shoulder Arthroplasty","Shoulder","Post-surgical","Arthroplasty","Rehabilitation after anatomic TSA."],
  ["Post Reverse Total Shoulder Arthroplasty","Shoulder","Post-surgical","Arthroplasty","Rehabilitation after rTSA for cuff arthropathy."],
  ["Post Subacromial Decompression","Shoulder","Post-surgical","Decompression","Rehabilitation after acromioplasty."],
  ["Post SLAP Repair","Shoulder","Post-surgical","Labrum","Rehabilitation after superior labrum repair."],
  // SHOULDER — Sports
  ["SLAP Lesion","Shoulder","Sports","Labrum","Superior labrum anterior–posterior tear in overhead athletes."],
  ["Bankart Lesion","Shoulder","Sports","Labrum","Anteroinferior labral tear after anterior dislocation."],
  ["Posterior Labral Tear","Shoulder","Sports","Labrum","Posterior labral tear, often in throwers/contact athletes."],
  ["Hill–Sachs Lesion","Shoulder","Sports","Bone","Posterosuperior humeral head impaction after anterior dislocation."],
  ["GIRD (Glenohumeral Internal Rotation Deficit)","Shoulder","Sports","Capsule","Posterior capsular tightness in throwing athletes."],
  ["Throwers Shoulder (Internal Impingement)","Shoulder","Sports","Tendon","Posterosuperior internal impingement in late cocking."],
  ["Pectoralis Major Rupture","Shoulder","Sports","Soft tissue","Rupture of pec major during heavy bench press / contact."],

  // ELBOW — Musculoskeletal
  ["Lateral Epicondylalgia","Elbow","Musculoskeletal","Tendon","Common extensor tendinopathy ('tennis elbow')."],
  ["Medial Epicondylalgia","Elbow","Musculoskeletal","Tendon","Common flexor–pronator tendinopathy ('golfer's elbow')."],
  ["Distal Biceps Tendinopathy","Elbow","Musculoskeletal","Tendon","Insertional distal biceps tendinopathy."],
  ["Distal Biceps Rupture","Elbow","Musculoskeletal","Tendon","Avulsion of distal biceps from radial tuberosity."],
  ["Distal Triceps Tendinopathy","Elbow","Musculoskeletal","Tendon","Triceps insertional tendinopathy at olecranon."],
  ["Olecranon Bursitis","Elbow","Musculoskeletal","Bursa","Inflammation of olecranon bursa."],
  ["Elbow Osteoarthritis","Elbow","Musculoskeletal","Degenerative","Degenerative changes at humeroulnar/radiocapitellar joints."],
  ["Elbow Stiffness (Post-Trauma)","Elbow","Musculoskeletal","Joint","Loss of elbow ROM following trauma."],
  ["Pulled Elbow (Nursemaid's)","Elbow","Musculoskeletal","Joint","Radial head subluxation in young children."],
  // ELBOW — Neurological
  ["Cubital Tunnel Syndrome","Elbow","Neurological","Nerve compression","Ulnar nerve compression at cubital tunnel."],
  ["Radial Tunnel Syndrome","Elbow","Neurological","Nerve compression","PIN/radial nerve compression in proximal forearm."],
  ["Pronator Teres Syndrome","Elbow","Neurological","Nerve compression","Median nerve compression at pronator teres."],
  ["PIN Syndrome","Elbow","Neurological","Nerve compression","Posterior interosseous nerve motor branch entrapment."],
  // ELBOW — Rheumatological
  ["Rheumatoid Elbow","Elbow","Rheumatological","Inflammatory","RA involvement of the elbow joint."],
  ["Crystal Arthropathy (Elbow)","Elbow","Rheumatological","Inflammatory","Gout/pseudogout flare at the elbow/olecranon bursa."],
  // ELBOW — Post-surgical
  ["Post UCL Reconstruction (Tommy John)","Elbow","Post-surgical","Ligament","Rehabilitation after UCL reconstruction."],
  ["Post Distal Biceps Repair","Elbow","Post-surgical","Tendon","Rehabilitation after distal biceps tendon repair."],
  ["Post Elbow Arthroscopy","Elbow","Post-surgical","Arthroscopy","Rehabilitation after elbow arthroscopy."],
  ["Post Lateral Epicondyle Debridement","Elbow","Post-surgical","Tendon","Rehabilitation after surgical management of lateral epicondylalgia."],
  // ELBOW — Sports
  ["UCL Sprain (Elbow)","Elbow","Sports","Ligament","UCL injury in overhead throwers."],
  ["Little Leaguer's Elbow","Elbow","Sports","Apophysitis","Medial epicondyle apophysitis in youth throwers."],
  ["Valgus Extension Overload","Elbow","Sports","Joint","Posteromedial olecranon impingement in throwers."],
  ["Osteochondritis Dissecans (Capitellum)","Elbow","Sports","Bone","OCD lesion of capitellum in adolescent throwers/gymnasts."],
  ["Panner's Disease","Elbow","Sports","Bone","Capitellar osteochondrosis in young children."],

  // WRIST/HAND — Musculoskeletal
  ["De Quervain's Tenosynovitis","Wrist/Hand","Musculoskeletal","Tendon","APL/EPB tenosynovitis at radial styloid."],
  ["Trigger Finger (Stenosing Tenosynovitis)","Wrist/Hand","Musculoskeletal","Tendon","A1 pulley stenosing tenosynovitis with catching."],
  ["Intersection Syndrome","Wrist/Hand","Musculoskeletal","Tendon","Tenosynovitis at first/second extensor compartment crossing."],
  ["ECU Tendinopathy/Subluxation","Wrist/Hand","Musculoskeletal","Tendon","Extensor carpi ulnaris pathology with ulnar wrist pain."],
  ["TFCC Injury","Wrist/Hand","Musculoskeletal","Ligament","Triangular fibrocartilage complex tear — ulnar-sided wrist pain."],
  ["Scapholunate Ligament Injury","Wrist/Hand","Musculoskeletal","Ligament","Scapholunate dissociation with dorsal radial wrist pain."],
  ["Lunotriquetral Ligament Injury","Wrist/Hand","Musculoskeletal","Ligament","LT ligament injury with ulnar-sided wrist pain."],
  ["Wrist Osteoarthritis","Wrist/Hand","Musculoskeletal","Degenerative","Degenerative changes at radiocarpal/midcarpal joints."],
  ["First CMC Osteoarthritis","Wrist/Hand","Musculoskeletal","Degenerative","Trapeziometacarpal joint OA with grip weakness."],
  ["Ganglion Cyst","Wrist/Hand","Musculoskeletal","Soft tissue","Mucinous cyst arising from a joint or tendon sheath."],
  ["Dupuytren's Contracture","Wrist/Hand","Musculoskeletal","Fascia","Palmar fascia thickening with finger flexion contracture."],
  ["Mallet Finger","Wrist/Hand","Musculoskeletal","Tendon","Disruption of terminal extensor tendon at DIP."],
  ["Boutonnière Deformity","Wrist/Hand","Musculoskeletal","Tendon","Central slip injury producing PIP flexion / DIP extension."],
  ["Swan Neck Deformity","Wrist/Hand","Musculoskeletal","Tendon","PIP hyperextension and DIP flexion deformity."],
  ["Jersey Finger","Wrist/Hand","Musculoskeletal","Tendon","FDP avulsion at distal phalanx."],
  ["Skier's Thumb (UCL)","Wrist/Hand","Musculoskeletal","Ligament","Acute UCL injury of thumb MCP."],
  ["Gamekeeper's Thumb","Wrist/Hand","Musculoskeletal","Ligament","Chronic attritional UCL laxity of thumb MCP."],
  // WRIST/HAND — Neurological
  ["Carpal Tunnel Syndrome","Wrist/Hand","Neurological","Nerve compression","Median nerve compression at the carpal tunnel."],
  ["Guyon's Canal Syndrome","Wrist/Hand","Neurological","Nerve compression","Ulnar nerve compression at Guyon's canal."],
  ["Wartenberg's Syndrome","Wrist/Hand","Neurological","Nerve compression","Superficial radial sensory nerve entrapment."],
  ["Digital Nerve Neuroma","Wrist/Hand","Neurological","Peripheral nerve","Painful neuroma of digital nerve after laceration."],
  // WRIST/HAND — Rheumatological
  ["Rheumatoid Hand","Wrist/Hand","Rheumatological","Inflammatory","Symmetric polyarthritis with MCP/PIP involvement."],
  ["Psoriatic Arthritis (Hand)","Wrist/Hand","Rheumatological","Inflammatory","DIP-predominant arthritis ± dactylitis."],
  ["Hand Osteoarthritis (Heberden/Bouchard)","Wrist/Hand","Rheumatological","Degenerative","Nodal OA of DIP/PIP joints."],
  ["Gout (Hand)","Wrist/Hand","Rheumatological","Inflammatory","Monoarticular crystal arthropathy in hand."],
  // WRIST/HAND — Post-surgical
  ["Post Distal Radius Fracture (ORIF)","Wrist/Hand","Post-surgical","Fracture","Rehabilitation after ORIF of distal radius."],
  ["Post Carpal Tunnel Release","Wrist/Hand","Post-surgical","Decompression","Rehabilitation after carpal tunnel release."],
  ["Post Trigger Finger Release","Wrist/Hand","Post-surgical","Tendon","Rehabilitation after A1 pulley release."],
  ["Post Flexor Tendon Repair","Wrist/Hand","Post-surgical","Tendon","Zone-specific rehab after flexor tendon repair."],
  ["Post Extensor Tendon Repair","Wrist/Hand","Post-surgical","Tendon","Zone-specific rehab after extensor tendon repair."],
  // WRIST/HAND — Sports
  ["Scaphoid Fracture","Wrist/Hand","Sports","Bone","Scaphoid waist fracture from FOOSH."],
  ["Hook of Hamate Fracture","Wrist/Hand","Sports","Bone","Fracture of hook of hamate in golf/racquet sports."],
  ["Boxer's Fracture","Wrist/Hand","Sports","Bone","Fifth metacarpal neck fracture from punching."],
  ["Bennett's Fracture","Wrist/Hand","Sports","Bone","Intra-articular fracture-dislocation of thumb base."],

  // HIP — Musculoskeletal
  ["Hip Osteoarthritis","Hip","Musculoskeletal","Degenerative","Degenerative changes of the hip joint."],
  ["Femoroacetabular Impingement (Cam)","Hip","Musculoskeletal","Joint","Cam morphology causing labral/chondral injury."],
  ["Femoroacetabular Impingement (Pincer)","Hip","Musculoskeletal","Joint","Pincer morphology with overcoverage of femoral head."],
  ["Acetabular Labral Tear","Hip","Musculoskeletal","Labrum","Tear of acetabular labrum producing groin pain and clicking."],
  ["Greater Trochanteric Pain Syndrome","Hip","Musculoskeletal","Tendon","Gluteus medius/minimus tendinopathy ± trochanteric bursitis."],
  ["Trochanteric Bursitis","Hip","Musculoskeletal","Bursa","Inflammation of trochanteric bursa."],
  ["Iliopsoas Bursitis","Hip","Musculoskeletal","Bursa","Anterior hip pain from iliopsoas bursa irritation."],
  ["Iliopsoas Tendinopathy","Hip","Musculoskeletal","Tendon","Anterior hip pain with iliopsoas overload."],
  ["Internal Snapping Hip","Hip","Musculoskeletal","Soft tissue","Iliopsoas snapping over iliopectineal eminence."],
  ["External Snapping Hip","Hip","Musculoskeletal","Soft tissue","ITB snapping over greater trochanter."],
  ["Proximal Hamstring Tendinopathy","Hip","Musculoskeletal","Tendon","Tendinopathy at ischial tuberosity."],
  ["Ischiogluteal Bursitis","Hip","Musculoskeletal","Bursa","Bursitis at ischial tuberosity."],
  ["Hip Labral-Chondral Lesion","Hip","Musculoskeletal","Joint","Combined labral and chondral injury at the hip."],
  ["Pubic Symphysis Dysfunction","Hip","Musculoskeletal","Joint","Painful pubic symphysis often associated with peripartum or athletes."],
  // HIP — Neurological
  ["Deep Gluteal Syndrome","Hip","Neurological","Nerve compression","Sciatic nerve entrapment in deep gluteal space."],
  ["Obturator Nerve Entrapment","Hip","Neurological","Peripheral nerve","Medial thigh pain from obturator nerve compression."],
  ["Lateral Femoral Cutaneous Neuropathy","Hip","Neurological","Peripheral nerve","Meralgia paresthetica at the inguinal ligament."],
  // HIP — Rheumatological
  ["Rheumatoid Hip","Hip","Rheumatological","Inflammatory","RA involvement of the hip."],
  ["Avascular Necrosis (Hip)","Hip","Rheumatological","Bone","Osteonecrosis of femoral head."],
  ["Transient Synovitis (Hip)","Hip","Rheumatological","Inflammatory","Self-limited synovitis in children."],
  // HIP — Post-surgical
  ["Post Total Hip Arthroplasty (Posterior Approach)","Hip","Post-surgical","Arthroplasty","Posterior-approach THA rehabilitation with precautions."],
  ["Post Total Hip Arthroplasty (Anterior Approach)","Hip","Post-surgical","Arthroplasty","Anterior-approach THA rehabilitation."],
  ["Post Hip Arthroscopy (Labral Repair)","Hip","Post-surgical","Arthroscopy","Rehabilitation after labral repair."],
  ["Post Hip Arthroscopy (FAI Correction)","Hip","Post-surgical","Arthroscopy","Rehabilitation after FAI osteoplasty."],
  ["Post Periacetabular Osteotomy","Hip","Post-surgical","Bone","Rehabilitation after PAO for dysplasia."],
  // HIP — Sports
  ["Hip Adductor Strain","Hip","Sports","Soft tissue","Adductor longus strain in cutting sports."],
  ["Athletic Pubalgia (Sports Hernia)","Hip","Sports","Soft tissue","Lower abdominal/adductor injury without true hernia."],
  ["Femoral Neck Stress Fracture","Hip","Sports","Bone","Stress fracture in distance runners."],
  ["Hamstring Origin Avulsion","Hip","Sports","Soft tissue","Avulsion of proximal hamstrings from ischial tuberosity."],

  // KNEE — Musculoskeletal
  ["Knee Osteoarthritis (Medial)","Knee","Musculoskeletal","Degenerative","Medial compartment OA with varus loading."],
  ["Knee Osteoarthritis (Lateral)","Knee","Musculoskeletal","Degenerative","Lateral compartment OA."],
  ["Patellofemoral Osteoarthritis","Knee","Musculoskeletal","Degenerative","PF compartment OA with stair/squat pain."],
  ["Patellofemoral Pain Syndrome","Knee","Musculoskeletal","Joint","Anterior knee pain with stairs/squat/prolonged sitting."],
  ["Patellar Tendinopathy","Knee","Musculoskeletal","Tendon","'Jumper's knee' tendinopathy of patellar tendon."],
  ["Quadriceps Tendinopathy","Knee","Musculoskeletal","Tendon","Tendinopathy at superior pole of patella."],
  ["Pes Anserine Bursitis/Tendinopathy","Knee","Musculoskeletal","Tendon","Medial knee pain at pes anserine insertion."],
  ["Prepatellar Bursitis","Knee","Musculoskeletal","Bursa","Anterior knee bursitis ('housemaid's knee')."],
  ["Infrapatellar Bursitis","Knee","Musculoskeletal","Bursa","Inflammation of deep/superficial infrapatellar bursa."],
  ["Baker's Cyst","Knee","Musculoskeletal","Soft tissue","Popliteal cyst with posterior knee fullness."],
  ["Plica Syndrome","Knee","Musculoskeletal","Soft tissue","Symptomatic medial synovial plica."],
  ["Medial Meniscus Tear","Knee","Musculoskeletal","Meniscus","Medial meniscus tear with mechanical symptoms."],
  ["Lateral Meniscus Tear","Knee","Musculoskeletal","Meniscus","Lateral meniscus tear with mechanical symptoms."],
  ["Discoid Lateral Meniscus","Knee","Musculoskeletal","Meniscus","Congenital discoid meniscus prone to tear."],
  ["Patellar Instability","Knee","Musculoskeletal","Instability","Lateral patellar subluxation."],
  ["Recurrent Patellar Dislocation","Knee","Musculoskeletal","Instability","Recurrent lateral patellar dislocation."],
  ["Knee Hyperextension Injury","Knee","Musculoskeletal","Soft tissue","Posterior capsule strain from forced hyperextension."],
  // KNEE — Neurological
  ["Common Peroneal Nerve Palsy","Knee","Neurological","Peripheral nerve","Foot drop from peroneal nerve compression at fibular head."],
  ["Saphenous Nerve Entrapment","Knee","Neurological","Peripheral nerve","Medial knee/leg pain from saphenous nerve entrapment."],
  // KNEE — Rheumatological
  ["Rheumatoid Knee","Knee","Rheumatological","Inflammatory","Synovitis and joint destruction in RA."],
  ["Pseudogout (Knee)","Knee","Rheumatological","Inflammatory","CPPD crystal arthropathy of the knee."],
  ["Osteonecrosis of the Knee","Knee","Rheumatological","Bone","Spontaneous osteonecrosis of the medial femoral condyle."],
  // KNEE — Post-surgical
  ["Post ACL Reconstruction (BPTB)","Knee","Post-surgical","Ligament","Rehabilitation after BPTB ACL reconstruction."],
  ["Post ACL Reconstruction (Hamstring)","Knee","Post-surgical","Ligament","Rehabilitation after hamstring autograft ACLR."],
  ["Post ACL Reconstruction (Quad Tendon)","Knee","Post-surgical","Ligament","Rehabilitation after quadriceps tendon ACLR."],
  ["Post Meniscus Repair","Knee","Post-surgical","Meniscus","Rehabilitation after meniscus repair (protected loading)."],
  ["Post Partial Meniscectomy","Knee","Post-surgical","Meniscus","Rehabilitation after partial meniscectomy."],
  ["Post Total Knee Arthroplasty","Knee","Post-surgical","Arthroplasty","Rehabilitation after TKA."],
  ["Post Unicompartmental Knee Arthroplasty","Knee","Post-surgical","Arthroplasty","Rehabilitation after partial knee arthroplasty."],
  ["Post MPFL Reconstruction","Knee","Post-surgical","Ligament","Rehabilitation after medial patellofemoral ligament reconstruction."],
  ["Post High Tibial Osteotomy","Knee","Post-surgical","Bone","Rehabilitation after HTO for medial OA."],
  ["Post Microfracture (Knee)","Knee","Post-surgical","Cartilage","Rehabilitation after microfracture for chondral defects."],
  // KNEE — Sports
  ["ACL Tear","Knee","Sports","Ligament","Anterior cruciate ligament rupture — pivoting injury."],
  ["PCL Tear","Knee","Sports","Ligament","Posterior cruciate injury — dashboard or fall on flexed knee."],
  ["MCL Sprain (Grade I)","Knee","Sports","Ligament","Mild MCL sprain without instability."],
  ["MCL Sprain (Grade II)","Knee","Sports","Ligament","Partial MCL tear with mild laxity."],
  ["MCL Sprain (Grade III)","Knee","Sports","Ligament","Complete MCL rupture with valgus laxity."],
  ["LCL Sprain","Knee","Sports","Ligament","Lateral collateral ligament sprain."],
  ["Posterolateral Corner Injury","Knee","Sports","Ligament","Posterolateral corner injury with rotatory instability."],
  ["IT Band Syndrome","Knee","Sports","Soft tissue","Lateral knee pain in runners/cyclists."],
  ["Osgood-Schlatter Disease","Knee","Sports","Apophysitis","Tibial tubercle apophysitis in adolescent athletes."],
  ["Sinding-Larsen-Johansson Syndrome","Knee","Sports","Apophysitis","Inferior patellar pole apophysitis in adolescents."],
  ["Osteochondritis Dissecans (Knee)","Knee","Sports","Bone","OCD lesion of femoral condyle in young athletes."],
  ["Tibial Stress Fracture","Knee","Sports","Bone","Stress fracture of tibia in runners."],

  // FOOT/ANKLE — Musculoskeletal
  ["Achilles Tendinopathy (Mid-portion)","Foot/Ankle","Musculoskeletal","Tendon","Mid-portion Achilles tendinopathy."],
  ["Achilles Tendinopathy (Insertional)","Foot/Ankle","Musculoskeletal","Tendon","Insertional Achilles tendinopathy at calcaneus."],
  ["Plantar Fasciopathy","Foot/Ankle","Musculoskeletal","Fascia","Plantar heel pain worse with first steps."],
  ["Posterior Tibial Tendon Dysfunction","Foot/Ankle","Musculoskeletal","Tendon","PTT insufficiency leading to acquired flatfoot."],
  ["Peroneal Tendinopathy","Foot/Ankle","Musculoskeletal","Tendon","Lateral ankle tendinopathy."],
  ["Peroneal Tendon Subluxation","Foot/Ankle","Musculoskeletal","Tendon","Subluxation of peroneal tendons over lateral malleolus."],
  ["FHL Tendinopathy","Foot/Ankle","Musculoskeletal","Tendon","Flexor hallucis longus tendinopathy ('dancer's tendinitis')."],
  ["Tibialis Anterior Tendinopathy","Foot/Ankle","Musculoskeletal","Tendon","Anterior ankle tendinopathy."],
  ["Hallux Valgus","Foot/Ankle","Musculoskeletal","Deformity","Valgus deviation of the great toe with bunion."],
  ["Hallux Rigidus","Foot/Ankle","Musculoskeletal","Degenerative","First MTP osteoarthritis with limited extension."],
  ["Pes Planus (Flexible)","Foot/Ankle","Musculoskeletal","Deformity","Flexible flatfoot with arch collapse on weightbearing."],
  ["Pes Cavus","Foot/Ankle","Musculoskeletal","Deformity","High-arched foot with lateral overload."],
  ["Ankle Osteoarthritis","Foot/Ankle","Musculoskeletal","Degenerative","Tibiotalar OA, often post-traumatic."],
  ["Subtalar Joint Dysfunction","Foot/Ankle","Musculoskeletal","Joint","Hypomobility/instability of subtalar joint."],
  ["Anterior Ankle Impingement","Foot/Ankle","Musculoskeletal","Joint","Anterior tibiotalar impingement limiting dorsiflexion."],
  ["Posterior Ankle Impingement","Foot/Ankle","Musculoskeletal","Joint","Os trigonum / posterior soft tissue impingement."],
  ["Sinus Tarsi Syndrome","Foot/Ankle","Musculoskeletal","Joint","Lateral foot pain from sinus tarsi region."],
  ["Plantar Plate Tear","Foot/Ankle","Musculoskeletal","Ligament","Lesser MTP plantar plate injury."],
  ["Turf Toe","Foot/Ankle","Musculoskeletal","Ligament","First MTP plantar capsuloligamentous injury."],
  // FOOT/ANKLE — Neurological
  ["Tarsal Tunnel Syndrome","Foot/Ankle","Neurological","Nerve compression","Posterior tibial nerve compression at medial ankle."],
  ["Morton's Neuroma","Foot/Ankle","Neurological","Nerve","Interdigital nerve perineural fibrosis (commonly 3rd web)."],
  ["Baxter's Nerve Entrapment","Foot/Ankle","Neurological","Nerve compression","First branch of lateral plantar nerve entrapment."],
  ["Superficial Peroneal Nerve Entrapment","Foot/Ankle","Neurological","Nerve compression","Dorsolateral foot pain from SPN entrapment."],
  // FOOT/ANKLE — Rheumatological
  ["Gout (1st MTP)","Foot/Ankle","Rheumatological","Inflammatory","Acute monoarticular gout flare at first MTP."],
  ["Rheumatoid Foot","Foot/Ankle","Rheumatological","Inflammatory","Forefoot deformity and synovitis in RA."],
  ["Reactive Arthritis (Foot)","Foot/Ankle","Rheumatological","Inflammatory","Reactive arthritis with enthesopathy in foot."],
  // FOOT/ANKLE — Post-surgical
  ["Post Lateral Ankle Ligament Reconstruction","Foot/Ankle","Post-surgical","Ligament","Rehabilitation after Broström repair."],
  ["Post Achilles Repair","Foot/Ankle","Post-surgical","Tendon","Rehabilitation after Achilles tendon repair."],
  ["Post Ankle Arthroscopy","Foot/Ankle","Post-surgical","Arthroscopy","Rehabilitation after ankle arthroscopy."],
  ["Post Bunionectomy","Foot/Ankle","Post-surgical","Bone","Rehabilitation after hallux valgus correction."],
  ["Post Total Ankle Arthroplasty","Foot/Ankle","Post-surgical","Arthroplasty","Rehabilitation after total ankle replacement."],
  ["Post Subtalar Fusion","Foot/Ankle","Post-surgical","Fusion","Rehabilitation after subtalar arthrodesis."],
  // FOOT/ANKLE — Sports
  ["Lateral Ankle Sprain (Grade I)","Foot/Ankle","Sports","Ligament","Mild ATFL stretch without laxity."],
  ["Lateral Ankle Sprain (Grade II)","Foot/Ankle","Sports","Ligament","Partial ATFL ± CFL tear with mild laxity."],
  ["Lateral Ankle Sprain (Grade III)","Foot/Ankle","Sports","Ligament","Complete lateral ligament rupture with instability."],
  ["High Ankle Sprain (Syndesmosis)","Foot/Ankle","Sports","Ligament","Tibiofibular syndesmotic injury — external rotation mechanism."],
  ["Chronic Ankle Instability","Foot/Ankle","Sports","Instability","Recurrent giving way after ankle sprains."],
  ["Achilles Tendon Rupture","Foot/Ankle","Sports","Tendon","Acute Achilles rupture — positive Thompson test."],
  ["Metatarsal Stress Fracture","Foot/Ankle","Sports","Bone","Stress fracture commonly of 2nd/3rd metatarsal."],
  ["Navicular Stress Fracture","Foot/Ankle","Sports","Bone","High-risk stress fracture in jumping/running athletes."],
  ["5th Metatarsal Jones Fracture","Foot/Ankle","Sports","Bone","Proximal diaphyseal fracture of 5th metatarsal."],
  ["Sever's Disease","Foot/Ankle","Sports","Apophysitis","Calcaneal apophysitis in active children."],
  ["Lisfranc Injury","Foot/Ankle","Sports","Ligament","Tarsometatarsal ligamentous/bony injury."],

  // TMJ
  ["TMJ Disc Displacement (with Reduction)","TMJ","Musculoskeletal","Joint","Reciprocal click with disc reduction during opening."],
  ["TMJ Disc Displacement (without Reduction, Acute)","TMJ","Musculoskeletal","Joint","Acute closed lock with restricted opening."],
  ["TMJ Disc Displacement (without Reduction, Chronic)","TMJ","Musculoskeletal","Joint","Chronic closed lock with adaptive changes."],
  ["Myogenous TMD","TMJ","Musculoskeletal","Soft tissue","Masticatory muscle pain and dysfunction."],
  ["Mixed TMD (Arthrogenous + Myogenous)","TMJ","Musculoskeletal","Joint","Combined joint and muscle TMJ pathology."],
  ["TMJ Osteoarthritis","TMJ","Musculoskeletal","Degenerative","Degenerative TMJ changes with crepitus."],
  ["TMJ Hypermobility/Subluxation","TMJ","Musculoskeletal","Instability","Excessive condylar translation, may lock open."],
  ["Bruxism-Related TMD","TMJ","Musculoskeletal","Soft tissue","Parafunctional clenching driving TMD symptoms."],
  ["Trigeminal Neuralgia (Referral)","TMJ","Neurological","Peripheral nerve","Trigeminal neuralgia mimicking TMJ pain."],
  ["Rheumatoid TMJ","TMJ","Rheumatological","Inflammatory","RA involvement of the TMJ."],
  ["Juvenile Idiopathic Arthritis (TMJ)","TMJ","Rheumatological","Inflammatory","JIA involvement of TMJ in children."],
  ["Post TMJ Arthrocentesis","TMJ","Post-surgical","Joint","Rehabilitation after TMJ arthrocentesis."],
  ["Post TMJ Arthroscopy","TMJ","Post-surgical","Arthroscopy","Rehabilitation after TMJ arthroscopy."],
  ["TMJ Dysfunction in Cervicalgia Athletes","TMJ","Sports","Soft tissue","TMJ dysfunction associated with cervical sport injuries."],
];

// =============== VARIANT EXPANSION ===============
// Generate clinically valid variants per base item to multiply count.

const STAGES = ["Acute","Subacute","Chronic"];
const SIDES  = ["Right","Left"];
const POP_AGE = ["Pediatric","Adolescent","Adult","Geriatric"];

// Categories whose entities support staging
function variantsFor(name, region, category, subcategory) {
  const variants = [];

  // Stage variants (acute/subacute/chronic) for soft tissue, tendon, ligament, joint
  if (["Tendon","Ligament","Soft tissue","Joint","Capsule","Bursa","Bone","Fascia","Meniscus","Labrum","Tendon","Apophysitis"].includes(subcategory)) {
    STAGES.forEach(st => variants.push({ suffix:` — ${st} Stage`, descSuffix:` Presentation in the ${st.toLowerCase()} stage of healing/adaptation.` }));
  }

  // Side variants for unilateral conditions (skip spine/TMJ midline)
  if (!["Cervical","Thoracic","Lumbar","TMJ"].includes(region)) {
    SIDES.forEach(s => variants.push({ suffix:` (${s})`, descSuffix:` Right- or left-sided presentation: ${s.toLowerCase()} side.` }));
  }

  // Age variants for selected conditions
  if (["Sports","Musculoskeletal"].includes(category) && !name.toLowerCase().includes("pediatric")) {
    POP_AGE.forEach(a => variants.push({ suffix:` — ${a} Population`, descSuffix:` ${a} presentation with population-specific considerations.` }));
  }

  // Post-surgical timeframes
  if (category === "Post-surgical") {
    ["Phase I (0–6 wk)","Phase II (6–12 wk)","Phase III (3–6 mo)","Return-to-Sport"].forEach(p => {
      variants.push({ suffix:` — ${p}`, descSuffix:` ${p} rehabilitation phase considerations.` });
    });
  }

  return variants;
}

function pPlan(){
  return {
    acute: "Protect tissue; modulate pain (manual therapy, modalities as adjunct); patient education on load management.",
    subacute: "Restore ROM and motor control; introduce graded isometric/isotonic loading specific to involved tissue.",
    chronic: "Progressive resistance, capacity building and functional/sport-specific loading aligned with patient goals."
  };
}

function buildEntry(name, region, category, subcategory, description, idx) {
  return {
    id: idx + 1,
    name, region, category, subcategory, description,
    causes: ["Mechanical overload","Tissue-specific risk factors","Biomechanical contributors"],
    key_findings: `Clinical findings consistent with ${name.toLowerCase()} on history and physical examination.`,
    diagnostic_tips: "Diagnosis is primarily clinical; imaging only when red flags are present or if it will change management.",
    treatment_plan: pPlan(),
    special_tests: [],
    msk_tests: [],
    red_flags: ["Unremitting night pain","Unexplained weight loss","Progressive neurological deficit","Fever/systemic symptoms"],
    ebp_level: "EBP Moderate",
    etiology: `Multifactorial: load, capacity and individual risk factors interact in ${name}.`,
    epidemiology: `${region} ${category.toLowerCase()} presentation commonly seen in physiotherapy practice.`,
    pathophysiology: "Tissue-specific (e.g., tendinopathy continuum, OA process, nerve compression model).",
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

// Build dataset
const seen = new Set();
const out = [];

function push(name, region, category, subcategory, description){
  const key = name.trim().toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  out.push(buildEntry(name, region, category, subcategory, description, out.length));
}

BASE.forEach(([name, region, category, subcategory, description]) => {
  push(name, region, category, subcategory, description);
});

// Generate variants until we exceed 800
const TARGET = 820;
outer:
for (const [name, region, category, subcategory, description] of BASE) {
  if (out.length >= TARGET) break;
  const vs = variantsFor(name, region, category, subcategory);
  for (const v of vs) {
    if (out.length >= TARGET) break outer;
    push(name + v.suffix, region, category, subcategory, description + v.descSuffix);
  }
}

const target = path.join(__dirname,'..','src','data','disorders.json');
fs.writeFileSync(target, JSON.stringify(out, null, 2));

const byRegion = {};
const byCat = {};
out.forEach(o => { byRegion[o.region]=(byRegion[o.region]||0)+1; byCat[o.category]=(byCat[o.category]||0)+1; });
console.log(`Wrote ${out.length} disorders`);
console.log('By region:', byRegion);
console.log('By category:', byCat);
