<template lang="pug">
  component(:is="tag" :class="titleClass").header
    slot
</template>

<script>
export default {
  props:{
    level:{
      type: [ Number, String ],
      default: 1
    }
  },
  computed:{
    tag(){
      const { level } = this
      const tag = "h" + (level > 0 && !isNaN(level) ? level : 1 )
      return tag
    },
    titleClass(){
      const { level } = this
      return `title is-${level || 3}`
    }
  }
}
</script>