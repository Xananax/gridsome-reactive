// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addSchemaResolvers }) => {
    const { imageType } = require("gridsome/lib/graphql/types/image");

    addSchemaResolvers({
      Post: {
        title: {
          type: "String",
          args: {
            capitalize: "Boolean"
          },
          resolve(node, args) {
            return args.capitalize
              ? node.title
                  .split(/\s+/g)
                  .filter(Boolean)
                  .map(w =>
                    w.length > 1 && w !== "the"
                      ? w[0].toUpperCase() + w.slice(1)
                      : w
                  )
                  .join(" ")
              : node.title;
          }
        },
        cover: {
          type: imageType.type,
          args: imageType.args,
          async resolve(node, args, context, info) {
            const { cover } = node;
            if (!cover) {
              return null;
            }
            const props =
              typeof cover === "string"
                ? { url: cover, alt: "", credit: { name: "", url: "" } }
                : {
                    url: "",
                    alt: "",
                    ...cover,
                    ...(cover.credit
                      ? {
                          credit:
                            typeof cover.credit === "string"
                              ? { name: cover.credit, url: "" }
                              : { name: "", url: "", ...cover.credit }
                        }
                      : null)
                  };
            const { url } = props;
            if (!url) {
              return null;
            }
            const path = require("path").join(
              __dirname,
              "static",
              "images",
              `${url}`
            );
            try {
              result = await context.assets.add(path, args);
            } catch (err) {
              return null;
            }

            props.url = result.isUrl ? result.src : result;
            return props;
          }
        }
      }
    });
  });
};
