<template lang="pug">
  Layout(:show-logo="false")
    features-list
    markdown {{ metadata.readme }}
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
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