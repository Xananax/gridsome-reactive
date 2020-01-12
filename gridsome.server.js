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
  api.loadSource(({ addCollection, addSchemaResolvers }) => {
    addSchemaResolvers({
      Post: getMarkdownContentSchema('posts'),
      MarkPage: getMarkdownContentSchema('pages'),
      Feature: getMarkdownContentSchema('features'),
      Audience: getMarkdownContentSchema('audiences'),
    });

    const features = addCollection('Feature')
    //const audiences = addCollection('Audience')
    features.addReference('audience', 'Audience')
  });
};
