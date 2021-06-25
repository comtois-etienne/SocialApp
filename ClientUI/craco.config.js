const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    configure: (webpackConfig, { env, paths }) => { 
      paths.appBuild = webpackConfig.output.path = path.resolve(`${__dirname}/static`);
      return webpackConfig;
  }
  },
};
