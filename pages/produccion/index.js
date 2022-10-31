import React,{useContext } from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Produccion() {
  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Produccion')  

  return (
    <Dashboard>
      <h1>Produccion</h1>
    </Dashboard>
  )
}
