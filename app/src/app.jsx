import MaterialProvider from '@monorepo/ui/MaterialProvider/MaterialProvider'
import React from 'react'
import Home from './components/Home/Home'

export default function App() {
  return (
    <MaterialProvider>
      <Home />
    </MaterialProvider>
  )
}
