<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Exercice, WorkoutSchedule } from '@/data/workout';
import useStrings from '@/composables/useStrings';
import AppIcon from '../common/AppIcon.vue';
import useObjects from '@/composables/useObjects';

const props = defineProps<{ modelValue: WorkoutSchedule }>();

const emits = defineEmits<{
  (e: 'update:modelValue', newValue: WorkoutSchedule): void;
}>();

const { t } = useI18n();
const { keys } = useObjects();
const { capitalize } = useStrings();

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emits('update:modelValue', newValue),
});

const addExerciceToDay = (dayKey: keyof WorkoutSchedule) => {
  localValue.value[dayKey].push({ name: '', series: 0, repetitions: 0 });
};

const removeExercice = (dayKey: keyof WorkoutSchedule, index: number) => {
  localValue.value[dayKey].splice(index, 1);
};

const suggestions = computed(
  () =>
    new Set(
      keys(localValue.value)
        .flatMap((key) => localValue.value[key].map((ex) => ex.name))
        .filter((value) => !!value)
    )
);
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th style="width: 21%">{{ t('workout.day') }}</th>
        <th style="width: 21%">{{ t('workout.exercise') }}</th>
        <th style="width: 21%">{{ t('workout.series') }}</th>
        <th style="width: 21%">{{ t('workout.repetitions') }}</th>
        <th style="width: 6%"></th>
      </tr>
    </thead>

    <tbody>
      <template v-for="(dayExercices, dayKey) in localValue" :key="`day-${dayKey}`">
        <tr>
          <td :rowspan="dayExercices.length + 1">
            {{ t(`workout.weekDay.${dayKey}`) }}

            <button class="btn btn-sm btn-outline-success float-end" @click="addExerciceToDay(dayKey)">
              <AppIcon icon="add"></AppIcon>
            </button>
          </td>

          <td colspan="4" v-if="dayExercices.length === 0" class="text-muted small">
            {{ t('workout.restingDay') }}
          </td>
        </tr>

        <tr v-for="(exercice, index) in dayExercices" :key="`exercice-${dayKey}-${index}`">
          <td>
            <input v-model="exercice.name" list="exerciceSuggestions" />
            <datalist id="exerciceSuggestions">
              <option
                :value="suggestion"
                v-for="(suggestion, index) in suggestions"
                :key="`suggestion-${index}`"></option>
            </datalist>
          </td>
          <td>
            <input type="number" v-model.number="exercice.series" />
          </td>
          <td><input type="number" v-model="exercice.repetitions" /></td>
          <td>
            <button class="btn btn-sm btn-outline-danger" @click="removeExercice(dayKey, index)">
              <AppIcon icon="delete"></AppIcon>
            </button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
tr.remove-border td {
  border: 0;
}
</style>
