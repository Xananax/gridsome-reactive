<template lang="pug">
  nav
    slot(name="before")
    nav-link(
      v-for="item in items"
      :key="item.key"
      :to="item.to"
      :title="item.title"
      )
      fa-icon(v-if="item.icon && showIcons" :i="item.icon")
      span {{item.title}}
    slot(name="after")
</template>

<script>
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
  }
}
</script>