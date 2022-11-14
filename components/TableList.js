import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUp , faBars } from '@fortawesome/free-solid-svg-icons'

export default function TableList({titulo='Productos'}) {
  return (
    <>
      <div className="card h-100">
        <div className="card-header border-0">
          <h3 className="card-title"><b>{titulo}</b></h3>
          <div className="card-tools">
            <a href="#" className="btn btn-tool btn-sm">
              <i className="fas fa-download" />
            </a>
            <a href="#" className="btn btn-tool btn-sm">
              <FontAwesomeIcon icon={faBars} />  
            </a>
          </div>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-sm table-striped " style={{fontSize:'14px'}}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Total Pendientes</th>
                <th>Saldos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  P00001
                </td>
                <td>Proveedor SA</td>
                <td>
                  7.500.000gs
                </td>
                <td>
                  1.200.000gs
                </td>
              </tr>
              <tr>
                <td>
                  P00002
                </td>
                <td>Proveedor 2 SA</td>
                <td>
                  10.500.000gs 
                </td>
                <td>
                  3.300.000gs
                </td>
              </tr>
              <tr>
                <td>
                  P00003
                </td>
                <td>Proveedor 3 SA</td>
                <td>
                  20.000.000gs
                </td>
                <td>
                  5.000.000gs
                </td>
              </tr>
              <tr>
                <td>
                  P00008
                </td>
                <td>Proveedor 4 SA</td>
                <td>
                  3.000.000gs
                </td>
                <td>
                  500.000gs
                </td>
              </tr>
              <tr>
                <td colSpan="2"><b>Totales</b></td>
                <td><b>41.000.000gs</b></td>
                <td><b>10.000.000gs</b></td>
              </tr>
              <tr>
                <td colSpan="3"><b>Saldos</b></td>
                <td><b>31.000.000gs</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    </>
  )
}
