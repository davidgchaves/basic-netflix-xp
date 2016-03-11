import React from 'react'

const Layout = ({ children }) => (
  <div className='app-container'>
    {children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Layout
