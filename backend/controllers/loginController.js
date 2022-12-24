import bcrypt from "bcrypt";
import authenticationModel from "../models/authenticationModel";


export default async function login(req, res){
    
    try {
        const {user, password} = req.headers

        const document = await authenticationModel.findOne({"user":user})

        if(document != null){
            const documentPassword = document.password
            const access = await bcrypt.compare(password, documentPassword)
    
            if (access){
                res.json({ "message": "Bienvenido"})
            }
        } else {
            res.sendStatus(401)
        }
       

    } catch (error) {
        res.status(401).json(error.message)
    }
}