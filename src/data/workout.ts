export interface Exercice {
  name: string;
  series: number;
  repetitions: number;
}

export interface WorkoutSchedule {
  MONDAY: Exercice[];
  TUESDAY: Exercice[];
  WEDNESDAY: Exercice[];
  THURSDAY: Exercice[];
  FRIDAY: Exercice[];
  SATURDAY: Exercice[];
  SUNDAY: Exercice[];
}
