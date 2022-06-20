const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./webpack.rules');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  mode: 'development',
  module: {
    rules: rules
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    host: HOST,
    hot: true,
    port: PORT,
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      files: {
        css: ['style.css'],
        js: ['[chunkhash].js'],
      },
      template: './public/assets/template.html',
      filename: 'index.html',
    }),
  ],
  stats: {
    colors: true,
    logging: 'verbose',
  },
};