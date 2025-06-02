import express from "express"
import Opay from "../models/user.model.js"
import { signup, login, trans, userInfo } from "../controllers/user.controller.js"
const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.get("/user/:phone",userInfo)

router.post("/transfer",trans)

export default router