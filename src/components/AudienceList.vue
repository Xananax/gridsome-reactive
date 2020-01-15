<template lang="pug">
  .audience-list
    p(v-for="audience in items" :key="audience.id") 
      g-link(:to="audience.path") {{ audience.title }}
</template>

<script>
export default {
  computed: {
    items() {
      const { edges } = this.$static.allAudience
      return edges.map( ({node}) => node )
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