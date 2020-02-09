<template lang="pug">
  .auth
    
    form.auth__form
      .auth__title.title Авторизация
      .auth__inputs
        .auth__input-row
          svg(viewBox="0 0 88 100").auth__input-icon
            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.134 24.9999C61.134 36.586 52.9072 44.9465 43.9591 44.9465C35.011 44.9465 26.7842 36.586 26.7842 24.9999C26.7842 13.4139 35.011 5.05334 43.9591 5.05334C52.9072 5.05334 61.134 13.4139 61.134 24.9999ZM66.134 24.9999C66.134 38.7776 56.2059 49.9465 43.9591 49.9465C31.7122 49.9465 21.7842 38.7776 21.7842 24.9999C21.7842 11.2223 31.7122 0.0533447 43.9591 0.0533447C56.2059 0.0533447 66.134 11.2223 66.134 24.9999ZM29.8255 58.1633C31.0679 57.5609 31.5867 56.0654 30.9842 54.823C30.3818 53.5807 28.8863 53.0619 27.644 53.6643L2.15239 66.0251L0.743164 66.7085V68.2746V83.0787V83.9583L1.29395 84.6441C4.69813 88.8829 8.66062 92.6487 15.4009 95.2853C22.0344 97.8801 31.192 99.317 44.8937 99.317C58.8467 99.317 67.5833 97.8857 73.7288 95.2554C79.9945 92.5737 83.3397 88.7351 86.6251 84.6441L87.1759 83.9583V83.0787V68.2746V66.719L85.7803 66.0318L60.6765 53.671C59.4379 53.061 57.9393 53.5708 57.3293 54.8095C56.7194 56.0482 57.2291 57.5468 58.4678 58.1567L82.1759 69.8303V82.1949C79.242 85.799 76.5593 88.6053 71.7614 90.6588C66.5449 92.8914 58.6128 94.317 44.8937 94.317C31.466 94.317 23.0207 92.897 17.2224 90.6289C11.8726 88.5362 8.63744 85.6686 5.74316 82.1877V69.8408L29.8255 58.1633Z"/>
          InputLine(
            hasTitle="true"
            name="Логин"
            placeholder="Ваш логин"
          ).auth__input
        .auth__input-row
          svg(viewBox="0 0 90 93").auth__input-icon
            <path fill-rule="evenodd" clip-rule="evenodd" d="M59.7089 55.1395C73.4771 55.1395 84.6385 43.9781 84.6385 30.2099C84.6385 16.4416 73.4771 5.28027 59.7089 5.28027C45.9406 5.28027 34.7793 16.4416 34.7793 30.2099C34.7793 43.9781 45.9406 55.1395 59.7089 55.1395ZM59.7089 60.1395C76.2385 60.1395 89.6385 46.7395 89.6385 30.2099C89.6385 13.6802 76.2385 0.280273 59.7089 0.280273C43.1792 0.280273 29.7793 13.6802 29.7793 30.2099C29.7793 33.2879 30.2439 36.2574 31.1069 39.0521L1.12538 69.0336L0.393144 69.7659V70.8014L0.393143 83.3551V83.3553L0.392758 89.386L0.392578 92.2005L3.18745 91.8688L19.8006 89.8967L20.661 89.7946L21.2737 89.1819L26.6155 83.8402L27.3477 83.1079V82.0724V76.2083L34.2253 75.4528L36.4523 75.2082L36.4523 72.9678L36.4523 69.4443H39.9758H42.4758V66.9443V65.8024H43.6176H44.6532L45.3854 65.0702L51.4657 58.9899C54.0843 59.7386 56.8498 60.1395 59.7089 60.1395ZM46.373 57.0116C40.7243 54.1955 36.0911 49.6462 33.1699 44.0602L5.39314 71.8369V77.3198L29.5474 53.1655L33.0829 56.7011L5.39308 84.3909L5.39294 86.5719L18.3508 85.0337L22.3477 81.0369V73.9678V71.7274L24.5747 71.4828L31.4523 70.7273L31.4523 66.9443V64.4443L33.9523 64.4443H37.4758V63.3024V60.8024H39.9758H42.5821L46.373 57.0116ZM68.7834 25.21C70.5003 25.21 71.8921 23.8182 71.8921 22.1013C71.8921 20.3845 70.5003 18.9927 68.7834 18.9927C67.0666 18.9927 65.6748 20.3845 65.6748 22.1013C65.6748 23.8182 67.0666 25.21 68.7834 25.21ZM68.7834 30.21C73.2617 30.21 76.8921 26.5796 76.8921 22.1013C76.8921 17.623 73.2617 13.9927 68.7834 13.9927C64.3051 13.9927 60.6748 17.623 60.6748 22.1013C60.6748 26.5796 64.3051 30.21 68.7834 30.21Z"/>
          InputLine(
            hasTitle="true"
            name="Пароль"
            placeholder="Ваш пароль"
          ).auth__input
      button(type="submit").auth__button
        .auth__button-text Отправить

      button(type="button").auth__close-button
        svg(viewBox="0 0 17 17").auth__close-button-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>

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
  @import "./../../../styles/mixins.pcss";

  .auth {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3c4e;
  }

  .auth__form {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 30px;
    width: 50%;
    height: 50%;

    @include phones {
      width: 100%;
      height: 100%;
    }
  }

  .auth__title {
    margin-bottom: 34px;
  }

  .auth__inputs {
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .auth__input-row {
    display: flex;
    align-items: center;
  }

  .auth__input {
    margin-bottom: 40px;
    width: 92%;
  }

  .auth__input-icon {
    width: 20px;
    margin-right: calc(8% - 10px);
    padding-bottom: 30px;
    fill: #414c63;
  }

  .auth__button {
    width: 70%;
    height: 80px;
    background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
    border-radius: 40px 5px;

    @include phones {
      width: 92%;
    }
  }

  .auth__button-text {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .auth__close-button {
    position: absolute;
    right: 9%;
    top: 10%;
  }

  .auth__close-button-icon {
    width: 17px;
    fill: #414c63;
  }
</style>
