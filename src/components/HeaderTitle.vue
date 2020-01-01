<template lang="pug">
  component(:is="tag").header
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  font-family "Stylish"
  text-align center

h1.header
  font-size 35px
  line-height 20px
  padding 0.7em

h2.header
  font-size 30px
  line-height 10px
  padding 2em 0

</style>