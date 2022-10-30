import {useState, createContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'

//configuracion de iconos 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'react-toastify/dist/ReactToastify.css'
import 'admin-lte/dist/css/Adminlte.min.css'

//import 'admin-lte/dist/js/Adminlte.min.js'

import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import AppContext from '../context/AppContext.js'


function MyApp({ Component, pageProps }) {

  const [menu ,setMenu] = useState('Menu Principal')


  return (
    <AppContext.Provider value={{menu , setMenu}}>
      <Component {...pageProps} />
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </AppContext.Provider>
  )

}

export default MyApp
