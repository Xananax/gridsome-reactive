// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const configFile = "./content/data.yml";
const {
  siteUrl,
  siteName,
  siteDescription,
  logoLocation,
  titleTemplate,
  pathPrefix,
  ...metadata
} = require("js-yaml").safeLoad(require("fs").readFileSync(configFile, "utf8"));
metadata.readme = require("fs")
  .readFileSync("./README.md", "utf8")
  .replace(/\.\/static\/images/g, "/images");
metadata.social = require("./.gridsome/normalizeSocial")(metadata.social);
const createRemarkContentType = require("./.gridsome/createRemarkContentType");
const remarkPlugins = require("./.gridsome/remarkPlugins");

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
    createRemarkContentType("Post", {
      refs: { tags: { typeName: "Tag", create: true } }
    }),
    createRemarkContentType("MarkPage", {
      pathPrefix: "/",
      baseDir: "./content/pages",
      refs: { tags: { typeName: "Tag", create: true } }
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
      plugins: remarkPlugins
    }
  }
};
