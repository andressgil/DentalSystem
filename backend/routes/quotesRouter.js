import express from "express"
import { createQuotes, readQuotes, updateQuotes, deleteQuotes } from "../controllers/quotesController.js"

const quotesRouter = express.Router()

//CRUD
//CREATE: POST
quotesRouter.post("/", (req, res) => {
    createQuotes(req, res)
})

//READ: GET
quotesRouter.get("/", (req, res) => {
    readQuotes(req, res)
})

//UPDATE: PUT / PATCH
quotesRouter.patch("/", (req, res) => {
    updateQuotes(req, res)
})

//DELETE: DELETE
quotesRouter.delete("/", (req, res) => {
    deleteQuotes(req, res)
})

export default quotesRouter