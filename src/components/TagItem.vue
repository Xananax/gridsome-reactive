<template lang="pug">
  .tag
    h1.tag-title.text-center.space-bottom
    span # {{ title }}
    .posts
      g-link.nav__link(v-for="edge in posts" :key="edge.node.id" :to="edge.node.path")
        span {{edge.node.title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>