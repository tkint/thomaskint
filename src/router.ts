import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import PresentationsPage from './pages/PresentationsPage.vue';
import PresentationSlidePage from './pages/PresentationSlidePage.vue';
import BlogPostPage from './pages/BlogPostPage.vue';

export const RouteNames = {
  HOME: 'HOME',
  BLOG: 'BLOG',
  BLOG_POST: 'BLOG_POST',
  PORTFOLIO: 'PORTFOLIO',
  PRESENTATIONS: 'PRESENTATIONS',
  PRESENTATION_SLIDE: 'PRESENTATION_SLIDE',
};

const routes = [
  { name: RouteNames.HOME, path: '/', component: HomePage },
  { name: RouteNames.BLOG, path: '/blog', component: BlogPage },
  { name: RouteNames.BLOG_POST, path: '/blog/:filename', component: BlogPostPage, props: true },
  { name: RouteNames.PORTFOLIO, path: '/portfolio', component: PortfolioPage },
  { name: RouteNames.PRESENTATIONS, path: '/presentation', component: PresentationsPage },
  {
    name: RouteNames.PRESENTATION_SLIDE,
    path: '/presentation/:directory',
    component: PresentationSlidePage,
    props: true,
    meta: { hideNavbar: true },
  },
] as RouteRecordRaw[];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
