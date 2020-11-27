import SubTitle from '@monorepo/ui/SubTitle/SubTitle'
import React from 'react'

export default function ColoredSubTitle(props) {
  const { title } = props
  return <SubTitle title={title} color="secondary" />
}
