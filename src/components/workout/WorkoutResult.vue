<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Exercice, WorkoutSchedule } from '@/data/workout';

const { t } = useI18n();

const props = defineProps<{ schedule: WorkoutSchedule }>();

const filterExercices = (exercices: Exercice[]) =>
  exercices.filter((exercice) => exercice.name && exercice.series && exercice.repetitions);

const filteredSchedule = computed<WorkoutSchedule>(() => ({
  MONDAY: filterExercices(props.schedule.MONDAY),
  TUESDAY: filterExercices(props.schedule.TUESDAY),
  WEDNESDAY: filterExercices(props.schedule.WEDNESDAY),
  THURSDAY: filterExercices(props.schedule.THURSDAY),
  FRIDAY: filterExercices(props.schedule.FRIDAY),
  SATURDAY: filterExercices(props.schedule.SATURDAY),
  SUNDAY: filterExercices(props.schedule.SUNDAY),
}));
</script>

<template>
  <div class="row row-cols-3 g-4 justify-content-center">
    <div class="col" v-for="(dayExercices, dayKey) in filteredSchedule" :key="`day-${dayKey}`">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">{{ t(`workout.weekDay.${dayKey}`) }}</h4>
          <div class="card-text">
            <span v-if="dayExercices.length === 0">{{ t('workout.restingDay') }}</span>
            <table class="table table-sm table-borderless" v-else>
              <tbody>
                <tr
                  v-for="(exercice, index) in dayExercices.filter((ex) => !!ex.name)"
                  :key="`exercice-${dayKey}-${index}`">
                  <td>{{ exercice.name }}</td>
                  <td>{{ exercice.series }} x {{ exercice.repetitions }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
