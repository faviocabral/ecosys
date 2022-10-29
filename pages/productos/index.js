import {React, useState, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'


export default function Productos() {
  
  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Productos')  

  return (
    <Dashboard>
      <h1>Productos</h1>
    </Dashboard>    
  )
}
