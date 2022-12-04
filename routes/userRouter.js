import express from "express"
import {createUser, readUser, updateUser, deleteUser} from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD
//POST= CREAR
userRouter.post("/", (req, res) =>{
    createUser(req, res)
})

//GET= READ leer 
userRouter.get("/", (req, res) =>{
    readUser(req, res)
})

//PATCH= UPDATE actualizar
userRouter.patch("/", (req, res) =>{
    updateUser(req, res)
})

//DELETE= eliminar
userRouter.delete("/", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter






