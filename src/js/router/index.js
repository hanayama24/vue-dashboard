import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import Simply from '../components/Simply';
// import What from '../components/What';
const LazyLoad = () => import(/* webpackChunkName: "what" */ '../views/LazyLoad');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/simply',
      name: 'Simply',
      component: Simply,
    },
    {
      path: '/lazy-load',
      name: 'LazyLoad',
      component: LazyLoad,
    },
  ],
});

Vue.use(Router);
