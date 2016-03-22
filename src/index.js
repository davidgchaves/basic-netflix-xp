import React from 'react'
import { render } from 'react-dom'
import { match } from 'react-router'

import App from './App'

match(
  { history: App.History, routes: App.Routes },
  (error, _, renderProps) => {
    if (error) {
      console.error('Index match error', error)
    } else {
      render(
        <App {...renderProps} />,
        document.getElementById('app')
      )
    }
  }
)
