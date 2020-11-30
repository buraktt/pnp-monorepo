import ColoredTitle from '@monorepo/logic/ColoredTitle/ColoredTitle'
import { titleMocks } from '@monorepo/mocks/title'
import React from 'react'

export default {
  title: 'ColoredTitle'
}

export const PrimaryColoredTitle = () => <ColoredTitle {...titleMocks} />
export const SecondaryColoredTitle = () => (
  <ColoredTitle {...titleMocks} color="secondary" />
)
export const ErrorColoredTitle = () => (
  <ColoredTitle {...titleMocks} color="error" />
)
