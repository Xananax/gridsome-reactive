// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { title, cover, timeToRead } = require("./.gridsome/addResolvers");

module.exports = function(api) {
  api.loadSource(({ addSchemaResolvers, addMetadata }) => {
    addSchemaResolvers({
      Post: {
        title: title("title"),
        cover: cover("cover", {
          mediaFolder: "static/images",
          contentFolder: "content/posts"
        }),
        timeToRead: timeToRead("timeToRead")
      }
    });
    addMetadata('readme', require('fs').readFileSync('./README.md','utf8').replace(/\.\/static\/images/g,'/images'))
  });
};
