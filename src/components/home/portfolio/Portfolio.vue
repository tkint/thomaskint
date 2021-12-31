<script lang="ts" setup>
import Panel from "@/components/common/Panel.vue";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <Panel vertical-align="middle" class="bg-dark">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
          class="col"
          v-for="(project, index) in projects"
          :key="`project-${index}`"
        >
          <ProjectCard :project="project" class="h-100"></ProjectCard>
        </div>
      </div>
    </div>
  </Panel>
</template>
