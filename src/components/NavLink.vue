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

</style>