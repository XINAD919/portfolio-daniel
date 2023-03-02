import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src='https://kit.fontawesome.com/86f3aeba5f.js'
        crossOrigin='anonymous'
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
