<template lang="pug">
  .features-list
    .feature(v-for="feature in items" :key="feature.id") 
      h2 {{ feature.title }}
      g-image(:src="feature.cover.url") 
      p {{ feature.description }}
      button-nav-link(:to="feature.path") read more
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
          paid
        }
      }
    }
  }
}
</static-query>