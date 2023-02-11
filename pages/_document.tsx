import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth ease-in-out duration-1000'>
      <Head />
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
