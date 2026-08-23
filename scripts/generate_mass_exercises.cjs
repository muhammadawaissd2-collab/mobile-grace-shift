/* Generates 2000+ EBP-based band / free-weight / bodyweight exercises
   across the canonical body regions, each with intensity grading. */
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'src', 'data', 'exercises.json');
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

// ---------- 1. Normalise legacy regions to a canonical set ----------
const REGION_MAP = {
  'Cervical': 'Cervical Spine', 'Cervical Spine': 'Cervical Spine',
  'Thoracic Spine': 'Thoracic Spine',
  'Lumbar': 'Lumbar Spine', 'Lumbar Spine': 'Lumbar Spine', 'Spine': 'Lumbar Spine',
  'Shoulder': 'Shoulder',
  'Upper Limb': 'Elbow', 'Elbow/Wrist/Hand': 'Wrist/Hand',
  'Upper Extremity': 'Shoulder',
  'Hip': 'Hip', 'Knee': 'Knee', 'Ankle/Foot': 'Ankle/Foot',
  'Lower Extremity': 'Knee', 'Lower Limb': 'Hip',
  'Trunk': 'Core/Trunk', 'Core': 'Core/Trunk',
  'Full Body': 'Full Body', 'Neural Mobilisation': 'Full Body',
};
data.forEach(e => { e.region = REGION_MAP[e.region] || e.region; });

// ---------- 2. Base movements per region ----------
const R = {};
const m = (name, cat, prim, sec, ter, ebp, ref, cue, ind) =>
  ({ name, cat, prim, sec, ter: ter || [], ebp, ref, cue, ind });

R['Cervical Spine'] = [
  m('Cranio-Cervical Flexion','Activation',['Longus Colli','Longus Capitis'],['Rectus Capitis Anterior'],[],'EBP Strong','Jull et al., Spine 2002','Gentle nod, chin toward throat without lifting head.','Neck pain, cervicogenic headache'),
  m('Cervical Extensor Endurance Hold','Isometric',['Semispinalis Cervicis','Splenius Capitis'],['Multifidus (Cervical)'],[],'EBP Strong','O\'Leary et al., JOSPT 2007','Keep chin tucked while extending mid-cervical spine.','Chronic neck pain'),
  m('Cervical Rotation Isometric','Isometric',['Sternocleidomastoid','Splenius Capitis'],['Scalenes'],[],'EBP Moderate','Ylinen et al., JAMA 2003','Resist rotation with hand — no head movement.','Whiplash-associated disorder'),
  m('Cervical Side-Flexion Isometric','Isometric',['Scalenes','Upper Trapezius'],['Levator Scapulae'],[],'EBP Moderate','Ylinen et al., JAMA 2003','Press head into hand, keep eyes level.','Neck pain'),
  m('Chin Tuck with Retraction','Mobility',['Deep Cervical Flexors'],['Lower Trapezius'],[],'EBP Strong','Falla et al., Man Ther 2007','Glide head back over shoulders, not down.','Forward head posture'),
  m('Upper Trapezius Stretch','Stretching',['Upper Trapezius'],['Levator Scapulae'],[],'EBP Moderate','Page, IJSPT 2012','Ear to shoulder, opposite hand anchors scapula.','Cervical stiffness'),
  m('Levator Scapulae Stretch','Stretching',['Levator Scapulae'],['Upper Trapezius'],[],'EBP Moderate','Page, IJSPT 2012','Rotate away, look to axilla, depress scapula.','Cervicoscapular tightness'),
  m('Cervical Retraction with Extension','Mobility',['Deep Cervical Flexors','Cervical Extensors'],[],[],'EBP Strong','McKenzie protocol; Clare et al. 2004','Retract first, then extend — centralise symptoms.','Cervical radiculopathy'),
  m('Scapular Setting for Neck Pain','Activation',['Lower Trapezius','Serratus Anterior'],['Rhomboids'],[],'EBP Strong','Andersen et al., Arthritis Care 2008','Gently set scapula down and back, hold 10 s.','Neck-shoulder pain'),
  m('Suboccipital Release Nod','Mobility',['Rectus Capitis Posterior Minor','Obliquus Capitis'],[],[],'EBP Moderate','Hall et al., JOSPT 2007','Small nodding motion at skull base only.','Cervicogenic headache'),
  m('Cervical Proprioception Head-Eye Coordination','Neuromuscular',['Deep Cervical Flexors'],['Cervical Extensors'],[],'EBP Moderate','Treleaven, Man Ther 2008','Keep eyes fixed while rotating head slowly.','Dizziness with neck pain'),
  m('Prone Cervical Extension Lift-Off','Strengthening',['Cervical Extensors','Semispinalis'],['Upper Trapezius'],[],'EBP Moderate','O\'Leary et al., JOSPT 2007','Lift head 2 cm keeping chin tucked.','Cervical endurance deficit'),
  m('Nerve Glide — Median Cervical Bias','Mobility',['Median Nerve Tract'],['Scalenes'],[],'EBP Moderate','Nee et al., JOSPT 2012','Slide, never stretch — stop before symptom flare.','Cervical radiculopathy'),
  m('Deep Neck Flexor Endurance Progression','Strengthening',['Longus Colli'],['Hyoids'],[],'EBP Strong','Jull et al., Spine 2002','Maintain nod while lifting head off plinth.','Chronic neck pain'),
];

