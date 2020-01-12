// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { title, cover, timeToRead } = require("./.gridsome/addResolvers");

const getMarkdownContentSchema = (contentLocation) => ({
  title: title("title"),
  cover: cover("cover", {
    mediaFolder: "static/images",
    contentFolder: `content/${contentLocation}`
  }),
  timeToRead: timeToRead("timeToRead")
})

module.exports = function(api) {
  api.loadSource( async ({ getCollection, addSchemaResolvers }) => {
    addSchemaResolvers({
      Post: getMarkdownContentSchema('posts'),
      MarkPage: getMarkdownContentSchema('pages'),
      Feature: getMarkdownContentSchema('features'),
      Audience: getMarkdownContentSchema('audiences'),
    });
    /*** /
    const features = getCollection('Feature')
    const audiences = getCollection('Audience')
    features.addReference('audiences', 'Audience')
    await Promise.all(features.data().map(async feature => {
      const find = (audienceName) => feature.audiences.indexOf(audienceName) >= 0
      const audiences_ids = audiences.data().filter( audience => find(audience.fileInfo.name)).map((audience)=>{
        audience.features = audience.features ? [...audience.features, feature.id ] : [ feature.id ]
        return audience.id
      })
      feature.audiences = audiences_ids
      return feature
    }))
    /***/
  })
  api.onCreateNode( options => {
    if (options.fileInfo) {
      options.id = options.fileInfo.name
    }
    const clean = str => str.split(/,/.test(str) ? /,/ : /\s+/).map(string => string.trim()).filter(Boolean)
    const splitIfNecessary = strOrArr => (typeof strOrArr === 'string') ? clean(strOrArr) : strOrArr;
    if('tags' in options){
      options.tags = splitIfNecessary(options.tags)
    }
    if('audiences' in options){
      options.audiences = splitIfNecessary(options.audiences)
    }
    return { ...options }
  })
};
