// The prop "dontRender" can be set to "true" if you
// don't need to render cancel button

<template lang="pug">
  ul.tags
    li(v-for="tagName in tagNames").tag
      .tag__name {{tagName}}
      button(
        type="button"
        v-if="!dontRender"
      ).controls__cancel                
        svg(viewBox="0 0 17 17").controls__cancel-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
</template>

<script>
export default {
  props: {
    dontRender: {
      default: false
    }
  },
  data() {
    return {
      tagNames: ["HTML", "CSS", "JavaScript"]
    }
  }
}
</script>


<style lang="postcss" scoped>
  .tags {
    display: flex;
    margin-top: 20px;
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-right: 20px;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 14px;
  }

  .tag__name {
    font-size: 13px;
  }

  .controls__cancel-icon {
    fill: #414c63;
    width: 11px;
    height: 11px;
  }
</style>