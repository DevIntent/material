const cssnano = require('cssnano');

const preset = {
  preset: [
    'default',
    {
      reduceTransforms: false,
      svgo: false,
      orderedValues: false
    }
  ]
};

module.exports = {
  plugins: [
    require('autoprefixer'),
    cssnano(preset)
  ]
};
