import patientModel from "../models/patientModel.js"

//POST
export async function createPatient(req, res){

    const paciente = req.body.paciente

    let documento

    try {
        documento = await patientModel.create(paciente)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    res.status(201).json(paciente)
}

// //READ
// export async function readPatient(req, res) {
//     //implementacion aqui  
//     const id = req.body.id

//     let documento

//     try {
//         documento = await patientModel.findOne({"_id": id})
//     } catch (error) {
//         res.status(400).json(error.message)
//         return
//     }

//     res.status(200).json(documento)
// }

// //UPDATE
// export async function updatePatient(req, res) {
  
//     const cedula = req.params.cedula
//     const updates = req.body.updates

//     let documento

//     try {
//         documento = await patientModel.updateOne({"_id":id}, updates)//dentro de (la primer peticion es q busq ese id, con el segudo es q haga el cambio)
//     } catch (error) {
//         res.status(400).json(error.message)
//         return
//     }
   
//     res.status(200).json(documento)
// }

// //DELETE
// export async function deletePatient(req, res) {
//     //implementacion aqui 
//     const id = req.body.id
  
//     let documento = null

//     try {
//         documento = await patientModel.deleteOne({"_id": id})
//     } catch (error) {
//         res.status(400).json(error.message)
//         return
//     }
   
//     res.status(200).json(documento)
// }