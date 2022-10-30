import React ,{useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import AppContext from '../../context/AppContext.js'

export default function Login() {
  const router = useRouter()
  const contextLogin = useContext(AppContext)

  const login = (e)=>{
    e.preventDefault()
    contextLogin.setLoginContext(true)
    router.push("/")
  }

  useEffect(()=>{
    contextLogin.setLoginContext(false)
    //
  },[])


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
                  <button type="submit" className="btn btn-primary btn-block" onClick={login}><b>Login</b></button>
                </div>
              </div>
            </form>
            <div className="row mt-3 mb-3">
              <FontAwesomeIcon icon={faUserShield} className="icon-principal  text-primary" style={{fontSize:'50px'}} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
