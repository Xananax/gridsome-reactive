<template lang="pug">
  .markdown.content(v-html="innerHTML")
</template>

<script>
import remark from  'remark'
import html from 'remark-html'
import sanitize from 'rehype-sanitize'
import gridsomeRemarkClasses from '@noxify/gridsome-remark-classes'
import remarkClasses from '@root/.gridsome/remarkClasses'

export default {
  data(){
    return {
      innerHTML:''
    }
  },
  async created(){
    const text = this.$slots.default[0].text || ''
    if(!text){ return }
    const processed = await remark()
      .use(html,sanitize)
      .use(gridsomeRemarkClasses, remarkClasses)
      .process(text)
    this.innerHTML = processed.contents
  }
};
</script>