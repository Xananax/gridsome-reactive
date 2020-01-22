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
      return this.$page.highlight;
    }
  }
};
</script>

<page-query>
query ($id: ID!) {
  highlight(id: $id) {
    title
    icon
    subIcon
    description
  }
}
</page-query>