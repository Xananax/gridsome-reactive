<template lang="pug">
  Layout
    post-item(v-bind="$page.post")
      template(v-if="$page.post.cover" v-slot:cover)
        g-image(
            :alt="coverAlt"
            :src="coverUrl"
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
  },
  computed:{
    coverUrl(){
      const { cover } = this.$page.post
      const url = cover ? require(`!!assets-loader!@images/${cover.url}`) : ""
      // return cover ? cover.url : ""
      return url
    },
    coverAlt(){
      const { cover } = this.$page.post
      return cover.alt || "cover image"
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title (capitalize: true)
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
    cover (width: 860, blur: 10)
  }
}
</page-query>