// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteUrl = "http://localhost:8080";
const siteName = "Gridsome";
const siteDescription = "a blog";
const logoLocation = "./static/images/Logo.svg" 

const createRemarkContentType = require('./.gridsome/createRemarkContentType')
const remarkPlugins = require('./.gridsome/remarkPlugins')

module.exports = {
  metadata:{
    author:{
      name: "Xananax",
      url:"https://xananax.com"
    }
  },
  siteName,
  siteDescription,
  siteUrl,
  templates: {
    Tag: '/tag/:id'
  },

  plugins: [
    createRemarkContentType('Post'),
    createRemarkContentType('MarkPage',{ pathPrefix:'/page', baseDir: './content/pages'}),
    require('./.gridsome/feed')(siteName, siteDescription),
    ...require('./.gridsome/gridsomePlugins')()
  ],
  ...require('./.gridsome/icons')(logoLocation),
  chainWebpack: require('./.gridsome/chainWebpack'),
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: remarkPlugins
    }
  }
}
