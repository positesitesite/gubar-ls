<template lang="pug">
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