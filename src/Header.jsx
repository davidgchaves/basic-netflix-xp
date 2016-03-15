import React from 'react'
import { Link } from 'react-router'

import SearchContainer from './SearchContainer'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.setSearchTerm(event.target.value)
  }

  render () {
    const { searchTerm, showSearch } = this.props

    const backToSearch = (
      <h2 className='header-back'>
        <Link to='/search'>
          Back
        </Link>
      </h2>
    )

    const searchBox = (
      <input
        type='text'
        className='search-input'
        placeholder='Search'
        value={searchTerm}
        onChange={this.handleSearchTermChange}
      />
    )

    const backToSearchOrSearchBox = () =>
      showSearch
        ? searchBox
        : backToSearch

    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            Basic Netflix XP
          </Link>
        </h1>
        {backToSearchOrSearchBox()}
      </header>
    )
  }
}

Header.propTypes = {
  setSearchTerm: React.PropTypes.func,
  searchTerm: React.PropTypes.string,
  showSearch: React.PropTypes.bool
}

export default SearchContainer(Header)
