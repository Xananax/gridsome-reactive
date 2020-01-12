<template lang="pug">
  .features-list
    p(v-for="edge in items" :key="edge.node.id") 
      button-nav-link(:to="edge.node.path") {{ edge.node.title }}

</template>

<script>
export default {
  computed: {
    items() {
      const { edges } = this.$static.allFeature 
      console.log(edges)
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