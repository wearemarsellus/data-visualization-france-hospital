import React from 'react'
import { Box } from 'grommet'
import { Facebook, Instagram } from 'grommet-icons'

import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Container from 'components/Container'
import Heading from 'components/Heading'
import ResponsiveGrid from 'components/ResponsiveGrid'
import useAppContents from 'hooks/useAppContents'
import useTheme from 'hooks/useTheme'
import StandardLink from 'components/StandardLink'

const Footer: React.FC = () => {
  const contents = useAppContents()
  const { brandColors } = useTheme()
  return (
    <Box pad={{ vertical: 'large' }}>
      <Container>
        <ResponsiveGrid
          columns={{
            small: ['full'],
            medium: ['50%'],
          }}
        >
          <Box align="center" margin={{ bottom: 'medium' }}>
            <Heading level={3}>Contact email</Heading>
            <Paragraph
              size="small"
              color="dark-4"
              transform="uppercase"
              textAlign="center"
            >
              <StandardLink href={`mailto:${contents?.contact.email}`}>
                <Text
                  color="pink"
                  weight="bold"
                  transform="initial"
                >
                  {contents?.contact.email}
                </Text>
              </StandardLink>
            </Paragraph>
          </Box>
          <Box align="center" gap="small" margin={{ bottom: 'medium' }}>
            <Heading level={3}>Réseaux sociaux</Heading>
            <Box direction="row" gap="medium">
              <StandardLink href={contents?.social.instagramUrl} external>
                <Instagram size="2rem" color={brandColors.blue} />
              </StandardLink>
              <StandardLink href={contents?.social.facebookUrl} external>
                <Facebook size="2rem" color={brandColors.blue} />
              </StandardLink>
            </Box>
          </Box>
        </ResponsiveGrid>
      </Container>
    </Box>
  )
}

export default Footer
