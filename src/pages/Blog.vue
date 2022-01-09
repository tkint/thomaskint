<script lang="ts" setup>
import LocaleSelect from '@/components/LocaleSelect.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const panels = computed(() => [
  { title: '#', path: '/' },
  { title: t('navbar.resume'), path: '/#resume' },
  { title: t('navbar.portfolio'), path: '/#portfolio' },
  { title: t('navbar.contact'), path: '/#contact' },
]);
</script>

<template>
  <nav id="app-navbar" class="navbar fixed-top">
    <a class="navbar-brand" href="#"></a>

    <ul class="nav pe-2 bg-white shadow-sm" role="tablist">
      <li class="nav-item" v-for="(panel, index) in panels" :key="`nav-${index}`">
        <router-link :to="panel.path" class="nav-link">
          {{ panel.title }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'BLOG' }" active-class="active"> Blog </router-link>
      </li>
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
    <div class="bg-danger">Blog</div>
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
