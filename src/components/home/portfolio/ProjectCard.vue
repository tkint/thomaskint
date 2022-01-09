<script lang="ts" setup>
import { Project } from '@/data/portfolio';
import AppIcon from '@/components/common/AppIcon.vue';

const props = defineProps<{ project: Project }>();

const contributors = props.project.contributors.map((c) => `${c.firstname} ${c.lastname}`).join(', ');
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title fw-bold text-primary">
        {{ project.name }}
      </h5>

      <div class="card-text">
        <div>
          {{ project.description }}
        </div>
        <div class="small text-muted mt-2">
          {{ contributors }}
        </div>
      </div>
    </div>

    <div class="card-footer">
      <a
        class="me-3"
        v-for="(link, index) in project.links"
        :key="`link-${index}`"
        :href="link.url"
        target="_blank"
        :title="link.icon">
        <AppIcon :icon="link.icon" size="lg"></AppIcon>
      </a>
    </div>
  </div>
</template>
