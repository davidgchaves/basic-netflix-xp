/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

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
})
