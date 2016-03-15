import React from 'react'
import ReactDOMServer from 'react-dom/server'
import template from 'lodash.template'
import express from 'express'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import { readFileSync } from 'fs'

import store from './src/Store'
import routes from './src/routes'

const port = 5050
const baseTemplate = readFileSync('./index.html')
const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match(
    {routes: routes(), location: req.url},
    (error, redirectLocation, renderProps) => {
      if (error) {
        res
          .status(500)
          .send(error.message)
      } else if (redirectLocation) {
        res.redirect(
          302,
          `${redirectLocation.pathname}${redirectLocation.Search}`
        )
      } else if (renderProps) {
        const body = ReactDOMServer.renderToString(
          React.createElement(
            Provider,
            {store},
            React.createElement(RouterContext, renderProps)
          )
        )
        res
          .status(200)
          .send(template(baseTemplate)({body}))
      } else {
        res
          .status(404)
          .send('Not found')
      }
    }
  )
})

console.log(`Listening on ${port}`)
app.listen(port)
