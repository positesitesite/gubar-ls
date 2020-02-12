<template lang="pug">
  li.cards__item.add
    button(type="button").item__button-add
    h2.item__button-descr {{addingItem}}
</template>

<script>
export default {
  props: {
    addingItem: {
      type: String,
      default: "Добавить работу"
    },
  }
}
</script>

<style lang="postcss" scoped>
  .cards__item.add {
    background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item__button-add {
    position: relative;
    border: 2px white solid;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  .item__button-add:before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 34px;
    height: 2px;
    background-color: white;
  }
  
  .item__button-add:after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 34px;
    background-color: white;
  }

  .item__button-descr {
    font-size: 18px;
    font-weight: 700;
    width: 50%;
    text-align: center;
  }
</style>