const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractTextPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = env => {
  const isDevelopment = !(env && env.production);
  const mode = isDevelopment ? "development" : "production";

  const scssLoaders = {
    test: /\.(scss)$/,
    use: [
      isDevelopment
        ? "style-loader"
        : { loader: MiniCSSExtractTextPlugin.loader },
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          plugins: () => [require("precss"), require("autoprefixer")]
        }
      },
      "sass-loader"
    ]
  };

  const sharedPlugins = [
    new HtmlWebpackPlugin({
      title: "Veritus Sigma",
      template: "./src/index.html"
    })
  ];

  const modePlugins = isDevelopment
    ? []
    : [new MiniCSSExtractTextPlugin(), new CleanWebpackPlugin()];

  const plugins = [...sharedPlugins, ...modePlugins];

  const inclusions = isDevelopment
    ? {
        devServer: {
          contentBase: path.join(__dirname, "dist"),
          port: 8000,
          hot: true
        }
      }
    : {};

  return Object.assign(
    {},
    {
      mode,
      module: {
        rules: [
          scssLoaders,
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: "file-loader"
          }
        ]
      },
      plugins
    },
    inclusions
  );
};
