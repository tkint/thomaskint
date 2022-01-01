<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import Contact from "@/components/home/contact/Contact.vue";
import Landing from "@/components/home/landing/Landing.vue";
import Portfolio from "@/components/home/portfolio/Portfolio.vue";
import Resume from "@/components/home/resume/Resume.vue";
import Social from "@/components/home/Social.vue";
import { findLastIndex } from "@/utils";

const panels = [
  { title: "#", identifier: "home", component: Landing },
  { title: "Expériences", identifier: "resume", component: Resume },
  { title: "Portfolio", identifier: "portfolio", component: Portfolio },
  { title: "Contact", identifier: "contact", component: Contact },
];

const scrollSpyOffset = 10;

const activePanelIndex = ref(0);
watch(activePanelIndex, (newIndex) => {
  const anchor =
    activePanelIndex.value === 0 ? " " : `#${panels[newIndex].identifier}`;
  window.history.replaceState(window.history.state, "", anchor);
});

onMounted(() => {
  const panelOffsets = panels.map((panel) => {
    const panelDiv = document.getElementById(panel.identifier);
    if (panelDiv) return panelDiv.offsetTop;
    throw Error(`Panel ${panel.identifier} not found`);
  });

  window.addEventListener("scroll", () => {
    const scrollPos = document.documentElement.scrollTop;

    const activeIndex = findLastIndex(
      panelOffsets,
      (panelOffset) => scrollPos + scrollSpyOffset >= panelOffset
    );
    activePanelIndex.value = activeIndex > 0 ? activeIndex : 0;
  });

  const route = useRoute();
  if (/#.*/.test(route.hash)) {
    const panelDiv = document.querySelector(route.hash);
    panelDiv?.scrollIntoView(true);
  }
});

const goToPanel = (panelIdentifier: string) => {
  document
    .getElementById(panelIdentifier)
    ?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <Social></Social>

  <nav id="app-navbar" class="navbar fixed-top">
    <a class="navbar-brand" href="#"></a>

    <ul class="nav pe-2 bg-white shadow-sm" role="tablist">
      <li
        class="nav-item"
        :data-panel-id="panel.identifier"
        v-for="(panel, index) in panels"
        :key="`nav-${index}`"
      >
        <span
          :class="['nav-link', { active: index === activePanelIndex }]"
          @click="goToPanel(panel.identifier)"
        >
          {{ panel.title }}
        </span>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'BLOG' }">Blog</router-link>
      </li> -->
    </ul>
  </nav>

  <div class="h-100">
    <component
      :id="panel.identifier"
      v-for="(panel, index) in panels"
      :key="`panel-${index}`"
      :is="panel.component"
    ></component>
  </div>
</template>

<style scoped>
#app-navbar {
  color: var(--bs-gray-400);
  padding: 0;
}

#app-navbar .nav {
  border-bottom-left-radius: 15px;
}

.nav-link {
  font-style: italic;
  cursor: pointer !important;
}
.nav-link.active {
  font-weight: bold;
  font-style: unset;
}
</style>