R['Thoracic Spine'] = [
  m('Thoracic Extension over Support','Mobility',['Thoracic Erector Spinae'],['Latissimus Dorsi'],[],'EBP Moderate','Heneghan et al., Musculoskelet Sci 2018','Extend over the block, ribs down, no lumbar flare.','Thoracic hypomobility'),
  m('Open-Book Thoracic Rotation','Mobility',['Thoracic Rotators','External Oblique'],['Latissimus Dorsi'],[],'EBP Moderate','Johnson et al., JOSPT 2012','Rotate from the ribcage, knees stay stacked.','Thoracic stiffness'),
  m('Quadruped Thoracic Rotation','Mobility',['Thoracic Rotators'],['Serratus Anterior'],[],'EBP Moderate','Johnson et al., JOSPT 2012','Hand behind head, rotate rib cage to ceiling.','Rotation deficit'),
  m('Prone Y Raise','Strengthening',['Lower Trapezius'],['Posterior Deltoid'],[],'EBP Strong','Cools et al., AJSM 2007','Thumbs up, lift arms into a Y, no shrug.','Scapular dyskinesis'),
  m('Prone T Raise','Strengthening',['Middle Trapezius','Rhomboids'],['Posterior Deltoid'],[],'EBP Strong','Cools et al., AJSM 2007','Squeeze scapulae, lift into a T.','Postural endurance'),
  m('Prone W Raise','Strengthening',['Rhomboids','Lower Trapezius'],['Infraspinatus'],[],'EBP Moderate','Cools et al., AJSM 2007','Elbows bent, retract and externally rotate.','Rounded shoulders'),
  m('Seated Thoracic Rotation','Mobility',['Thoracic Rotators'],['Obliques'],[],'EBP Moderate','Heneghan et al. 2018','Sit tall, rotate from sternum.','Desk-related stiffness'),
  m('Foam-Assisted Thoracic Segmental Extension','Mobility',['Thoracic Multifidus'],['Erector Spinae'],[],'EBP Limited','Heneghan et al. 2018','Work one segment at a time, exhale into extension.','Segmental hypomobility'),
  m('Wall Angel','Mobility',['Lower Trapezius','Serratus Anterior'],['Rotator Cuff'],[],'EBP Moderate','Cools et al. 2007','Keep ribs and wrists on wall through range.','Thoracic-shoulder posture'),
  m('Bent-Over Row','Strengthening',['Latissimus Dorsi','Middle Trapezius'],['Rhomboids','Biceps'],[],'EBP Strong','ACSM resistance-training guidance 2021','Hinge 45°, drive elbows past ribs.','Posterior chain weakness'),
  m('Reverse Fly','Strengthening',['Posterior Deltoid','Middle Trapezius'],['Rhomboids'],[],'EBP Strong','Cools et al. 2007','Lead with elbows, thumbs up.','Scapular retraction deficit'),
  m('Thoracic Rib-Cage Breathing Expansion','Breathing',['Diaphragm','Intercostals'],['Transversus Abdominis'],[],'EBP Moderate','Bordoni & Zanier, J Multidiscip Health 2013','Widen lower ribs laterally on inhale.','Restricted rib excursion'),
  m('Sphinx to Thoracic Press-Up','Mobility',['Thoracic Erector Spinae'],['Rectus Abdominis'],[],'EBP Limited','McKenzie protocol','Extend thoracic, keep pelvis grounded.','Flexion-biased posture'),
  m('Scapular Wall Slide','Activation',['Serratus Anterior','Lower Trapezius'],['Rotator Cuff'],[],'EBP Strong','Ludewig et al., JOSPT 2004','Reach long at the top — protract fully.','Scapular control'),
];

R['Shoulder'] = [
  m('Shoulder External Rotation at 0° Abduction','Strengthening',['Infraspinatus','Teres Minor'],['Posterior Deltoid'],[],'EBP Strong','Littlewood et al., BJSM 2015','Towel under elbow, rotate forearm out.','Rotator cuff related shoulder pain'),
  m('Shoulder Internal Rotation at 0° Abduction','Strengthening',['Subscapularis'],['Pectoralis Major','Latissimus Dorsi'],[],'EBP Strong','Littlewood et al., BJSM 2015','Elbow at side, rotate hand to abdomen.','Cuff weakness'),
  m('Scaption Raise to 90°','Strengthening',['Supraspinatus','Middle Deltoid'],['Serratus Anterior'],[],'EBP Strong','Reinold et al., JOSPT 2009','Raise in scapular plane, thumb up.','Subacromial pain'),
  m('Full-Can Raise','Strengthening',['Supraspinatus'],['Middle Deltoid'],[],'EBP Strong','Reinold et al., JOSPT 2009','Thumb up throughout — avoid empty-can.','Supraspinatus tendinopathy'),
  m('Shoulder Abduction to 90°','Strengthening',['Middle Deltoid'],['Supraspinatus','Upper Trapezius'],[],'EBP Moderate','ACSM 2021','No shrug — keep scapula depressed.','Deltoid weakness'),
  m('Shoulder Flexion Raise','Strengthening',['Anterior Deltoid'],['Pectoralis Major','Serratus Anterior'],[],'EBP Moderate','ACSM 2021','Raise to shoulder height, ribs down.','Flexion deficit'),
  m('Prone Horizontal Abduction','Strengthening',['Posterior Deltoid','Middle Trapezius'],['Infraspinatus'],[],'EBP Strong','Cools et al., AJSM 2007','Arm at 90°, lift with thumb up.','Posterior cuff weakness'),
  m('Sleeper Stretch','Stretching',['Posterior Capsule','Infraspinatus'],[],[],'EBP Moderate','McClure et al., JOSPT 2007','Side-lying, stabilise scapula, rotate gently.','GIRD'),
  m('Cross-Body Adduction Stretch','Stretching',['Posterior Deltoid','Posterior Capsule'],[],[],'EBP Moderate','McClure et al. 2007','Pull elbow across without shrugging.','Posterior tightness'),
  m('Serratus Punch','Activation',['Serratus Anterior'],['Pectoralis Minor'],[],'EBP Strong','Ludewig et al., JOSPT 2004','Protract the scapula at the end range.','Scapular winging'),
  m('Shoulder External Rotation at 90° Abduction','Strengthening',['Infraspinatus','Teres Minor'],['Posterior Deltoid'],[],'EBP Strong','Wilk et al., AJSM 2011','Elbow at shoulder height, control eccentric.','Overhead athlete cuff'),
  m('Row to External Rotation','Functional',['Middle Trapezius','Infraspinatus'],['Rhomboids'],[],'EBP Moderate','Cools et al. 2007','Row first, then rotate — no shrug.','Scapular dyskinesis'),
  m('Overhead Press','Strengthening',['Anterior Deltoid','Middle Deltoid'],['Triceps','Serratus Anterior'],[],'EBP Strong','ACSM 2021','Ribs down, press to full lockout.','Late-stage cuff rehab'),
  m('Pull-Down / Lat Pull','Strengthening',['Latissimus Dorsi'],['Biceps','Lower Trapezius'],[],'EBP Moderate','ACSM 2021','Depress the scapula before pulling.','Global shoulder strength'),
  m('Isometric Shoulder Abduction Hold','Isometric',['Middle Deltoid','Supraspinatus'],[],[],'EBP Moderate','Rio et al., BJSM 2015','Hold submaximally for analgesia.','Painful cuff tendinopathy'),
];

