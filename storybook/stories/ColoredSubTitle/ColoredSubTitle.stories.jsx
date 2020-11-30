import ColoredSubTitle from '@monorepo/logic/ColoredSubTitle/ColoredSubTitle'
import React from 'react'
import coloredSubTitleMocks from './ColoredSubTitle.mocks'

export default {
  title: 'ColoredSubTitle'
}

export const PrimaryColoredSubTitle = () => (
  <ColoredSubTitle {...coloredSubTitleMocks} />
)
export const SecondaryColoredSubTitle = () => (
  <ColoredSubTitle {...coloredSubTitleMocks} color="secondary" />
)
export const ErrorColoredSubTitle = () => (
  <ColoredSubTitle {...coloredSubTitleMocks} color="error" />
)
