import { createStore, compose } from 'redux'

import reducer from './Reducer'
import { INITIAL_STATE } from './Constants'

const reduxDevTools = () => (
  (typeof window === 'object' &&
   typeof window.devToolsExtension !== 'undefined'
  )
    ? window.devToolsExtension()
    : (f) => f
)

const store = createStore(
  reducer,
  INITIAL_STATE,
  compose(reduxDevTools())
)

export default store
