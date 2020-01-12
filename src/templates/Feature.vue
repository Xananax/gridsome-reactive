<template lang="pug">
  Layout
    h1 {{ item.title }}
    g-image(
      alt="Cover image" 
      :src="item.cover.url"
    )
    hr
    ul
      li(v-for="audience in audiences")
        g-link(:to="audience.path") {{ audience.title }}
    hr
    ul
      li(v-for="edge in applications") {{ edge.platform }} - {{ edge.url }}
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