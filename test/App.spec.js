/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import Search from '../src/Search'
import ShowCard from '../src/ShowCard'
import data from '../public/data'

describe('<Search />', () => {
  it('renders our brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>Basic Netflix XP</h1>)).to.be.true
  })

  it('renders all available shows', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(data.shows.length)
  })

  context('when filtering shows', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')

    input.node.value = 'house'
    input.simulate('change')

    it('uses the typed search term', () => {
      expect(wrapper.state('searchTerm')).to.equal('house')
    })

    it('actually filters the shows', () => {
      expect(wrapper.find('.show-card').length).to.equal(2)
    })
  })
})
