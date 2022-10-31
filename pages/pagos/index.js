import React,{useContext } from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'

export default function Pagos() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Pagos')  

  return (
    <Dashboard>
      <h1>Pagos</h1>
    </Dashboard>

  )
}
