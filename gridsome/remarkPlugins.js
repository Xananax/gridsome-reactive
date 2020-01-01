const remarkMermaid = require('remark-mermaid')
const remarkToc = require('remark-toc')
const remarkPrismJs = require('@gridsome/remark-prismjs')
const remarkImagesPaths = require('./remarkImagesPaths')

module.exports = [
  remarkMermaid, remarkToc, remarkPrismJs, 
  [
    remarkImagesPaths,
    {
      mediaFolder: "static/images",
      contentFolder: "content/posts"
    }
  ]
]