const { resolve } = require('path')

module.exports = {
  assetPrefix: '.',

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },

  sassOptions: {
    includePaths: [resolve(__dirname, 'src/modules/ui/styles')],
  },
}
