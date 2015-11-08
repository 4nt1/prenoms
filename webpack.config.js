var path = require('path');
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, 'www/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: path.join(__dirname, 'src/sass'),
        loader: "style!css!sass?indentedSyntax=true&outputStyle=expanded"
      }
    ]
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'src/js/config', process.env.NODE_ENV)
    }
  }
};