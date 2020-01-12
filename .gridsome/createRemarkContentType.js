const remarkPlugins = require('./remarkPlugins')

const createRemarkContentType = (typeName, opts) => (    {
  use: "@gridsome/vue-remark",
  options: {
    typeName,
    baseDir: `./content/${typeName.toLowerCase()}s`,
    pathPrefix: `/${typeName.toLowerCase()}`,
    template: `./src/templates/${typeName}.vue`,
    plugins: remarkPlugins,
    ...opts
  }
})

module.exports = createRemarkContentType