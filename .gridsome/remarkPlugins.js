const remarkMermaid = require('remark-mermaid')
const remarkToc = require('remark-toc')
const remarkPrismJs = require('@gridsome/remark-prismjs')
const remarkImagesPaths = require('./remarkImagesPaths')
const remarkClasses = require('@noxify/gridsome-remark-classes')

const images =   [
  remarkImagesPaths,
  {
    mediaFolder: "static/images",
    contentFolder: "content/posts"
  },
]

const classes = [
  remarkClasses,
  { 'heading[depth=1]': 'title is-1',
    'heading[depth=2]': 'title is-2',
    'heading[depth=3]': 'title is-3',
    'heading[depth=4]': 'title is-4',
    'heading[depth=5]': 'title is-5'
  }
]

module.exports = [
  remarkMermaid, remarkToc, remarkPrismJs, classes
]