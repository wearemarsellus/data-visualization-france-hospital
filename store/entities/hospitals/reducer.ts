import { kebabCase } from 'lodash'
import {
  ADD_ENTITIES,
  CLEAR_ENTITIES,
  AddEntitiesAction,
  ClearEntitiesAction
} from 'store/app/types'
import { HospitalsState } from './types'

function hospitalsReducer(state = {}, action: (AddEntitiesAction | ClearEntitiesAction)): HospitalsState {
  switch (action.type) {
    case ADD_ENTITIES: {
      const { hospitals } = action.payload.entities

      if (!hospitals) {
        return state
      }

      Object.keys(hospitals).forEach((key) => {
        hospitals[key].id = kebabCase(hospitals[key].name)
      })

      return hospitals
    }
    case CLEAR_ENTITIES: {
      if (!action.payload) {
        return state
      }

      return action.payload.entitiesNames.includes('brands') ? {} : state
    }
    default:
      return state
  }
}

export default hospitalsReducer
