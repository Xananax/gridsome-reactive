const visit = require('unist-util-visit')
module.exports = () => (ast) => {
  
  visit(ast, 'g-image', (node) => {
    const data = node.data || (node.data = {})
    const props = data.hProperties || (data.hProperties = {})
    props.lang = "_SELF"
    data.lang = "_SELF"
    node.lang = "_SELF"
  })
}
