const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app/index',
    'webpack-dev-server/client?http://localhost:3000',
  ],
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules|\.spec\.js/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  output: {
    filename: 'dev-bundle.js',
    path: path.resolve(__dirname, '..', '.tmp'),
  },
  devServer: {
    port: '3000',
    contentBase: './src/app/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false,
    },
  },
  resolve: {
    alias: {
      'font-awesome': 'font-awesome',
      '~': path.join(process.cwd(), './node_modules/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
