const { resolve } = require('path')
const withNextCircularDeps = require('next-circular-dependency')

module.exports = withNextCircularDeps({
  exclude: /a\.js|node_modules/,

  sassOptions: {
    includePaths: [resolve(__dirname, 'src/modules/ui/styles')],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/Hi',
        permanent: false,
      },
    ]
  },
})

/*
module.exports =  withNextCircularDeps(optimizedImages(withCSS({
    // exclude detection of files based on a RegExp
    // include specific files based on a RegExp
    include: /dir/,
    // add errors to webpack instead of warnings
    failOnError: true,
    // allow import cycles that include an asyncronous import,
    // e.g. via import(/!* webpackMode: "weak" *!/ './file.js')
    allowAsyncCycles: false,
    // set the current working directory for displaying module paths
    cwd: process.cwd(),
  }))
)*/
