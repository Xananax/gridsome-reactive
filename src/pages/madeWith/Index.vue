<template lang="pug">
  Layout(:show-logo="false")
    h1.title.is-4 Made With
    ul
      li: g-link(to="/made-with/site") site
</template>

<script>
export default {
  metaInfo: {
    title: 'Made With'
  }
}
</script>