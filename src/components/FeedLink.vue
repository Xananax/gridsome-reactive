<template lang="pug">
  a(:href="href" :title="title") 
    fa-icon(:i="name")
    span {{ name }}
</template>

<script>
export default {
  props:{
    siteUrl:{
      type:String,
      required: true
    },
    url: {
      type:String,
      required: true
    },
    name: {
      type:String,
      required: true
    }
  },
  computed:{
    href(){
      return this.siteUrl + '/' + this.url
    },
    title(){
      return this.name + ' feed'
    }
  }
}
</script>

<style lang="stylus" scoped>
a span
  display none
</style>