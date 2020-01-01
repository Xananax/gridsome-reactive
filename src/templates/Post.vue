<template lang="pug">
  Layout
    h1 {{ $page.post.image }}
    post-item(
    v-bind="$page.post"
    :cover="$page.post.cover_image"
    :image="'~/assets/no-credit.jpg'"
    :timeToRead="$page.post.timeToRead || 3")
      template(v-if="$page.post.cover_image" v-slot:cover_image)
        g-image(
            alt="Cover image" 
            :src="$page.post.cover_image"
          )
      template(v-slot:default)
        vueRemarkContent
</template>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>