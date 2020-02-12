<template lang="pug">
  .controls
    .controls__default-state.active
      button(type="button").controls__edit
        svg(viewBox="0 0 21 21").controls__edit-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0525 5.0207L17.221 7.80358L12.8087 3.46709L15.6402 0.684204L20.0525 5.0207ZM16.4978 8.49312L6.22067 18.5937L1.80009 14.2491L12.0772 4.14846L16.4978 8.49312ZM0.0527344 20.6842L5.41674 19.4121L0.965098 15.0369L0.0527344 20.6842Z"/>
      button(type="button").controls__delete
        svg(viewBox="0 0 21 22").controls__delete-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86275 0.684204H14.6627V1.46194H20.2627V3.79527H0.262695V1.46194H5.86275V0.684204ZM17.0629 5.35085H3.46289V21.6842H17.0629V5.35085Z"/>
    .controls__editing-state
      button(type="button").controls__apply
        svg(viewBox="0 0 21 17").controls__apply-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9998 2.66824L18.2988 0.0526123L7.29803 10.7057L2.70101 6.25397L0 8.86959L7.41746 16.0526L10.1185 13.437L9.99904 13.3213L20.9998 2.66824Z"/>
      button(type="button").controls__cancel                
        svg(viewBox="0 0 17 17").controls__cancel-icon
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9143 16.8433L16.6403 14.1173L11.5163 8.87402L16.7912 3.71914L14.0652 0.99315L8.82201 6.11703L3.66716 0.842163L0.941166 3.56816L6.06501 8.81129L0.790039 13.9663L3.51603 16.6922L8.75928 11.5683L13.9143 16.8433Z"/>
</template>

<style lang="postcss" scoped>
button {
  border: none;
}

.controls {
  display: flex;
}

.controls__default-state {
  display: none;
  overflow: hidden;
  &.active {
    display: flex;
  }
}

.controls__editing-state {
  display: none;
  overflow: hidden;

  &.active {
    display: flex;
  }
}

.controls__edit-icon, .controls__delete-icon, .controls__apply-icon, .controls__cancel-icon {
  width: 21px;
  height: 21px;
  fill: rgb(133, 133, 133);
}

.controls__apply-icon {
  fill: rgb(63, 196, 91)
}

.controls__cancel-icon {
  fill: rgb(218, 58, 58)
}
</style>
