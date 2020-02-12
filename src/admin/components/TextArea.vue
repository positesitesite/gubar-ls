//- Additional functionality:
//- Specify prop "hasTitle" -- to add describing title above the input
//- Specify prop "name" -- to give describing title a name

<template lang="pug">
  .textarea__container
    div(v-if="hasTitle").textarea__title.sub-title {{name}}
    textarea(:rows="rows").textarea__textarea

</template>

<script>
export default {
  props: {
    name,
    rows: String,
    hasTitle: {
      default: false
    }
  }
}
</script>



<style lang="postcss" scoped>
.textarea__textarea {
  width: 100%;
}

.textarea__title.sub-title {
  color: rgba(#414c63, 0.5);
  font-size: 16px;
  font-weight: 600;
}
</style>
  