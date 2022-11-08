import bcrypt from "bcrypt";
import{development} from '../../../knexfile.js'
const knex = require('knex')(development)

export default async function  handler(req , res ){
    switch (req.method) {
        case 'POST':
            try {
                const {usuario , password} = req.body
                await knex('usuarios')
                        .select()
                        .where('codigo', usuario)
                        .then(async (rows)=>{
                            
                            const match = await bcrypt.compare(password, rows[0].password);
                            return res.status(200).json({message:' logging !!!', login : match })
                        })

                //return res.status(200).json({message:' insertar datos !!!'})     
            } catch (error) {
                return res.status(500).json({message:' hubo un error con el metodo post !!!'})
            }
        default:
            return res.status(500).json({message:' metodo no valido !!!'})
    }

}