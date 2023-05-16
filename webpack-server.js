const path = require('path');
const fs = require('fs');

const externals = fs
  .readdirSync('node_modules')
  .filter(x => x.indexOf('.bin') === -1)
  .reduce((acc, mod) => {
    return Object.assign(acc, { [mod]: 'commonjs ' + mod });
  }, {});

const config = {
  entry: path.resolve(__dirname, './src/server/server.ts'),
  mode: 'development',
  target: 'node',

  externals: externals,

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve('./src')],
    alias: {
      '~': path.resolve('./src'),
    },
  },

  output: {
    path: path.resolve('./build'),
    publicPath: '/public/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
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
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  node: {
    global: false,
    __dirname: false,
    __filename: false,
  },
};

module.exports = config;