R['Elbow'] = [
  m('Eccentric Wrist Extension (Tyler Twist Pattern)','Strengthening',['Extensor Carpi Radialis Brevis'],['Extensor Digitorum'],[],'EBP Strong','Tyler et al., JSES 2010','3 s eccentric lowering, load to mild pain.','Lateral epicondylalgia'),
  m('Eccentric Wrist Flexion','Strengthening',['Flexor Carpi Radialis','Flexor Carpi Ulnaris'],['Palmaris Longus'],[],'EBP Moderate','Tyler et al. 2010','Slow lowering into extension.','Medial epicondylalgia'),
  m('Biceps Curl','Strengthening',['Biceps Brachii'],['Brachialis','Brachioradialis'],[],'EBP Strong','ACSM 2021','Elbows fixed at side, no swing.','Elbow flexor weakness'),
  m('Hammer Curl','Strengthening',['Brachioradialis','Brachialis'],['Biceps Brachii'],[],'EBP Moderate','ACSM 2021','Neutral grip throughout.','Forearm/elbow loading'),
  m('Triceps Extension','Strengthening',['Triceps Brachii'],['Anconeus'],[],'EBP Strong','ACSM 2021','Keep elbows narrow, full lockout.','Triceps weakness'),
  m('Forearm Pronation-Supination','Mobility',['Pronator Teres','Supinator'],['Biceps Brachii'],[],'EBP Moderate','Magee, Orthopedic Physical Assessment 2021','Elbow at 90°, rotate slowly end to end.','Post-fracture stiffness'),
  m('Elbow Flexion-Extension AROM','Mobility',['Biceps Brachii','Triceps Brachii'],[],[],'EBP Moderate','Magee 2021','Move through pain-free range.','Post-immobilisation'),
  m('Isometric Wrist Extension Hold','Isometric',['Extensor Carpi Radialis Brevis'],[],[],'EBP Strong','Rio et al., BJSM 2015','45 s submaximal holds for analgesia.','Tennis elbow, irritable'),
  m('Supination with Load','Strengthening',['Supinator','Biceps Brachii'],[],[],'EBP Moderate','Magee 2021','Rotate palm up against resistance.','Supination weakness'),
  m('Pronation with Load','Strengthening',['Pronator Teres','Pronator Quadratus'],[],[],'EBP Moderate','Magee 2021','Rotate palm down against resistance.','Pronator weakness'),
  m('Radial Nerve Glide','Mobility',['Radial Nerve Tract'],['Wrist Extensors'],[],'EBP Moderate','Nee et al., JOSPT 2012','Glide, do not stretch to symptom reproduction.','Radial tunnel'),
  m('Ulnar Nerve Glide','Mobility',['Ulnar Nerve Tract'],['Flexor Carpi Ulnaris'],[],'EBP Moderate','Nee et al. 2012','Avoid prolonged elbow flexion at end range.','Cubital tunnel'),
  m('Overhead Triceps Stretch','Stretching',['Triceps Brachii'],['Latissimus Dorsi'],[],'EBP Limited','Page, IJSPT 2012','Hold 30 s, keep ribs down.','Triceps tightness'),
  m('Wrist Extensor Stretch','Stretching',['Wrist Extensors'],[],[],'EBP Moderate','Page 2012','Elbow straight, flex wrist and deviate ulnarly.','Lateral epicondylalgia'),
];

