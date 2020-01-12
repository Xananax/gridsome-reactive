<template lang="pug">
  .markdown(v-html="innerHTML")
</template>

<script>
import remark from  'remark'
const html = require('remark-html')
const sanitize = require('rehype-sanitize')

export default {
  computed:{
    innerHTML(){
      const text = this.$slots.default[0].text || ''
      return text && remark()
        .use(html, sanitize)
        .processSync(text).contents
    }
  }
};
</script>