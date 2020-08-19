const path = require('path');

module.exports = {
  module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
        }
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  target: 'node',
  entry: './src/main.js',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};