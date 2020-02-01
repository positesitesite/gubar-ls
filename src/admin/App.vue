<template lang='pug'>
  .wrapper.admin-wrapper
    AppHeader

    AppNav

    AboutMe

    Works
</template>



<script>
import AppHeader from './components/AppHeader';
import AppNav from './components/AppNav';
import AboutMe from './components/MainContent/AboutMe';
import Works from './components/MainContent/Works';

export default {
  components: {
    AppHeader,
    AppNav,
    AboutMe,
    Works,
  }
}
</script>



<style lang="pcss">
  @import './styles/main.pcss';
</style>