import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

function _document() {
    return (<>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        </head>

        <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
    )
}

export default _document