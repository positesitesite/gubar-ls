<template lang="pug">
  .maincontent#works
    .container
      .maincontent__top-panel
        h1.maincontent__title.title Блок "Работы"

      ul.cards#works-cards
        li.cards__item.edit.active
          .group__name
            .group__name-title Редактирование работы
          .group__content
            .group__picture
              .group__picture-upload
                .group__picture-upload-hint Перетащите или загрузите для загрузки изображения
                input(type='file' id='img-upload').group__picture-upload-input
                label(for='img-upload').group__picture-upload-button.controls__load 
                  .controls__text.save ЗАГРУЗИТЬ

            .group__info
              .input__container
                .input__descr.sub-title Название
                input.input__input
                .input__underline
              .input__container
                .input__descr.sub-title Ссылка
                input.input__input
                .input__underline
              .textarea__container
                .input__descr.sub-title Описание
                textarea(rows='4').textarea__textarea
              .input__container
                .input__descr.sub-title Добавление тэга
                input.input__input
                .input__underline
              ul.tags
                li.tag
                  .tag__name HTML
                  button(type='button').controls__cancel                
                    svg(viewBox="0 0 17 17").controls__cancel-icon
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
                li.tag
                  .tag__name CSS
                  button(type='button').controls__cancel                
                    svg(viewBox="0 0 17 17").controls__cancel-icon
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
                li.tag
                  .tag__name JavaScript
                  button(type='button').controls__cancel                
                    svg(viewBox="0 0 17 17").controls__cancel-icon
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
              .group.controls
                button(type='button').controls__cancel
                  .controls__text.cancel Отмена
                button(type='button').controls__save
                  .controls__text.save СОХРАНИТЬ


        li.cards__item.add
          button(type='button').item__button-add
            svg.add-icon
            svg.add-icon__outline

        li.cards__item
          .item__img-container
            img.item__img
            ul.item__tags
              li.item__tag
                .item__tag-name HTML
              li.item__tag
                .item__tag-name CSS
              li.item__tag
                .item__tag-name JavaScript

          .item__descr
            .item__descr-title Сайт школы образования
            .item__descr-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='#').item__descr-link http://loftschool.ru

          .item__controls
            .controls__default-state.active
              button(type='button').controls__edit
                svg(viewBox="0 0 21 21").controls__edit-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
              button(type='button').controls__delete
                svg(viewBox="0 0 21 22").controls__delete-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86275 0.684204H14.6627V1.46194H20.2627V3.79527H0.262695V1.46194H5.86275V0.684204ZM17.0629 5.35085H3.46289V21.6842H17.0629V5.35085Z"/>
            .controls__editing-state
              button(type='button').controls__apply
                svg(viewBox="0 0 21 17").controls__apply-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 2.66824L18.2988 0.0526123L7.29803 10.7057L2.70101 6.25397L0 8.86959L7.41746 16.0526L10.1185 13.437L9.99904 13.3213L20.9998 2.66824Z"/>
              button(type='button').controls__cancel                
                svg(viewBox="0 0 17 17").controls__cancel-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
        li.cards__item
          .item__img-container
            img.item__img
            ul.item__tags
              li.item__tag
                .item__tag-name HTML
              li.item__tag
                .item__tag-name CSS
              li.item__tag
                .item__tag-name JavaScript

          .item__descr
            .item__descr-title Сайт школы образования
            .item__descr-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='#').item__descr-link http://loftschool.ru

          .item__controls
            .controls__default-state.active
              button(type='button').controls__edit
                svg(viewBox="0 0 21 21").controls__edit-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
              button(type='button').controls__delete
                svg(viewBox="0 0 21 22").controls__delete-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86275 0.684204H14.6627V1.46194H20.2627V3.79527H0.262695V1.46194H5.86275V0.684204ZM17.0629 5.35085H3.46289V21.6842H17.0629V5.35085Z"/>
            .controls__editing-state
              button(type='button').controls__apply
                svg(viewBox="0 0 21 17").controls__apply-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 2.66824L18.2988 0.0526123L7.29803 10.7057L2.70101 6.25397L0 8.86959L7.41746 16.0526L10.1185 13.437L9.99904 13.3213L20.9998 2.66824Z"/>
              button(type='button').controls__cancel                
                svg(viewBox="0 0 17 17").controls__cancel-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
        li.cards__item
          .item__img-container
            img.item__img
            ul.item__tags
              li.item__tag
                .item__tag-name HTML
              li.item__tag
                .item__tag-name CSS
              li.item__tag
                .item__tag-name JavaScript

          .item__descr
            .item__descr-title Сайт школы образования
            .item__descr-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='#').item__descr-link http://loftschool.ru

          .item__controls
            .controls__default-state.active
              button(type='button').controls__edit
                svg(viewBox="0 0 21 21").controls__edit-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
              button(type='button').controls__delete
                svg(viewBox="0 0 21 22").controls__delete-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86275 0.684204H14.6627V1.46194H20.2627V3.79527H0.262695V1.46194H5.86275V0.684204ZM17.0629 5.35085H3.46289V21.6842H17.0629V5.35085Z"/>
            .controls__editing-state
              button(type='button').controls__apply
                svg(viewBox="0 0 21 17").controls__apply-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 2.66824L18.2988 0.0526123L7.29803 10.7057L2.70101 6.25397L0 8.86959L7.41746 16.0526L10.1185 13.437L9.99904 13.3213L20.9998 2.66824Z"/>
              button(type='button').controls__cancel                
                svg(viewBox="0 0 17 17").controls__cancel-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
        li.cards__item
          .item__img-container
            img.item__img
            ul.item__tags
              li.item__tag
                .item__tag-name HTML
              li.item__tag
                .item__tag-name CSS
              li.item__tag
                .item__tag-name JavaScript

          .item__descr
            .item__descr-title Сайт школы образования
            .item__descr-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(href='#').item__descr-link http://loftschool.ru

          .item__controls
            .controls__default-state.active
              button(type='button').controls__edit
                svg(viewBox="0 0 21 21").controls__edit-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
              button(type='button').controls__delete
                svg(viewBox="0 0 21 22").controls__delete-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86275 0.684204H14.6627V1.46194H20.2627V3.79527H0.262695V1.46194H5.86275V0.684204ZM17.0629 5.35085H3.46289V21.6842H17.0629V5.35085Z"/>
            .controls__editing-state
              button(type='button').controls__apply
                svg(viewBox="0 0 21 17").controls__apply-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 2.66824L18.2988 0.0526123L7.29803 10.7057L2.70101 6.25397L0 8.86959L7.41746 16.0526L10.1185 13.437L9.99904 13.3213L20.9998 2.66824Z"/>
              button(type='button').controls__cancel                
                svg(viewBox="0 0 17 17").controls__cancel-icon
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>

