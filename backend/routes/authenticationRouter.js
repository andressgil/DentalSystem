import express from "express";
import {createUser, readUser, deleteUser, updateUser} from "../controllers/authenticationController.js"

const authenticationRouter = express.Router()

//CRUD
//POST= CREAR
authenticationRouter.post("/", (req, res) =>{
    createUser(req, res)
})

//GET= READ leer 
authenticationRouter.get("/", (req, res) =>{
    readUser(req, res)
})

//PATCH= UPDATE actualizar
authenticationRouter.patch("/", (req, res) =>{
    updateUser(req, res)
})

//DELETE= eliminar
authenticationRouter.delete("/", (req, res) =>{
    deleteUser(req, res)
})

export default authenticationRouter