const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const prod = {
  mode: 'production',
  plugins: [
    // 打包时先清理之前的打包文件
    new CleanWebpackPlugin(),
  ],
}

module.exports = merge(common, prod)
