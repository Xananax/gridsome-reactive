<template lang="pug">
  g-link.button(:to="path")
    span.icon
      component(:is="icon")
    span {{ title }}
</template>

<script>
import { getIcon } from '@/config/icons'

export default {
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
    icon(){
      return getIcon(this.kind)
    }
  }
}
</script>