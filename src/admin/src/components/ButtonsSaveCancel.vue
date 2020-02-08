<template lang="pug">
  .controls
    button(type="button").controls__cancel
      .controls__text.cancel Отмена
    button(type="button").controls__save
      .controls__text.save СОХРАНИТЬ
</template>

<style lang="postcss" scoped>
  .controls {
    display: flex;
  }
  
  button {
    width: 181px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      margin-right: 14px;
    }
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

  .controls__cancel {
    fill: #414c63;
  }
</style>