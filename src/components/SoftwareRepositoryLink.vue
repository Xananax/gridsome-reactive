<template lang="pug">
  external-link.software-repository-link(:href="url")
    fontAwesome(:icon="data.icon")
    span {{ data.label }}
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
    }
  },
  computed:{
    data(){
      return getPlatformIcon(this.platform)
    }
  }
}
</script>