R['Wrist/Hand'] = [
  m('Wrist Flexion Curl','Strengthening',['Flexor Carpi Radialis','Flexor Carpi Ulnaris'],['Flexor Digitorum Superficialis'],[],'EBP Moderate','Magee 2021','Forearm supported, move only the wrist.','Wrist flexor weakness'),
  m('Wrist Extension Curl','Strengthening',['Extensor Carpi Radialis Longus/Brevis'],['Extensor Digitorum'],[],'EBP Strong','Tyler et al. 2010','Slow controlled lowering.','Lateral epicondylalgia'),
  m('Radial Deviation Lift','Strengthening',['Extensor Carpi Radialis Longus','Flexor Carpi Radialis'],[],[],'EBP Moderate','Magee 2021','Small controlled arc, no forearm rotation.','Wrist instability'),
  m('Ulnar Deviation Lift','Strengthening',['Extensor Carpi Ulnaris','Flexor Carpi Ulnaris'],[],[],'EBP Moderate','Magee 2021','Keep forearm neutral.','TFCC rehab (late)'),
  m('Grip Squeeze','Strengthening',['Flexor Digitorum Profundus','Flexor Digitorum Superficialis'],['Thenar Muscles'],[],'EBP Strong','Bohannon, J Frailty Aging 2019','Squeeze 5 s, full release.','Grip weakness'),
  m('Finger Extension Against Band','Strengthening',['Extensor Digitorum'],['Interossei'],[],'EBP Moderate','Magee 2021','Open fingers wide against resistance.','Extensor imbalance'),
  m('Thumb Opposition','Strengthening',['Opponens Pollicis','Abductor Pollicis Brevis'],[],[],'EBP Moderate','Magee 2021','Touch each fingertip in sequence.','Thenar weakness / CTS'),
  m('Thumb Abduction (Palmar)','Strengthening',['Abductor Pollicis Brevis'],['Abductor Pollicis Longus'],[],'EBP Moderate','Magee 2021','Lift thumb away from palm plane.','De Quervain\'s late stage'),
  m('Tendon Gliding Sequence','Mobility',['Finger Flexors'],['Lumbricals'],[],'EBP Strong','Wehbé & Hunter, J Hand Surg 1985','Straight → hook → fist → tabletop.','Carpal tunnel, post-op hand'),
  m('Median Nerve Glide','Mobility',['Median Nerve Tract'],['Thenar Muscles'],[],'EBP Moderate','Nee et al. 2012','Gentle oscillation, stop before tingling.','Carpal tunnel syndrome'),
  m('Wrist Circumduction AROM','Mobility',['Wrist Flexors','Wrist Extensors'],[],[],'EBP Limited','Magee 2021','Slow full circles both directions.','Post-immobilisation stiffness'),
  m('Intrinsic Plus Hold','Isometric',['Lumbricals','Interossei'],[],[],'EBP Moderate','Magee 2021','MCP flexed, IPs straight — hold.','Intrinsic weakness'),
  m('Prayer Stretch','Stretching',['Wrist Flexors'],[],[],'EBP Limited','Page 2012','Lower hands until gentle stretch, 30 s.','Wrist flexor tightness'),
  m('Weight-Bearing Wrist Load Progression','Functional',['Wrist Extensors','Forearm Stabilisers'],['Rotator Cuff'],[],'EBP Moderate','Magee 2021','Progress wall → table → floor.','Return to load-bearing'),
];

R['Hip'] = [
  m('Glute Bridge','Strengthening',['Gluteus Maximus'],['Hamstrings','Erector Spinae'],[],'EBP Strong','Reiman et al., PTSport 2012','Posterior tilt first, drive through heels.','Gluteal weakness, LBP'),
  m('Side-Lying Hip Abduction','Strengthening',['Gluteus Medius'],['Gluteus Minimus','TFL'],[],'EBP Strong','Distefano et al., JOSPT 2009','Slight extension, lead with heel.','Gluteal tendinopathy, PFP'),
  m('Clamshell','Activation',['Gluteus Medius','Piriformis'],['Gluteus Maximus'],[],'EBP Strong','Distefano et al. 2009','Pelvis stacked, no rolling back.','Hip abductor activation'),
  m('Hip Hinge / Deadlift Pattern','Strengthening',['Gluteus Maximus','Hamstrings'],['Erector Spinae'],[],'EBP Strong','ACSM 2021','Push hips back, neutral spine.','Posterior chain loading'),
  m('Hip Thrust','Strengthening',['Gluteus Maximus'],['Hamstrings','Quadriceps'],[],'EBP Strong','Contreras et al., JSCR 2015','Chin tucked, full lockout, ribs down.','Gluteal strength'),
  m('Standing Hip Abduction','Strengthening',['Gluteus Medius'],['Gluteus Minimus'],[],'EBP Strong','Mellor et al., BMJ 2018','Keep pelvis level, no trunk lean.','Gluteal tendinopathy'),
  m('Hip Extension in Standing','Strengthening',['Gluteus Maximus'],['Hamstrings'],[],'EBP Moderate','Reiman et al. 2012','Extend from the hip, avoid lumbar arch.','Hip extensor weakness'),
  m('Hip Flexor (Thomas-Position) Stretch','Stretching',['Iliopsoas','Rectus Femoris'],['TFL'],[],'EBP Moderate','Page, IJSPT 2012','Posteriorly tilt pelvis before leaning.','Hip flexor tightness'),
  m('Piriformis Stretch','Stretching',['Piriformis'],['Gluteus Medius'],[],'EBP Moderate','Page 2012','Figure-4, pull knee toward opposite shoulder.','Deep gluteal syndrome'),
  m('Copenhagen Adduction','Strengthening',['Adductor Longus','Adductor Magnus'],['Obliques'],[],'EBP Strong','Harøy et al., BJSM 2019','Keep body in a straight line, hips lifted.','Groin pain, prevention'),
  m('Adductor Squeeze Isometric','Isometric',['Adductor Longus','Adductor Brevis'],['Pectineus'],[],'EBP Strong','Serner et al., BJSM 2020','45° knee flexion, squeeze 45 s.','Adductor-related groin pain'),
  m('Monster Walk','Neuromuscular',['Gluteus Medius'],['Gluteus Maximus','TFL'],[],'EBP Moderate','Distefano et al. 2009','Maintain band tension, do not adduct.','Dynamic valgus'),
  m('Single-Leg Stance Balance','Balance',['Gluteus Medius','Hip Rotators'],['Ankle Stabilisers'],[],'EBP Strong','Sherrington et al., Cochrane 2019','Pelvis level, minimal sway.','Falls prevention, hip control'),
  m('Hip Internal/External Rotation Strength','Strengthening',['Hip External Rotators','Gluteus Minimus'],['Piriformis'],[],'EBP Moderate','Reiman et al. 2012','Move only at the hip, pelvis quiet.','Rotational hip control'),
  m('Step-Up','Functional',['Gluteus Maximus','Quadriceps'],['Hamstrings'],[],'EBP Strong','ACSM 2021','Drive through the top leg, control descent.','Functional loading'),
];

