import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "HOME",
      path: "/",
      component: () => import("@/pages/Home.vue"),
    },
    {
      name: "BLOG",
      path: "/blog",
      component: () => import("@/pages/Blog.vue"),
    },
  ],
});
