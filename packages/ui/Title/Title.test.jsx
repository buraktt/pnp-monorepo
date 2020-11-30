/**
 * @group snapshot
 */
import React from 'react'
import Title from './Title'
import { render } from '@testing-library/react'
import { titleMocks } from '@monorepo/mocks/title'

describe('<Title />', () => {
  it('should render without errors', () => {
    const { asFragment } = render(<Title {...titleMocks} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
