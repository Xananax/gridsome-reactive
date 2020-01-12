const visit = require('unist-util-visit')
const _path = require('path')

const defaultOptions = {
  mediaFolder: "static/images",
  contentFolder: "content/posts"
};

module.exports = (options = defaultOptions) => (ast) => {
  
  const { mediaFolder, contentFolder } = { ...options, ...defaultOptions };

  const mediaDir = _path.relative(contentFolder, mediaFolder);
  return
  visit(ast, 'g-image', (node) => {
    const data = node.data || (node.data = {})
    const props = data.hProperties || (data.hProperties = {})
    const url = node.url || props.url
    if(!url){ return }
    if(url[0] === '.' || url[0] === '/'){
      return
    }
    const new_url = _path.join(mediaDir, url)
    node.url = new_url
  })
}
