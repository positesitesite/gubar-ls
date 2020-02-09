<template lang="pug">
  .maincontent
    .container
      .maincontent__top-panel
        h1.maincontent__title.title Блок "Работы"

      ul.cards
        li.cards__item.edit.active
          .group__name
            .group__name-title Редактирование работы
            LineSeparator
          .group__content
            .group__picture
              .group__picture-upload
                .group__picture-upload-hint Перетащите или загрузите для загрузки изображения
                input(type="file" :id="`img-upload`+_uid").group__picture-upload-input
                label(:for="`img-upload`+_uid").group__picture-upload-button.controls__load 
                  .group__picture-text ЗАГРУЗИТЬ

            ul.group__info
              li.group__item
                InputLine(
                  hasTitle="true"
                  name="Название"
                )
              li.group__item              
                InputLine(
                  hasTitle="true" 
                  name="Ссылка"
                )
              li.group__item
                TextArea(
                  hasTitle="true"
                  name="Описание"
                  rows="4"
                )
              li.group__item
                InputLine(
                  hasSeparator="true"
                  hasTitle="true"
                  name="Добавление тэга"
                )

                Tags
                ButtonsSaveCancel

        AddingItem 
        
        WorksItems
        WorksItems
        WorksItems
        WorksItems
</template>

<script type="javascript">
import UniqueId from 'vue-unique-id';
import InputLine from "components/InputLine";
import TextArea from "components/TextArea";
import Tags from "components/Tags";
import ButtonsSaveCancel from "components/ButtonsSaveCancel";
import AddingItem from "components/AddingItem";
import WorksItems from "components/WorksItems";
import LineSeparator from "components/LineSeparator";

export default {
  components: {
    InputLine,
    TextArea,
    Tags,
    ButtonsSaveCancel,
    AddingItem,
    WorksItems,
    LineSeparator
  }
}
</script>



<style lang="postcss" scoped>
@import "./../../../styles/mixins.pcss";

  .maincontent {
    background-color: #ededf5;
    height: auto;
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

  .tags {
    margin-bottom: 40px;
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
    height: 100%;
  }

  .group__picture {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #dee4ed;
    width: 50%;
    height: 40%;
    margin-right: 32px;
  }

  .group__name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .group__info {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .group__name-title {
    width: 60%;
    font-weight: 700;
  }

  .group__picture-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .group__picture-upload-button {
    cursor: pointer;

    &:hover {
      filter: contrast(80%);
    }
  }

  .group__picture-upload-hint {
    text-align: center;
    margin-bottom: 18px;
    width: 60%;
  }

  .group__picture-upload-input {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .group__picture-upload-button {
    width: 181px;
    height: 60px;
  }

  .group__picture-text {
    color: $white;
    font-weight: 700;
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

  .controls__load {
    background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
</style>