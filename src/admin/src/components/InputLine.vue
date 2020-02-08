//- Additional functionality:
//- Specify prop "hasTitle" -- to add describing title above the input
//- Specify prop "name" -- to give describing title a name
//- Specify placeholder -- to put placeholder 

<template lang="pug">
  .input__container
    div(v-if="hasTitle").input__title.sub-title {{name}}
    input(v-bind="$attrs").input__input
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name,
    hasTitle: {
      default: false
    }
  }
}
</script>



<style lang="postcss" scoped>
  .input__container {
    position: relative;
    width: 100%;
  }

  .input__title.sub-title {
    color: rgba(#414c63, 0.5);
    font-size: 16px;
    font-weight: 600;
  }

  .input__input {
    width: 100%;
    font-weight: 700;
  }

   //Input in "About Me -> Cards"
  .group__name .input__input {
    width: 70%;
  }
</style>
  