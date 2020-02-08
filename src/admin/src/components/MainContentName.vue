//- Additional functionality:
//- Specify prop "name" -- to put title
//- Specify prop "hasButton" -- to put adding button 

<template lang="pug">
  .maincontent__top-panel
    //- prop "name" comes from parent component
    h1.maincontent__title.title {{name}}
    //- render button below only if parent component set hasButton to true
    button(type="button" v-if="hasButton").button__group-add
      svg(viewBox="0 0 15 15" preserveAspectRatio="xMinYMax").add-icon
        <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>
      .button__group-add-text Добавить группу
</template>

<script>
export default {
  props: {
    name,
    hasButton: {
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.maincontent__top-panel {
  display: flex;
  align-self: flex-start;
  margin: 30px 0;
}

.maincontent__title {
  margin-right: 59px;
}

.button__group-add {
  display: flex;
  color: #da8433;
  background: none;
  border: none;
}

.button__group-add .add-icon {
  width: 21px;
  fill: black;
  height: 21px;
  margin-right: 13px;
}

.button__group-add-text {
  white-space: nowrap;
  font-weight: 700;
}
</style>