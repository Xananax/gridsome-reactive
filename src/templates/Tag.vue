<template lang="pug">
  Layout
    .tag
      h1.tag-title
        span # {{ item.title }}
      .posts
        g-link.nav__link(v-for="edge in posts" :key="edge.node.id" :to="edge.node.path")
          span {{edge.node.title}} - {{ edge.node.__typename }}
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
      return this.$page.tag;
    },
    posts(){
      return this.$page.tag.posts.edges;
    }
  }
};
</script>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    posts: belongsTo {
      edges {
        node {
          ...on Post {
             __typename
            title
            path
          }
          ...on MarkPage {
             __typename
            title
            path
          }
        }
      }
    }
  }
}
</page-query>