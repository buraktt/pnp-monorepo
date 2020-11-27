import React from 'react'
import { Typography } from '@material-ui/core'

export default function SubTitle(props) {
  const { title, color } = props
  return (
    <Typography variant="h2" color={color}>
      {title}
    </Typography>
  )
}
