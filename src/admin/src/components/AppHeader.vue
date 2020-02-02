<template lang='pug'>
  header.header
    .header.container
      .user
        .user__img-wrapper
          img(src='../../src/assets/img/me.png' alt='').user__img
        .user__name.sub-title Артур Губарь
        .user__breadcrumb Панель администрирования
      a.user__logout Выйти
</template>

<style lang="postcss" scoped>
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

.user {
  padding: 16px 0;
  display: flex;
  align-items: center;
}

.user__img {
  &-wrapper {
    margin-right: 20px;
    max-width: 45px;
    height: 100%;
  }

  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.user__name {
  color: #fff;
  margin-right: 28px;
}

.user__breadcrumb {
  color: rgba(#fff, 0.5);
  font-size: 14px;
  font-weight: 400;
}

.user__logout {
  color: rgba(#fff, 0.5);
  font-weight: 400;
  text-decoration: underline;

  &:hover {
    color: rgb(133, 133, 133);
  }
}
</style>