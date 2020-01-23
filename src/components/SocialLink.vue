<template lang="pug">
  button.button.is-light.social-link(:href="url" :title="comment")
    span.icon
      component(:is="iconName" :title="comment")
    span.label {{ name }}
</template>

<script>

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
    iconName(){
      return 'icon-'+(this.icon || this.name)
    }
  }
};
</script>