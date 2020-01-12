<template lang="pug">
  Layout
    button-nav-link(to="/blog/")
    p.post-date {{ item.date }} | {{ item.timeToRead }} min read
    .post-title
      header-title(level=1) {{ item.title }}
      p.post-date {{ item.date }}
    .post-header(v-if="cover")
      g-image(:alt="coverAlt" :src="coverUrl")
      caption(v-if="cover.credit && cover.credit.name")
        a(v-if="cover.credit.url" :href="cover.credit.url" target="_BLANK") {{ cover.credit.name }}
        span(v-else) {{ cover.credit.name }}
      caption(v-else) uncredited
    .post-content
      vueRemarkContent
    .post-tags
      button-nav-link(class="post-tags__link" v-for="tag in item.tags" :key="tag.id" :to="tag.path")
        span # 
        span {{ tag.title }}   
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
    item(){
      return this.$page.post
    },
    cover(){
      return this.$page.post.cover 
    },
    coverUrl(){
      const { cover } = this.$page.post
      //return cover ? require(`!!assets-loader!@images/${cover.url}`) : ""
      return cover ? cover.url : ""
    },
    coverAlt(){
      const { cover } = this.$page.post
      return cover && cover.alt || "cover image"
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