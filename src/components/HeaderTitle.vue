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

</style>