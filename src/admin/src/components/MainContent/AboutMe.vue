<template lang="pug">
  .maincontent#about-me
    .container
      .maincontent__top-panel
        h1.maincontent__title.title Блок "Обо мне"
        button(type='button').button__group-add
          svg(viewBox="0 0 15 15" preserveAspectRatio="xMinYMax").add-icon
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>
          .button__group-add-text Добавить группу

      ul.about.cards#about-me-cards
        li.about.cards__item--add.active
          .group__name
            input(placeholder='Название новой группы').group__name-title
            Controls // Icons edit, remove, apply, cancel
          .group__items-container
            Items // List with skills

          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input.new-item__progress
            button.new-item__button-add
              svg(viewBox="0 0 15 15" preserveAspectRatio="xMinYMax").add-icon
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00" width/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>

        li.about.cards__item
          .group__name
            input(placeholder='Название новой группы').group__name-title
            Controls // Icons edit, remove, apply, cancel
          .group__items-container
            Items // List with skills

          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input(value="0").new-item__progress
            button.new-item__button-add
              svg(viewBox="0 0 15 15" preserveAspectRatio="xMinYMax").add-icon
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00" width/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>

</template>

<script>
import Controls from '../Controls'; 
import Items from '../Items'; 
export default {
  components: {
    Controls,
    Items
  }
}
</script>

<style lang="postcss">
.maincontent {
  background-color: #ededf5;
}

.maincontent .container {
  display: flex;
  flex-direction: column;
}

.maincontent__top-panel {
  display: flex;
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

ul.cards {
  width: 100%;
  display: flex;
}

li.cards__item, li.cards__item--add{
  display: grid;
  min-height: 400px;
  grid-template-rows: 16% 74% 10%;
  position: relative;
  width: calc(50% - 40px);
  background-color: #fff;
  padding: 20px;

  &:nth-child(odd) {
    margin-right: 32px;
  }
}

.group__name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0px;
    top: 14%;
    height: 2px;
    width: 95%;
    transform: translateX(3%);
    background-color: #dbdbdb;
  }
}

.group__new-item {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.new-item__name {
  width: 60%;
}

.new-item__progress {
  width: 20%;
}

.group__name-title {
  width: 60%;
}

button .add-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-icon {
  width: 40px;
  height: 40px;
}
</style>