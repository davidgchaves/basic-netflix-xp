/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'
import { Provider } from 'react-redux'

import Search from '../src/Search'
import Header from '../src/Header'
import store from '../src/Store'
import { SET_SEARCH_TERM } from '../src/Constants'
import data from '../public/data'

describe('<Header />', () => {
  it('renders our brand', () => {
    const wrapper = render(<Header store={store} />)
    expect(wrapper.find('h1.brand').text()).to.equal('Basic Netflix XP')
  })
})

describe('<Search />', () => {
  const mockRoute = { shows: data.shows }

  it('renders all available shows', () => {
    const wrapper = render(
      <Provider store={store}>
        <Search route={mockRoute} />
      </Provider>
    )
    expect(wrapper.find('div.show-card').length).to.equal(data.shows.length)
  })

  it('filters the shows', () => {
    store.dispatch({type: SET_SEARCH_TERM, payload: 'house'})

    const wrapper = render(
      <Provider store={store}>
        <Search route={mockRoute} />
      </Provider>
    )

    expect(wrapper.find('div.show-card').length).to.equal(2)
  })
})
