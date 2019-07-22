const MiniCSSExtractTextPlugin = require("mini-css-extract-plugin");
const SharedConfig = require("./shared.config");

const plugins = [...SharedConfig.plugins];
plugins.push(new MiniCSSExtractTextPlugin());

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCSSExtractTextPlugin.loader },
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
  ...SharedConfig,
  plugins
};
