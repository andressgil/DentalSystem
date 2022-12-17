import authenticationModel from "../models/authenticationModel.js"
import bcrypt from "bcrypt"

//POST
export async function createUser(req, res){

    const usuario = req.body.usuario

    const {password} = usuario
    const passwordCrypt = await bcrypt.hash(password,10)
    usuario.password =  passwordCrypt


    let documento

    try {
        documento = await authenticationModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    res.status(201).json(usuario)
}

// read

export async function readUser(req, res) {

    const user = req.body.user

    let documento

    try{
        documento = await authenticationModel.findOne({"user":user})
    }catch(error){
        res.status(400).json(error.message)
        return
    }

    res.status(200).json(documento)
}

//UPDATE // [pendiente pruebas]
export async function updateUser(req, res) {
  
    const user = req.body.user

    const usuario = req.body.usuario

    const {password} = usuario
    const passwordCrypt = await bcrypt.hash(password,10)
    usuario.password =  passwordCrypt

    let documento

    try {
        documento = await authenticationModel.updateOne({"user":user}, usuario)//dentro de (la primer peticion es q busq ese user, con el segudo es q haga el cambio)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
   
    res.status(200).json(documento)
}

//DELETE
export async function deleteUser(req, res) {
  
    const user = req.body.user
  
    let documento = null

    try {
        documento = await authenticationModel.deleteOne({"user": user})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
   
    res.status(200).json(documento)
}