R['Knee'] = [
  m('Quadriceps Setting','Activation',['Vastus Medialis','Rectus Femoris'],['Vastus Lateralis'],[],'EBP Strong','Logerstedt et al., JOSPT 2018','Press knee down, tighten thigh 5 s.','Post-op knee, quad inhibition'),
  m('Straight-Leg Raise','Strengthening',['Rectus Femoris','Iliopsoas'],['Vastus Medialis'],[],'EBP Strong','Logerstedt et al. 2018','Lock the knee before lifting.','Post-op ACL/TKA'),
  m('Short-Arc Quad','Strengthening',['Vastus Medialis','Vastus Lateralis'],['Rectus Femoris'],[],'EBP Strong','Logerstedt et al. 2018','Extend last 30° over a bolster.','Extension lag'),
  m('Terminal Knee Extension','Strengthening',['Quadriceps'],['Gluteus Maximus'],[],'EBP Strong','Logerstedt et al. 2018','Finish into full extension against band.','Extension deficit'),
  m('Wall Sit','Isometric',['Quadriceps'],['Gluteus Maximus'],[],'EBP Strong','Rio et al., BJSM 2015','Thighs parallel, hold under control.','Patellofemoral pain'),
  m('Squat to Chair','Strengthening',['Quadriceps','Gluteus Maximus'],['Hamstrings'],[],'EBP Strong','ACSM 2021','Knees track over toes, control descent.','Global knee strength'),
  m('Split Squat','Strengthening',['Quadriceps','Gluteus Maximus'],['Adductors'],[],'EBP Strong','ACSM 2021','Vertical trunk, back knee to floor.','Unilateral loading'),
  m('Spanish Squat','Isometric',['Quadriceps'],['Gluteus Maximus'],[],'EBP Strong','Rio et al., BJSM 2017','Band at knee crease, shins vertical.','Patellar tendinopathy'),
  m('Nordic Hamstring Curl','Strengthening',['Hamstrings'],['Gastrocnemius','Gluteus Maximus'],[],'EBP Strong','van Dyk et al., BJSM 2019','Resist the fall as long as possible.','Hamstring injury prevention'),
  m('Hamstring Curl','Strengthening',['Biceps Femoris','Semitendinosus'],['Gastrocnemius'],[],'EBP Strong','ACSM 2021','Control the eccentric phase.','Hamstring strength'),
  m('Step-Down','Functional',['Quadriceps','Gluteus Medius'],['Gluteus Maximus'],[],'EBP Strong','Logerstedt et al. 2018','No knee valgus, slow 3 s descent.','PFP, dynamic control'),
  m('Heel Slide','Mobility',['Hamstrings','Quadriceps'],[],[],'EBP Strong','Logerstedt et al. 2018','Slide heel toward buttock to tolerance.','Post-op ROM'),
  m('Prone Knee Hang','Mobility',['Quadriceps'],['Posterior Capsule'],[],'EBP Moderate','Logerstedt et al. 2018','Let gravity restore terminal extension.','Extension loss'),
  m('Lateral Step-Over','Neuromuscular',['Gluteus Medius','Quadriceps'],['Ankle Stabilisers'],[],'EBP Moderate','Logerstedt et al. 2018','Control frontal-plane knee position.','Return to sport'),
];

R['Ankle/Foot'] = [
  m('Standing Heel Raise','Strengthening',['Gastrocnemius','Soleus'],['Tibialis Posterior'],[],'EBP Strong','Silbernagel et al., AJSM 2007','Full height, slow lowering.','Achilles tendinopathy'),
  m('Seated Heel Raise (Soleus Bias)','Strengthening',['Soleus'],['Gastrocnemius'],[],'EBP Strong','Silbernagel et al. 2007','Knee bent 90° to bias soleus.','Achilles / calf endurance'),
  m('Eccentric Heel Drop','Strengthening',['Gastrocnemius','Soleus'],['Achilles Tendon'],[],'EBP Strong','Alfredson et al., AJSM 1998','Rise on both, lower on one over 3 s.','Mid-portion Achilles tendinopathy'),
  m('Ankle Dorsiflexion Strength','Strengthening',['Tibialis Anterior'],['Extensor Digitorum Longus'],[],'EBP Moderate','Magee 2021','Pull foot up and slightly in.','Foot drop, shin pain'),
  m('Ankle Eversion Strength','Strengthening',['Peroneus Longus','Peroneus Brevis'],['Extensor Digitorum Longus'],[],'EBP Strong','Martin et al., JOSPT 2021','Turn sole outward without rotating the leg.','Lateral ankle sprain'),
  m('Ankle Inversion Strength','Strengthening',['Tibialis Posterior'],['Tibialis Anterior'],[],'EBP Strong','Martin et al., JOSPT 2021','Lift arch, keep knee still.','PTTD, flat foot'),
  m('Single-Leg Balance on Foam','Balance',['Ankle Stabilisers','Peroneals'],['Gluteus Medius'],[],'EBP Strong','Martin et al., JOSPT 2021','Quiet stance, minimal correction.','Chronic ankle instability'),
  m('Short-Foot Exercise','Activation',['Abductor Hallucis','Foot Intrinsics'],['Tibialis Posterior'],[],'EBP Moderate','McKeon et al., BJSM 2015','Shorten arch without curling toes.','Plantar heel pain, pes planus'),
  m('Toe Yoga','Neuromuscular',['Flexor Hallucis Brevis','Extensor Digitorum Brevis'],['Foot Intrinsics'],[],'EBP Limited','McKeon et al. 2015','Lift the big toe alone, then the others.','Intrinsic control'),
  m('Gastrocnemius Wall Stretch','Stretching',['Gastrocnemius'],['Soleus'],[],'EBP Moderate','Page 2012','Back knee straight, heel down, 30 s.','Calf tightness'),
  m('Soleus Bent-Knee Stretch','Stretching',['Soleus'],['Achilles Tendon'],[],'EBP Moderate','Page 2012','Bend the back knee, keep heel down.','Restricted dorsiflexion'),
  m('Weight-Bearing Dorsiflexion Mobilisation','Mobility',['Talocrural Joint'],['Soleus'],[],'EBP Strong','Martin et al., JOSPT 2021','Drive knee over 2nd toe, heel down.','Dorsiflexion restriction'),
  m('Plantar Fascia Specific Stretch','Stretching',['Plantar Fascia'],['Foot Intrinsics'],[],'EBP Strong','DiGiovanni et al., JBJS 2006','Extend toes, massage the taut band.','Plantar fasciopathy'),
  m('Heel Raise with Toe Extension (Windlass Load)','Strengthening',['Soleus','Flexor Hallucis Longus'],['Plantar Fascia'],[],'EBP Strong','Rathleff et al., SJMSS 2015','Towel under toes, slow 3-s tempo.','Plantar heel pain'),
];

