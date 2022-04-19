const { resolve } = require('path')
const withNextCircularDeps = require('next-circular-dependency')

module.exports = withNextCircularDeps({
  exclude: /a\.js|node_modules/,

  sassOptions: {
    includePaths: ['node_modules', resolve(__dirname, 'src/modules/ui/styles')],
  },
})
