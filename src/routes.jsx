import Layout from './Layout'

// `node-ensure` shims asynchronous webpack module loading into node
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

export const asyncRoutes = {
  component: Layout,
  path: '/',

  indexRoute: {
    getComponent (_, cb) {
      require.ensure(
        [],
        (error) =>
          error
            ? console.error(`Landing require.ensure error: ${error}`)
            : cb(null, require('./Landing').default)
      )
    }
  },

  childRoutes: [
    {
      path: 'search',
      getComponent (_, cb) {
        require.ensure(
          [],
          (error) =>
            error
              ? console.error(`Search require.ensure error: ${error}`)
              : cb(null, require('./Search').default)
        )
      }
    },

    {
      path: 'details/:id',
      getComponent (_, cb) {
        require.ensure(
          [],
          (error) =>
            error
              ? console.error(`Details require.ensure error: ${error}`)
              : cb(null, require('./Details').default)
        )
      }
    }
  ]
}