R['Lumbar Spine'] = [
  m('Pelvic Tilt','Mobility',['Transversus Abdominis','Rectus Abdominis'],['Multifidus'],[],'EBP Moderate','Delitto et al., JOSPT 2012','Small rocking motion, breathe normally.','Acute LBP'),
  m('Abdominal Bracing','Activation',['Transversus Abdominis'],['Obliques','Multifidus'],[],'EBP Strong','Hodges & Richardson, Spine 1996','Brace 20%, keep breathing.','Motor control LBP'),
  m('Bird Dog','Stability',['Multifidus','Gluteus Maximus'],['Erector Spinae'],[],'EBP Strong','McGill, Low Back Disorders 2015','Keep pelvis level, long reach.','Lumbar motor control'),
  m('Dead Bug','Stability',['Transversus Abdominis','Rectus Abdominis'],['Obliques'],[],'EBP Strong','McGill 2015','Keep low back flat throughout.','Core control'),
  m('Curl-Up (McGill)','Strengthening',['Rectus Abdominis'],['Obliques'],[],'EBP Strong','McGill 2015','Hands under lumbar, lift only the head/shoulders.','Trunk endurance'),
  m('Side Plank','Isometric',['Quadratus Lumborum','Obliques'],['Gluteus Medius'],[],'EBP Strong','McGill 2015','Straight line ear to ankle.','Lateral chain endurance'),
  m('Prone Press-Up','Mobility',['Lumbar Erector Spinae'],['Multifidus'],[],'EBP Strong','McKenzie; Delitto et al. 2012','Hips stay down, extend to centralise.','Directional preference extension'),
  m('Cat-Camel','Mobility',['Lumbar Erector Spinae','Rectus Abdominis'],['Multifidus'],[],'EBP Moderate','McGill 2015','Move slowly through full range.','Spinal stiffness'),
  m('Lumbar Rotation (Knee Rolls)','Mobility',['Lumbar Rotators','Obliques'],[],[],'EBP Moderate','Delitto et al. 2012','Roll knees within comfort.','Stiff, painful low back'),
  m('Bridge with Marching','Stability',['Gluteus Maximus','Multifidus'],['Hamstrings'],[],'EBP Strong','Delitto et al. 2012','No pelvic drop when lifting the foot.','Lumbopelvic control'),
  m('Hip Hinge Retraining','Functional',['Gluteus Maximus','Hamstrings'],['Erector Spinae'],[],'EBP Strong','McGill 2015','Spine neutral, hinge from hips only.','Lifting-related LBP'),
  m('Prone Hip Extension','Strengthening',['Gluteus Maximus'],['Hamstrings','Multifidus'],[],'EBP Moderate','Delitto et al. 2012','Squeeze the glute, no lumbar arching.','Extensor sequencing'),
  m('Sciatic Nerve Glide','Mobility',['Sciatic Nerve Tract'],['Hamstrings'],[],'EBP Moderate','Nee et al. 2012','Oscillate, never hold into symptoms.','Lumbar radiculopathy'),
  m('Farmer Carry','Functional',['Quadratus Lumborum','Obliques'],['Trapezius','Forearm Flexors'],[],'EBP Moderate','McGill 2015','Ribs down, tall posture, quiet steps.','Load tolerance'),
];

R['Core/Trunk'] = [
  m('Front Plank','Isometric',['Rectus Abdominis','Transversus Abdominis'],['Gluteus Maximus'],[],'EBP Strong','McGill 2015','Ribs down, glutes on, neutral neck.','Core endurance'),
  m('Pallof Press','Stability',['Obliques','Transversus Abdominis'],['Gluteus Medius'],[],'EBP Strong','McGill 2015','Resist rotation — press straight out.','Anti-rotation control'),
  m('Hollow Body Hold','Isometric',['Rectus Abdominis'],['Hip Flexors'],[],'EBP Moderate','McGill 2015','Low back pressed into floor.','Advanced core control'),
  m('Russian Twist','Strengthening',['Obliques'],['Rectus Abdominis'],[],'EBP Limited','ACSM 2021','Rotate from the ribcage, spine tall.','Rotational strength'),
  m('Leg Lower (Dead-Bug Progression)','Strengthening',['Lower Rectus Abdominis','Transversus Abdominis'],['Hip Flexors'],[],'EBP Moderate','McGill 2015','Only lower as far as the back stays flat.','Anterior core'),
  m('Bear Crawl Hold','Isometric',['Transversus Abdominis','Serratus Anterior'],['Quadriceps'],[],'EBP Moderate','McGill 2015','Knees 2 cm off floor, back flat.','Global stability'),
  m('Side Plank with Hip Abduction','Stability',['Obliques','Gluteus Medius'],['Quadratus Lumborum'],[],'EBP Moderate','McGill 2015','Lift top leg without rolling.','Lateral chain'),
  m('Chop Pattern','Functional',['Obliques'],['Latissimus Dorsi','Gluteus Maximus'],[],'EBP Moderate','ACSM 2021','Drive from the hips, arms follow.','Functional rotation'),
  m('Lift Pattern','Functional',['Obliques','Erector Spinae'],['Deltoid'],[],'EBP Moderate','ACSM 2021','Diagonal low-to-high, ribs stacked.','Overhead rotation'),
  m('Reverse Crunch','Strengthening',['Lower Rectus Abdominis'],['Obliques'],[],'EBP Limited','ACSM 2021','Curl pelvis up, no momentum.','Lower abdominal strength'),
  m('Diaphragmatic Breathing','Breathing',['Diaphragm'],['Transversus Abdominis','Pelvic Floor'],[],'EBP Strong','Bordoni & Zanier 2013','360° lower-rib expansion.','Pain modulation, LBP'),
  m('Suitcase Carry','Functional',['Obliques','Quadratus Lumborum'],['Forearm Flexors'],[],'EBP Moderate','McGill 2015','Do not lean — stay square.','Anti-lateral flexion'),
  m('Bird Dog Row','Stability',['Multifidus','Latissimus Dorsi'],['Obliques'],[],'EBP Moderate','McGill 2015','No trunk rotation as you row.','Integrated stability'),
  m('Standing Anti-Rotation Hold','Isometric',['Obliques','Transversus Abdominis'],['Gluteus Medius'],[],'EBP Moderate','McGill 2015','Hold still against band pull.','Trunk stiffness training'),
];

