<template lang="pug">
  Link.menu-link(v-bind="$attrs")
    slot
</template>

<style lang="scss" scoped>
.menu-link{
  position: relative;
  color:#ffffff;
  transition: color 0.2s ease;
  border: 0;
  color: rgba(255, 255, 255, 0.35);
  display: block;
  font-size: 0.6em;
  font-weight: bold;
  letter-spacing: 0.25em;
  line-height: 1.75;
  outline: 0;
  padding: 1.35em 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 0 0 2em;
  &:before{
    border-radius: 0.2em;
    bottom: 0;
    content: '';
    height: 0.2em;
    position: absolute;
    right: 0;
    width: 100%;
    transition: max-width 0.2s ease;
    max-width: 0;
    background-color: #b74e91;
  }
  &:hover{
    color:rgba(255, 255, 255, 0.55);
    &:before{
      max-width: 100%;
    }    
  }
  &.active{
    color: #fff;
    &:before{
      max-width: 100%;
    }
  }
}
</style>