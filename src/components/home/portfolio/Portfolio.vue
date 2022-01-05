<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { projects } from "@/data/portfolio";
import Panel from "@/components/home/Panel.vue";
import ProjectCard from "@/components/home/portfolio/ProjectCard.vue";

const { t } = useI18n();
</script>

<template>
  <Panel vertical-align="middle" class="bg-dark">
    <template #title>
      <div class="text-uppercase text-white">
        {{ t("home.portfolio.title") }}
      </div>
    </template>

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
