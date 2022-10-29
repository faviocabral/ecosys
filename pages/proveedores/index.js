import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Proveedores() {
  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Proveedores') 

  return (
    <Dashboard>
    <h1>Proveedores</h1>
  </Dashboard>
  )
}
