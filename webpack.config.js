const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  context: __dirname,
  externals: {},
  devtool: 'source-map',
  resolve: {
    alias: {
      prelude: join(__dirname, './src/prelude/'),
    },
  },
  devServer: {
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(?:png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
          {
            loader: 'eslint-loader',
            options: { emitError: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/index.html',
    }),
  ],
};
