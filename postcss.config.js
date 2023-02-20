module.exports = {
  plugins: {
    // ...
    'autoprefixer': {},
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [],
      landscape: false,
    },
  },
}
