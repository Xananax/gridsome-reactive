const globalStyles = require('./webpackGlobalStyles')
const svgComponents = require('./webpackSvgComponents')
const aliases = require('./webpackAliases')

module.exports = config => {
  globalStyles(config)
  svgComponents(config)
  aliases(config)
}