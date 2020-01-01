// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource( ({ addSchemaResolvers }) => {
  
    const { imageType } = require('gridsome/lib/graphql/types/image')
    
    addSchemaResolvers({
      Post:{
        title:{
          type: 'String',
          args: {
            uppercase: 'Boolean'
          },
          resolve (node, args) {
            return args.uppercase ? node.title.toUpperCase() : node.title
          }
        },
        image:{
          type: imageType.type,
          args: imageType.args,
          async resolve (node, args, context, info) {
            const value = require('path').join(__dirname, 'static', 'images', `${node.fields.file}.jpg`)
            try {
              result = await context.assets.add(value, args)
            } catch (err) {
              return ''
            }
            console.log(result)
            if (result.isUrl) {
              return result.src
            }
        
            return {
              type: result.type,
              mimeType: result.mimeType,
              src: result.src,
              size: result.size,
              sizes: result.sizes,
              srcset: result.srcset,
              dataUri: result.dataUri
            }
          }
        }
      }
    })
  })
}
