import mongoose from "mongoose";

const authenticationModel = mongoose.Schema({
    "user":{ type: String, unique: true, required: true},
    "password":{ type: String, unique: true, required: true}
 })

export default mongoose.model("credentials", authenticationModel)