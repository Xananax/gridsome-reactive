<template lang="pug">
  Layout
    component(:is="'icon-'+item.icon")
    h1 {{ item.title }}
    g-image(
      :alt="item.cover.alt || 'Cover image'"
      :src="item.cover.url"
    )
    h3 upstream
      external-link(:href="upstream.url")
        icon-git
        span {{ upstream.name }}
    .audiences.tags-list
      audience-link(v-for="audience in audiences" :key="audience.id" :path="audience.path" :kind="audience.id" :title="audience.title")
    .software.tags-list
      software-repository-link(v-for="(app,index) in applications" :key="index" :url="app.url" :platform="app.platform" :paid="app.paid" :osi="app.osi")
    hr
    vueRemarkContent
</template>

<script>
import { getIcon, IconGit } from '@/config/icons'

export default {
  metaInfo(){
    return{
      title: this.item.title
    }
  },
  components:{
    IconGit
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
    icon
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
      osi
    }
  }
}
</page-query>