import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
//import { faBottleWater } from '@fortawesome/free-regular-svg-icons'


export default function Login() {
  return (
    <div className="container-fluid" style={{marginTop:'50px'}}>

      <div className="login-box mx-auto my-auto elevation-1">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="" className="h1"><b>ECOSYS</b></a>
          </div>
          <div className="card-body">
            <p className="login-box-msg"><b>INICIO SESION</b> </p>
            <form method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Usuario" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block"><b>Login</b></button>
                </div>
              </div>
            </form>
            <div className="row">
              <FontAwesomeIcon icon={faUserShield} className="icon-principal " style={{fontSize:'50px'}} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
