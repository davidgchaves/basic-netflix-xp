/* eslint-env mocha */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Search from '../src/Search'

describe('<Search />', () => {
  it('renders our brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>Basic Netflix XP</h1>)).to.be.true
  })
})
