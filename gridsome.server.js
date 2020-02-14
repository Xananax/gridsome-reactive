// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { title, cover, timeToRead } = require("./.gridsome/addResolvers");

const getMarkdownContentSchema = (contentLocation) => ({
  // has "capitalize" feature
  title: title("title"),
  // provides rich image and stores images in a netlify-compatible way 
  cover: cover("cover", {
    mediaFolder: "static/images",
    contentFolder: `content/${contentLocation}`
  }),
  // estimates time to read
  timeToRead: timeToRead("timeToRead")
})

module.exports = function(api) {
  api.loadSource( async ({ getCollection, addSchemaResolvers }) => {
    addSchemaResolvers({
      // augment markdown types with resolvers
      Post: getMarkdownContentSchema('posts'),
      MarkPage: getMarkdownContentSchema('pages'),
      Feature: getMarkdownContentSchema('features'),
      Audience: getMarkdownContentSchema('audiences'),
      Highlight: getMarkdownContentSchema('highlights'),
    });
  })
  api.onCreateNode( options => {
    if (options.fileInfo) { // make all ids be filenames
      options.id = options.fileInfo.name
    }
    // allow to write tags and audiences as strings instead of arrays
    // both comma separated or space separated are accepted
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
