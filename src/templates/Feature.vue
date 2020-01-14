<template lang="pug">
  Layout
    h1 {{ item.title }}
    g-image(
      alt="Cover image" 
      :src="item.cover.url"
    )
    hr
    ul
      li(v-for="audience in audiences" :key="audience.id")
        audience-link(:path="audience.path" :kind="audience.id")
    hr
    ul
      li(v-for="edge in applications" :key="edge.platform")
        software-repository-link(:url="edge.url" :platform="edge.platform")
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
    description
    audiences {
      id
      title
      path
    }
    applications {
      platform
      url
    }
  }
}
</page-query>