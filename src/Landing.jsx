import React from 'react'
import { Link, hashHistory } from 'react-router'

import SearchContainer from './SearchContainer'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleTermEvent = this.handleTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }

  handleTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  goToSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>Basic Netflix XP</h1>
        <form onSubmit={this.goToSearch}>
          <input
            className='search'
            type='text'
            placeholder='Search'
            onChange={this.handleTermEvent}
            value={this.props.searchTerm}
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  setSearchTerm: React.PropTypes.func,
  searchTerm: React.PropTypes.string
}

export default SearchContainer(Landing)
