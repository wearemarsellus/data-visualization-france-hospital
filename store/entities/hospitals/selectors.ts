import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { memoize, MemoizedFunction } from 'lodash'

import { Hospital } from 'data/hospitals'
import * as schemas from 'store/schemas'
import { AppState, AppEntities } from 'store/app/types'
import { selectAppEntities } from 'store/app/selectors'
import { HospitalsState } from './types'

export const selectHospitalsState = (state: AppState): HospitalsState => (
  state.entities?.hospitals || {}
)

export const selectAllHospitals = createSelector<AppState, HospitalsState, AppEntities, Hospital[]>(
  [selectHospitalsState, selectAppEntities],
  (hospitals, entities) => (
    Object.values(hospitals)
      .map((hospital: Hospital) => (
        denormalize(hospital, schemas.hospital, entities)
      ))
  )
)

type CombinerFunction = ((city: string) => Hospital[]) & MemoizedFunction
export const selectHospitalsByCity = createSelector<AppState, Hospital[], CombinerFunction>(
  [selectAllHospitals],
  (hospitals) => memoize(
    (city: string): Hospital[] => (
      hospitals.filter(
        (hospital) => hospital.city === city
      )
    )
  )
)

export default {}
