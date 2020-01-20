<template lang="pug">
  a.social-link(:href="url" :title="comment")
    component(:is="data.icon" :title="comment")
    span.social-link-label {{ name }}
</template>

<script>

import { getIcon } from '@/config/icons'

export default {
  props: {
    name: { type: String, required: true },
    protocol: { type: String, required: false },
    address: { type: String, required: false },
    icon: { type: String, required: false },
    url: { type: String, required: true }
  },
  computed: {
    comment() {
      const p = this.protocol;
      const name = this.name;
      const address = this.address;
      if (p === "http" || p === "https") {
        return `Go to ${name}`;
      }
      if (p === "ftp" || p === "ftps") {
        return `Open ${name}`;
      }
      if (p === "mailto") {
        return `Write to ${address}`;
      }
      if (p === "tel") {
        return `Call ${adress}`;
      }
      if (p === "bitcoin") {
        return `Send coins to ${address}`;
      }
      return `${name}`;
    },
    data(){
      return getIcon(this.icon || this.name)
    }
  }
};
</script>

<style lang="stylus" scoped>
.social-link-label
  display none
</style>