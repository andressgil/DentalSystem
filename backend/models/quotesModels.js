import mongoose from "mongoose";

const quotesModel = mongoose.Schema({
    "_id": { type: Number, required: true, unique: true },
    "fecha_hora": { type: Date, required: true },
    "tipoProcedimiento": { type: String, required: true },
    "estado": { type: String, required: true, enum: ["activa", "cancelada", "actualizada"] }
});

export default mongoose.model("quotes", quotesModel);