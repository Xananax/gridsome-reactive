<template lang="pug">
  g-link.audience-link(:to="path")
    component(:is="icon")
    span.label {{ title }}
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