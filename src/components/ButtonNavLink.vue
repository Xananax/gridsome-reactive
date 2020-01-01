<template lang="pug">
  g-link.back(:to="to")
    slot &larr; Go Back
</template>

<script>
export default{
  props:{
    to:{
      type:String
    },
  }
}
</script>

<style lang="stylus" scoped>
.back
  border 2px dashed #fecd43
  padding 7px
  color #333
  text-decoration none
</style>