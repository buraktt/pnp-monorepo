import Title from '@monorepo/ui/Title/Title'
import React from 'react'

export default function ColoredTitle(props) {
  const { title, color } = props
  if (!title) return null
  return <Title title={title.toUpperCase()} color={color} />
}
