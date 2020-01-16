<template lang="pug">
  external-link.software-repository-link(:href="url")
    fontAwesome(:icon="data.icon")
    fa-icon(i="dollar-sign" v-if="paid")
    fab-icon(i="osi" v-if="osi")
    span {{ data.label }}
    fontAwesome(:icon="['fas','external-link-alt']")
</template>

<script>
import fontAwesome, { getPlatformIcon } from '@/config/fontAwesome'

export default {
  components:{
    fontAwesome
  },
  props:{
    platform:{
      type: String,
      required: true
    },
    url:{
      type: String,
      required: true
    },
    paid:{
      type: Boolean,
      required: false
    },
    osi:{
      type: Boolean,
      required: false
    }
  },
  computed:{
    data(){
      return getPlatformIcon(this.platform)
    }
  }
}
</script>

<style lang="stylus">
  .software-repository-link
    @extends .button
    background-color mutedAccent
</style>