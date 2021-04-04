import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog/:articleId?', component: BlogPage, props: true },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/contact', component: ContactPage },
] as RouteRecordRaw[];

export default createRouter({
    history: createWebHistory(),
    routes,
});
