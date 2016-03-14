import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'
import data from '../public/data'

class App extends React.Component {
  assignShow (nextState, replace) {
    const show = data.shows.filter((s) => s.imdbID === nextState.params.id)

    if (show.length < 1) { return replace('/') }

    Object.assign(nextState.params, show[0])
    return nextState
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={data.shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
}

export default App
