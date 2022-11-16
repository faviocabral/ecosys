import React, {useRef , useState , useEffect} from 'react'
import Dashboard from '../../../components/Dashboard.js'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export default function Proveedor() {
  const nombreRef = useRef()
  const router = useRouter()
  const [proveedor, setProveedor] = useState({})

  useEffect(()=> {
    setTimeout(() => {
      nombreRef.current.focus()
    }, 300);
  },[])

  const updateData = e => {
    setProveedor({
        ...proveedor,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    setProveedor({
                  ...proveedor, 
                  codigo: e.target.codigo.value,
                  nombre: e.target.nombre.value,
                  ruc: e.target.ruc.value,
                  telefono: e.target.telefono.value,
                  telefono2: e.target.telefono2.value,
                  correo_electronico: e.target.correo_electronico.value,
                  ciudad: e.target.ciudad.value , 
                  barrio: e.target.barrio.value,
                  direccion: e.target.direccion.value,
                  retencion: e.target.retencion.value,
                  estado: e.target.estado.value,
                  limite_credito: e.target.limite_credito.value,
                })
    alert(JSON.stringify(proveedor))
    Swal.showLoading()
    try {
      await fetch('/api/proveedores',{
        method: 'POST', 
        body: JSON.stringify(proveedor), 
        headers: {'Content-Type': 'application/json; charset=UTF-8'}})
      .then(response => response.json())
      .then(json => {
        Swal.close()
        alert(JSON.stringify(json))
        setProveedor({})
        nombreRef.current.focus()
      })
      .catch(err => alert(err))
    } catch (error) {
      alert(error)
    }
        
    //alert('send submit  ' +  Object.values(proveedor).findIndex((item,index) => item.length === 0 && index !== 0 ) )
  }

  const cancelar = ()=>{  
    nombreRef.current.focus()
    router.push('/proveedores/proveedor')
  }

  return (
    <Dashboard>
      <div className="container">
        <h2>Proveedor</h2>
          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control"  placeholder="Enter email" name="codigo" value={proveedor?.codigo} tabIndex={1} readOnly={true}/>
                    <label htmlFor="codigo">Codigo</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control" placeholder="Enter password" name="telefono" onChange={updateData} value={proveedor?.telefono}  tabIndex={4}/>
                    <label htmlFor="pwd">Telefono1</label>
                  </div>
              </div>  

              <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" ref={nombreRef} placeholder="Enter email" name="nombre" onChange={updateData} value={proveedor?.nombre} tabIndex={2}/>
                    <label htmlFor="email">Nombre</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control"  placeholder="Enter password" name="telefono2" onChange={updateData} value={proveedor?.telefono2} tabIndex={5}/>
                    <label htmlFor="pwd">Telefono 2</label>
                  </div>
              </div>  

                <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control"  placeholder="Enter email" name="ruc" onChange={updateData} value={proveedor?.ruc} tabIndex={3}/>
                    <label htmlFor="email">Ruc</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control"  placeholder="Enter password" name="correo_electronico" onChange={updateData} value={proveedor?.correo_electronico} tabIndex={6}/>
                    <label htmlFor="pwd">Correo</label>
                  </div>
                </div>
            </div>


            <div className="row">
              <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="text" placeholder="Enter email" name="ciudad" onChange={updateData} value={proveedor?.ciudad} tabIndex={7}/>
                    <label htmlFor="email">Ciudad</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="estado" onChange={updateData} value={proveedor?.estado} tabIndex={10}/>
                    <label htmlFor="pwd">Estado</label>
                  </div>
              </div>  

              <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="barrio" onChange={updateData} value={proveedor?.barrio} tabIndex={8}/>
                    <label htmlFor="email">Barrio</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="retencion" onChange={updateData} value={proveedor?.retencion} tabIndex={11}/>
                    <label htmlFor="pwd">Retencion</label>
                  </div>
              </div>  

                <div className="col-lg-4">
                  <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="direccion" onChange={updateData} value={proveedor?.direccion} tabIndex={9}/>
                    <label htmlFor="email">Direccion</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="limite_credito" onChange={updateData} value={proveedor?.limite_credito} tabIndex={12}/>
                    <label htmlFor="pwd">Limite Credito</label>
                  </div>
                </div>
            </div>

            <div className="row">
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mr-3">Aceptar</button>
                    <button type="reset" className="btn btn-danger" onClick={cancelar}>Cancelar</button>
                  </div>

            </div>
          </form>
        {/*
          <div className="row">
            <h2>Lista Proveedores</h2>
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th>#</th>
                  <th>codigo</th>
                  <th>Proveedor</th>
                  <th>Ruc</th>
                  <th>Telefono</th>
                  <th>Telefono2</th>
                  <th>Correo</th>
                  <th>Ciudad</th>
                  <th>Barrio</th>
                  <th>Direccion</th>
                  <th>Estado</th>

                </tr>
              </thead>
              <tbody>
                {}
              </tbody>
            </table>
           
          </div>
        */}


      </div>

    </Dashboard>
  )
}
