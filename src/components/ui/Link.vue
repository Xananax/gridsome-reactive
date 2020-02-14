<template lang="pug">
  component.link(:is="is" v-bind:[toName]="to" :class="classes" v-bind="$attrs")
    slot 
      span {{ text }}
</template>

<script>
import GLink from 'gridsome/app/components/Link'
const isExternalLinkRegExp = /^(\/\/||http||ftp||file)/
export default {
  props:{
    external:{
      type:Boolean,
      required: false
    },
    to:{
      type: String,
      required: true
    },
    text:{
      type:String,
      required: false
    }
  },
  computed:{
    linkIsExternal(){
      const { external, to } = this
      return typeof external === 'boolean' ? external : isExternalLinkRegExp.test(to)
    },
    is(){
      return this.linkIsExternal ? 'a' : GLink
    },
    toName(){
      return this.linkIsExternal ? 'href' : 'to'
    },
    classes(){
      return (this.linkIsExternal ? 'link-external' : 'link-internal')
    }
  }
}
</script>

<style lang="scss" scoped>
.link{
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
  border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
  color: inherit;
  text-decoration: none;
}
</style>