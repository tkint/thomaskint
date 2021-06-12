<template>
  <div class="container">
    <h1>Slides</h1>
    <h6>Supports de présentation</h6>
    <div class="row flex-column">
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        class="col mb-2">
        <div class="card item-card">
          <div class="card-body">
            <div class="card-title">
              <router-link :to="{ name: slidePage, params: { directory: slide.directory } }">
                <h3>{{ slide.title }}</h3>
              </router-link>
            </div>
            <div class="text-muted">{{ slide.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { slides } from '@/data';
import { RouteNames } from '@/router';

export default defineComponent({
  setup() {
    return {
      slides,
      slidePage: RouteNames.PRESENTATION_SLIDE,
    };
  },
});
</script>

<style scoped>
</style>
