// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }} and this id is {{ todo.id }}</li>',
});
new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 3, text: 'Milk' },
      { id: 4, text: 'Barbeque meat' },
    ],
  },
  router,
  template: '<App/>',
  components: {
    App,
  },
});
