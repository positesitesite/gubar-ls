// import Store from './store/index.js'; 
// import $axios from './requests';
// Store.$axios = $axios;

import "./styles/main.pcss";

import Vue from "vue";
import VueRouter from "vue-router";
import SimpleVueValidation from 'simple-vue-validator';
import App from "./App.vue";

import Authorization from "./blocks/MainContent/Authorization";
import AppHeader from "./blocks/AppHeader";
import AppNav from "./blocks/AppHeader";
import AboutMe from "./blocks/MainContent/AboutMe";
import Works from "./blocks/MainContent/Works";
import Reviews from "./blocks/MainContent/Reviews";

import { store } from "./store"

Vue.use(VueRouter);
Vue.use(SimpleVueValidation);

const router = new VueRouter({
  routes: [
    {
      path: "/", component: Authorization,
      meta: {
        public: true
      }
    },
    {
      path: "/about", component: AppHeader, AppNav, AboutMe 
    },
    {
      path: "/works", component: AppHeader, AppNav, Works
    },
    {
      path: "/reviews", component: AppHeader, AppNav, Reviews
    }
  ]
});

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});

