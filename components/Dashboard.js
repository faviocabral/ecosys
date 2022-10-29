import React from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

export default function Dashboard({children}) {
  return (
    <>
      <Navbar />
      <Menu />
        <div className="content-wrapper" style={{minHeight: '100%', height:'100%'}}>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h5 className="m-0">Inicio</h5>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Starter Page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">

                  {children}

              </div>
            </div>
          </div>
        </div>
    </>
  )
}
