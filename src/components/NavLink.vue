<template lang="pug">
  g-link.navlink(:to="to")
    slot {{ content }}
</template>

<script>
export default{
  props:{
    to:String,
    title:String,
    content: String
  }
}
</script>

<style lang="stylus" scoped>
.navlink
  border 2px dashed #fecd43
  padding 7px
  color #333
  text-decoration none
</style>