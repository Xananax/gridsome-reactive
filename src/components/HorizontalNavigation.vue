<template lang="pug">
  b-navbar
    template(slot="brand")
      b-navbar-item(tag="router-link" to="/")
        img(src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png")
    template(slot="start")
      b-navbar-item(v-for="item in items" tag="router-link" :key="item.key" :to="item.to" :title="item.title")
        component.nav-icon(v-if="item.icon && showIcons" :is="icon(item)")
        span {{item.title}}
    template(slot="end")
      b-navbar-item(tag="div")
        .buttons
          a(class="button is-primary")
            strong Sign up
          a(class="button is-light") Log in
</template>

<script>

import Logo from "@static/images/Logo.svg";
import { getIcon } from '@/config/icons'

export default {
  components:{
    Logo
  },
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
.logo
  width 20px
</style>