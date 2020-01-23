<template lang="pug">
  external-link.button.software-repository-link(:href="url")
    component(:is="'icon-'+this.platform" :title="platform" decorative)
    icon-paid(v-if="paid" title="paid application")
    icon-osi(v-if="osi", title="open source application")
    span {{ platform }}
    icon-external.icon-smallest(title="opens in new tab")
</template>

<script>

import { getIcon, IconPaid, IconOsi, IconExternal } from '@/config/icons'

export default {
  components:{
    IconPaid,
    IconOsi,
    IconExternal,
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
  }
}
</script>