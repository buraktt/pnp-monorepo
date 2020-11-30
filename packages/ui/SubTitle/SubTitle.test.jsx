/**
 * @group snapshot
 */

import React from 'react'
import SubTitle from './SubTitle'
import { render } from '@testing-library/react'
import { titleMocks } from '@monorepo/mocks/title'

describe('<SubTitle />', () => {
  it('should render without errors', () => {
    const { asFragment } = render(<SubTitle {...titleMocks} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
