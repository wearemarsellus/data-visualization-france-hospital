import React from 'react'
import Head from 'next/head'
import { Grommet } from 'grommet'

import theme from 'themes/theme'

import { GlobalStyles } from './styled'

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      {/* <meta property="og:url" content={currentUrl} /> */}
      <meta property="og:type" content="website" />
      {/* <meta property="twitter:url" content={currentUrl} /> */}
      <meta property="twitter:card" content="summary_large_image" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <meta name="robots" content="noindex" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400&display=swap"
        rel="stylesheet"
      />
    </Head>

    <GlobalStyles />

    <Grommet theme={theme}>{children}</Grommet>
  </>
)

export default Layout
