import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Stock() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Stock')  

  return (
    <Dashboard>
      <h1>Stock</h1>
    </Dashboard>
  )
}
