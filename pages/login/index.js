import React ,{useState, useContext, useEffect, useRef} from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserShield } from '@fortawesome/free-solid-svg-icons'
import AppContext from '../../context/AppContext.js'
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Cookies from 'js-cookie'
const { randomBytes } = require('crypto')
//https://www.section.io/engineering-education/client-side-auth-with-express-cookie-parser/



export default function Login() {
  const userInput = useRef()
  const router = useRouter()
  const contextLogin = useContext(AppContext)
  const [data, setData] = useState({})

  const updateData = e => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
  }

  const login = async (e)=>{
    e.preventDefault()
    Swal.showLoading()
    fetch('api/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
      Swal.close()
      console.log(json)
      if(!json.login){
        toast.error('Datos incorrectos !!!',{ autoClose:1000 })
      }else{
        Cookies.set('loggin', true, { expires: 1 })
        toast.success('Datos correctos !!!',{ autoClose:500 })
        contextLogin.setLoginContext(true)
        router.push("/proveedores")    
      }
    
    })
    .catch(err => console.log(err))


  }

  useEffect(()=>{
    userInput.current.focus()
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
            <form onSubmit={login}>
              <div className="input-group mb-3">
                <input type="text" ref={userInput} className="form-control" placeholder="Usuario" name='usuario' onChange={updateData}  required/>
                <div className="input-group-append">
                  <div className="input-group-text">
                   <FontAwesomeIcon icon={faUser} /> 
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" name='password' onChange={updateData} required/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" ><b>Login</b></button>
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
