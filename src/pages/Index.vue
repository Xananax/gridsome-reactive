<template lang="pug">
  Layout(:show-logo="false")
    p blah blah
</template>

<script>

import Layout from '@/layouts/Home'

export default {
  components:{
    Layout
  },
  metaInfo: {
    title: 'Welcome'
  }
}
</script>