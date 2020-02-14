<template lang="pug">
  component(:is="tag" :class="titleClass").header
    slot
</template>

<script>
const defaultTitleLevel = 1
export default {
  props:{
    level:{
      type: [ Number, String ],
      default: defaultTitleLevel
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
      return `title is-${typeof level !== 'undefined' ? level : defaultTitleLevel}`
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
    color: #ffffff;
    font-weight: bold;
    line-height: 1.5;
    margin: 0 0 0.5em 0;
}
.is-0{
  font-size: 7em;
}
.is-1{
  font-size: 2.75em;
}
.centered{
  text-align: center;
}
</style>