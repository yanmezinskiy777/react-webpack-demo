const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = (envVar) => {
  const { env } = envVar;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(common, envConfig);
  return config;
};
