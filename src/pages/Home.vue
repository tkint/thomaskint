<script lang="ts" setup>
import { ScrollSpy } from "bootstrap";
import { onMounted, onUnmounted, ref } from "vue";
import Contact from "@/components/home/contact/Contact.vue";
import Landing from "@/components/home/landing/Landing.vue";
import Portfolio from "@/components/home/portfolio/Portfolio.vue";
import { useRoute } from "vue-router";

const panels = [
  { title: "Home", identifier: "home", component: Landing },
  { title: "Portfolio", identifier: "portfolio", component: Portfolio },
  { title: "Contact", identifier: "contact", component: Contact },
];

onMounted(() => {
  const scrollSpy = new ScrollSpy(document.body, {
    target: "#app-navbar",
  });

  onUnmounted(() => {
    scrollSpy.dispose();
  });

  const route = useRoute();
  if (/#.*/.test(route.hash)) {
    const panelDiv = document.querySelector(route.hash);
    panelDiv?.scrollIntoView(true);
  }

  window.addEventListener("activate.bs.scrollspy", (event) => {
    // @ts-ignore
    window.history.replaceState(window.history.state, "", event.relatedTarget);
  });
});
</script>

<template>
  <nav id="app-navbar" class="navbar fixed-top">
    <a class="navbar-brand" href="#"></a>

    <ul class="nav me-2" role="tablist">
      <li
        class="nav-item"
        v-for="(panel, index) in panels"
        :key="`nav-${index}`"
      >
        <a class="nav-link" :href="`#${panel.identifier}`">{{ panel.title }}</a>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'BLOG' }">Blog</router-link>
      </li> -->
    </ul>
  </nav>

  <div
    data-bs-spy="scroll"
    data-bs-target="#app-navbar"
    data-bs-offset="0"
    tabindex="0"
    class="h-100"
  >
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
  /* mix-blend-mode: exclusion; */
}
.nav-link {
  /* color: unset; */
  font-style: italic;
}
.nav-link.active {
  font-weight: bold;
  font-style: unset;
}
</style>
