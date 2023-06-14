module.exports = {
  configureWebpack: {
    optimization: {
      nodeEnv: "production",
      // splitChunks: {
      //   chunks: "all",
      // },
    },
  },
  css: {
    extract: false,
  },
};
