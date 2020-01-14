<template lang="pug">
  button-nav-link(:to="path")
    fontAwesome(:icon="data.icon")
    span {{ data.label }}
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
    }
  },
  computed:{
    data(){
      return getAudiencePlatformIcon(this.kind)
    }
  }
}
</script>