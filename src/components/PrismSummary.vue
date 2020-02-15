<template lang="pug">
  .tile.box.level
    .level-item
      .subtitle Replace
    .level-item
      g-link.button.is-medium.is-light(:to="path")
        span.icon 
          component(:is="'icon-'+icon")
        span {{ title }}
        span.icon.is-danger
          icon-no-good.is-danger
    .level-item
      .subtitle with
    .level-item(v-for="alt in alts" :key="alt.path")
      Link.button(:to="alt.path")
        span.icon 
          component(:is="'icon-'+alt.icon")
        span {{ alt.title }}
        span.icon
          icon-ok
      span and
</template>

<script>
export default {
  props:{
    icon:{
      type: String
    },
    title:{
      type: String
    },
    path:{
      type: String
    },
    alternatives:{
      type: Array
    }
  },
  computed:{
    alts(){
      return this.alternatives.slice(0,2)
    }
  }
}
</script>