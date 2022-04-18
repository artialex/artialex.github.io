const { resolve } = require('path')
const withNextCircularDeps = require('next-circular-dependency')

module.exports = withNextCircularDeps({
  exclude: /a\.js|node_modules/,

  sassOptions: {
    includePaths: [resolve(__dirname, 'src/modules/ui/styles')],
  },

  redirects: async () => [
    {
      source: '/',
      destination: '/Hi',
      permanent: false,
    },
  ],
})
