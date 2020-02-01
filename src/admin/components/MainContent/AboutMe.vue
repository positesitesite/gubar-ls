<template lang="pug">
  .maincontent#about-me
    .container
      .maincontent__top-panel
        h1.maincontent__title.title Блок "Обо мне"
        button(type='button').button__group-add
          svg(viewBox="0 0 15 15").add-icon
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
              svg(viewBox="0 0 15 15").add-icon
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00" width/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>

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
              svg(viewBox="0 0 15 15").add-icon
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

</style>