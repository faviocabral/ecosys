import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'


export default function Compras() {
  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Compras')  
  return (
    <Dashboard>
      <h1>Compras</h1>
    </Dashboard>

  )
}
