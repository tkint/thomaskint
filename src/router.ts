import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ContactPage from './pages/ContactPage.vue';
import SlidesPage from './pages/SlidesPage.vue';
import SlidePage from './pages/SlidePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog/:articleId?', component: BlogPage, props: true },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/slides', component: SlidesPage },
    { path: '/slides/:directory', component: SlidePage, props: true, meta: { hideNavbar: true } },
    { path: '/contact', component: ContactPage },
] as RouteRecordRaw[];

export default createRouter({
    history: createWebHistory(),
    routes,
});
