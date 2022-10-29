import React from 'react'
import Dashboard from './Dashboard'
import Menu from './Menu'
import Navbar from './Navbar'

function Layouts({children}) {
  return (
    <>
      {
        /** navbar */
        /** sidebar */
      }
      <Navbar />
      <Menu />
        <Dashboard />
    </>
  )
}

export default Layouts