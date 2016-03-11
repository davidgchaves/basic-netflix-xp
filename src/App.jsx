import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Landing from './Landing'
import Search from './Search'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

export default App
