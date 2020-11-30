import ColoredSubTitle from '@monorepo/logic/ColoredSubTitle/ColoredSubTitle'
import { titleMocks } from '@monorepo/mocks/title'
import React from 'react'

export default {
  title: 'ColoredSubTitle'
}

export const PrimaryColoredSubTitle = () => <ColoredSubTitle {...titleMocks} />
export const SecondaryColoredSubTitle = () => (
  <ColoredSubTitle {...titleMocks} color="secondary" />
)
export const ErrorColoredSubTitle = () => (
  <ColoredSubTitle {...titleMocks} color="error" />
)
