// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Swap321 - P2P Crypto Exchange</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}