const remarkMermaid = require('remark-mermaid')
const remarkToc = require('remark-toc')
const remarkPrismJs = require('@gridsome/remark-prismjs')
const remarkImagesPaths = require('./remarkImagesPaths')

const images =   [
  remarkImagesPaths,
  {
    mediaFolder: "static/images",
    contentFolder: "content/posts"
  }
]

module.exports = [
  remarkMermaid, remarkToc, remarkPrismJs
]