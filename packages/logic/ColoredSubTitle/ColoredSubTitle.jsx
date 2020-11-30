import SubTitle from '@monorepo/ui/SubTitle/SubTitle'
import React from 'react'

export default function ColoredSubTitle(props) {
  const { title, color } = props
  if (!title) return null
  return <SubTitle title={title.toUpperCase()} color={color} />
}
