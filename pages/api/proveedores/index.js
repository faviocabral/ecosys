import{development} from '../../../knexfile.js'
const knex = require('knex')(development)


export default async function  handler(req , res ){


    switch (req.method) {
        case 'GET':
            try {

                await knex.select()
                .from('contactos')
                .then(async (rows)=>{
                    res.status(200).json({ rows })
                })
                .catch(err => res.status(500).json({message: 'hubo un error en la consulta ' + err }))                


                //return res.status(200).json({message:' otbtener datos !!!'})     
            } catch (error) {
                return res.status(500).json({message:' hubo un error con el metodo get !!!'})
            }
        case 'POST':
            try {
                const proveedor = req.body
                proveedor.codigo = 'P' + proveedor.ruc
                
                await knex.insert(proveedor)
                  .returning('id')
                  .into('contactos')
                  .then(async (id)=> {
                    return res.status(200).json({message:' datos insertados correctamente !!!' , id: id})
                  })
                  .catch((err)=>{ return res.status(200).json({message:' hubo un problema !!!', error : err}) })                  
                  
                //return res.status(200).json({message:' insertar datos !!!' , dato: proveedor})     
            } catch (error) {
                return res.status(500).json({message:' hubo un error con el metodo get !!!'})
            }
        default:
            return res.status(500).json({message:' metodo no valido !!!'})
    }


}