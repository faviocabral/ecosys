import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Clientes() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Clientes')
  return (
    <Dashboard>
      <h1>Clientes</h1>
    </Dashboard>
  )
}
