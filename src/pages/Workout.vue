<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import useLocalStorage from '@/composables/useLocalStorage';
import WorkoutForm from '@/components/workout/WorkoutForm.vue';
import WorkoutResult from '@/components/workout/WorkoutResult.vue';
import { WorkoutSchedule } from '@/data/workout';
import LocaleSelect from '@/components/LocaleSelect.vue';

const { t } = useI18n();
const scheduleStore = useLocalStorage<WorkoutSchedule>('com.thomaskint.workout');

const savedSchedule = scheduleStore.get();

const schedule = reactive<WorkoutSchedule>({
  MONDAY: savedSchedule?.MONDAY ?? [],
  TUESDAY: savedSchedule?.TUESDAY ?? [],
  WEDNESDAY: savedSchedule?.WEDNESDAY ?? [],
  THURSDAY: savedSchedule?.THURSDAY ?? [],
  FRIDAY: savedSchedule?.FRIDAY ?? [],
  SATURDAY: savedSchedule?.SATURDAY ?? [],
  SUNDAY: savedSchedule?.SUNDAY ?? [],
});

watch(schedule, (newValue) => scheduleStore.set(newValue), { deep: true });
</script>

<template>
  <div class="container-fluid p-4 h-100">
    <div class="row d-print-none">
      <div class="col">
        <ul class="nav nav-tabs nav-fill nav-justified mb-3" role="tablist">
          <li class="nav-item">
            <button
              id="tab-form"
              class="nav-link active"
              data-bs-toggle="pill"
              data-bs-target="#panel-form"
              aria-controls="panel-form"
              role="tab">
              {{ t('workout.form.title') }}
            </button>
          </li>

          <li class="nav-item">
            <button
              id="tab-result"
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#panel-result"
              aria-controls="panel-result"
              role="tab">
              {{ t('workout.result.title') }}
            </button>
          </li>

          <li class="nav-item"><LocaleSelect></LocaleSelect></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="tab-content" id="workout-content">
          <div id="panel-form" class="tab-pane active show d-print-none" role="tabpanel">
            <WorkoutForm v-model="schedule"></WorkoutForm>
          </div>
          <div id="panel-result" class="tab-pane d-print-block" role="tabpanel">
            <WorkoutResult :schedule="schedule"></WorkoutResult>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
