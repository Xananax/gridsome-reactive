<template lang="pug">
  b-navbar
    template(slot="brand")
      b-navbar-item(tag="router-link" to="/")
        img(src='http://bulma.io/images/bulma-type-white.png' alt='Logo')
    //template(slot="start")
    template(slot="end")
      .tabs.is-right
        ul
          g-link(v-for="item in items" tag="li" :key="item.key" :to="item.to" :title="item.title" v-slot="{href, route, navigate, isActive, isExactActive}")
            li(:class="[isActive && 'is-active', isExactActive && 'is-exact-active']")
              a(:href="href" @click="navigate")
                //component.nav-icon(v-if="item.icon && showIcons" :is="icon(item)")
                span {{item.title}}
        b-navbar-item(tag="div")
          a.button.is-white.is-outlined Sign up
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