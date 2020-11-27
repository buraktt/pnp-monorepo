import Title from '@monorepo/ui/Title/Title'
import React from 'react'

export default function ColoredTitle(props) {
  const { title } = props
  return <Title title={title} color="primary" />
}
