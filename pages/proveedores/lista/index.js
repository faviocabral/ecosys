import React, {useRef , useState , useEffect} from 'react'
import Dashboard from '../../../components/Dashboard.js'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export default function Lista() {
  const nombreRef = useRef()
  const router = useRouter()
  const [listaProveedor, setListaProveedor] = useState([])

  useEffect(()=> {
    listar()
  },[])


  const listar = async()=>{

    Swal.showLoading()
    try {
      await fetch('/api/proveedores')
      .then(response => response.json())
      .then(json => {
        Swal.close()
        setListaProveedor(json.rows)
      })
      .catch(err => alert(err))
    } catch (error) {
      alert(error)
    }
        
  }

  const Editar = ()=>{  
    alert('editar')
    //router.push('/proveedores/proveedor')
  }

  return (
    <Dashboard>
      <div className="container">        
          <div className="row">
            <h2>Lista Proveedores</h2>
            <table className="table table-sm table-condensed">
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
                {
                  
                    listaProveedor?.map((item , index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index +1}</td>
                                <td>{item.codigo}</td>
                                <td>{item.nombre}</td>
                                <td>{item.ruc}</td>
                                <td>{item.telefono}</td>
                                <td>{item.telefono2}</td>
                                <td>{item.correo_electronico}</td>
                                <td>{item.ciudad}</td>
                                <td>{item.barrio}</td>
                                <td>{item.direccion}</td>
                                <td>{item.estado}</td>

                            </tr>

                        )
                    })

                }
              </tbody>
            </table>
           
          </div>

      </div>

    </Dashboard>
  )
}
