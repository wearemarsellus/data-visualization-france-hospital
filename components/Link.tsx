import React from 'react'
import NextLink, { LinkProps } from 'next/link'
import styled from 'styled-components'

const StyledA = styled.a`
  width: 100%;
  height: 100%;
`

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <NextLink {...props}>
    <StyledA>
      {children}
    </StyledA>
  </NextLink>
)

export default Link
