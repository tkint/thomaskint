<script lang="ts" setup>
const panels = [
  { title: "Home", identifier: "home" },
  { title: "Portfolio", identifier: "portfolio" },
  { title: "Contact", identifier: "contact" },
];
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
        <router-link :to="`/#${panel.identifier}`" class="nav-link">
          {{ panel.title }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'BLOG' }"
          active-class="active"
        >
          Blog
        </router-link>
      </li>
    </ul>
  </nav>

  Blog
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
