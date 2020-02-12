<template lang="pug">
  button.new-item__button-add
    svg(viewBox="0 0 15 15" preserveAspectRatio="xMinYMax").add-icon
      <circle cx="7.5" cy="7.5" r="7.5" fill="#FF9A00" width/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10H8V8H10V7H8V5H7V7H5V8H7V10Z" fill="white"/>
</template>

<style lang="postcss" scoped>
  button .add-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-icon {
    width: 40px;
    height: 40px;
  }
</style>