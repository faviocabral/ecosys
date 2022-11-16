import {React, useContext} from 'react'
import Dashboard from '../../components/Dashboard.js'
import AppContext from '../../context/AppContext.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartSimple, faCircleRight, faMoneyBill1Wave, faUsers, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import Box from '../../components/box.js'
import TableList from '../../components/TableList.js'
import ApexChart from '../../components/ApexChart.js'
import {useRouter} from 'next/router'



export default function Proveedores() {
  const contextMenu = useContext(AppContext)
  contextMenu.setMenu('Menu Proveedores') 
  const router = useRouter() 
  
  return (
    <Dashboard>
    <div className="row">

      <Box  cantidad={'120'} titulo={'Proveedores'} color={'bg-info'} subTitulo={'Nuevo Proveedor'} icono={faUsers} newEvent={()=>{router.push('/proveedores/crud')}} />
      <Box  cantidad={'50'} titulo={'Facturas Pendientes'} color={'bg-success'} subTitulo={'Ver Saldos'}  />
      <Box  cantidad={'15 mill'} titulo={'Total Pendientes'} color={'bg-warning'} subTitulo={'Ver Facturas'} icono={faMoneyBill1Wave} />
      <Box  cantidad={'12 mill'} titulo={'Saldos Pendientes'} color={'bg-danger'} subTitulo={'Ver Saldos'} icono={faSackDollar} />

    </div>

    <div className="row">
      <div className="col-lg-6">
        <TableList titulo={'Proveedores'} />
      </div>
      <div className="col-lg-6">
        <ApexChart />
      </div>
    </div>
  </Dashboard>
  )
}
