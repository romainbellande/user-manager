const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve('../server/dist/server/src/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.svg'],
    alias: {
      '@': path.resolve('src')
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
        exclude: path.resolve('node_modules'),
        include: [
          path.resolve('src'),
          path.resolve('../server/src/modules'),
          path.resolve('../common')
        ],
      },
      /**
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },

      /* File loader for supporting fonts, for example, in CSS files.
      */
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: process.env.NODE_ENV === 'production' ? 'index.html' : 'index.html'
    })
  ]
}
