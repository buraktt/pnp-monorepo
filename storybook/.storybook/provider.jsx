import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MaterialProvider from '@monorepo/ui/MaterialProvider/MaterialProvider'

export default function ProviderWrapper(props) {
  const { children } = props
  return (
    <MaterialProvider>
      <Router history={createBrowserHistory()}>{children}</Router>
    </MaterialProvider>
  )
}
