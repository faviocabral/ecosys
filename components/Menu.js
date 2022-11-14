import {React, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faCircle, faDiagramProject, faGaugeHigh, faAnglesLeft, faBars , faUser , faTruckFast , faTags, faCubes, faShoppingCart, faBasketShopping, faSackDollar, faDollar,faIndustry, faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../context/AppContext.js'
import Link from 'next/link'
import Image from 'next/image'
import { AbrirMenu } from '../utils/reSize.js'


export default function Menu() {
  //para cambiar el nombre del menu 
  const contextMenu = useContext(AppContext)
  const [headMenu , setHeadMenu] = useState([
    { id: 1 , title: 'Clientes' , icon: faUser},
    { id: 2 , title: 'Proveedores', icon:faTruckFast},
    { id: 3 , title: 'Productos', icon:faTags},
    { id: 4 , title: 'Stock', icon:faCubes},
    { id: 5 , title: 'Compra', icon:faShoppingCart},
    { id: 6 , title: 'Venta', icon:faBasketShopping},
    { id: 7 , title: 'Pagos', icon:faSackDollar},
    { id: 8 , title: 'Cobros', icon:faDollar},
    { id: 9 , title: 'Produccion', icon:faIndustry},
    { id: 10 , title: 'RRHH', icon:faPeopleGroup},
  ])
  const [subMenu , setSubMenu] = useState([
    {id: 1 , title: 'Dashboard'},
    {id: 2 , title: 'Nuevo'},
    {id: 3 , title: 'Lista'},
    {id: 4 , title: 'Reportes'},
  ])

  const handleClickMenu = event =>{
    //modificamos el classlist del padre del menu clickeado
    event.currentTarget.parentNode.classList.toggle('menu-open')
  }

  return (
    <>
      <aside className="main-sidebar sidebar-light-primary elevation-2">
          <a data-widget="pushmenu" href="#" role="button" className="brand-link d-flex justify-content-between align-items-center pl-3 pr-3 " onClick={AbrirMenu} >
            <span className="brand-text font-weight"> <strong>ECOSYS</strong></span>
            <FontAwesomeIcon icon={faAnglesLeft} className="icon-size-1 icon-elevation-1 text-right"/>            
          </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              
            </div>
            <div className="info">
              <strong>  <a href="#" className="d-block">USUARIO</a> </strong>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

              {
                headMenu.map(item => {
                  return (
                          <li className="nav-item " key={item.id}>
                            <a href="#" className="nav-link bg-primary elevation-1" onClick={handleClickMenu}>
                            <FontAwesomeIcon icon={item.icon } className="mr-2 icon-size-1 icon-elevation-1" />
                              <p>
                                <strong>{ item.title }</strong>
                                <FontAwesomeIcon icon={ faAngleLeft } className="right"/>
                              </p>
                            </a>
                            <ul className="nav nav-treeview">
                              <li className="nav-item">
                                <a href="#" className="nav-link ">
                                  <FontAwesomeIcon icon={faCircle} className="left"/>
                                  <p> Nuevo</p>
                                </a>
                              </li>

                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <FontAwesomeIcon icon={faCircle} className="left"/>
                                  <p> Listar</p>
                                </a>
                              </li>

                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <FontAwesomeIcon icon={faCircle} className="left"/>
                                  <p> Reportes</p>
                                </a>
                              </li>
                            </ul>
                          </li>
                        )
                })
              }


            </ul>
          </nav>
        </div>
      </aside>

    </>
)
}
