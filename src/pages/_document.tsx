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
        <link rel="shortcut icon" href="favicons/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body className="light-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
