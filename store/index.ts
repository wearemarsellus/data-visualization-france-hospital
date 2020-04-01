import {
  applyMiddleware,
  createStore,
  Store,
  StoreEnhancer
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// import localStoragePersister, { getStateFromLocalStorage } from 'utils/redux/storeLocalStoragePersister'

// Middlewares
import addEntitiesMiddleware from './middlewares/addEntitiesMiddleware'

import rootReducer from './app/reducer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const bindMiddleware = (middlewares: any[]): StoreEnhancer<{ dispatch: unknown }, {}> => {
  if (process.env.NODE_ENV !== 'production') {
    const devMiddlewares = [
      ...middlewares
    ]
    return composeWithDevTools(applyMiddleware(...devMiddlewares))
  }
  return applyMiddleware(...middlewares)
}

function configureStore(initialState = {}): Store {
  const preloadedStates = {
    ...initialState,
    // ...getStateFromLocalStorage()
  }

  const store = createStore(
    rootReducer,

    preloadedStates,

    bindMiddleware([
      // Store normalized data (entities) in store
      addEntitiesMiddleware,
    ])
  )

  // localStoragePersister(['interface'])(store)

  return store
}

export default configureStore
