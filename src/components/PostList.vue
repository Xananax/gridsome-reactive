<template lang="pug">
  section.posts-list
    .post-list(v-for="edge in items" :key="edge.node.id")
      hr.line
      p.date(v-html="edge.node.date") {{edge.node.date}}
      h3.title(v-html="edge.node.title")
      p.description(v-html="edge.node.description")
      b {{edge.node.timeToRead}} min read &nbsp;
      g-image(v-if="edge.node.cover" :src="edge.node.cover.url" :alt="edge.node.cover.alt")
      button-nav-link(:to="edge.node.path")
        span Read More
        span.visuallyhidden about {{edge.node.title}}
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.line
  border 0.5px solid #cdc8c5
  margin 50px 0

.date
  font-weight 300

.visuallyhidden
  position absolute !important
  width 1px
  height 1px
  padding 0
  overflow hidden
  clip rect(0, 0, 0, 0)
  border 0
  white-space nowrap
  clip-path inset(50%)
  &:focus
    display inline-block
    padding 15px 23px 14px
    width auto
    height auto
    clip auto
    color #000000
    background-color #ffffff
    clip-path unset
</style>