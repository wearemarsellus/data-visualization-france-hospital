import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { normalize } from 'normalizr'
import { useSelector } from 'react-redux'
import { Box } from 'grommet'

import Page from 'components/Page'
import Container from 'components/Container'
import Heading from 'components/Heading'

import * as schemas from 'store/schemas'
import hospitalsData, { Hospital } from 'data/hospitals'
import { selectAllHospitals, selectHospitalsByCity } from 'store/entities/hospitals/selectors'
import { AppState } from 'store/app/types'

const Home: NextPage = () => {
  const hospitals = useSelector(selectAllHospitals)
  const hospitalsInBordeaux = useSelector<AppState, Hospital[]>((state) => selectHospitalsByCity(state)('bordeaux'))
  return (
    <>
      <Page title="Home">
        <Container>
          <Box
            direction="row-responsive"
            gap="medium"
            pad={{ vertical: 'medium' }}
          >
            <Box
              height="medium"
              width="medium"
              align="center"
              justify="center"
              background={{ color: 'light-2' }}
              pad="small"
              direction="column" // default
              gap="small"
            >
              Large block
              <Box
                align="center"
                justify="center"
                background={{ color: 'light-3' }}
                direction="row"
                gap="small"
              >
                <Box
                  background={{ color: 'light-4' }}
                  pad="medium"
                >
                  Yep
                </Box>
                <Box
                  background={{ color: 'light-4' }}
                  pad="medium"
                >
                  Yop
                </Box>
              </Box>
            </Box>
            <Box
              height="small"
              width="small"
              align="center"
              justify="center"
              background={{ color: 'light-1' }}
              pad="small"
              direction="column" // default
            >
              Yeah
            </Box>
          </Box>

          <Box>
            <Heading>Tous les hopitaux</Heading>
            <ul>
              {hospitals.map((hospital) => (
                <li>
                  {hospital.name}
                </li>
              ))}
            </ul>
          </Box>

          <Box>
            <Heading>Hopitaux à Bordeaux</Heading>
            <ul>
              {hospitalsInBordeaux.map((hospital) => (
                <li>
                  {hospital.name}
                </li>
              ))}
            </ul>
          </Box>
        </Container>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const normalizedHospitals = normalize(hospitalsData, [schemas.hospital])
  return {
    props: {
      entities: [normalizedHospitals.entities]
    }
  }
}

export default Home
