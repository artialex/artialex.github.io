import { Combinatorics, Insertion } from '@/insertions'
import { configure } from '@/markdown'
import { slugify } from '@/utils.platform'
import { getEnv } from '@/relay/relay.utils'
import { RoughMark } from '@/ui'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { ReactRelayContext } from 'react-relay'

// Styling

import 'highlight.js/styles/github.css'
import '@/ui/styles/global.css'

// TODO: handle md configuration better?
configure({
  components: {
    a: (props: any) => {
      const isInternal = props.className?.includes
      const href = isInternal //
        ? `/?id=${slugify(props.href)}`
        : props.href
      const target = isInternal ? '_self' : '_blank'
      const className = isInternal ? 'internal' : 'external'

      return (
        <Link href={href}>
          <a target={target} className={className}>
            {props.children[0]}
          </a>
        </Link>
      )
    },
    insertion: Insertion,
    combinatorics: Combinatorics,
    mark: RoughMark,
  },
})

/**
 * This file is used for global logic
 * that should spread across the application, e.g.
 * custom <Provider>'s, settings, etc...
 */
const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ReactRelayContext.Provider value={{ environment: getEnv() }}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {/* @ts-ignore Waiting for fix */}
    <Component {...pageProps} />
  </ReactRelayContext.Provider>
)

export default MyApp
