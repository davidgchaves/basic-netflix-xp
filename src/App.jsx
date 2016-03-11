import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Landing from './Landing'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

export default App
