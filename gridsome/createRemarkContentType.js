const remarkMermaid = require('remark-mermaid')
const remarkToc = require('remark-toc')
const remarkPrismJs = require('@gridsome/remark-prismjs')

const remarkPlugins = [
  remarkMermaid, remarkToc, remarkPrismJs
]

const createRemarkContentType = (typeName, opts) => (    {
  use: "@gridsome/vue-remark",
  options: {
    typeName,
    baseDir: `./content/${typeName.toLowerCase()}s`,
    pathPrefix: `/${typeName.toLowerCase()}`,
    template: `./src/templates/${typeName}.vue`,
    plugins: remarkPlugins,
    ...opts,
    refs: {
      tags: {
        typeName: "Tag",
        create: true
       },
      ...opts && opts.refs
    }
  }
})

module.exports = createRemarkContentType
module.exports.remarkPlugins = remarkPlugins