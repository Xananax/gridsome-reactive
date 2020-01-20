<template lang="pug">
  .card.feature-summary(:id="id")
    .card-image
      g-link(:to="path")
        g-image.feature-cover(:src="cover.url") 
    .card-content
      h3.title.is-4 
        g-link.feature-title-link(:to="path") {{ title }}
      .content {{ description }}
      .card-footer
        .card-footer-item
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
  width 320px
  column-break-inside avoid
  -webkit-column-break-inside avoid
  page-break-inside avoid
  break-inside avoid
  margin-bottom 1em
  img
    width 100%
</style>