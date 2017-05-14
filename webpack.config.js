var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const AppPaths = {};
AppPaths.basePath = __dirname;
AppPaths.srcPath  = path.join(AppPaths.basePath, "src");
AppPaths.binPath  = path.join(AppPaths.basePath, "bin");
AppPaths.sassPath = path.join(AppPaths.srcPath, 'stylesheets');


module.exports = {
  entry: path.resolve(AppPaths.srcPath, 'app.js'),
  output: {
    path: AppPaths.binPath,
    filename: 'bundle.js'
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.s[ac]ss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "FlexSlider Example",
      filename: "index.html",
      template: path.resolve(AppPaths.srcPath, "index.html.ejs")
    }),
    new HtmlWebpackPlugin({
      title: "FlexSlider Example Colophon",
      filename: "colophon.html",
      template: path.resolve(AppPaths.srcPath, "colophon.html.ejs")
    })
  ]
};
