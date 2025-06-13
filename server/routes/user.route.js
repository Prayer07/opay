import express from "express"
import Opay from "../models/user.model.js"
import { signup, login, addMoney, withdraw, transfer, dashboard, userInfo, getTransactions} from "../controllers/user.controller.js"
import { authenticateToken } from "../middleware/authMiddleware.js"
import { verifyToken } from "../middleware/auth.js"
const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.get("/dashboard", authenticateToken, dashboard)

router.get("/user-info", verifyToken, userInfo)

router.post("/add-money", verifyToken, addMoney)

router.post("/withdraw", verifyToken, withdraw)

router.post("/transfer", verifyToken, transfer)

router.get("/transactions", verifyToken, getTransactions)

export default router