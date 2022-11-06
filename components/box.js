import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartSimple, faCircleRight, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Box({cantidad='', titulo='Titulo' , subTitulo='subTitulo' , color='bg-info' , icono=faChartSimple }) {
  return (

    <>
        <div className="col-lg-3 col-6">
            <div className={`small-box ${color}`}>
            <div className="inner">
                <h3 className="mb-1">#{cantidad}</h3>
                <p className="mb-0"><b>{titulo}</b></p>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={ icono }  />
            </div>
            <a href="#" className="small-box-footer"><b>{subTitulo}</b> <FontAwesomeIcon icon={faCircleRight}  /> </a>
            </div>
        </div>
    </>
  )
}
