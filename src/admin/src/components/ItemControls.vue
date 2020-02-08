<template lang="pug">
  .item__controls
    .control__container
      .control__text Править
      button(type="button").control__button
        svg(viewBox="0 0 21 21").control__icon.edit
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
    .control__container
      .control__text Удалить
      button(type="button").control__button                
        svg(viewBox="0 0 17 17").control__icon.remove
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
</template>



<style lang="postcss" scoped>
  .item__controls {
    display: flex;
    justify-content: space-between;
  }

  .control__icon {
    width: 17px;
    height: 17px;

    &.edit {
      fill: #383bcf;
    }

    &.remove {
      fill: #c92e2e;
    }
  }

  .control__container {
    display: flex;
    align-items: center;
  }

  .control__text {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 400;
  }
</style>
