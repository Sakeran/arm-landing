const path = require("path");
const SharedConfig = require("./shared.config");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("precss"), require("autoprefixer")]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  ...SharedConfig
};
