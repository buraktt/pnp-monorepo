import React from 'react'
import { Typography } from '@material-ui/core'

export default function Title(props) {
  const { title, color } = props
  return <Typography color={color}>{title}</Typography>
}
