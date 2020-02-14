<template lang="pug">
  nav.menu
    menu-link(v-for="item in items" :key="item.key" :to="item.to" :title="item.title" :text="item.title")
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

<style lang="scss" scoped>
.menu{
  display: flex;
  height: inherit;
  line-height: inherit;
  margin: 0;
  flex-direction: row;
  align-items: stretch;
  height: inherit;
  line-height: inherit;
  justify-content: center;
  transform: translateY(0);
  transition: opacity 1s ease;
  width: 100%;
  height: 3.5em;
  line-height: 3.5em;
  left: 0;
  overflow: hidden;
  padding: 0;
  text-align: center;
  top: 0;
}
</style>