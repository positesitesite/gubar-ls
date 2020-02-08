<template lang="pug">
  li.cards__item
    .item__img-container
      img(src="./../assets/img/portfolio-project.png").item__img
      Tags(
        dontRender="true"
      )
    .item__descr
      .item__descr-title.sub-title Сайт школы образования
      .item__descr-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      a(href="#").item__descr-link http://loftschool.ru
    ItemControls
</template>

<script>
import ItemControls from "components/ItemControls";
import Tags from "components/Tags";

export default {
  components: {
    ItemControls,
    Tags
  }
}
</script>



<style lang="postcss" scoped>
  .item__img-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .cards__item {
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item__descr {
    padding: 40px;
  }

  .item__controls {
    padding: 40px;
    padding-top: 0;
  }

  .item__descr-title {
    margin-bottom: 26px;
  }

  .item__descr-text {
    margin-bottom: 30px;
    line-height: 30px;
  }

  .item__img {
    height: 100%;
    width: 100%;
  }

  .tags {
    display: flex;
    position: absolute;
    top: 50%;
    left: 8%;
  }

  .item__descr-link {
    color: blue;
    text-decoration: underline;
  }
</style>