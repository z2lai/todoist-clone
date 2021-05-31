var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    desktop: './app/assets/scripts/desktop.js',
    mobile: './app/assets/scripts/mobile.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './app/temp/scripts'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
