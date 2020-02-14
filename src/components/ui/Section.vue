<template lang="pug">
  section.section
    .inner
      slot
</template>
<style lang="scss" scoped>
.section{
  padding: 2em;
}
.inner{
  padding: 5em 5em 3em 5em ;
	max-width: 100%;
}
.fullscreen{
  min-height: calc(100vh - 2.5em);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>