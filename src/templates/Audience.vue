<template lang="pug">
  Layout
    h1 {{ item.title }}
    ul
      li(v-for="edge in features")
        button-nav-link(:to="edge.node.path") {{ edge.node.title }}
</template>

<script>

export default {
  metaInfo() {
    return {
      title: this.item.title
    }
  },
  computed: {
    item() {
      return this.$page.audience;
    },
    features(){
      return this.$page.audience.features.edges;
    }
  }
};
</script>

<page-query>
query Audience ($id: ID!) {
  audience (id: $id) {
    title
    path
    features: belongsTo {
      edges {
        node {
          ...on Feature {
            title
            path
          }
        }
      }
    }
  }
}
</page-query>