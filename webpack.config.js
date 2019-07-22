const path = require("path");
const SharedConfig = require("./shared.config");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    hot: true
  },
  ...SharedConfig
};
