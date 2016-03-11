import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'
import data from '../public/data'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.assignShow = this.assignShow.bind(this)
  }

  assignShow (nextState, replace) {
    const show = data.shows[nextState.params.id]

    if (!show) { return replace('/') }

    Object.assing(nextState.params, show)
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
