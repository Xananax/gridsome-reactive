<template lang="pug">
  Layout
    tag-item(v-bind="item" :items="posts")
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