const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/scss/all.scss'),
      ],
    }
  },
  publicPath: '/d3-convid19/',
  //   直接拿來使用關掉所有eslint 問題
  lintOnSave: false
}
