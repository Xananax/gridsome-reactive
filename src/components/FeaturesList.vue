<template lang="pug">
  .features-list
    p(v-for="feature in items" :key="feature.id") 
      button-nav-link(:to="feature.path") {{ feature.title }}

</template>

<script>
export default {
  computed: {
    items() {
      const { edges } = this.$static.allFeature 
      return edges.map(({node})=>node)
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
        cover (width: 200, height: 200, blur: 10)
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