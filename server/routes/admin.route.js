import express from "express"
import { adminLogin, getAllUsers, getAllTransactions, deleteUsers} from "../controllers/admin.controller.js"
import { verifyAdminToken } from "../middleware/authAdmin.js"
import isAdmin from "../middleware/isAdmin.js"

const router = express.Router()

router.use(verifyAdminToken, isAdmin)

// router.post("/login", adminLogin)
router.get("/users", verifyAdminToken, getAllUsers)
router.get("/transactions", verifyAdminToken, getAllTransactions)
router.delete("/user/:phone", verifyAdminToken, deleteUsers)
router.post("/user/:phone/balance", verifyAdminToken, )

export default router