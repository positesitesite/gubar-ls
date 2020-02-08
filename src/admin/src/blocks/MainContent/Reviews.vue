<template lang="pug">
  .maincontent
    .container
      .maincontent__top-panel
        h1.maincontent__title.title Блок "Отзывы"

      ul.cards
        li.cards__item.edit.active
          .group__name
            .group__name-title Новый отзыв
            LineSeparator
          .group__content
            .group__picture
              ImgUpload

            ul.group__info
              li.group__item
                InputLine(
                  hasTitle="true"
                  name="Имя автора"
                )
              li.group__item              
                InputLine(
                  hasTitle="true" 
                  name="Деятельность"
                )
              li.group__item
                TextArea(
                  hasTitle="true"
                  name="Отзыв"
                  rows="4"
                )

                ButtonsSaveCancel

        AddingItem(
          addingItem="Добавить отзыв"
        )
        
        ReviewsItems
        ReviewsItems
        ReviewsItems
        ReviewsItems
</template>

<script type="javascript">
import InputLine from "components/InputLine";
import TextArea from "components/TextArea";
import ButtonsSaveCancel from "components/ButtonsSaveCancel";
import AddingItem from "components/AddingItem";
import ReviewsItems from "components/ReviewsItems";
import ImgUpload from "components/ImgUpload";
import LineSeparator from "components/LineSeparator";

export default {
  components: {
    InputLine,
    TextArea,
    ButtonsSaveCancel,
    AddingItem,
    ReviewsItems,
    ImgUpload,
    LineSeparator
  }
}
</script>



<style lang="postcss" scoped>
@import "./../../../styles/mixins.pcss";

  .maincontent {
    background-color: #ededf5;
    height: 100%;
  }

  .maincontent .container {
    display: flex;
    flex-direction: column;
  }

  .maincontent__top-panel {
    display: flex;
    align-self: flex-start;
    margin: 30px 0;
  }

  .maincontent__title {
    margin-right: 59px;
  }
  
  ul.cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  li.cards__item {
    display: grid;
    min-height: 400px;
    margin-bottom: 20px;
    position: relative;
    width: calc(33% - 40px);
    background-color: #fff;
    padding: 20px;
    margin-right: 31px; //* THIS IS TEMPARARY, FIND BETTER SOLUTION

    &:nth-child(even) {
      margin-right: 32px;
    }
  }

  li.cards__item.edit {
    width: 100%;
    padding: 20px;
    margin-right: 0;
  }

  .group__content {
    display: flex;
  }

  .group__picture {
    display: flex;
    position: relative;
    margin-right: 32px;
    justify-content: center;
    min-height: 200px;
  }

  .group__name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .group__info {
    width: 72%;
    flex-wrap: wrap;
    display: flex;
  }

  .group__name-title {
    width: 60%;
    font-weight: 700;
  }

  .group__item {
    &:nth-child(1) {
      width: 48%;
      margin-right: 4%;
    }
    &:nth-child(2) {
      width: 48%;
    }
    &:nth-child(3) {
      width: 100%;
    }
  }

  .textarea__container {
    margin-bottom: 28px;
  }

  .group__content {
    padding-bottom: 20px;
  }

  .group__picture-upload {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .group__picture-upload-button {
    cursor: pointer;

    &:hover {
      filter: contrast(80%);
    }
  }

  .group__picture-upload-input {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .group__item {
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .controls {
    display: flex;
    justify-content: flex-end;
  }
  
  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
</style>