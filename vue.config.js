var path = require("path");
module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
};
