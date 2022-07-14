const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  devServer: {
    hot: true,
    open: true,
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
};
