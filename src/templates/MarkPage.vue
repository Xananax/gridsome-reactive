<template lang="pug">
  Layout
    page-item(v-bind="item")
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
      return this.$page.page;
    }
  }
};
</script>

<page-query>
query Post ($id: ID!) {
  page: markPage(id: $id) {
    title
    path
  }
}
</page-query>