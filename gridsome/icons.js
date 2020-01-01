module.exports = (logoLocation) => ({
  icon: {
    favicon: {
      src: logoLocation,
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: logoLocation,
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  } 
})