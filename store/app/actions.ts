import { AppConfig } from 'config/app'
import {
  AddEntitiesAction,
  ClearEntitiesAction,
  SetConfigAction,
  SET_CONFIG,
  ADD_ENTITIES,
  CLEAR_ENTITIES,
  AppEntities
} from './types'

export const setConfig = (appConfig: AppConfig): SetConfigAction => ({
  type: SET_CONFIG,
  payload: appConfig
})

export const addEntities = (entities: AppEntities): AddEntitiesAction => ({
  type: ADD_ENTITIES,
  payload: {
    entities
  }
})

export const clearEntities = (
  entitiesNames: keyof AppEntities
): ClearEntitiesAction => ({
  type: CLEAR_ENTITIES,
  payload: {
    entitiesNames
  }
})
