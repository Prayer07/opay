import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import adminRouter from "./routes/admin.route.js"
import dotenv from "dotenv"


dotenv.config()
const app = express()
const port = 3000


//middleware
app.use(cors(
    {
        origin: ["https://opay07-prayer07s-projects.vercel.app/"],
        methods: ["POST", "GET"],
    }
))
app.use(bodyParser.json())

//routes
app.use("/", userRouter)

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected!")
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch(() =>{
    console.log("Could not connect")
})