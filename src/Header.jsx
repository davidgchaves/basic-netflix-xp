import React from 'react'
import { Link } from 'react-router'

const Header = ({ handleSearchTermChange, searchTerm, showSearch }) => {
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
      onChange={handleSearchTermChange}
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

Header.propTypes = {
  handleSearchTermChange: React.PropTypes.func,
  searchTerm: React.PropTypes.string,
  showSearch: React.PropTypes.bool
}

export default Header
