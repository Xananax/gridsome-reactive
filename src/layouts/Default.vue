<template lang="pug">
  .main
    header
      g-link( to="/")
        Logo.logo
      top-navigation(:items="menuItems" :showIcons="true")
        template(v-slot:after)
          feed-link(:siteUrl="$static.metadata.siteUrl" url="feed.xml" name="rss")
          feed-link(:siteUrl="$static.metadata.siteUrl" url="feed.atom" name="atom")
    article
      slot
    footer
      p 
        span Built with 
        a(class="link" href="//gridsome.org") Gridsome 
        span & Made with ❤️ by 
        a(class="link" :href="author.url") {{author.name}}
</template>

<script>
import Logo from "../../static/images/Logo.svg";
import pageList from '../config/pageList';

const insertIndex = pageList.indexOf("_") || pageList.length

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
        }))
      const items = pageList.slice()
      items.splice(insertIndex,1,...markPages)
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
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fecd43;
  line-height: 1.5;
  min-height: 100vh;
}

.logo {
  width: 50px;
  height: 50px;
}

siteMargin = 2em;

.main {
  position: absolute;
  top: siteMargin;
  left: siteMargin;
  bottom: siteMargin;
  right: siteMargin;
  background: #fdfdfd;
  padding: siteMargin * 2 0;
  overflow: auto;
}

.wrapper, header, footer, article, img {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

footer {
  padding-top: 7.5em;
  text-align: center;
  font-size: 1em;
}
</style>
