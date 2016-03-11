import React from 'react'

import ShowCard from './ShowCard'

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = { searchTerm: '' }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    const { shows } = this.props.route
    const { searchTerm } = this.state

    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Basic Netflix XP</h1>
          <input
            type='text'
            className='search-input'
            placeholder='Search'
            value={searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div className='shows'>
          {shows
            .filter((show) =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) >= 0
            )
            .map((show) =>
              <ShowCard {...show} key={show.imdbID} />
           )}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Search
