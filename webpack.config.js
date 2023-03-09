const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    liveReload: true,
    proxy: {
      '/create': {
        target: 'http://localhost:3001',
      },
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // JS/JSX loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        // File loader
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|glb|gltf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
