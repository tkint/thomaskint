<template>
  <div class="container">
    <h1>Portfolio</h1>
    <h6>Expériences et projets</h6>
    <div class="row flex-column">
      <div
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        class="col mb-2">
        <div class="card item-card">
          <div class="card-body">
            <div class="card-title">
              <h3 class="text-primary">{{ project.name }}</h3>
            </div>
            <div class="text-muted">{{ project.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { projects } from '@/data';

export default defineComponent({
  name: 'PortfolioPage',
  setup() {
    return { projects };
  },
});
</script>

<style scoped>
</style>
