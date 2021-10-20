import App from 'next/app'
import { QueryClientProvider } from '@/api'

import 'normalize.css'
import '@/ui/styles/global.scss'

class MyApp extends App {
  render() {
    let { Component, pageProps } = this.props

    return (
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    )
  }
}

export default MyApp
