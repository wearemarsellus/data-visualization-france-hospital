import React from 'react'
import Head from 'next/head'
import { Box, BoxProps } from 'grommet'

import Header from 'components/Header'
import Footer from 'components/Footer'
import usePageTitle from 'hooks/usePageTitle'
import useAppContents from 'hooks/useAppContents'
import useTheme from 'hooks/useTheme'

type PageType = {
  title: string;
  description?: string;
  withScroll?: boolean;
  withFooter?: boolean;
}

const Page: React.FC<BoxProps & PageType> = ({
  children,
  title,
  description,
  withScroll = true,
  withFooter = true,
  ...props
}) => {
  const fullTitle = usePageTitle(title)
  const contents = useAppContents()
  const { theme: { header } } = useTheme()

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description || contents?.general.description} />

        {/* <meta property="og:description" content={description || contents.getIn(['general', 'description'])} /> */}
        {/* <meta property="twitter:description" content={description || contents.getIn(['general', 'description'])} /> */}
        {/* <meta property="og:title" content={getTitle(title)} /> */}
        {/* <meta property="og:image" content={socialBanner} /> */}
        {/* <meta property="twitter:title" content={getTitle(title)} /> */}
        {/* <meta property="twitter:image" content={socialBanner} /> */}
      </Head>

      <Box
        overflow={!withScroll ? 'hidden' : undefined}
        height={!withScroll ? '100vh' : '100%'}
        width="100%"
        {...props}
      >
        <Header />

        <Box
          pad={{ top: header.height }}
          height="100%"
        >
          {children}
        </Box>

        {withFooter && (
          <Footer />
        )}
      </Box>
    </>
  )
}

export default Page
