import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import AboutMe from 'blocks/MainContent/AboutMe'
import Works from 'blocks/MainContent/Works'
import Reviews from 'blocks/MainContent/Reviews'


const router = new VueRouter({
  routes: [
    {
      path: '/', component: AboutMe
    },
    {
      path: '/works', component: Works
    },
    {
      path: '/reviews', component: Reviews
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});

