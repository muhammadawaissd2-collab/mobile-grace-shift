/* Adds sport-rehab / return-to-play exercises written from a sports-PT perspective. */
const fs = require('fs');
const P = 'src/data/exercises.json';
const ex = JSON.parse(fs.readFileSync(P, 'utf8'));
let id = Math.max(...ex.map(e => e.id)) + 1;
const have = new Set(ex.map(e => e.name.toLowerCase()));

const REGIONS = {
  Knee: {
    muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Gastrocnemius'],
    drills: [
      ['Double-Leg Drop Jump to Stick', 'Plyometric', 'Intermediate', 6, 'Bodyweight'],
      ['Single-Leg Drop Landing', 'Plyometric', 'Advanced', 8, 'Bodyweight'],
      ['Lateral Bound and Stick', 'Plyometric', 'Advanced', 8, 'Bodyweight'],
      ['Deceleration Run-to-Stop Drill', 'Functional', 'Advanced', 9, 'Bodyweight'],
      ['90-Degree Cut Rehearsal', 'Functional', 'Advanced', 9, 'Bodyweight'],
      ['Nordic Hamstring Lower', 'Strengthening', 'Advanced', 9, 'Bodyweight'],
      ['Spanish Squat Isometric Hold', 'Isometric', 'Beginner', 4, 'Resistance band'],
      ['Rear-Foot-Elevated Split Squat', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Single-Leg Romanian Deadlift', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Reactive Hop-and-Hold to Cue', 'Neuromuscular', 'Advanced', 8, 'Bodyweight'],
      ['Triple Hop for Distance (Test Rehearsal)', 'Functional', 'Advanced', 9, 'Bodyweight'],
      ['Band-Resisted Terminal Knee Extension', 'Strengthening', 'Beginner', 3, 'Resistance band'],
    ],
  },
  Hip: {
    muscles: ['Gluteus Medius', 'Gluteus Maximus', 'Adductor Longus', 'Iliopsoas'],
    drills: [
      ['Copenhagen Adduction (Long Lever)', 'Strengthening', 'Advanced', 9, 'Bodyweight'],
      ['Copenhagen Adduction (Short Lever)', 'Strengthening', 'Intermediate', 6, 'Bodyweight'],
      ['Adductor Squeeze Isometric at 45°', 'Isometric', 'Beginner', 3, 'Bodyweight'],
      ['Banded Lateral Walk (Athletic Stance)', 'Strengthening', 'Beginner', 4, 'Resistance band'],
      ['Hip Thrust (Barbell)', 'Strengthening', 'Intermediate', 7, 'Free weights'],
      ['Single-Leg Hip Thrust', 'Strengthening', 'Intermediate', 6, 'Bodyweight'],
      ['Skater Bound with Controlled Landing', 'Plyometric', 'Advanced', 8, 'Bodyweight'],
      ['Sprint-Specific A-Skip', 'Functional', 'Intermediate', 6, 'Bodyweight'],
      ['Band-Resisted Hip Flexion March', 'Strengthening', 'Beginner', 4, 'Resistance band'],
      ['90/90 Hip Rotation Lift-Off', 'Mobility', 'Intermediate', 5, 'Bodyweight'],
    ],
  },
  'Ankle/Foot': {
    muscles: ['Gastrocnemius', 'Soleus', 'Peroneus Longus', 'Tibialis Posterior'],
    drills: [
      ['Seated Soleus Raise (Loaded)', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Single-Leg Heel Raise to Failure', 'Strengthening', 'Intermediate', 6, 'Bodyweight'],
      ['Eccentric Heel Drop off Step', 'Strengthening', 'Intermediate', 6, 'Bodyweight'],
      ['Pogo Hops (Stiff Ankle)', 'Plyometric', 'Intermediate', 7, 'Bodyweight'],
      ['Single-Leg Balance with Head Turns', 'Proprioception', 'Beginner', 4, 'Bodyweight'],
      ['Y-Balance Reach Rehearsal', 'Proprioception', 'Intermediate', 5, 'Bodyweight'],
      ['Band Eversion (Peroneal) Strengthening', 'Strengthening', 'Beginner', 3, 'Resistance band'],
      ['Band Inversion (Tibialis Posterior)', 'Strengthening', 'Beginner', 3, 'Resistance band'],
      ['Lateral Hop Over Line (Speed)', 'Plyometric', 'Advanced', 8, 'Bodyweight'],
      ['Weighted Ankle Dorsiflexion Lunge Mobilisation', 'Mobility', 'Beginner', 3, 'Free weights'],
    ],
  },
  Shoulder: {
    muscles: ['Infraspinatus', 'Supraspinatus', 'Serratus Anterior', 'Lower Trapezius'],
    drills: [
      ['Prone Horizontal Abduction at 100° (Overhead Athlete)', 'Strengthening', 'Intermediate', 5, 'Free weights'],
      ['Band External Rotation at 90/90', 'Strengthening', 'Intermediate', 5, 'Resistance band'],
      ['Isometric External Rotation at 45° Abduction', 'Isometric', 'Beginner', 3, 'Resistance band'],
      ['Plyometric Chest Pass (Rebounder)', 'Plyometric', 'Advanced', 8, 'Free weights'],
      ['Overhead Plyometric Slam', 'Plyometric', 'Advanced', 8, 'Free weights'],
      ['Serratus Wall Slide with Band', 'Activation', 'Beginner', 3, 'Resistance band'],
      ['Bottoms-Up Kettlebell Carry', 'Stability', 'Intermediate', 6, 'Free weights'],
      ['Landmine Press (Scapular Plane)', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Sleeper Stretch (GIRD Management)', 'Stretching', 'Beginner', 3, 'Bodyweight'],
      ['Decelerating Band Throw Follow-Through', 'Neuromuscular', 'Advanced', 8, 'Resistance band'],
    ],
  },
  Elbow: {
    muscles: ['Wrist Extensors', 'Wrist Flexors', 'Pronator Teres', 'Biceps Brachii'],
    drills: [
      ['Heavy Slow Resistance Wrist Extension', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Tyler Twist (Eccentric Wrist Extension)', 'Strengthening', 'Intermediate', 5, 'Resistance band'],
      ['Reverse Tyler Twist (Golfer Elbow)', 'Strengthening', 'Intermediate', 5, 'Resistance band'],
      ['Isometric Wrist Extension Hold (45 s)', 'Isometric', 'Beginner', 3, 'Free weights'],
      ['Supination/Pronation with Hammer', 'Strengthening', 'Beginner', 4, 'Free weights'],
      ['Valgus-Load Elbow Isometric (Throwing Athlete)', 'Isometric', 'Intermediate', 6, 'Resistance band'],
    ],
  },
  'Wrist/Hand': {
    muscles: ['Wrist Flexors', 'Wrist Extensors', 'Intrinsic Hand Muscles'],
    drills: [
      ['Loaded Wrist Roller', 'Strengthening', 'Intermediate', 6, 'Free weights'],
      ['Grip Endurance Hold', 'Isometric', 'Beginner', 4, 'Free weights'],
      ['Band Finger Extension', 'Strengthening', 'Beginner', 2, 'Resistance band'],
      ['Weight-Bearing Wrist Load Progression', 'Functional', 'Intermediate', 6, 'Bodyweight'],
    ],
  },
  'Lumbar Spine': {
    muscles: ['Erector Spinae', 'Multifidus', 'Gluteus Maximus'],
    drills: [
      ['Barbell Hip Hinge Patterning', 'Functional', 'Intermediate', 6, 'Free weights'],
      ['Back Extension Isometric Hold (Biering-Sorensen Style)', 'Isometric', 'Intermediate', 6, 'Bodyweight'],
      ['Suitcase Carry (Anti-Lateral Flexion)', 'Stability', 'Intermediate', 6, 'Free weights'],
      ['Band Pallof Press with Rotation', 'Stability', 'Intermediate', 5, 'Resistance band'],
      ['Loaded Carry Deceleration Walk', 'Functional', 'Advanced', 7, 'Free weights'],
      ['Prone Press-Up Repeated Extension', 'Mobility', 'Beginner', 2, 'Bodyweight'],
    ],
  },
  'Cervical Spine': {
    muscles: ['Deep Neck Flexors', 'Upper Trapezius', 'Levator Scapulae'],
    drills: [
      ['Deep Neck Flexor Endurance Hold', 'Isometric', 'Beginner', 3, 'Bodyweight'],
      ['Band-Resisted Cervical Isometrics (Contact Sport)', 'Isometric', 'Intermediate', 5, 'Resistance band'],
      ['Prone Cervical Extension Endurance', 'Strengthening', 'Intermediate', 5, 'Bodyweight'],
      ['Head-Eye Coordination Drill', 'Neuromuscular', 'Beginner', 3, 'Bodyweight'],
    ],
  },
  'Thoracic Spine': {
    muscles: ['Thoracic Erectors', 'Lower Trapezius', 'Rhomboids'],
    drills: [
      ['Open-Book Rotation with Band Reach', 'Mobility', 'Beginner', 3, 'Resistance band'],
      ['Loaded Thoracic Extension over Bench', 'Mobility', 'Intermediate', 5, 'Free weights'],
      ['Prone Y-T-W Endurance Series', 'Strengthening', 'Intermediate', 5, 'Free weights'],
      ['Rotational Medicine-Ball Throw', 'Plyometric', 'Advanced', 8, 'Free weights'],
    ],
  },
  'Core/Trunk': {
    muscles: ['Transversus Abdominis', 'Obliques', 'Rectus Abdominis'],
    drills: [
      ['Anti-Rotation Band Chop (Athletic Stance)', 'Stability', 'Intermediate', 6, 'Resistance band'],
      ['Side Plank with Hip Abduction', 'Stability', 'Intermediate', 6, 'Bodyweight'],
      ['Hanging Knee Raise with Control', 'Strengthening', 'Advanced', 7, 'Bodyweight'],
      ['Dead Bug with Band Pull-Over', 'Stability', 'Beginner', 3, 'Resistance band'],
      ['Med-Ball Rotational Scoop Toss', 'Plyometric', 'Advanced', 8, 'Free weights'],
    ],
  },
  'Full Body': {
    muscles: ['Gluteus Maximus', 'Quadriceps', 'Latissimus Dorsi'],
    drills: [
      ['Return-to-Sport Agility Ladder Series', 'Functional', 'Advanced', 8, 'Bodyweight'],
      ['Sled-Style Band Resisted March', 'Functional', 'Intermediate', 6, 'Resistance band'],
      ['Trap-Bar Style Loaded Jump', 'Plyometric', 'Advanced', 9, 'Free weights'],
      ['Repeat-Sprint Conditioning Block', 'Functional', 'Advanced', 9, 'Bodyweight'],
      ['Change-of-Direction T-Drill Rehearsal', 'Functional', 'Advanced', 8, 'Bodyweight'],
    ],
  },
};

const DOSE = {
  Isometric: '5 sets × 30–45 s hold at 70% MVIC, daily',
  Plyometric: '4–6 sets × 4–6 reps, full recovery, 2×/week (non-consecutive days)',
  Strengthening: '3–4 sets × 6–10 reps at RPE 7–8, 2–3×/week',
  Mobility: '2–3 sets × 8–10 reps or 30 s holds, daily',
  Stretching: '3 × 30–45 s, daily',
  Functional: '4–6 sets × 20–30 s work with 1:5 work-rest, 2×/week',
  Stability: '3 sets × 8–10 reps each side, 3×/week',
  Neuromuscular: '3–4 sets × 6–8 reactive reps, 2–3×/week',
  Proprioception: '3 sets × 30–45 s each leg, daily',
  Activation: '2–3 sets × 10–12 reps before training',
};

const PHASE = {
  Beginner: 'Early/protected phase — pain ≤3/10 during and 24 h after.',
  Intermediate: 'Mid-stage loading — build capacity before speed and impact.',
  Advanced: 'Late-stage / return-to-sport — only with symmetrical strength (LSI ≥90%) and clean landing mechanics.',
};

const REFS = [
  'Buckthorpe M. Optimising return to sport. Sports Med 2019.',
  'Ardern CL et al. 2016 Bern consensus on return to sport. Br J Sports Med.',
  'Malliaras P et al. Tendinopathy loading programmes. JOSPT 2015.',
  'Blanchard S, Glasgow P. A theoretical model to describe progressions of rehabilitation. Phys Ther Sport 2014.',
];

const added = [];
for (const [region, cfg] of Object.entries(REGIONS)) {
  for (const [name, category, difficulty, intensity, equip] of cfg.drills) {
    if (have.has(name.toLowerCase())) continue;
    have.add(name.toLowerCase());
    const dose = DOSE[category] || '3 sets × 10 reps, 3×/week';
    added.push({
      id: id++,
      name,
      description: `${name} is a sports-rehabilitation drill for the ${region.toLowerCase()} region, loading ${cfg.muscles[0]} and its synergists in a pattern that mirrors athletic demand. It is prescribed to restore tissue capacity, control and confidence prior to unrestricted sport. ${PHASE[difficulty]}`,
      region,
      category,
      difficulty,
      intensity,
      equipment: [equip],
      ebp_level: difficulty === 'Advanced' ? 'EBP Moderate' : 'EBP Strong',
      target_muscles: cfg.muscles,
      primary_muscles: cfg.muscles.slice(0, 2),
      secondary_muscles: cfg.muscles.slice(2),
      tertiary_muscles: [],
      other_muscles: [],
      instructions: `Set up in the athletic position described, complete the drill with full intent and quality, and stop the set as soon as movement quality or landing control deteriorates. ${PHASE[difficulty]}`,
      sets_reps: dose,
      load_dosage: dose,
      clinical_notes: `Monitor 24-hour symptom response. Progress only when the athlete completes the prescribed dose with symmetrical mechanics and pain ≤3/10 that settles by the next morning.`,
      starting_position: `Athletic stance: feet hip-width, knees soft, ribs stacked over pelvis, gaze forward. Set the ${region.toLowerCase()} in a neutral, controlled position before the first rep.`,
      execution_steps: [
        'Rehearse two sub-maximal reps to confirm alignment and pain response.',
        'Perform the working reps with full intent and deliberate control of the landing or return phase.',
        'Hold the finish position for 1–2 s before resetting.',
        'Rest fully between sets so quality, not fatigue, limits the set.',
      ],
      breathing: 'Brace and exhale on the effort phase; reset the breath between reps. Do not hold the breath across the whole set.',
      tempo: category === 'Plyometric' || category === 'Functional' ? 'Maximal intent concentric, controlled 2 s landing/stick' : 'Controlled 3-1-2 (eccentric-pause-concentric)',
      progressions: [
        'Add external load (band or free weight) of 5–10% once RPE ≤6',
        'Progress double-leg to single-leg, then to reactive/unplanned',
        'Increase speed, height or distance before increasing volume',
        'Add sport-specific perturbation, ball or opponent cue',
      ],
      regressions: [
        'Reduce range, height or distance to a pain-free dose',
        'Return to double-leg or supported variation',
        'Remove impact and hold isometrics at the painful joint angle',
        'Halve the volume and repeat the current stage for a week',
      ],
      cueing: ['"Quiet landings"', '"Knee tracks over mid-foot"', '"Hips back, chest proud"', '"Fast up, soft down"'],
      common_errors: [
        'Knee valgus or trunk collapse on landing',
        'Chasing volume before movement quality',
        'Skipping strength criteria before impact work',
        'Training through sharp or next-day worsening pain',
      ],
      contraindications: [
        'Acute unhealed fracture or unstable joint',
        'Active infection or unexplained night pain',
        'Post-operative loading restriction not yet cleared by the surgeon',
        'Pain >5/10 or effusion increase with the drill',
      ],
      indications: [
        `Rehabilitation of ${region.toLowerCase()} injury in an athletic population`,
        'Capacity or power deficit identified on testing',
        'Return-to-sport progression and re-injury risk reduction',
      ],
      references: REFS,
    });
  }
}

fs.writeFileSync(P, JSON.stringify(ex.concat(added), null, 1));
console.log('added', added.length, 'total', ex.length + added.length);
