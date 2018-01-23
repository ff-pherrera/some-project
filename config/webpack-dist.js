const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/index',
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /.json$/,
        loaders: [
          'json-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize!sass-loader',
        }),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '',
    filename: '[name]-[hash].js',
  },
  resolve: {
    alias: {
      'font-awesome': 'font-awesome',
      '~': path.join(process.cwd(), './node_modules/'),
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
    }),
    new ExtractTextPlugin('index-[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: {
        unused: true,
        dead_code: true, // eslint-disable-line camelcase
        warnings: false,
      },
    }),
    new CopyWebpackPlugin([
      {
        context: './src/app/images',
        from: '**/*',
        to: path.resolve(__dirname, '..', 'dist/images'),
      },
    ]),
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          emitError: true,
          failOnError: true,
          configFile: '.eslintrc.json',
          fix: false,
        },
        resolve: {
          extensions: ['', '.js', '.json'],
        },
      },
    }),
  ],
};
