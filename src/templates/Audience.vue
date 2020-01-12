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
query User ($id: ID!) {
  user (id: $id) {
    title
    features: belongsTo {
      edges {
        node {
          ...on Feature {
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