<template lang='pug'>
  .wrapper.admin-wrapper
    
    AppHeader

    AppNav

    router-view

</template>

<script>
import AppHeader from 'blocks/AppHeader';
import AppNav from 'blocks/AppNav';

export default {
  components: {
    AppHeader,
    AppNav
  },
  mounted() {
    console.log(this._uid);
  }
}
</script>

<style lang="postcss">
  @import './styles/main.pcss';
</style>

