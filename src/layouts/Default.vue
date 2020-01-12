<template lang="pug">
  .wrapper
    header.header
      horizontal-navigation(:items="menuItems" :showIcons="true")
    .main
      article.body
        slot
      footer.footer
        p 
          span Built with 
          a(class="link" href="//gridsome.org" target="_blank") Gridsome 
          span & Made with ❤️ by 
          a(class="link" :href="author.url" target="_blank") {{author.name}}
        social-bar
</template>

<script>
import Logo from "../../static/images/Logo.svg";
import pageList from "../config/pageList";

const insertIndex = pageList.indexOf("_") || pageList.length;

export default {
  components: {
    Logo
  },
  metaInfo() {
    const {
      metadata: { siteName, siteDescription, siteUrl }
    } = this.$static;
    const ogImageUrl = `${siteUrl}/images/Logo.svg`;
    return {
      meta: [
        {
          key: "description",
          property: "description",
          content: siteDescription
        },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:title", property: "og:title", content: siteName },
        {
          key: "og:description",
          property: "og:description",
          content: siteDescription
        },
        { key: "og:url", property: "og:url", content: siteUrl },
        { key: "og:image", property: "og:image", content: ogImageUrl },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { key: "twitter:title", name: "twitter:title", content: siteName },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: siteDescription
        },
        { key: "twitter:site", name: "twitter:site", content: "@cossssmin" },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: "@cossssmin"
        },
        { key: "twitter:image", name: "twitter:image", content: ogImageUrl }
      ]
    };
  },
  computed: {
    author() {
      return this.$static.metadata.author;
    },
    menuItems() {
      const edges = this.$static.pages.edges;
      const markPages = edges.map(({ node }) => ({
        key: node.id,
        to: node.path,
        title: node.title,
        icon: ""
      }));
      const items = pageList.slice();
      items.splice(insertIndex, 1, ...markPages);
      return items;
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
    author {
      name
      url
    }
    social {
      name, 
      protocol, 
      address, 
      icon, 
      url
    }
  }
  pages: allMarkPage {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<style lang="stylus">
.main
  background backgroundColor2
  padding siteMargin 0
  overflow auto
  margin 1em
  //box-shadow 3px 3px 12px rgba(0,0,0,.2)

.header, .footer, .body
  @extend $wrapper

.header
  padding 1em 0

.logo
  width 50px
  height 50px

.footer
  margin-top siteMargin * 1.5
  text-align center
  font-size .8em

.horizontal-nav
  color #fdfdfd
  text-shadow 1px 1px 3px rgba(0,0,0,.3)

.body
  p:first-of-type
    img
      max-width 320px
      display block
      @extend $wrapper
  
</style>
