const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: {
    app: './src/index.tsx',
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),

    new webpack.DefinePlugin({ GLOBAL_TEST: JSON.stringify('我是全局变量') }),

    new webpack.ProvidePlugin({
      _: 'lodash',
    }),

  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
      },

      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

};
