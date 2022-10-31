import React,{useContext } from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'


export default function Cobros() {

  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Cobros')  

  return (
    <Dashboard>
      <h1>Cobros</h1>
    </Dashboard>
  )
}
