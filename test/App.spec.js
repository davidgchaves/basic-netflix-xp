/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'
import { Provider } from 'react-redux'

import Search from '../src/Search'
import Header from '../src/Header'
import store from '../src/Store'
import reducer from '../src/Reducer'
import { SET_SEARCH_TERM, INITIAL_STATE } from '../src/Constants'
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

describe('Store reducer', () => {
  context('when receiving an undefined state', () => {
    const undefinedState = undefined

    it('defaults to the INITIAL_STATE', () => {
      const whateverAction = { payload: 'WhaT3v3r' }

      expect(
        reducer(undefinedState, whateverAction)
      ).to.eql(INITIAL_STATE)
    })
  })

  context('when an unknown action is dispatched', () => {
    const unknownAction = { payload: 'UnKnoWN ActIon' }

    it('returns the passed in state', () => {
      const stateBefore = { searchTerm: 'House' }

      expect(
        reducer(stateBefore, unknownAction)
      ).to.eql(stateBefore)
    })
  })

  context('when a SET_SEARCH_TERM action is dispatched', () => {
    const setSearchTermAction = {
      type: 'SET_SEARCH_TERM',
      payload: 'my search string'
    }

    it('updates the search term accordingly', () => {
      const stateBefore = { searchTerm: 'House' }
      const stateAfter = { searchTerm: 'my search string' }

      expect(
        reducer(stateBefore, setSearchTermAction)
      ).to.eql(stateAfter)
    })
  })
})
