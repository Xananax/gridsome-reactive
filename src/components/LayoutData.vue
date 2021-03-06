<script>
import Logo from "@static/images/Logo.svg";
import pageList from "@/config/pageList";

const insertIndex = pageList.indexOf("_") || pageList.length;

export default {
  components: {
    Logo
  },
  render() {
    const { metaInfo, author, menuItems, highlights, audiences, prisms } = this
    return this.$scopedSlots.default({
      metaInfo, author, menuItems, highlights, audiences, prisms
    })
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
    },
    highlights(){
      return this.$static.highlights.edges.map( ({ node }) => node)
    },
    audiences(){
      return this.$static.audiences.edges.map( ({ node }) => node)
    },
    prisms(){
      return this.$static.prisms.edges.map( ({ node }) => node)
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
  highlights: allHighlight(sortBy: "rank", order: ASC) {
    totalCount
    edges {
      node {
        rank
        title
        icon
        subIcon
        description
        path
        cover
      }
    }
  }
  audiences: allAudience{
    totalCount
    edges{
      node {
        id
        title
        path
      }
    }
  }
  prisms: allPrism(sortBy: "rank", order: ASC) {
    totalCount
    edges{
      node {
        path
        title
        icon
        description
        alternatives {
          icon
          title
          path
        }
      }
    }
  }
}
</static-query>