import App from 'next/app'
import Head from 'next/head'
import { QueryClientProvider } from '@/api'

import 'normalize.css'
import '@fontsource/nunito'
import '@/ui/styles/global.scss'

class MyApp extends App {
  render() {
    let { Component, pageProps } = this.props

    return (
      <QueryClientProvider>
        <Head>
          <title>My Next Application</title>
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    )
  }
}

export default MyApp
