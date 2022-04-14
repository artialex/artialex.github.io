import { DocumentProps, Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

/**
 * This file is used for customizing
 * <html> and <body> tags and other metadata
 *
 * It is rendered on the server and not re-rendered on the client
 */
const MyDocument: FC<DocumentProps> = () => (
  <Html>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Rubik" rel="stylesheet" />
    </Head>
    <body className="light-theme">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
