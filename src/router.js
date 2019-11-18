import Vue from 'vue';
import Router from 'vue-router';
import Upload from './views/Upload.vue';
import About from './views/About.vue';
import Analyze from './views/Analyze.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Upload
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: Analyze
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
