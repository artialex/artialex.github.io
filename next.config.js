const { resolve } = require('path')
const withNextCircularDeps = require('next-circular-dependency')
const withGraphQL = require('next-plugin-graphql')

/** @type {import('next').NextConfig} */
const config = {
  exclude: /a\.js|node_modules/,

  sassOptions: {
    includePaths: ['node_modules', resolve(__dirname, 'src/modules/ui/styles')],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.gql$/,
      use: ['raw-loader'],
    })

    return config
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  compiler: {
    relay: require('./relay.config'),
  },
}

module.exports = withNextCircularDeps(config)
