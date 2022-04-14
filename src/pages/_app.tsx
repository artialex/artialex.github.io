import 'normalize.css'
import '@/ui/styles/global.scss'
import Head from 'next/head'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { NextQueryParamProvider } from 'next-query-params'
import { Provider } from 'react-redux'

import { persistor, store } from '@/core/core.store'

import { PersistGate } from 'redux-persist/integration/react'

/**
 * This file is used for global logic
 * that should spread across the application, e.g.
 * custom <Provider>'s, settings, etc...
 */
const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<span>Loading...</span>}>
      <NextQueryParamProvider>
        <Head>
          <title>Garden {pageProps.id && `• ${pageProps.id}`}</title>
        </Head>
        {/*<Toolbar />*/}
        <Component {...pageProps} />
      </NextQueryParamProvider>
    </PersistGate>
  </Provider>
)

export default MyApp
