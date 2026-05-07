export interface Exercise {
  id: number;
  name: string;
  description: string;
  region: string;
  category: string;
  difficulty: string;
  ebp_level: string;
  target_muscles: string[];
  primary_muscles: string[];
  secondary_muscles: string[];
  tertiary_muscles: string[];
  other_muscles: string[];
  instructions: string;
  sets_reps: string;
  clinical_notes: string;
  // Pro fields
  starting_position?: string;
  execution_steps?: string[];
  breathing?: string;
  tempo?: string;
  load_dosage?: string;
  progressions?: string[];
  regressions?: string[];
  cueing?: string[];
  common_errors?: string[];
  contraindications?: string[];
  equipment?: string[];
  indications?: string[];
  references?: string[];
}

export interface Muscle {
  name: string;
  origin: string;
  insertion: string;
  action?: string;
  primary_action?: string;
  secondary_action?: string;
  innervation: string;
  primary_exercises?: string[];
  other_exercises?: string[];
  blood_supply?: string;
  nerve_root?: string;
  trigger_points?: string;
  functional_role?: string;
}

export interface MuscleGroup {
  id: number;
  name: string;
  region: string;
  muscles: Muscle[];
}

export interface SpecialTest {
  name: string;
  sensitivity: string;
  specificity: string;
  // Pro fields
  patient_position?: string;
  examiner_position?: string;
  procedure?: string;
  positive_finding?: string;
  plus_lr?: string;
  minus_lr?: string;
  reference?: string;
}

export interface TreatmentPlan {
  acute: string;
  subacute: string;
  chronic: string;
}

export interface Disorder {
  id: number;
  name: string;
  region: string;
  category: string;
  subcategory: string;
  description: string;
  causes: string[];
  key_findings: string;
  diagnostic_tips: string;
  treatment_plan: TreatmentPlan | string;
  special_tests: SpecialTest[];
  msk_tests?: string[];
  red_flags?: string[];
  ebp_level?: string;
  differential_diagnosis?: string;
  related_exercises?: number[];
  related_muscles?: string[];
  // Pro fields
  etiology?: string;
  epidemiology?: string;
  pathophysiology?: string;
  mechanism?: string;
  anatomy?: string;
  recommended_exercises?: { id: number; name: string; category?: string }[];
  clinical_presentation?: string[];
  signs_symptoms?: string[];
  imaging?: string[];
  prognosis?: string;
  outcome_measures?: string[];
  patient_education?: string[];
  return_to_activity?: string;
  references?: string[];
  icd10?: string;
}

export type Impairment = Disorder;

export interface EBPIntervention {
  intervention: string;
  evidence: string;
  description?: string;
  dosage?: string;
}

export interface EBPGuideline {
  id: number;
  condition: string;
  region: string;
  grade: string;
  summary: string;
  key_interventions: EBPIntervention[];
  outcome_measures: string[];
  key_references: string[];
  // Pro fields
  classification?: string;
  diagnosis_criteria?: string[];
  recommended_against?: string[];
  prognosis?: string;
  red_flags?: string[];
  guideline_source?: string;
  year?: string;
}

export interface SportsInjury {
  id: number;
  name: string;
  sport: string;
  region: string;
  category: string;
  subcategory: string;
  description: string;
  causes: string[];
  mechanism: string;
  signs_symptoms: string[];
  msk_tests?: string[];
  diagnostic_tips?: string;
  pt_plan: {
    acute: string;
    subacute: string;
    return_to_sport: string;
  };
  prevention: string[];
  severity: string;
  recovery_time: string;
  ebp_level: string;
  related_exercises?: number[];
  related_disorders?: number[];
  // Pro fields
  epidemiology?: string;
  imaging?: string[];
  return_to_play_criteria?: string[];
  outcome_measures?: string[];
  references?: string[];
}

export interface DifferentialDiagnosis {
  id: number;
  name: string;
  body_region: string;
  category: string;
  description: string;
  red_flags: string[];
  key_findings: string;
  diagnostic_tests: string[];
  msk_tests: string[];
  differential_conditions: string[];
  referral_criteria: string;
  related_disorders?: number[];
  related_exercises?: number[];
  // Pro fields
  pathophysiology?: string;
  epidemiology?: string;
  clinical_features?: string[];
  history_clues?: string[];
  imaging?: string[];
  labs?: string[];
  management_overview?: string;
  prognosis?: string;
  references?: string[];
}
