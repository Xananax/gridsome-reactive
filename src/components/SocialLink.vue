<template lang="pug">
  a.social-link(:href="url" :title="comment") 
    fontAwesome(:icon="icon" v-bind="$attrs")
    span {{ name }}
</template>

<script>
import fontAwesome from "@/config/fontAwesome";
export default {
  components: {
    fontAwesome
  },
  props: {
    name: { type: String, required: true },
    protocol: { type: String, required: false },
    address: { type: String, required: false },
    icon: { type: Array, required: true },
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
    }
  }
};
</script>

<style lang="stylus" scoped>
.social-link
  span
    display none
</style>