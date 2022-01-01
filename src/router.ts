import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
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
