<template lang="pug">
  nav.horizontal-navigation
    slot(name="before")
    nav-link(
      v-for="item in items"
      :key="item.key"
      :to="item.to"
      :title="item.title"
      )
      component.nav-icon(v-if="item.icon && showIcons" :is="icon(item)")
      span {{item.title}}
    slot(name="after")
</template>

<script>

import { getIcon } from '@/config/icons'

export default {
  props:{
    items:{
      type: Array,
      required: true
    },
    showIcons:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    icon(item){
      return this.showIcons && item.icon && getIcon(item.icon)
    }
  }
}
</script>

<style lang="stylus">
.horizontal-navigation
  display flex
  flex-wrap wrap
  justify-content space-evenly
  align-content center

.nav-link
  display flex
  align-items center
  align-content center
  line-height 1
  text-decoration none
  margin-right .3em
  color inherit
  &:last-child
    margin-right 0

.nav-icon
  margin-right .1em
</style>