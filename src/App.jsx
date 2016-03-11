import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

export default App
