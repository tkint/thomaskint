import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const RouteNames = {
  HOME: 'HOME',
  BLOG: 'BLOG',
  BLOG_POST: 'BLOG_POST',
  PORTFOLIO: 'PORTFOLIO',
  PRESENTATIONS: 'PRESENTATIONS',
  PRESENTATION_SLIDE: 'PRESENTATION_SLIDE',
};

const routes = [
  {
    name: RouteNames.HOME,
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    name: RouteNames.BLOG,
    path: '/blog',
    component: () => import('@/pages/BlogPage.vue'),
  },
  {
    name: RouteNames.BLOG_POST,
    path: '/blog/:filename',
    component: () => import('@/pages/BlogPostPage.vue'),
    props: true,
  },
  {
    name: RouteNames.PORTFOLIO,
    path: '/portfolio',
    component: () => import('@/pages/PortfolioPage.vue'),
  },
  {
    name: RouteNames.PRESENTATIONS,
    path: '/presentation',
    component: () => import('@/pages/PresentationsPage.vue'),
  },
  {
    name: RouteNames.PRESENTATION_SLIDE,
    path: '/presentation/:directory',
    component: () => import('@/pages/PresentationSlidePage.vue'),
    props: true,
    meta: { hideNavbar: true },
  },
] as RouteRecordRaw[];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
