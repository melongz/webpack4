const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // 单入口
  // entry: './src/index.js',

  // 多入口
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, '../dist')
  },

  plugins: [

    // 用于自动生成index.html文件
    new HtmlWebpackPlugin({
      title: 'melongz'
    }),

    // 可以定义变量，在src的代码中也能访问
    new webpack.DefinePlugin({'test': JSON.stringify('aaa')})

  ],

  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader']
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ],
  }

};
