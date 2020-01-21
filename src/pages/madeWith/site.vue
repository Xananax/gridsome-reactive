<template lang="pug">
  Layout(:show-logo="false" class="page-made-with-site")
    markdown {{ metadata.readme }}
</template>

<script>
export default {
  metaInfo: {
    title: 'Site Made With'
  },
  computed: {
    metadata() {
      return this.$page.metadata;
    }
  }
}
</script>

<page-query>
query {
  metadata {
    readme
  }
}
</page-query>