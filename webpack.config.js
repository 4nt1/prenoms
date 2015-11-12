var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './client/js/main.js',
  output: {
    path: path.join(__dirname, 'server/public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'client/js'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: path.join(__dirname, 'client/sass'),
        loader: "style!css!resolve-url!sass?sourceMap&indentedSyntax=true&outputStyle=expanded"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=images/[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  "plugins": [
    new webpack.ProvidePlugin({
        'Promise': 'es6-promise',
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};