import React , {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar, faBars, faShoppingCart, faBasketShopping, faCubes, faExpand, faFilter, faGears, faHeadset, faMagnifyingGlass, faRightToBracket, faTags, faTruckFast, faUser, faXmark, faSackDollar, faDollarSign, faCircleDollarToSlot, faFilterCircleDollar, faDollar, faIndustry, faUserMedical, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'
import { AbrirMenu } from '../utils/reSize.js'
import Cookies from 'js-cookie'
import AppContext from '../context/AppContext.js'


export default function Navbar() {

  const [ventana , setVentana] = useState('web')    
  const router = useRouter()
  const contextLogin = useContext(AppContext)

  useEffect( () => { window.addEventListener("resize", listen) }, [])
  // con esto hacemos que controlamos el tamño de la pantalla... 
  const listen = ()=>{ 
    let classBody = String(document.querySelector("body").classList) 
    console.log( window.innerWidth ) 

    if(window.innerWidth <= 991){
      setVentana('tablet')
      classBody.split(" ").forEach(item=> (item.length > 0 )? document.querySelector("body").classList.remove(item) : '' )
      document.querySelector("body").classList.add("sidebar-collapse")

    }else if(window.innerWidth > 991){ 
      classBody.split(" ").forEach(item=> (item.length > 0 )? document.querySelector("body").classList.remove(item) : '' )
      setVentana('web')
    }
  }
  const logout = ()=> {
    Cookies.set('loggin', false )
    contextLogin.setLoginContext(false)    
    router.push('/login') 
  }

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light elevation-1">
        <ul className="navbar-nav">
          {/*boton control del menu izquierdo */}
          <li className="nav-item">
            <a className="nav-link" onClick={AbrirMenu} data-widget="pushmenu" href="#" role="button"> <FontAwesomeIcon icon={faBars} className="icon-size-1 icon-elevation-1"/> </a>
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

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/pagos">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faSackDollar} className="icon-principal" />
                <span className="d-block text-principal"><strong>Pagos</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/cobros">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faDollar} className="icon-principal" />
                <span className="d-block text-principal"><strong>Cobros</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/produccion">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faIndustry} className="icon-principal" />
                <span className="d-block text-principal"><strong>Produccion</strong></span>
              </a>
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/rrhh">
              <a href="#" className="nav-link text-center pt-0 pb-0 pl-3 pr-1">
                <FontAwesomeIcon icon={faPeopleGroup} className="icon-principal" />
                <span className="d-block text-principal"><strong>RRHH</strong></span>
              </a>
            </Link>
          </li>

        </ul>
        <ul className="navbar-nav ml-auto">
      {/*
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
      */}


          <li className="nav-item d-none d-sm-inline-block" >
              <a className="nav-link text-center pt-0 pb-0 pl-3 pr-2" onClick={logout} data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <FontAwesomeIcon icon={faRightToBracket} className="icon-principal" />
                <span className="d-block text-principal"><strong>Logout</strong></span>
              </a>
          </li>
          
        </ul>
      </nav>      
    
    </>
  )
}
