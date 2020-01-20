const svgComponents = require('./webpackSvgComponents')
const aliases = require('./webpackAliases')

module.exports = config => {
  svgComponents(config)
  aliases(config)
}