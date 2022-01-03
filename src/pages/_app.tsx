import 'normalize.css'
import '@/ui/styles/global.scss'
import Head from 'next/head'
import type { FC } from 'react'
import { QueryClientProvider } from '@/api'
import type { AppProps } from 'next/app'
import { NextQueryParamProvider } from 'next-query-params'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

/**
 * This file is used for global logic
 * that should spread across the application, e.g.
 * custom <Provider>'s, settings, etc...
 */
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider>
      <NextQueryParamProvider>
        <Head>
          <title>Alex The Artisan</title>
        </Head>
        <Component {...pageProps} />
      </NextQueryParamProvider>
    </QueryClientProvider>
  )
}

export default MyApp
