<template lang="pug">
  .picture-upload
    img(src="./../assets/icons/profile-default-icon.png").picture__exact
    input(type="file" :id="`img-upload`+_uid").picture__input
    label(:for="`img-upload`+_uid").picture__button 
      .picture-text Добавить фото
</template>

<script>
import UniqueId from 'vue-unique-id';

export default {
  
}
</script>



<style lang="postcss" scoped>
  .picture-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .picture__exact {
    margin-bottom: 24px;
  }

  .picture__input {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .picture-text {
    color: blue;
  }

  label.picture__button {
    cursor: pointer;

    &:hover {
      filter: contrast(80%);
    }
  }
</style>