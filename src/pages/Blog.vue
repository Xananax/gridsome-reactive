<template lang="pug">
  Layout
    header.header
      h1(v-html="metadata.siteName")
      h2(v-html="metadata.siteDescription")
    post-list(:items="items")
    Pager(:info="pageInfo")
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: "Blog"
  },
  computed: {
    items() {
      return this.$page.allPost.edges;
    },
    pageInfo() {
      return this.$page.allPost.pageInfo;
    },
    metadata() {
      return this.$page.metadata;
    }
  }
};
</script>

<page-query>
query ($page: Int) {
  metadata {
    siteName
    siteDescription
  }
  allPost(filter: { published: { eq: true }}, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        cover (width: 420, blur: 10)
      }
    }
  }
}
</page-query>