<template lang="pug">
  g-link.audience-link(:to="path")
    fontAwesome.icon(:icon="data.icon")
    span.label {{ title }}
</template>

<script>
import fontAwesome, { getAudiencePlatformIcon } from '@/config/fontAwesome'

export default {
  components:{
    fontAwesome
  },
  props:{
    kind:{
      type: String,
      required: true
    },
    path:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    }
  },
  computed:{
    data(){
      return getAudiencePlatformIcon(this.kind)
    }
  }
}
</script>

<style lang="stylus">
  .audience-link
    @extends .button
    background-color mutedAccent
</style>