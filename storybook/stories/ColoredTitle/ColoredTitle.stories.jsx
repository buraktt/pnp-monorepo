import ColoredTitle from '@monorepo/logic/ColoredTitle/ColoredTitle'
import React from 'react'
import coloredTitleMocks from './ColoredTitle.mocks'

export default {
  title: 'ColoredTitle'
}

export const PrimaryColoredTitle = () => <ColoredTitle {...coloredTitleMocks} />
export const SecondaryColoredTitle = () => (
  <ColoredTitle {...coloredTitleMocks} color="secondary" />
)
export const ErrorColoredTitle = () => (
  <ColoredTitle {...coloredTitleMocks} color="error" />
)
