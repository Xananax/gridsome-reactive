<script>
export default {
  render() {
    const { socialItems } = this
    return this.$scopedSlots.default({ socialItems })
  },
  computed:{
    socialItems() {
      const { social, siteUrl } = this.$static.metadata;
      const protocol = "https";
      const feedItems = [
        {
          name: "Blog RSS",
          icon: "rss",
          url: `${siteUrl}/feed.xml`
        },
        {
          name: "Blog Atom",
          icon: "atom",
          url: `${siteUrl}/feed.atom`
        }
      ];
      return [...social, ...feedItems];
    }
  }
}
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