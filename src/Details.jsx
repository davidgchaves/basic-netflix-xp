import React from 'react'

import Header from './Header'

class Details extends React.Component {
  render () {
    const { description, poster, title, trailer, year } = this.props.params || {}
    const youtubeUrl = `https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`
    const posterUrl = `public/img/posters/${poster}`

    return (
      <div className='container'>
        <Header />

        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={posterUrl} />
          <p className='video-description'>{description}</p>
        </div>

        <div className='video-container'>
          <iframe src={youtubeUrl} frameBorder='0' allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: React.PropTypes.object
}

export default Details
