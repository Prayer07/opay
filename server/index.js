import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"

const app = express()
const port = 3000

//middleware
app.use(cors())
app.use(bodyParser.json())

//routes
app.use("/", userRouter)

mongoose.connect("mongodb+srv://Prince:O1N1Zy4Nt4Scvlrj@prince.jusnjgb.mongodb.net/?retryWrites=true&w=majority&appName=Prince")
.then(() =>{
    console.log("Connected!")
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch(() =>{
    console.log("Could not connect")
})