import React from 'react'

import Header from './Header'
import SearchContainer from './SearchContainer'

class Details extends React.Component {
  assignShow (shows, id) {
    const show = shows.filter((s) => s.imdbID === id)

    if (show.length < 1) { return {} }

    return show[0] || {}
  }

  render () {
    const { shows } = this.props
    const { id } = this.props.params
    const { description, poster, title, trailer, year } = this.assignShow(shows, id)
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
  params: React.PropTypes.object,
  shows: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default SearchContainer(Details)
