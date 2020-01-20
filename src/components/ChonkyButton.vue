<template lang="pug">
  button.chonky-button.top.left.clickable
    slot
      ok
</template>

<style lang="stylus">
  .chonky-button
    @extends $oblique-button
    font-size 1.5em
</style>