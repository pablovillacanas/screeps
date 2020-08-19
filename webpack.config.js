const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader:'ts-loader' },
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  watchOptions: {
    ignored: /node_modules/
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};