import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import adminRouter from "./routes/admin.route.js"
import dotenv from "dotenv"
// import http from "http"
// import { Server } from "socket.io"
// import { connectedUsers } from "./utils/socketStore.js"


dotenv.config()
const app = express()
const port = 3000
// const server = http.createServer(app)
// const io = new Server(server, {
//     cors: {
//         origin: '*', //adjust for production
//         methods: ["GET", "POST"]
//     }
// })

//middleware
app.use(cors())
app.use(bodyParser.json())

// //store connected users
// const connectedUsers = new Map() inside utils folder now

//On connection
// io.on('connection', (socket) => {
//     console.log("A user connected")

//     socket.on("register", (phone) =>{
//         connectedUsers.set(phone, socket.id)
//         console.log(`Registered phone ${phone} with socket ID ${socket.id}`)
//     })

//     socket.on("disconnect", () =>{
//         for (const [phone, id] of connectedUsers.entries()){
//             if (id === socket.id) connectedUsers.delete(phone)
//         }
//     console.log("A user disconnected")
//     })
// })

// //make io available in routes/controllers
// app.set('io', io)

// //start server
// server.listen(3001, () => console.log(`Server is running on port 3001`))

//routes
app.use("/", userRouter)
app.use("/admin", adminRouter)

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