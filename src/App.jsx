import React from 'react'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './Store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {routes()}
      </Provider>
    )
  }
}

export default App
