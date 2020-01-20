<template lang="pug">
  .masonry-grid(ref="main")
    slot
</template>

<script>

const getItemHeight = (item) => {
  // we're going to attempt different strategies to
  // get the item's height:
  // 1. scrollHeight
  const scrollHeight = item.scrollHeight
  // 2. count children
  const internalChildren = item.children
  let internalHeight = 0
  for(let y = 0; y < internalChildren.length; y++){
    internalHeight += internalChildren[y].offsetHeight
  }
  // 3. style
  const style = getComputedStyle(item)
  const styleHeight = item.offsetHeight + 
    parseInt(style.paddingTop) +
    parseInt(style.paddingBottom);
  // then we get the highest value
  const height = Math.max(styleHeight,internalHeight, scrollHeight)
  return height
}

const resizeItem = (grid, ratio, rowGap, item) => {
  const height = getItemHeight(item)
  const rowSpan = Math.ceil((height+rowGap)/ratio);
  item.style.gridRowEnd = "span "+rowSpan;
}

const addEventListenerToChildrenImages = (grid, ratio, rowGap, item) => {
  const images = item.querySelectorAll('img')
  if(images.length){
    for(let n = 0; n < images.length; n++){
      const image = images[n]
      image.addEventListener('load',()=>resizeItem(grid,ratio,rowGap,item))
    }
  }
}

const resizeItems = (grid) => {
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  const ratio = (rowHeight+rowGap)
  const items = grid.children
  for(let x = 0; x < items.length; x++){
    const item = items[x]
    resizeItem(grid, ratio, rowGap, item)
    if(!item.dataset.gridProcessed){
      addEventListenerToChildrenImages(grid, ratio, rowGap, item)
    }
    item.dataset.gridProcessed = true
  }
}

export default {
  mounted() {
    this.$nextTick(() => {
      this.resize()
      window.addEventListener("resize", this.resize);
    })
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.resize);
  },
  methods:{
    resize(){
      const grid = this.$refs.main
      if(!grid){ return }
      resizeItems(grid)
    }
  }
}
</script>

<style lang="stylus">
.masonry-grid
  display grid
  margin 0 auto
  grid-gap .5em 1em
  grid-template-columns repeat(auto-fill, minmax(300px,1fr))
  grid-auto-rows 20px
  & [class*="-content "], & [class$="-content"]
    box-shadow 0 0 5px 3px rgba(0,0,0,.4)
</style>