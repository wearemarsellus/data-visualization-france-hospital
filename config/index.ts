import devConfig from './app.dev'
import stagingConfig from './app.staging'
import prodConfig from './app.prod'
import testConfig from './app.test'
import { AppConfig } from './app'

export function getConfig(env = process.env.APP_ENV): AppConfig {
  switch (env) {
    case 'development':
      return devConfig
    case 'staging':
      return stagingConfig
    case 'test':
      return testConfig
    case 'production':
      return prodConfig
    default:
      return devConfig
  }
}

export default {}
