<template lang="pug">
  fontAwesome(:icon="['fas',i]" v-bind="$attrs")
</template>

<script>
import fontAwesome from '@/config/fontAwesome'
export default {
  props:{
    i:{
      type: String,
      required: true
    }
  },
  components:{
    fontAwesome
  }
}
</script>