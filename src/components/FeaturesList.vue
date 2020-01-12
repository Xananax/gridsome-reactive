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
      return edges;
    }
  }
}
</script>

<static-query>
query {
  allFeature{
    edges {
      node {
        id
        title
        path
        cover (width: 420, blur: 10)
        description
        audiences {
          id
          title
        }
        applications {
          platform
          url
        }
      }
    }
  }
}
</static-query>