import Header from '../components/header/header.vue';
import Tabs from '../components/tabs/tabs.vue';

export default [
  {
    path: "/login",
    component: Authorization,
    meta: {
      public: true
    }
  },
  {
    path: "/about",
    component: AppHeader, AppNav, AboutMe 
  },
  {
    path: "/works",
    component: AppHeader, AppNav, Works
  },
  {
    path: "/reviews",
    component: AppHeader, AppNav, Reviews
  }
];