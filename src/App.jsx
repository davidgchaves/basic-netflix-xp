import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'
import store from './Store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App
