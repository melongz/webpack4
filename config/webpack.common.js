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
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [

    // 用于自动生成index.html文件
    new HtmlWebpackPlugin({
      title: 'melongz'
    }),

    // 可以定义变量，在src的代码中也能访问
    new webpack.DefinePlugin({'test': JSON.stringify('aaa')}),

    // 引入全局依赖
    new webpack.ProvidePlugin({
      _: 'lodash',
    })

  ],

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, "../src"),
      },
      // 处理图片
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, "../src"),
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, "../src"),
      },
      // 处理ts
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
      },
    ],
  }

};
