import express from "express"
import patientRouter from "./routes/patientRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El Servidor se esta ejecutando correctamente. ");
})

app.use(express.json())
app.use("/user", userRouter)
app.use("/patient", patientRouter)