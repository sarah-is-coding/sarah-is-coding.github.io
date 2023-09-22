const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Adjust if you want output somewhere else
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Turns CSS into CommonJS
          'sass-loader'    // Compiles Sass to CSS
        ]
      }
    ]
  }
};
