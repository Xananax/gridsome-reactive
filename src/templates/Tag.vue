<template lang="pug">
  Layout
    tag-item(v-bind="item" :posts="posts")
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
            title
            path
          }
          ...on MarkPage {
            title
            path
          }
        }
      }
    }
  }
}
</page-query>