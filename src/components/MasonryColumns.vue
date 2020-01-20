<template lang="pug">
  .masonry-columns(ref="main")
    slot
</template>

<script>

const resizeItems = (grid, items) => {
  const columnsNumber = getComputedStyle(grid).columnCount
  console.log(columnsNumber)
  if(grid.dataset.columnsNumber === columnsNumber){
    return
  }
  if(!grid.dataset.processed){
    grid.dataset.processed = true
    grid.dataset.columnsNumber = 0
    grid.style.display = 'flex'
  }
  const out = []
  let col = 0;
  const cols = []
  items.forEach( (item, index) => {
    const col = index % columnsNumber
    //console.log(col, item.id)
    if(!cols[col]){ cols[col] = []}
    cols[col].push(item)
  })
  grid.innerHTML = ""
  cols.forEach( col => {
    const container = document.createElement('div')
    col.forEach( item => container.appendChild(item))
    grid.appendChild(container)
  })
  grid.dataset.columnsNumber = columnsNumber
}

export default {
  mounted() {
    this.$nextTick(() => {
      this.grid = this.$refs.main
      this.items = [ ...this.grid.children ]
      this.resize()
      window.addEventListener("resize", this.resize);
    })
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.resize);
  },
  data(){
    return { items:null, grid:null}
  },
  methods:{
    resize(){
      const grid = this.grid
      const items = this.items
      if(!grid || !items || !items.length){ return }
      resizeItems(grid, items)
    }
  }
}
</script>

<style lang="stylus">
.masonry-columns
  column-gap 1em
  column-count 1
  display inline-block
  @media only screen and (min-width: 640px)
    column-count 2
  @media only screen and (min-width: 960px)
    column-count 3
  & > *
    @extend $avoid-column-break
</style>