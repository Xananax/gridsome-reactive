module.exports = () => [
  {
    use: "gridsome-plugin-pug",
  },
  {
    use: "@gridsome/plugin-sitemap",
    options: {
      cacheTime: 600000 // default
    }
  }
]