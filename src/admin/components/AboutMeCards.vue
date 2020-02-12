<template lang="pug">
  ul.about.cards
    li.about.cards__item--add.active
      .group__name
        InputLine(
          name="check" 
          placeholder="Название новой группы"
          style="margin-bottom: 0px;"
          )
        Controls // Icons edit, remove, apply, cancel
      LineSeparator
      .group__items-container
        Items // List with skills

      .group__new-item
        .group__inputs
          input(placeholder="Новый навык").new-item__name
          input.new-item__progress
        ButtonAdd
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions
  }
}
</script>

<script>
import Controls from "./Controls";
import Items from "./Items";
import InputLine from "./InputLine";
import LineSeparator from "./LineSeparator";
import ButtonAdd from "./ButtonAdd";

export default {
  components: {
    Controls,
    Items,
    InputLine,
    LineSeparator,
    ButtonAdd
  }
}
</script>



<style lang="postcss" scoped>
@import "./../styles/mixins";

  ul.cards {
    width: 100%;
    display: flex;
  }

  li.cards__item, li.cards__item--add{
    display: grid;
    min-height: 400px;
    grid-template-rows: auto auto 60% auto;
    position: relative;
    width: calc(50% - 40px);
    background-color: #fff;
    padding: 20px;

    &:nth-child(odd) {
      margin-right: 32px;
    }
  }

  .group__name {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .group__new-item {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .new-item__name {
    width: 50%;
    margin-right: 14px;
  }

  .new-item__progress {
    width: 20%;
  }

  .group__name-title {
    width: 60%;
  }

  .group__inputs {
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: 16px;

    &:before {
      content: '%';
      position: absolute;
      color: $darkgrey;
      bottom: 0;
      margin-bottom: 17px;
    }
  }
</style>