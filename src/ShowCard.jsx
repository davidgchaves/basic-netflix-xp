import React from 'react'

const ShowCard = ({ description, poster, title, year }) => (
  <div className='show-card'>
    <img src={`public/img/posters/${poster}`} className='show-card-img' />
    <div className='show-text'>
      <h3 className='show-title'>{title}</h3>
      <h4 className='show-year'>{year}</h4>
      <p className='show-description'>{description}</p>
    </div>
  </div>
)

ShowCard.propTypes = {
  description: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired
}

export default ShowCard
