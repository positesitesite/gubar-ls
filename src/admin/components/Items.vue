<template lang="pug">
  ul.items
    li.items__skill
      .items__skill-name Git
      .items__skill-progress 
        .items__skill-progress-amount 100%
      .items__skill-edit-controls
        Controls
</template>

<script>
import Controls from './Controls'
export default {
  components: {
    Controls
  }
}
</script>
