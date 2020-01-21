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