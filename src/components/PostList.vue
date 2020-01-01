<template lang="pug">
  section.posts-list
    post-summary(v-for="edge in items" :key="edge.node.id" :post="edge.node")
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