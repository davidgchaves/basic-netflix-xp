import React from 'react'
import data from '../public/data'

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show, i) => (
        <div className='show' key={i}>
          <img src={`public/img/posters/${show.poster}`} className='show-img' />
          <div className='show-text'>
            <h3 className='show-title'>{show.title}</h3>
            <h4 className='show-year'>{show.year}</h4>
            <p className='show-description'>{show.description}</p>
          </div>
        </div>
       ))}
    </div>
  </div>
)

export default Search
