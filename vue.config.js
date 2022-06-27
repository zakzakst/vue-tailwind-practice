const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000,
    },
  },
})