R['Full Body'] = [
  m('Sit-to-Stand','Functional',['Quadriceps','Gluteus Maximus'],['Erector Spinae'],[],'EBP Strong','Bohannon, Percept Mot Skills 2006','Nose over toes, no hands.','Functional capacity, elderly'),
  m('Squat to Overhead Reach','Functional',['Quadriceps','Deltoid'],['Gluteus Maximus','Core'],[],'EBP Moderate','ACSM 2021','Full squat then reach tall.','Whole-body mobility'),
  m('Deadlift Pattern','Strengthening',['Gluteus Maximus','Hamstrings','Erector Spinae'],['Trapezius','Forearm Flexors'],[],'EBP Strong','ACSM 2021','Brace, hinge, drive the floor away.','Global strength'),
  m('Push-Up','Strengthening',['Pectoralis Major','Triceps Brachii'],['Serratus Anterior','Core'],[],'EBP Strong','ACSM 2021','Elbows 45°, body in one line.','Upper-body strength'),
  m('Row Pattern','Strengthening',['Latissimus Dorsi','Middle Trapezius'],['Biceps Brachii'],[],'EBP Strong','ACSM 2021','Set the scapula before pulling.','Posterior chain'),
  m('Lunge','Functional',['Quadriceps','Gluteus Maximus'],['Adductors','Core'],[],'EBP Strong','ACSM 2021','Trunk upright, knee tracks the toe.','Functional lower limb'),
  m('Step-Up with Reach','Functional',['Gluteus Maximus','Quadriceps'],['Deltoid','Core'],[],'EBP Moderate','ACSM 2021','Control step-down, no push-off.','Task-specific training'),
  m('Thruster Pattern','Functional',['Quadriceps','Deltoid'],['Gluteus Maximus','Triceps'],[],'EBP Moderate','ACSM 2021','Sequence legs then arms.','Conditioning'),
  m('Bear-Crawl Travel','Neuromuscular',['Core','Serratus Anterior'],['Quadriceps','Deltoid'],[],'EBP Limited','ACSM 2021','Hips low, contralateral pattern.','Coordination'),
  m('Marching in Place','Functional',['Hip Flexors','Core'],['Gluteus Medius'],[],'EBP Moderate','Sherrington et al., Cochrane 2019','Tall posture, knee to hip height.','Deconditioning, warm-up'),
  m('Sit-to-Stand to Calf Raise','Functional',['Quadriceps','Gastrocnemius'],['Gluteus Maximus'],[],'EBP Moderate','Bohannon 2006','Stand fully then rise on toes.','Elderly power'),
  m('Farmer Carry Circuit','Functional',['Grip Flexors','Core'],['Trapezius','Gluteus Medius'],[],'EBP Moderate','McGill 2015','Stay tall and square.','Work-conditioning'),
  m('Squat Jump','Plyometric',['Quadriceps','Gluteus Maximus'],['Gastrocnemius'],[],'EBP Strong','Markovic & Mikulic, Sports Med 2010','Land soft, absorb through hips.','Power, return-to-sport'),
  m('Broad Jump and Stick','Plyometric',['Gluteus Maximus','Quadriceps'],['Hamstrings','Calf'],[],'EBP Strong','Markovic & Mikulic 2010','Stick the landing for 2 s.','RTS testing'),
];

