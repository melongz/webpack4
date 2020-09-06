const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const prod = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(common, prod);
