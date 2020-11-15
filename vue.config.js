const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/base/variables.scss";`
      }
    }
  }
}
