<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const exercices = computed(() => ({
  SIT_UPS: "Sit-ups",
  DECLINE_SIT_UPS: "Decline sit-ups",
  DECLINE_TWISTING_SIT_UPS: "Decline twisting sit-ups",
  ALTERNATE_DUMBBEL_CURLS: "Alternate dumbbell curls",
  PUSH_UPS: "Push-ups",
  TRICEPS_DIPS: "Triceps dips",
  HAND_GRIP: "Hand grip",
}));

type ExerciceKey = keyof typeof exercices.value;

type Exercices = Partial<
  Record<ExerciceKey, { series: number; repetitions: number }>
>;

interface WorkoutDays {
  MONDAY: Exercices;
  TUESDAY: Exercices;
  WEDNESDAY: Exercices;
  THURSDAY: Exercices;
  FRIDAY: Exercices;
  SATURDAY: Exercices;
  SUNDAY: Exercices;
}

const commonDay: Exercices = {
  DECLINE_SIT_UPS: { series: 3, repetitions: 20 },
  ALTERNATE_DUMBBEL_CURLS: { series: 3, repetitions: 20 },
  HAND_GRIP: { series: 3, repetitions: 40 },
};

const workoutDays: WorkoutDays = {
  MONDAY: commonDay,
  TUESDAY: commonDay,
  WEDNESDAY: commonDay,
  THURSDAY: commonDay,
  FRIDAY: commonDay,
  SATURDAY: commonDay,
  SUNDAY: commonDay,
};

const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.substring(1).toLowerCase()}`;
</script>

<template>
  <div class="container-fluid p-4 h-100">
    <div class="row h-100 align-items-center">
      <div class="col">
        <div class="row row-cols-3 g-4 justify-content-center">
          <div class="col" v-for="(dayExercices, dayKey) in workoutDays">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">{{ capitalize(dayKey) }}</h4>
                <div class="card-text">
                  <table class="table table-sm table-borderless">
                    <tbody>
                      <tr v-for="(exercice, exerciceKey) in dayExercices">
                        <td>{{ exercices[exerciceKey] }}</td>
                        <td>
                          {{ exercice?.series }} x {{ exercice?.repetitions }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
