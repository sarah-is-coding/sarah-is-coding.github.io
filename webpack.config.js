const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development'; // Define mode based on NODE_ENV

module.exports = {
  mode: mode,
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',  
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/index/index.html',
      filename: 'index.html', // Output file name in the 'dist/' directory
    }),
    new HtmlWebpackPlugin({
      template: './pages/about/about.html',
      filename: 'about.html', // Output file name in the 'dist/' directory
    }),
    new HtmlWebpackPlugin({
      template: './pages/contact/contact.html',
      filename: 'contact.html', // Output file name in the 'dist/' directory
    }),
    // Other plugins...
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
