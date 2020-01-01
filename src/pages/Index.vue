<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>

export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
