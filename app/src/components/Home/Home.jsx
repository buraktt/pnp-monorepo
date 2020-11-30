import React from 'react'
import ColoredSubTitle from '@monorepo/logic/ColoredSubTitle/ColoredSubTitle'
import ColoredTitle from '@monorepo/logic/ColoredTitle/ColoredTitle'

export default function Home() {
  return (
    <>
      <ColoredTitle title="title" color="primary" />
      <ColoredSubTitle title="subtitle" color="secondary" />
    </>
  )
}
