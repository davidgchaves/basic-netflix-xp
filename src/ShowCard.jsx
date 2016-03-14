import React from 'react'
import { Link } from 'react-router'

const ShowCard = ({ description, imdbID, poster, title, year }) => (
  <Link to={`/details/${imdbID}`}>
    <div className='show-card'>
      <img src={`public/img/posters/${poster}`} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{title}</h3>
        <h4 className='show-card-year'>{year}</h4>
        <p className='show-card-description'>{description}</p>
      </div>
    </div>
  </Link>
)

ShowCard.propTypes = {
  description: React.PropTypes.string.isRequired,
  imdbID: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired
}

export default ShowCard
