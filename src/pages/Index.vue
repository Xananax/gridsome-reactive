<template lang="pug">
  Layout(:show-logo="false")
    markdown {{ $static.metadata.readme }}
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
  }
}
</script>

<static-query>
query {
  metadata {
    readme
  }
}
</static-query>