import React from 'react'
import { Typography } from '@material-ui/core'

export default function Title(props) {
  const { title, color } = props
  return (
    <Typography variant="h1" color={color}>
      {title}
    </Typography>
  )
}
