import quotesModels from "../models/quotesModels.js"

//CRUD
//CREATE: POST
export async function createQuotes(req, res) {
    //const {id, fecha_hora, tipoProcedimiento, estado } = req.body.citas
    const citas = req.body
    let documento
    try {
        documento = await quotesModels.create(citas)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}
//READ: GET
export async function readQuotes(req, res) {
    const id = req.body.id
    let documento
    try {
        documento = await quotesModels.findOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}
//UPDATE: PUT / PATCH 
export async function updateQuotes(req, res) {
    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update
    const id = req.body.id
    const updates = req.body.updates

    let documento
    try {
        documento = await quotesModels.updateOne({ "_id": id }, updates, { runValidators: true })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}
//DELETE: DELETE
export async function deleteQuotes(req, res) {
    const id = req.body.id

    let documento = null
    try {
        documento = await quotesModels.deleteOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}
