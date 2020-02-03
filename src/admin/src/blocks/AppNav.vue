<template lang="pug">
  nav.nav
    .nav__switcher-container
      button(type='button' v-for='item in navItems' :id='theId').nav__switcher-item-wrapper
        router-link(:to='item.link').nav__switcher-item {{item.name}}
</template>

<script>
export default {
  props: {
    text: {type: Boolean, default: false},
  },
  data() {
    return {
      navItems: [
        {
          name: 'Обо мне',
          link: '/'
        },
        {
          name: 'Работы',
          link: '/Works'
        },
        {
          name: 'Отзывы',
          link: '/Reviews'
        }
      ]
    }
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



<style lang="postcss" scoped>
@import '../../styles/mixins';

nav.nav {
  background-color: $grey;
}

.nav__switcher-container {
  margin-left: 80px;
  display: flex;
}

.nav__switcher-item {
  border: 3px transparent solid;
  outline: none;
  width: 125px;
  text-align: center;
}

.router-link-exact-active {
  font-weight: 700;
  color: #da8433;
  border-bottom: 3px #da8433 solid;
  border-top: 3px transparent solid;
  border-left: 3px transparent solid;
  border-right: 3px transparent solid;
}

.nav__switcher-item {
  display: inline-block;
  padding: 22px 0;
  color: rgb(133, 133, 133);
}
</style>