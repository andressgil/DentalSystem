import mongoose from "mongoose";


const patientModel = mongoose.Schema({
    "_id": { type: Number, unique: true, required: true},
    "nombre": { type: String, required: true },
    "apellido": { type: String, required: true },
    "telefono": { type: Number, required: true, unique: true }
       
})

export default mongoose.model("patients", patientModel)