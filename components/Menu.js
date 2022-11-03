import {React, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faCircle, faDiagramProject, faGaugeHigh, faAnglesLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../context/AppContext.js'
import Link from 'next/link'
import Image from 'next/image'
import { AbrirMenu } from '../utils/reSize.js'


export default function Menu() {
  //para cambiar el nombre del menu 
  const contextMenu = useContext(AppContext)

  const handleClickMenu = event =>{
    //modificamos el classlist del padre del menu clickeado
    event.currentTarget.parentNode.classList.toggle('menu-open')
  }

  return (
    <>
      <aside className="main-sidebar sidebar-light-primary elevation-2">
        <Link href="/">
          <a href="" className="brand-link d-flex justify-content-between align-items-center pl-3 pr-3 " onClick={AbrirMenu} >
            <span className="brand-text font-weight"> <strong>ECOSYS</strong></span>
            <FontAwesomeIcon icon={faAnglesLeft} className="icon-size-1 icon-elevation-1 text-right"/>            
          </a>
        </Link>
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

              {/**menu 1 */}
              <li className="nav-item menu-open" >
                <a href="#" className="nav-link bg-primary elevation-1" onClick={handleClickMenu}>
                <FontAwesomeIcon icon={faGaugeHigh} className="mr-2 icon-size-1 icon-elevation-1" />
                  <p>
                    <strong>{contextMenu.menu }</strong>
                    <FontAwesomeIcon icon={faAngleLeft} className="right"/>
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
                      <p> Modificar</p>
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


              {/**menu 2 */}
              {/*
              <li className="nav-item menu-open">
                <a href="#" className="nav-link bg-warning elevation-2">
                <FontAwesomeIcon icon={faDiagramProject} className="mr-2 icon-size-1 icon-elevation-1"/>
                  <p>
                    <strong>Menu 2</strong>
                    <FontAwesomeIcon icon={faAngleLeft} className="right"/>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <FontAwesomeIcon icon={faCircle} className="left"/>
                      <p> Sub menu 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} className="left"/>
                      <p> Sub Menu 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              */}



            </ul>
          </nav>
        </div>
      </aside>

    </>
)
}
