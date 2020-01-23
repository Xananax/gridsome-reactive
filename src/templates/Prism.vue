<template lang="pug">
  Layout
    h1 {{ item.title }}
    p {{ icon }} - {{ subIcon }}
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
      return this.$page.prism;
    }
  }
};
</script>

<page-query>
query ($id: ID!) {
  prism(id: $id) {
    title
    icon
    description
    alternatives {
      title
      path
    }
  }
}
</page-query>