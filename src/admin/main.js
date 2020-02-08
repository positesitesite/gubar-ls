import "./styles/main.pcss";

import Vue from "vue";
import VueRouter from "vue-router";
import SimpleVueValidation from 'simple-vue-validator';
import App from "./App.vue";

import Authorization from "blocks/MainContent/Authorization"
import AboutMe from "blocks/MainContent/AboutMe"
import Works from "blocks/MainContent/Works"
import Reviews from "blocks/MainContent/Reviews"

Vue.use(VueRouter);
Vue.use(SimpleVueValidation);

const router = new VueRouter({
  routes: [
    {
      path: "/", component: Authorization
    },
    {
      path: "/about", component: AboutMe
    },
    {
      path: "/works", component: Works
    },
    {
      path: "/reviews", component: Reviews
    }
  ]
});

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});

