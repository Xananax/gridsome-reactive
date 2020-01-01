<template lang="pug">
  .tag
    pre
      code {{ items }}
    h1.tag-title.text-center.space-bottom
    span # {{ title }}
    .posts
      g-link.nav__link(v-for="edge in items" :key="edge.node.id" :to="edge.node.path")
        span {{edge.node.title}} - {{ edge.node.__typename }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>