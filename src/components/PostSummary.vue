<template lang="pug">
  .post-list
    hr.line
    p.date(v-html="post.date") {{post.date}}
    h3.title(v-html="post.title")
    p.description(v-html="post.description")
    b {{post.timeToRead}} min read &nbsp;
    g-image(v-if="post.cover" :src="post.cover.url" :alt="post.cover.alt")
    button-nav-link(:to="post.path")
      span Read More
      span.visuallyhidden about {{post.title}}
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
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
