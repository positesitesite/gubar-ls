<template lang='pug'>
  .wrapper.admin-wrapper
    header.header
      .header.container
        .user
          .user__img-wrapper
            img(src='../images/content/me.png' alt='').user__img
          .user__name Артур Губарь
          .user__breadcrumb Панель администрирования
        a.user__logout Выйти

    nav.nav
      .nav__switcher-container
        a.nav__switcher-item Обо мне
        a.nav__switcher-item Работы
        a.nav__switcher-item Отзывы

    .maincontent#about-me
      .maincontent__top-panel
        h1.maincontent__title Блок "Обо мне"
        button.button__group-add
          svg(alt='').button__group-add-icon
          .button__group-add-text Добавить группу

      ul.about.cards#about-me-cards
        li.about.cards__item--add.active
          .group__name
            input(placeholder='Название новой группы').group__name-title
            .group__name-controls
              svg(alt='').group__name-controls-edit
              svg(alt='').group__name-controls-apply.active
              svg(alt='').group__name-controls-cancel.active
          .group__items-container
            ul.group__items
              li.group__items-skill
                .skill__name
                .skill__progress
                  .skill__progress-amount
                .skill__edit-controls
                  svg(alt='').skill__edit-controls-edit
                  svg(alt='').skill__edit-controls-remove
                  svg(alt='').group__name-controls-apply.active
                  svg(alt='').group__name-controls-cancel.active
          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input.new-item__progress
            button.new-item__button-add

        li.about.cards__item
          .group__name
            h2.group__name-title Front-end
            .group__name-controls
              svg(alt='').group__name-controls-edit
              svg(alt='').group__name-controls-apply.active
              svg(alt='').group__name-controls-cancel.active
          .group__items-container
            ul.group__items
              li.group__items-skill
                .skill__name Git
                .skill__progress
                  .skill__progress-amount 100%
                .skill__edit-controls
                  svg(alt='').skill__edit-controls-edit
                  svg(alt='').skill__edit-controls-remove
                  svg(alt='').group__name-controls-apply.active
                  svg(alt='').group__name-controls-cancel.active
          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input.new-item__progress
            button.new-item__button-add

    .maincontent#works
      .maincontent__top-panel
        h1.maincontent__title Блок "Работы"

      ul.about.cards#about-me-cards
        li.about.cards__item--add.active
          .group__name
            input(placeholder='Название новой группы').group__name-title
            .group__name-controls
              svg(alt='').group__name-controls-edit
              svg(alt='').group__name-controls-apply.active
              svg(alt='').group__name-controls-cancel.active
          .group__items-container
            ul.group__items
              li.group__items-skill
                .skill__name
                .skill__progress
                  .skill__progress-amount
                .skill__edit-controls
                  svg(alt='').skill__edit-controls-edit
                  svg(alt='').skill__edit-controls-remove
                  svg(alt='').group__name-controls-apply.active
                  svg(alt='').group__name-controls-cancel.active
          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input.new-item__progress
            button.new-item__button-add

        li.about.cards__item
          .group__name
            h2.group__name-title Front-end
            .group__name-controls
              svg(alt='').group__name-controls-edit
              svg(alt='').group__name-controls-apply.active
              svg(alt='').group__name-controls-cancel.active
          .group__items-container
            ul.group__items
              li.group__items-skill
                .skill__name Git
                .skill__progress
                  .skill__progress-amount 100%
                .skill__edit-controls
                  svg(alt='').skill__edit-controls-edit
                  svg(alt='').skill__edit-controls-remove
                  svg(alt='').group__name-controls-apply.active
                  svg(alt='').group__name-controls-cancel.active
          .group__new-item
            input(placeholder='Новый навык').new-item__name
            input.new-item__progress
            button.new-item__button-add
</template>

<style lang="pcss" scoped>

@import './styles/main.pcss';

.header {
  background-color: #3e3e59;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header.container {
  justify-content: space-between;
  align-items: center;
}

.nav {
  background-color: #ffffff;
}

.maincontent {
  background-color: #dbdbff;
  }

</style>