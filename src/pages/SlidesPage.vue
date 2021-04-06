<template>
  <div class="container">
    <h1>Slides</h1>
    <h6>Supports de présentation</h6>
    <div class="row flex-column">
      <div
          class="col mb-2"
          v-for="(slide, index) in slides"
          :key="`slide-${index}`">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <router-link :to="`/slides/${slide.directory}`">
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
import slides from '../slides';

export default defineComponent({
  setup() {
    return { slides };
  },
});
</script>

<style>
</style>
