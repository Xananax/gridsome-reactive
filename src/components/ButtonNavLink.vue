<template lang="pug">
  g-link.back(:to="to")
    slot &larr; Go Back
</template>

<script>
export default{
  props:{
    to:{
      type:String
    },
  }
}
</script>