// ---------- 3. Variants ----------
// [suffix, equipment, level, intensity, category-override|null, dosage, extra-cue]
const V = [
  ['— Assisted / Pain-Free Range','Bodyweight','Beginner',2,null,'2–3 sets × 10–15 reps daily, RPE 2–3','Work strictly within the pain-free arc.'],
  ['— Isometric Hold','Bodyweight','Beginner',3,'Isometric','5 sets × 30–45 s hold at 40–70% MVC, daily','Hold submaximally; a dull ache ≤3/10 is acceptable.'],
  ['— Bodyweight Standard','Bodyweight','Beginner',3,null,'3 sets × 12–15 reps, 3–4×/week, RPE 4–5','Own the full range before adding load.'],
  ['— Band Level 1 (Light)','Resistance band','Beginner',4,null,'3 sets × 15 reps with a light band, daily to alternate days','Band tension should be even through the whole range.'],
  ['— Band Level 2 (Medium)','Resistance band','Intermediate',5,null,'3–4 sets × 12 reps with a medium band, 3×/week, RPE 6','Anchor the band so resistance peaks at end range.'],
  ['— Band Level 3 (Heavy)','Resistance band','Advanced',7,null,'4 sets × 8–10 reps with a heavy band, 3×/week, RPE 7–8','Control the return phase — do not let the band snap back.'],
  ['— Dumbbell Light Load','Free weights','Intermediate',5,null,'3 sets × 12–15 reps at ~50–60% 1RM, 3×/week','Choose a load you could still do 3 more reps with.'],
  ['— Dumbbell Moderate Load','Free weights','Intermediate',6,null,'4 sets × 8–12 reps at 65–75% 1RM, 2–3×/week, RPE 7','Hypertrophy dose — 48 h between sessions.'],
  ['— Dumbbell Heavy Slow Resistance','Free weights','Advanced',8,null,'4 sets × 6 reps, 3 s up / 3 s down, 3×/week','Heavy slow resistance: proven for tendinopathy loading.'],
  ['— Eccentric Emphasis (3-s Lower)','Free weights','Intermediate',6,null,'3 sets × 10 reps with a 3–4 s eccentric, daily to alternate days','Eccentric overload drives tendon remodelling.'],
  ['— Tempo 3-1-3 Control','Bodyweight','Intermediate',5,null,'3 sets × 10 reps at 3-1-3 tempo, 3×/week','Slow tempo increases time under tension without heavy load.'],
  ['— Unilateral / Single-Side','Bodyweight','Intermediate',6,null,'3 sets × 10 reps each side, 3×/week, RPE 6–7','Address side-to-side deficit; start with the weaker limb.'],
  ['— Endurance Protocol (High Rep)','Bodyweight','Beginner',4,null,'2–3 sets × 20–30 reps or 60 s, daily','Low-load high-repetition dosing for local endurance.'],
  ['— Loaded End-Range Pause','Free weights','Advanced',7,null,'4 sets × 8 reps with a 2 s end-range pause, 2–3×/week','Pause where the muscle is longest / weakest.'],
  ['— Power / Explosive Progression','Bodyweight','Advanced',9,'Plyometric','4–5 sets × 5 fast reps with full recovery, 2×/week','Move fast concentrically, land or return softly.'],
];

// ---------- 4. Build ----------
let nextId = Math.max(...data.map(e => e.id || 0)) + 1;
const existingNames = new Set(data.map(e => e.name.toLowerCase().trim()));
const created = [];

for (const [region, bases] of Object.entries(R)) {
  for (const b of bases) {
    for (const [suffix, equip, level, intensity, catOverride, dosage, extraCue] of V) {
      const name = `${b.name} ${suffix}`;
      if (existingNames.has(name.toLowerCase().trim())) continue;
      existingNames.add(name.toLowerCase().trim());
      const category = catOverride || b.cat;
      const ex = {
        id: nextId++,
        name,
        description: `${b.name} performed as a ${level.toLowerCase()}-level ${equip.toLowerCase()} variation targeting ${b.prim.join(' and ')}. ${extraCue}`,
        region,
        category,
        difficulty: level,
        intensity,
        equipment: [equip],
        ebp_level: intensity >= 8 && b.ebp === 'EBP Strong' ? 'EBP Strong' : b.ebp,
        target_muscles: [...b.prim, ...b.sec],
        primary_muscles: b.prim,
        secondary_muscles: b.sec,
        tertiary_muscles: b.ter,
        other_muscles: [],
        instructions: `${b.cue} ${extraCue}`,
        sets_reps: dosage,
        load_dosage: dosage,
        clinical_notes: `Indicated for ${b.ind}. Progress only when the current dose is completed with ≤2/10 pain that settles within 24 h.`,
        starting_position: `Set up for ${b.name.toLowerCase()} in a stable, well-supported position with the ${region.toLowerCase()} in neutral alignment.`,
        execution_steps: [
          `Adopt the described starting position and set the ${b.prim[0].toLowerCase()}.`,
          b.cue,
          extraCue,
          'Return under control and reset alignment before the next repetition.',
        ],
        breathing: 'Exhale on effort, inhale on the return. Never hold the breath (avoid Valsalva).',
        tempo: level === 'Advanced' ? '3-1-3 controlled, or explosive concentric where prescribed' : '2-1-3 (concentric–pause–eccentric)',
        progressions: [
          'Increase band tension or load 5–10% once the top of the rep range feels RPE ≤6',
          'Progress to a single-limb or longer-lever version',
          'Add tempo, pause, or plyometric demand in the final phase',
        ],
        regressions: [
          'Reduce range to the pain-free arc',
          'Drop to bodyweight or a lighter band',
          'Convert to an isometric hold at the least painful angle',
        ],
        cueing: [b.cue, extraCue, 'Keep the movement smooth — quality over quantity.'],
        common_errors: [
          'Compensating with adjacent segments instead of the target muscle',
          'Rushing the eccentric phase',
          'Progressing load before technique is consistent',
        ],
        contraindications: [
          'Acute unhealed fracture or post-op precaution phase',
          'Pain >5/10 during or lasting >24 h after the session',
          'Active infection, DVT or unexplained red-flag symptoms',
        ],
        indications: [b.ind],
        references: [b.ref, 'ACSM Guidelines for Exercise Testing and Prescription, 11th ed. (2021)'],
      };
      created.push(ex);
    }
  }
}

data.forEach(e => {
  if (e.intensity == null) {
    e.intensity = e.difficulty === 'Advanced' ? 8 : e.difficulty === 'Intermediate' ? 5 : 3;
  }
  if (!e.equipment || !e.equipment.length) e.equipment = ['Bodyweight'];
  // restrict equipment to band/weights/bodyweight
  e.equipment = e.equipment.map(q => {
    const s = String(q).toLowerCase();
    if (s.includes('band')) return 'Resistance band';
    if (s.includes('dumbbell') || s.includes('weight') || s.includes('cable') || s.includes('kettle')) return 'Free weights';
    return 'Bodyweight';
  });
  e.equipment = [...new Set(e.equipment)];
});

const out = data.concat(created);
fs.writeFileSync(FILE, JSON.stringify(out, null, 1));
console.log('added', created.length, 'total', out.length);
const c = {};
out.forEach(e => c[e.region] = (c[e.region]||0)+1);
console.log(c);
