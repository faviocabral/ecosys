import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faBasketShopping, faCubes, faExpand, faFilter, faGears, faHeadset, faMagnifyingGlass, faRightToBracket, faTags, faTruckFast, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Head from 'next/head'


export default function Navbar() {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light elevation-1">
        <ul className="navbar-nav">
          {/*boton control del menu izquierdo */}
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"> <FontAwesomeIcon icon={faBars} className="icon-size-1 icon-elevation-1"/> </a>
          </li>
          
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/clientes">
              <a href="#" className="nav-link text-secondary pt-0 pb-1 text-center">
                <FontAwesomeIcon icon={faUser} className="icon-principal " />
                <span className="d-block text-principal"><strong>Clientes</strong></span>
              </a>
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/proveedores">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-0">
                <FontAwesomeIcon icon={faTruckFast} className="icon-principal" />
                <span className="d-block text-principal"><strong>Proveedores</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/productos">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faTags} className="icon-principal" />
                <span className="d-block text-principal"><strong>Productos</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/stock">
            <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
              <FontAwesomeIcon icon={faCubes} className="icon-principal" />
              <span className="d-block text-principal"><strong>Stock</strong></span>
            </a>
            </Link>

          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/compras">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faShoppingCart} className="icon-principal" />
                <span className="d-block text-principal"><strong>Compra</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/ventas">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faBasketShopping} className="icon-principal" />
                <span className="d-block text-principal"><strong>Venta</strong></span>
              </a>
            </Link>
          </li>

        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-center pt-0 pb-0 pl-3 pr-1" data-widget="navbar-search" href="#" role="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-principal" />
            <span className="d-block text-principal"><strong>Buscar</strong></span>            

            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar main-buscador" style={{height:"50px"}} type="search" placeholder="Buscar..." aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                    <FontAwesomeIcon icon={faXmark}/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link text-center pt-0 pb-0 pl-3 pr-1" data-widget="fullscreen" href="#" role="button">
            <FontAwesomeIcon icon={faExpand} className="icon-principal"/>
            <span className="d-block text-principal"><strong>FullScreen</strong></span>            
            </a>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/login">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faUser} className="icon-principal" />
                <span className="d-block text-principal"><strong>Login</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link text-center pt-0 pb-0 pl-3 pr-2" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <FontAwesomeIcon icon={faRightToBracket} className="icon-principal"/>
            <span className="d-block text-principal"><strong>Logout</strong></span>            
            </a>
          </li>


          
        </ul>
      </nav>      
    
    </>
  )
}
