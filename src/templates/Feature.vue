<template lang="pug">
  Layout
    g-image(
      alt="Cover image" 
      :src="item.url"
    )
    p {{ item.title }}
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
    }
  }
};
</script>

<page-query>
query ($id: ID!) {
  feature(id: $id) {
    title
    path
    cover
  }
}
</page-query>