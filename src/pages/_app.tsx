// -- Styles ---------------------------------------------------------------------------------------
import 'normalize.css'
import '@/ui/styles/global.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider } from '@/api'
import { Provider } from 'react-redux'
import { FC } from 'react'
import { NextQueryParamProvider } from 'next-query-params'

import { store } from '@/redux'

// let Providers = flow([
//   QueryClientProvider, //
//   () => <Provider store={store} />,
// ])

/**
 * This file is used for global logic
 * that should spread across the application, e.g.
 * custom <Provider>'s, settings, etc...
 */
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider>
      <NextQueryParamProvider>
        <Provider store={store}>
          <Head>
            <title>Alex The Artisan</title>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </NextQueryParamProvider>
    </QueryClientProvider>
  )
}

export default MyApp
