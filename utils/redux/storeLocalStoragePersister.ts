import { Store } from 'redux'

const storeKey = '_state'

const persistState = (keys: string[] = [], state: { [key: string]: unknown }): void => {
  const serializedState: { [key: string]: unknown } = {}
  keys.forEach((key) => {
    serializedState[key] = state[key]
  })
  localStorage.setItem('_state', JSON.stringify(serializedState))
}

export const getStateFromLocalStorage = (): { [key: string]: unknown } => {
  let state = {}

  if (typeof localStorage === 'undefined') {
    return state
  }

  const stateString = localStorage.getItem(storeKey)
  if (stateString) {
    state = JSON.parse(stateString)
  }

  return state
}

export const middleware = (keys: string[] = []) => (
  (store: Store) => {
    if (typeof localStorage !== 'undefined') {
      store.subscribe(() => {
        persistState(keys, store.getState())
      })
    }
  }
)

export default middleware
