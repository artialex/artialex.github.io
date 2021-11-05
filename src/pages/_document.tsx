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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=optional"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
