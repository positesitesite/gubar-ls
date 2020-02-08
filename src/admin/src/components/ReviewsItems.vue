<template lang="pug">
  li.cards__item
    .item__person
      .item__person-img
        img(src="./../assets/icons/profile-default-icon.png")
      .item__person-info
        .item__person-name Владимир Сабанцев
        .item__person-occup Преподаватель LoftSchool
      LineSeparator
    .item__person-review  Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
    ItemControls
</template>

<script>
import ItemControls from "components/ItemControls";
import LineSeparator from "components/LineSeparator";

export default {
  components: {
    ItemControls,
    LineSeparator
  }
}
</script>



<style lang="postcss" scoped>
  .cards__item {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item__person {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .item__person-img {
    width: 16%;
    margin-right: 20px;
  }

  .item__person-name {
    font-size: 18px;
    font-weight: 700;
  }

  .item__person-occup {
    font-size: 16px;
    font-weight: 400;
    color: #414c63;
  }

  .item__controls {
    /* padding: 40px; */
    /* padding-top: 0; */
  }
</style>