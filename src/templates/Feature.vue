<template lang="pug">
  Layout
    h1 {{ item.title }}
    g-image(
      :alt="item.cover.alt || 'Cover image'"
      :src="item.cover.url"
    )
    h3 upstream
      fab-icon(i="git-alt")
      external-link(:href="upstream.url") {{ upstream.name }}
    .audiences.tags-list
      audience-link(v-for="audience in audiences" :key="audience.id" :path="audience.path" :kind="audience.id" :title="audience.title")
    .software.tags-list
      software-repository-link(v-for="edge in applications" :key="edge.platform" :url="edge.url" :platform="edge.platform" :paid="edge.paid")
    hr
    vueRemarkContent
</template>

<script>

export default {
  metaInfo(){
    return{
      title: this.item.title
    }
  },
  computed: {
    item() {
      return this.$page.feature;
    },
    applications(){
      return this.$page.feature.applications
    },
    audiences(){
      return this.$page.feature.audiences
    },
    upstream(){
      return this.$page.feature.upstream
    }
  }
};
</script>

<page-query>
query ($id: ID!) {
  feature(id: $id) {
    title
    path
    cover (width: 420, blur: 10)
    upstream {
      name
      url
    }
    description
    audiences {
      id
      title
      path
    }
    applications {
      platform
      url
      paid
    }
  }
}
</page-query>