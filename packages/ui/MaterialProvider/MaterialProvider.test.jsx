/**
 * @group snapshot
 */

import React from 'react'
import MaterialProvider from './MaterialProvider'
import { render } from '@testing-library/react'

describe('<MaterialProvider />', () => {
  it('should render without errors', () => {
    const { asFragment } = render(<MaterialProvider />)
    expect(asFragment()).toMatchSnapshot()
  })
})
