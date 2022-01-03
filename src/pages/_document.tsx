import { DocumentProps, Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

/**
 * This file is used for customizing
 * <html> and <body> tags and other metadata
 *
 * It is rendered on the server and not re-rendered on the client
 */
const MyDocument: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>{/*<link rel="stylesheet" href="/fonts/FontinSans_Cyrillic_R_46b.otf" />*/}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
