import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { CssBaseline } from '@material-ui/core'
import theme from './theme'

export default function MaterialProvider(props) {
  const { children } = props
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  )
}
