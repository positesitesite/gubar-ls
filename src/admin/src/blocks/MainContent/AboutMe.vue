<template lang="pug">
  .maincontent
    form(@submit.prevent="addNewCategory").container
      MainContentName(name='Блок "Обо мне"' hasButton="true")
      AboutMeCards
</template>

<script>
import MainContentName from "components/MainContentName";
import AboutMeCards from "components/AboutMeCards";

export default {
  components: {
    MainContentName,
    AboutMeCards
  }
}
</script>



<style lang="postcss">
.maincontent {
  background-color: #ededf5;
  height: auto;
}

.maincontent .container {
  display: flex;
  flex-direction: column;
}
</style>