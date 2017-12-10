import Vue from 'vue';
import Router from 'vue-router';
import Pages from '@/components/pages';
import Names from './names';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: Names.HOME,
      component: Pages.Home,
    },
    {
      path: '/resume',
      name: Names.RESUME,
      component: Pages.Resume,
    },
    {
      path: '/blog',
      name: Names.BLOG,
      component: Pages.Blog,
    },
    {
      path: '/blog/:id',
      name: Names.BLOG_ARTICLE,
      component: Pages.Blog,
    },
    {
      path: '/portfolio',
      name: Names.PORTFOLIO,
      component: Pages.Portfolio,
    },
    {
      path: '/portfolio/:id',
      name: Names.PORTFOLIO_WORK,
      component: Pages.Portfolio,
    },
    {
      path: '*',
      redirect: Names.ERROR_404,
    },
    {
      path: '/404',
      name: Names.ERROR_404,
      component: Pages.Redirection.Error404,
    },
  ],
});
