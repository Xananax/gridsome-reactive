<template lang="pug">
  .layout
    header
      Logo.logo
      strong
        g-link( to="/") {{ $static.metadata.siteName }}
      nav
        nav-link(to="/" title="Home") 
          span Home
        nav-link(
          v-for="edge in $static.pages.edges"
          :key="edge.node.id"
          :to="edge.node.path"
          :title="edge.node.title"
          )
          span {{edge.node.title}}
        nav-link(to="/blog/" title="Blog")
          span Blog
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
import Logo from "../../static/images/Logo.svg"

export default {
  components: {
    Logo
  },
  metaInfo() {
    const {
      metadata: { siteName, siteDescription, siteUrl }
    } = this.$static;
    const ogImageUrl = `${siteUrl}/images/logo.png`;
    return {
      title: siteName,
      meta: [
        { key: "description",         property: "description",         content: siteDescription },
        { key: "og:type",             property: "og:type",             content: 'website' },
        { key: "og:title",            property: "og:title",            content: siteName },
        { key: "og:description",      property: "og:description",      content: siteDescription },
        { key: "og:url",              property: "og:url",              content: siteUrl },
        { key: "og:image",            property: "og:image",            content: ogImageUrl },
        { key: "twitter:card",        name:     "twitter:card",        content: "summary_large_image" },
        { key: "twitter:title",       name:     "twitter:title",       content: siteName },
        { key: "twitter:description", name:     "twitter:description", content: siteDescription },
        { key: "twitter:site",        name:     "twitter:site",        content: "@cossssmin" },
        { key: "twitter:creator",     name:     "twitter:creator",     content: "@cossssmin" },
        { key: "twitter:image",       name:     "twitter:image",       content: ogImageUrl },
      ],
    };
  },
  computed:{
    author(){ return this.$static.metadata.author }
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
body
  font-family -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  margin 0
  padding 0
  border 15px solid #fecd43
  line-height 1.5
  min-height 100vh

.logo
  width 50px;
  height 50px;

.layout
  margin 0 auto
  max-width 760px
  padding-left 20px
  padding-right 20px

footer
  padding-top 7.5em
  text-align center
  font-size 1em
</style>
