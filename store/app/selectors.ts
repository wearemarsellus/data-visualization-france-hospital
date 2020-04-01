import { AppContents } from 'contents/types'
import { AppConfig } from 'config/app'
import { AppState, AppEntities } from './types'

export const selectAppConfig = (state: AppState): AppConfig => (
  state.config
)

export const selectAppContents = (state: AppState): AppContents => (
  state.contents
)

export const selectAppEntities = (state: AppState): AppEntities => (
  state.entities
)

export default {}
