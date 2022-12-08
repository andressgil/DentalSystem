import express from "express"
import {createPatient} from "../controllers/patientController.js"

const patientRouter = express.Router()

//CRUD
//POST= CREAR
patientRouter.post("/", (req, res) =>{
    createPatient(req, res)
})

//GET= READ leer 
patientRouter.get("/", (req, res) =>{
    // readPatient(req, res)
})

//PATCH= UPDATE actualizar
patientRouter.patch("/", (req, res) =>{
    // updatePatient(req, res)
})

//DELETE= eliminar
patientRouter.delete("/", (req, res) =>{
    // deletePatient(req, res)
})

export default patientRouter

