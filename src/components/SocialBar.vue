<template lang="pug">
    .social-bar
        social-link(v-for="provider in socialItems" v-bind="provider" :key="provider.url")
</template>

<script>
export default {
  computed: {
    socialItems() {
      const { social, siteUrl } = this.$static.metadata;
      const protocol = "https";
      const feedItems = [
        {
          name: "RSS",
          icon: ["fas", "rss"],
          url: `${siteUrl}/feed.xml`
        },
        {
          name: "Atom",
          icon: ["fas", "atom"],
          url: `${siteUrl}/feed.atom`
        }
      ];
      return [...social, ...feedItems];
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteUrl
    social {
      name, 
      protocol, 
      address, 
      icon, 
      url
    }
  }
}
</static-query>

<style lang="stylus">
.social-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .social-link {
    margin: 0.3em;
  }
}
</style>