<template lang="pug">
  .auth
    form.auth__form
      InputLine(
        hasTitle="true"
        name="Логин"
        placeholder="Ваш логин"
      ).auth__input
      InputLine(
        hasTitle="true"
        name="Пароль"
        placeholder="Ваш пароль"
      ).auth__input
      button(type="submit").auth__button

</template>

<script>
import {Validator } from "simple-vue-validator";
import InputLine from "components/InputLine";

export default {
  components: {
    InputLine
  }
}
</script>



<style lang="postcss" scoped>
  .auth {
    width: 100%;
    height: 100%;
    background-color: #2d3c4e;
  }

  .auth__form {
    background-color: #ffffff;
    width: 50%;
    height: 50%;
  }
</style>
