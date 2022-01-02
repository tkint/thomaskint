<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import { findLastIndex } from "@/utils";
import Contact from "@/components/home/contact/Contact.vue";
import Landing from "@/components/home/landing/Landing.vue";
import Portfolio from "@/components/home/portfolio/Portfolio.vue";
import Social from "@/components/home/Social.vue";
import LocaleSelect from "@/components/LocaleSelect.vue";
import Resume from "@/components/home/resume/Resume.vue";

const { t } = useI18n();

const panels = computed(() => [
  { title: "#", identifier: "home", component: Landing },
  { title: t("navbar.resume"), identifier: "resume", component: Resume },
  {
    title: t("navbar.portfolio"),
    identifier: "portfolio",
    component: Portfolio,
  },
  { title: t("navbar.contact"), identifier: "contact", component: Contact },
]);

const scrollSpyOffset = 10;

const activePanelIndex = ref(0);
watch(activePanelIndex, (newIndex) => {
  const anchor =
    activePanelIndex.value === 0
      ? " "
      : `#${panels.value[newIndex].identifier}`;
  window.history.replaceState(window.history.state, "", anchor);
});

onMounted(() => {
  const panelOffsets = panels.value.map((panel) => {
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
      <li class="nav-item d-none d-sm-block">
        <LocaleSelect class="mt-1"></LocaleSelect>
      </li>
    </ul>

    <ul class="nav px-1 pt-0 pb-1 shadow-sm d-sm-none bg-white ms-auto">
      <li class="nav-item">
        <LocaleSelect class="mt-1"></LocaleSelect>
      </li>
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
