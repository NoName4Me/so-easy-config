const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    commonjs: './commonjs/index.js',
    es: './es/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  mode: 'development',
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({ filename: 'commonjs.html', chunks: ['commonjs'] }),
    new HtmlWebpackPlugin({ filename: 'es.html', chunks: ['es'] })
  ]
};
