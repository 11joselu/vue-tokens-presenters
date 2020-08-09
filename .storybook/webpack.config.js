const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    '@': path.resolve(__dirname, '..', 'src', ''),
    vue$: 'vue/dist/vue.esm.js',
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
