import 'normalize.css'
import '@/ui/styles/global.scss'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
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
    {/* @ts-ignore Waiting for fix */}
    <PersistGate loading={null} persistor={persistor}>
      {/* @ts-ignore Waiting for fix */}
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
)

export default MyApp
