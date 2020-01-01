const remark = require( 'remark')
const html = require('remark-html')
const sanitize = require('rehype-sanitize')
const { remarkPlugins } = require('./createRemarkContentType')

const plugins = [
  html, sanitize, ...remarkPlugins
]

module.exports = (siteName, siteDescription) => ({
  use: "gridsome-plugin-feed",
  options: {
    contentTypes: ["Post"],
    feedOptions: {
      title: siteName,
      description: siteDescription
    },
    rss: {
      enabled: true,
      output: "/feed.xml"
    },
    atom: {
      enabled: true,
      output: "/feed.atom"
    },
    json: {
      enabled: true,
      output: "/feed.json"
    },
    maxItems: 25,
    htmlFields: null,
    enforceTrailingSlashes: true,
    filterNodes: node => true,
    nodeToFeedItem: node => ({
      title: node.title,
      date: node.date,
      description: node.description, 
      content: remark()
      .use(...plugins)
      .processSync(node.content).contents
    })
  }
})