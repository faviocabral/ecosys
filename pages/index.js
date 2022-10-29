import {React, useState, useContext} from 'react'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import AppContext from '../context/AppContext.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function index() {

  //const ContextMenu = useContext(AppContext)
  //ContextMenu.setMenu('Menu Principal') 

  return (

      <Dashboard>
        <>
          <h1>Inicio</h1>
        </>
      </Dashboard>

  )
}

export default index