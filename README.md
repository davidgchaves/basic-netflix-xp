# Notes on *Brian Holt's Workshop: A Complete Intro to React*

## Install and run

```console
✔ npm install
✔ npm run build
✔ npm run server
```

## TODO

1. Refactor to use `HOC`s, where possible.
2. Use [`recompose`](https://github.com/acdlite/recompose) to simulate Lifecycle events.
3. Change from `standard` to `eslint + standard-rules`.
4. Try out [eslint-plugin-immutable](https://github.com/jhusain/eslint-plugin-immutable).
5. Find a reliable solution (if possible) that allows `ES6` modules and `webpack`'s `require.ensure`.


## Global installs (making `Spacemacs` happy)

```console
✔ npm install -g standard
```

### Reminder in case you decide to switch back to `eslint` (TODOs 3 and 4)

```console
✔ npm install --global eslint eslint-config-standard eslint-config-standard-react eslint-config-standard-jsx eslint-plugin-babel eslint-plugin-promise eslint-plugin-standard eslint-plugin-react
```

## Links and Resources

- [Brian's Notes](http://btholt.github.io/complete-intro-to-react/)
- [Brian's Fluent 2016 Code](https://github.com/btholt/complete-intro-to-react)

### Tools

- [`Standard`](https://github.com/feross/standard)
- [`standard-format`](https://github.com/maxogden/standard-format): Converts your code into `Standard` JavaScript Format.
- [`standard-react`](https://www.npmjs.com/package/standard-react): Extra `standard` rules for `React`.
- [JavaScript Standard Style](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style): A TL;DR of the `standard` JavaScript rules.
- [`Radium`](http://stack.formidable.com/radium/): Inline styles on React elements.

## Goal

The goal of this workshop is to get you full up to speed on modern development and give you an idea what it is like to develop an app in the `react` ecosystem.

In addition to `react`, we are going to be using `node`, `express`, `redux`, `webpack`, `mocha`, `enzyme`, `npm`, and `react-router`.

## 1. `Props`

- `Props` are variables that you pass from the `parent` to the `child`.
- The `child` cannot modify the `props` it gets.
- When bugs arise in the future, you know the `child` didn't modify the variable because it can't.

## 2. Tooling

### `standard`

- `standard` is a linting tool.
-  just run `standard` from your terminal and see if you have any issues.


### `Babel 6`

#### `Babel 6` plugins

- `Babel 6` has the concept of plugins.
- Each `Babel 6` transformation comes in the form a plugin.

#### `Babel 6` presets

- `Babel 6` has the concept of presets (bundles of plugins).
- `ES6` and `React` has their own preset.

`.babelrc`

```json
{
  "presets": ["react", "es2015", "stage-2"]
}
```

#### `Babel 6` in production

- Only include the transformations you need.


### `Webpack`

Two of `webpack`'s core features:

- module compilation
- plug in loaders

Build for `webpack` is pretty slow:

- take advantage of `webpack`'s watch feature.

#### What are `webpack` loaders?

`Webpack` loaders are black boxes where `webpack`:

- pipe input into...
- ...accept output out of

#### What are `webpack` loaders useful for?

Use loaders to:

- transpile
- include CSS
- include inline images via encoding
- transform SVGs

#### `babel-loader`

Transpile our code using `Babel 6`.

#### `eslint-loader`

Run `standard` for us.

#### `json-loader`

Require in `json` files.

#### A basic `webpack` config file

A good way to send your code through `Babel 6` is via `webpack` loader mechanism:

`webpack.config.js`

```javascript
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/js')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
```

## 3. JSX

### Brian's theory about JSX

- *markup in JS is a good thing!*
- *JS in markup is a bad thing!*

### Components

We're keeping all the concerns of a component in one place:

- the markup structure
- the event listeners
- the state
- the state mutators

If the component breaks, we know it broke there.

### `.js` vs `.jsx`

It doesn't actually matter if you use `.js` or `.jsx` extension, since both are getting run through `Babel 6`.

But it does signify to all who follow that `*.jsx`  files **must be** compiled before being shipped out.

## 4. The *basic Netflix experience* App

Our app is going to have:

- a home page
- a browse/search page
- a video page

All CSS is pre-done

### Radium

- Allow you to do all of your styles in JS.
- Stop concerning about how your styles (`PostCSS` / `Sass` / `Less`) compile down to `CSS`.
- `React` and `Radium` handle all the styles for you.

### React-Router

- Use the `Link` component to link between routes.
- Use nested routes and an `IndexRoute` to have a common layout between all of the pages.

### React Approach to UIs

*TL;DR*: Given a set of parameters, how does this UI look?

- Think of your UI as snapshots.
- Look at the UI as how is it going to look given a set of parameters.
- Do not think of your UI as a progression of time and events.

When coding `React`, assume you have all the data you need coming in via `props` and then figure out later how to get it there.

### React State

#### `props`

- `props` are passed down from parents to children
- `props` are immutable

#### `state`

- `state` is created, read, and mutated all inside of a component.
- If a component has `state`, that `state` cannot be mutated by a parent, child, or any other external influence.
- The only way to (sanely) mutate `state` is through the `setState` method.

#### mutating parent's `state`

A parent component has the ability to expose functions to children so the child can invoke them and let the parent know it should mutate its `state`:

- It is totally up to the parent to respect that call and mutate the `state`.
- The child can only invoke functions exposed to it via passed-down `props`.

## 5. Testing

### Setup

We need:

- `JSX` / `ES6` transpilation to happen or our tests will crash on the unfamiliar syntax.
- A fake `DOM` for `React` to interact with.


### Enzyme trick

Use `console.log(wrapper.debug())` inside a test to peek under the hood:

```javascript
it('renders our brand', () => {
  const wrapper = shallow(<Search />)
  console.log(wrapper.debug())
})
```

### Brian's theory about unit testing and React

*I don't test my UI code ever. My UI is ever shifting and in reality, I don't much care if my markup changes. I expect to as we design and iterate on the website. However I do test the hell out of my business logic which I'll separate into small modules.*

## 6. Whatever


### Debugging trick

Useful to dump your `props`, `params` or `state` to the page.

```javascript
<pre style={{ textAlign: 'left' }}><code>
  {JSON.stringify(this.props.params, null, 4)}
</code></pre>
```

```javascript
class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <pre style={{ textAlign: 'left' }}><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
      </div>
    )
  }
}
```

### Sharing data

- Do not make two `AJAX` requests to get the same data.
- Share this state between components by pushing it up to the highest common ancestor component.

### How to organize React methods in a component

1. `constructor`
2. lifecycle methods like `componentDidUpdate`
3. methods you create
4. `render`

Makes it easier to find things when you look for them.

### How to pass data to children

There's at least 3 ways to do this:

1. We could pass all the data and let the children select what she needs. This isn't great because the child is given an additional concern it doesn't need to have.
2. We could create a `callback` in the parent that passes to the children, so she can ask for the data. This is slightly better but it's an odd API for getting data. Ideally we just hand down `props` and not a `callback`, especially since this isn't async.
3. We could hook into `onEnter` `callback` (from `react-router`) for the route, grab the data that the chidren is interested into, and then pass that down. This is my preferred approach.


## 7. React DevTools

Some tricks:

- If you `right-click -> Inspect Element` on something and then click the React tab, it will take you straight to that element in the virtual DOM.
- Select something in the virtual DOM in the React tab. Now go to the Console tab and type `$r`. It should be a reference to the element you have selected in the virtual DOM and you can manipulate it.
- You can do the above trick with the normal DOM explorer with `$0`, `$1`, `$2`, `$3`, and `$4` instead where:
	- 0 is the last one you selected,
	- 1 is the penultimate,
	- and so on.
- iframes and Chrome extensions don’t work with React Dev Tools as of writing.


## 8. Redux

With `redux`:

- You have a single `store` which stores your entire app state in a single tree.
- You emit an `action` every time you want to modify the tree.
- An `action` kicks off a `reducer`:
	- A pure function
	- Takes a tree and parameter(s)
	- Returns a new tree after applying whatever transformations it deems fit.

## 9. Redux DevTools

### 1. Add `middleware` to `redux` that hooks into the DevTools

`Store.js`

```javascript
import { createStore, compose } from 'redux'

import reducer from './Reducer'
import { INITIAL_STATE } from './Constants'

const reduxDevTools = () => (
  (typeof window === 'object' &&
   typeof window.devToolsExtension !== 'undefined'
  )
    ? window.devToolsExtension()
    : (f) => f
)

const store = createStore(
  reducer,
  INITIAL_STATE,
  compose(reduxDevTools())
)

export default store
```

### 2. Add a server

- Redux DevTools doesn't work with the `file:///` protocol.
- Quick and dirty alternative, use `node`'s `http-server`:

```console
✔ npm install --save-dev http-server
✔ ./node_modules/.bin/http-server -p 5050 ./
```

Open `localhost:5050` in your browser.

### 3. Automate with `npm`

`package.json`

```json
"scripts": {
  "start": "npm run build",
  "build": "webpack -d",
  "watch": "webpack -d --watch",
  "server": "http-server -p 5050 ./",
```

## 10. Testing Redux

### Brian's theory about unit testing and Redux

- *As opposed to testing React which I don't do much of, I test the hell out of my redux code*.
- *Redux code is very testable and you should cover all or nearly-all of your reducers with tests*.

## 11. Universal Rendering

- Quite straightforward with just vanilla React.
- Not quite so simple once you introduce `react-router` into the mix:
	- Avoid route duplication.
	- Re-use already defined routes.

### The problem with `window` and `document`

The big key with Universal Rendering is being careful about referencing `window` and `document` as those aren't available in `node` environments.

If you need to interact with them:

```node
if (window) { /* do stuff with window*/ }
```

### A basic `express` server

```node
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
```

### A basic `express` server commented

#### 1. Match routes on the server

Use `react-router`'s `match` with the route to match and the url

```node
import { match } from 'react-router'

app.use((req, res) => {
  match(
    {routes: routes(), location: req.url},
    (error, redirectLocation, renderProps) => { .... }
  )
})
```

#### 2. Check for `500`s

```node
(error, redirectLocation, renderProps) => {
  if (error) {
    res
      .status(500)
      .send(error.message)
  } else if (redirectLocation) { .... }
})
```

#### 3. Check for `300`s

```node
(error, redirectLocation, renderProps) => {
  ....
  if (redirectLocation) {
    res.redirect(
      302,
      `${redirectLocation.pathname}${redirectLocation.Search}`
    )
  } else if (renderProps) { .... }
})
```

#### 4. Check for `200`s

```node
const baseTemplate = readFileSync('./index.html')

(error, redirectLocation, renderProps) => {
  ....
  if (renderProps) {
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
  } else { .... }
})
```

#### 5. If there's no match, then `404`

```node
(error, redirectLocation, renderProps) => {
  ....
  if (renderProps) { ....
  } else {
    res
      .status(404)
      .send('Not found')
  }
})
```

#### `200` in detail

##### Generate `body`

Generate the `body` with `ReactDOMServer`'s `renderToString` (render our app out to a string instead of to the DOM)

```node
const body = ReactDOMServer.renderToString(
  React.createElement(
    Provider,
    {store},
    React.createElement(RouterContext, renderProps)
  )
)
```

##### Attach it to the markup

Use `lodash.template` to template our rendered string into the `index.html` markup

```node
res
  .status(200)
  .send(template(readFileSync('./index.html'))({body}))
```

## 12. Lifecycle of a React component (universal)


### 1st. `constructor`

- Set up your components initial state.
- Runs:
	- In `node`
	- In the browser

### 2nd. `componentWillMount`

- Runs right **before** the component gets mounted.
- Use it any time you want code to run both in node and in the browser.

### 3rd. `componentDidMount`

- Runs right **after** your component gets put into the DOM.
- Will not get run in node but will in the browser.
- The idea: render first then go get the data.
- Great place for interact with the `DOM`:
	- wrap `D3`
	- wrap a `jQuery` plugin

### 4th. `componentWillUnmount`

- Runs right before the component is taken off the DOM. - Great place for:
	- get rid of external event listeners
	- clean up in general

## 13. Webpack Chunking and Async Routing

Serve **just** the JavaScript you need for the current page:

- Use webpack's async loading API (`require.ensure`)
- Webpack is able to download the chunks as we need them.
- Identify the modules that can be async.
- Treat all of our routes as async (`react-router` is already instrumented for this, server and client-side).

### ES6 vs CommonJS Modules

There's some weird errors going on if you use ES6 modules (as I do) and `require.ensure` (the need to suffix all `require('./whatever')` with `.default`) at the same time.

I think that if you want to remain sane and need to use webpack's `require.ensure`, just go with CommonJS modules all the way, and avoid ES6 modules.
