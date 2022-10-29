import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Ventas() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu de Ventas')  

  return (
    <Dashboard>
      <h1>Ventas</h1>
    </Dashboard>
  )
}
