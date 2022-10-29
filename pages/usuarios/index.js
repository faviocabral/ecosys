import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Usuarios() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Usuarios')  

  return (
    <Dashboard>
      <h1>Usuarios</h1>
    </Dashboard>
  )
}
