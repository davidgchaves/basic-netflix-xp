import React from 'react'

import Header from './Header'
import ShowCard from './ShowCard'
import SearchContainer from './SearchContainer'

class Search extends React.Component {
  render () {
    const { shows, searchTerm } = this.props

    return (
      <div className='container'>
        <Header showSearch />

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
  shows: React.PropTypes.arrayOf(React.PropTypes.object),
  searchTerm: React.PropTypes.string
}

export default SearchContainer(Search)