</template>

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
  flex-wrap: wrap;
}

li.cards__item, li.cards__item.add{
  display: grid;
  min-height: 400px;
  margin-bottom: 20px;
  /* grid-template-rows: 16% 74% 10%; */
  position: relative;
  width: calc(50% - 40px);
  background-color: #fff;
  padding: 20px;

  &:nth-child(odd) {
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
  position: relative;
  background-color: #dee4ed;
  width: 50%;
  height: 35%;
  margin-right: 32px;
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

.group__info {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.group__name-title {
  width: 60%;
  font-weight: 700;
}

.tags {
  display: flex;
  margin-top: 20px;
}

.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 20px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 14px;
}

.input__descr.sub-title {
  color: rgba(#414c63, 0.5);
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

.input__container {
  width: 100%;
  margin-bottom: 20px;
}

.input__input {
  width: 100%;
}

.textarea__textarea {
  width: 100%;
}

.group__picture {
  display: flex;
  justify-content: center;
  min-height: 200px;
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

.group__picture-upload-hint {
  text-align: center;
  margin-bottom: 18px;
  width: 60%;
}

.group__picture-upload-input {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px #dee4ed solid;
}

.controls__load {
  width: 181px;
  height: 50px;
}

.group__controls {
  align-self: flex-end;
  margin-top: 29px;
  margin-bottom: 23px;
}

.group.controls button {
  width: 181px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    margin-right: 14px;
  }
}

.controls__load {
  background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls__save {
  background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
  border-radius: 14px;
}

.controls__text {
  font-weight: 700;

  &.cancel {
    color: #ff9a00;
  }

  &.save {
    color: #ffffff;
  }
}

// Controls
button {
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    filter: contrast(80%);
  }
}

.controls {
  display: flex;
}

.controls__default-state {
  display: none;
  overflow: hidden;
  &.active {
    display: block;
  }
}

.controls__editing-state {
  display: none;
  overflow: hidden;

  &.active {
    display: block;
  }
}

.controls__edit-icon, .controls__delete-icon, .controls__apply-icon, .controls__cancel-icon {
  width: 21px;
  height: 21px;
  fill: #fbf;
}

.controls__apply-icon {
  fill: rgb(63, 196, 91);
}

.controls__cancel-icon {
  fill: rgb(218, 58, 58);
  width: 11px;
  height: 11px;
}

.controls__cancel .controls__cancel-icon {
  fill: #414c63;
}
 // End of controls
</style>