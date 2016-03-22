import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import { asyncRoutes } from './routes'
import store from './Store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={asyncRoutes} />
      </Provider>
    )
  }
}

App.Routes = asyncRoutes
App.History = browserHistory

export default App
