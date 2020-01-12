<template lang="pug">
  .features-list
    p(v-for="feature in items" :key="feature.node.id") {{ feature.node.title }} --
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
  allFeature{
    edges {
      node {
        id
        title
        path
        cover (width: 420, blur: 10)
        description
        audience {
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