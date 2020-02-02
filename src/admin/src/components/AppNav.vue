<template lang="pug">
  nav.nav
    .nav__switcher-container 
      button(type="button").nav__switcher-item-wrapper
        .nav__switcher-item {{text?'yes':'no'}}
      button(type="button" :id='theId').nav__switcher-item-wrapper
        .nav__switcher-item Работы
      button(type="button").nav__switcher-item-wrapper
        .nav__switcher-item Отзывы
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins';

nav.nav {
  background-color: $black;
}

.nav__switcher-container {
  margin-left: 80px;
  display: flex;
}

.nav__switcher-item-wrapper {
  border: 3px transparent solid;
  outline: none;
  width: 125px;
  text-align: center;

  &:focus {
    .nav__switcher-item {
      font-weight: 700;
      color: #da8433;
    }

    border-bottom: 3px #da8433 solid;
    border-top: 3px transparent solid;
    border-left: 3px transparent solid;
    border-right: 3px transparent solid;
  }
}

.nav__switcher-item {
  display: inline-block;
  padding: 22px 0;
  color: rgb(133, 133, 133);
}
</style>

<script>
export default {
  props: {
    text: {type: Boolean, default: false}
  },
  computed: {
    theId() {
      return 'textany' + this._uid;
    }
  },
  mounted() {
    console.log(this._uid);
  }
}
</script>