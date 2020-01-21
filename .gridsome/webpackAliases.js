module.exports = (config) => {
  config.resolve.alias.set('@static', '@/../static');
  config.resolve.alias.set('@images', '@/../static/images');
  config.resolve.alias.set('@root', '@/..');
}