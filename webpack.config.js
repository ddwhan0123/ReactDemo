var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015", "react"]
        }
      }, {
        test: /\.css$/,
        loader: 'style!css'
        }
    ]
  }
};

module.exports = config;
