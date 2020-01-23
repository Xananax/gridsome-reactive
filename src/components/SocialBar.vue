<template lang="pug">
  social-data(#default="{ socialItems }")
    .social-bar
      .social-link(v-for="provider in socialItems" :key="provider.url")
        slot(name="provider" v-bind:provider="provider")
          social-link(v-bind="provider" )
</template>

<style lang="stylus">
.social-bar
  display flex
  flex-wrap wrap
  justify-content center
  align-content center

  .social-link
    margin 0.3em
</style>