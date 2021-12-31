<script lang="ts" setup>
const panels = [
  { title: "#", path: "/" },
  { title: "Portfolio", path: "/#portfolio" },
  { title: "Contact", path: "/#contact" },
];
</script>

<template>
  <nav id="app-navbar" class="navbar fixed-top">
    <a class="navbar-brand" href="#"></a>

    <ul class="nav pe-2 shadow-sm" role="tablist">
      <li
        class="nav-item"
        v-for="(panel, index) in panels"
        :key="`nav-${index}`"
      >
        <router-link :to="panel.path" class="nav-link">
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
html {
  scroll-behavior: auto;
}

#app-navbar {
  color: var(--bs-gray-400);
  padding: 0;
}

#app-navbar .nav {
  border-bottom-left-radius: 15px;
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
