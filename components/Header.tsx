import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

import Link from 'components/Link'
import Container from 'components/Container'
import Text from 'components/Text'
import useTheme from 'hooks/useTheme'
import useAppContents from 'hooks/useAppContents'

const Logo = require('assets/images/logo.svg').ReactComponent

const HeaderWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`

const Header: React.FC = () => {
  const { theme: { header } } = useTheme()
  const contents = useAppContents()

  return (
    <HeaderWrapper
      background={{ color: 'light-2' }}
      fill="horizontal"
      height={header.height}
      pad={{ vertical: 'small' }}
    >
      <Container fill="vertical">
        <Box
          fill="horizontal"
          direction="row"
          justify="between"
        >
          {/* Left part */}
          <Box
            fill="vertical"
            direction="row"
            align="center"
            gap="small"
          >
            <Link href="/">
              <Logo width="5rem" height="100%" />
            </Link>
            <Box>
              <Text
                transform="uppercase"
                weight={700}
                color="dark-3"
                size="0.9rem"
              >
                {contents.general.title}
              </Text>
            </Box>
          </Box>

          {/* Right part */}
          <Box />
        </Box>

      </Container>
    </HeaderWrapper>
  )
}

export default Header
