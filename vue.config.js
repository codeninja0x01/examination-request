const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    const apiClient = process.env.VUE_APP_API_CLIENT; // mock or server
    config.resolve.alias.set(
      "api-client",
      path.resolve(__dirname, `src/api/${apiClient}`)
    );
  }
};
