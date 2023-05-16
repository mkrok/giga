const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./src/client/client.tsx'],
  mode: 'development',
  target: ['es5', 'web'],
  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve('./src')],
    alias: {
      '~': path.resolve('./src'),
    },
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};

module.exports = config;
