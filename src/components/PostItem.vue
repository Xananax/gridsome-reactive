<template lang="pug">
  div
    button-nav-link(to="/blog/")
    p.post-date {{date}} | {{timeToRead}} min read
    .post-title
      header-title(level=1) {{title}}
      p.post-date {{date}}
    .post-header(v-if="cover")
      slot(name="cover_image")
        g-image(:src="image" :alt="cover.alt")
      caption(v-if="cover.credit && cover.credit.name")
        a(v-if="cover.credit.url" :href="cover.credit.url" target="_BLANK") {{ cover.credit.name }}
        span(v-else) {{ cover.credit.name }}
      caption(v-else) uncredited
    .post-content
      slot
    .post-tags
      button-nav-link(class="post-tags__link" v-for="tag in tags" :key="tag.id" :to="tag.path")
        span # 
        span {{ tag.title }}
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    timeToRead: {
      type: Number,
      required: true
    },
    tags: {
      type: Array,
      required: false
    },
    cover: {
      type: Object,
      required: false
    },
    image:{}
  },
};
</script>

<style lang="stylus">
.post-date
  font-size 16px
  font-weight 400

.post-content
  font-size 20px
</style>