import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'HOME',
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'BLOG',
    path: '/blog',
    component: () => import('@/pages/Blog.vue'),
  },
];

if (import.meta.env.DEV) {
  routes.push({
    name: 'WORKOUT',
    path: '/workout',
    component: () => import('@/pages/Workout.vue'),
  });
}

export default createRouter({
  history: createWebHistory(),
  routes,
});
