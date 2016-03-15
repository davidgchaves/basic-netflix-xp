import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'

const routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

export default routes
