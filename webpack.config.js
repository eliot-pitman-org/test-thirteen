const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "va-bip";
  const defaultConfig = singleSpaDefaults({
  orgName,
    projectName: "bip-bip-bih-test-root",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      static: {
        directory: __dirname + "/static"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
        orgName,
        },
      }),
    ],
    externals: ['env-config']
  });
};