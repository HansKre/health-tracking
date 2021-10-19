const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@animations': path.resolve(__dirname, './src/components/animations'),
    '@components': path.resolve(__dirname, './src/components'),
    '@src': path.resolve(__dirname, './src'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@types': path.resolve(__dirname, './src/types'),
    '@utils': path.resolve(__dirname, './src/utils'),
  })
);
