<template lang="pug">
  nav.nav#nav-buttons
    .nav__switcher-container
      button(type="button" v-for="tab in tabs.about" v-on:click="currentTab = tab").nav__switcher-item-wrapper
        .nav__switcher-item {{tab}}
          
</template>

<script>
  import Vue from 'vue'
  
  new Vue ({
    el: '#nav-buttons',
    data: {
      currentTab: 'About',
      tabs: {
        About: 'Обо мне',
        Works: 'Работы',
        Reviews: 'Отзывы'
      }
    }
  });
</script>

<style lang="postcss" scoped>
.nav {
  background-color: #ffffff;
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
