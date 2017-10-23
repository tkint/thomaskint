import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Blog from '@/components/pages/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:id',
      name: 'BlogArticle',
      component: Blog,
    },
  ],
});
