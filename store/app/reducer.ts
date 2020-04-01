/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux'
import hospitalsReducer from 'store/entities/hospitals/reducer'
import { BasicAction } from 'store/types'
import { getConfig } from 'config/index'
import initialContents from 'contents/contents'
import { AppContents } from 'contents/types'
import { AppConfig } from 'config/app'

const initialConfig = getConfig(process.env.APP_ENV || 'production')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function config(state = initialConfig, action: BasicAction): AppConfig {
  return state
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function contents(state = initialContents, action: BasicAction): AppContents {
  return state
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  contents,
  config,
  entities: combineReducers({
    hospitals: hospitalsReducer
  })
})
