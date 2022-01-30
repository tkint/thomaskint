<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouteNames } from '@/router';
import LocaleSelect from '@/components/LocaleSelect.vue';

const { t } = useI18n();

const links = computed(() => [
  { title: '#', route: { name: RouteNames.HOME } },
  { title: t('navbar.resume'), route: { name: RouteNames.HOME, hash: '#resume' } },
  { title: t('navbar.portfolio'), route: { name: RouteNames.HOME, hash: '#portfolio' } },
  { title: t('navbar.contact'), route: { name: RouteNames.HOME, hash: '#contact' } },
  { title: t('navbar.blog'), route: { name: RouteNames.BLOG } },
  { title: t('navbar.workout'), route: { name: RouteNames.WORKOUT } },
]);
</script>

<template>
  <nav id="app-navbar" class="navbar fixed-top">
    <a class="navbar-brand" href="#"></a>

    <ul class="nav pe-2 bg-white shadow-sm" role="tablist">
      <li class="nav-item" v-for="(panel, index) in links" :key="`nav-${index}`">
        <router-link :to="panel.route" class="nav-link" active-class="active">
          {{ panel.title }}
        </router-link>
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
