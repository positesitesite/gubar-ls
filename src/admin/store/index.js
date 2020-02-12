import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import login from "./../login"
import Categories from "./modules/categories";
import Skills from "./modules/skills";
// import AboutMeCards from "./../components/AboutMeCards"

export default new Vuex.Store({
  modules: {
    Categories,
    Skills,
    login
    // AboutMeCards
  }
});
