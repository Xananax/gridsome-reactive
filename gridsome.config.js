// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// utility for common Vue-Remark settings
const createRemarkContentType = require("./.gridsome/createRemarkContentType");

const {
  siteUrl,
  siteName,
  siteDescription,
  logoLocation,
  titleTemplate,
  pathPrefix,
  ...metadata
} = require("js-yaml").safeLoad(require("fs").readFileSync("./content/data.yml", "utf8"));

// add a markdown file to metadata (this file isn't parsed, just plain text)
metadata.readme = require("fs")
  .readFileSync("./README.md", "utf8")
  .replace(/\.\/static\/images/g, "/images"); 

// parses and normalizes the social array
metadata.social = require("./.gridsome/normalizeSocial")(metadata.social);

module.exports = {
  metadata,
  siteName,
  siteDescription,
  siteUrl,
  titleTemplate,

  templates: {
    Tag: "/tag/:id"
  },

  plugins: [
    createRemarkContentType("Feature", {
      refs: { audiences: { typeName:'Audience' } }
    }),
    createRemarkContentType("Audience"),
    createRemarkContentType("Post"),
    createRemarkContentType("MarkPage", {
      pathPrefix: "/",
      baseDir: "./content/pages"
    }),
    require("./.gridsome/feed")(siteName, siteDescription),
    ...require("./.gridsome/gridsomePlugins")()
  ],
  ...require("./.gridsome/icons")(logoLocation),
  chainWebpack: require("./.gridsome/chainWebpack"),
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: require("./.gridsome/remarkPlugins")
    }
  }
};
