const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/joayo/' // 프로젝트의 GitHub 리포지토리 이름
    : '/'
})