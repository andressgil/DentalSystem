import express from "express"
import mongoose from "mongoose";
import patientRouter from "./routes/patientRouter.js";


const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El Servidor se esta ejecutando correctamente. ");
})

mongoose.connect("mongodb+srv://Syden:Syden@clustersyden.zoku9s3.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("La base de datos se encuentra conectada. ");
    }
    
})

app.use(express.json())
app.use("/patient", patientRouter)