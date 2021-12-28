<script setup lang="ts">
import { onMounted } from "vue";
import { ScrollSpy } from "bootstrap";
import Landing from "./components/Landing.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";

const panels = [
  { title: "Home", identifier: "home", component: Landing },
  { title: "Portfolio", identifier: "portfolio", component: Portfolio },
  { title: "Contact", identifier: "contact", component: Contact },
];

onMounted(() => {
  new ScrollSpy(document.body, {
    target: "#app-navbar",
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

<style>
html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
}

#app {
  height: 100%;
  width: 100%;
}
</style>

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
