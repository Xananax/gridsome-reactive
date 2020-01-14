<template lang="pug">
  .audience-list
    p(v-for="edge in items" :key="edge.node.id") 
      audience-link(:path="edge.node.path" :title="edge.node.title")
</template>

<script>
export default {
  computed: {
    items() {
      const { edges } = this.$static.allAudience
      return edges;
    }
  }
}
</script>

<static-query>
query {
  allAudience{
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>