import Opay from "../models/user.model.js"
import Admin from "../models/admin.model.js"

const isAdmin = async (req, res, next) => {
    if (req.user.phone !== process.env.ADMIN_PHONE){
        return res.status(403).json({message: "Access denied. Admins only."})
    }
    next()
}

export default isAdmin;