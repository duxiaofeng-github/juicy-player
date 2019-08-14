const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  devtool: false,
  output: {
    filename: "[name].js",
    path: __dirname,
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    host: "0.0.0.0",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
