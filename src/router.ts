import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const RouteNames = {
  HOME: 'HOME',
  BLOG: 'BLOG',
  WORKOUT: 'WORKOUT',
};

const routes: RouteRecordRaw[] = [
  {
    name: RouteNames.HOME,
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
];

if (import.meta.env.DEV) {
  routes.push(
    {
      name: RouteNames.BLOG,
      path: '/blog',
      component: () => import('@/pages/Blog.vue'),
    },
    {
      name: RouteNames.WORKOUT,
      path: '/workout',
      component: () => import('@/pages/Workout.vue'),
    }
  );
}

export default createRouter({
  history: createWebHistory(),
  routes,
});
