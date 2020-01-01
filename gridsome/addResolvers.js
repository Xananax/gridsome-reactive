const {
  GraphQLInt,
  //GraphQLList,
  GraphQLString,
  GraphQLBoolean
} = require("gridsome/graphql");
const LRU = require("lru-cache");
const { words } = require("lodash");
const hash = require("hash-sum");
const { imageType } = require("gridsome/lib/graphql/types/image");

cacheKey = function(node, key) {
  return hash({
    content: node.content,
    path: node.internal.origin,
    timestamp: node.internal.timestamp,
    key
  });
};

const cache = new LRU({ max: 1000 });

module.exports.title = (fieldName = "title") => ({
  type: GraphQLString,
  args: {
    capitalize: GraphQLBoolean
  },
  resolve(node, args) {
    const key = cacheKey(node, fieldName);
    let cached = cache.get(key);

    if (!cached) {
      cached = args.capitalize
        ? node.title
            .split(/\s+/g)
            .filter(Boolean)
            .map(w =>
              w.length > 1 && w !== "the" ? w[0].toUpperCase() + w.slice(1) : w
            )
            .join(" ")
        : node.title;
      cache.set(key, cached);
    }
    return cached;
  }
});

module.exports.cover = (fieldName = "cover", dir="static/images") => ({
  type: imageType.type,
  args: imageType.args,
  async resolve(node, args, context, info) {
    const key = cacheKey(node, fieldName);
    let cached = cache.get(key);

    if (!cached) {
      const { cover } = node;
      if (!cover) {
        cache.set(key, cached);
        return cached;
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
        cache.set(key, cached);
        return cached;
      }
      const path = require("path").join(
        __dirname,
        "..",
        dir,
        `${url}`
      );
      try {
        result = await context.assets.add(path, args);
      } catch (err) {
        cache.set(key, cached);
        return cached;
      }

      props.url = result.isUrl ? result.src : result;
      cached = props;
      cache.set(key, cached);
    }

    return cached;
  }
});

module.exports.timeToRead = (fieldName = "timeToRead") => ({
  type: GraphQLInt,
  args: {
    speed: {
      type: GraphQLInt,
      description: "Words per minute",
      defaultValue: 230
    }
  },
  resolve: async (node, { speed }) => {
    const key = cacheKey(node, fieldName);
    let cached = cache.get(key);

    if (!cached) {
      const text = node.content.replace(
        /#|\[.*?\]\(.*?\)|\*|`|"|'|<.*?\/?>|<\/.*?>/g,
        ""
      );
      const count = words(text).length;
      cached = Math.round(count / speed) || 1;
      cache.set(key, cached);
    }

    return cached;
  }
});
