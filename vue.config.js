const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [__dirname, './src/scss/*.scss']
    }
  },
  publicPath: '/d3-weather/',
  //   直接拿來使用關掉所有eslint 問題
  lintOnSave: false
}
