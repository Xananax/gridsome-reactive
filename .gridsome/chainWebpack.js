const globalStyles = require('./webpackGlobalStyles')
const svgComponents = require('./webpackSvgComponents')
module.exports = config => {
  globalStyles(config)
  svgComponents(config)
}