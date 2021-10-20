const { resolve } = require('path')

module.exports = {
  basePath: '/docs',

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },

  sassOptions: {
    includePaths: [resolve(__dirname, 'src/modules/ui/styles')],
  },
}
