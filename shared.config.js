const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Veritus Sigma",
      template: "./src/index.html"
    })
  ]
};
