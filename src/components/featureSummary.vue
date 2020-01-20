<template lang="pug">
  .feature-summary(:id="id")
    .feature-content
      g-link(:to="path")
        g-image.feature-cover(:src="cover.url") 
      h3.feature-title 
        g-link.feature-title-link(:to="path") {{ title }}
      p.feature-body {{ description }}
      g-link.feature-read-more(:to="path") read more
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    },
    cover: {
      type: Object,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    id :{
      type: String,
      required: false
    },
    audiences: {
      type: Array
    },
    applications: {
      type: Array
    }
  }
}
</script>

<style lang="stylus">
  .feature-summary
    @extend $card
    @extend $avoid-column-break
</style>