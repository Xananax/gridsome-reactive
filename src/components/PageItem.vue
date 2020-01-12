<template lang="pug">
  .page
    button-nav-link(to="/")
    header-title(level=1) {{title}}
    .post-content
      slot
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
