<template lang="pug">
  .highlight
    .icons
      component(v-if="icon" :is="'icon-'+icon" decorative)
      component(v-if="subIcon" :is="'icon-'+subIcon" decorative)
    Section.content
      Header(:level="4") {{ title }}
      p.content {{ description }}
      Link.read-more.button(:to="path") Learn more
</template>

<script>
export default {
  props:{
    icon:{
      type:String
    },
    subIcon:{
      type:String
    },
    title:{
      type:String
    },
    description:{
      type:String
    },
    path:{
      type:String
    },
    cover:{

    },
    rank:{
      type:Number
    }
  }
}
</script>

<style lang="scss">

.highlight{
  background-color: #5052b5;
  &:nth-of-type(2n){ background-color: darken(#5052b5, 2%);}
  &:nth-of-type(3n){ background-color: darken(#5052b5, 4%);}

}

.icons{
  height: 50vh;
  min-height: 15em;
  position: relative;
  .material-design-icon{
    width:  70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .material-design-icon__svg{
      width: 100%;
      height: 100%;
    }
    &:nth-child(2){
      width: 50%;
      height: 50%;
      transform: translate(-20%,-20%);
    }
  }
}
</style>