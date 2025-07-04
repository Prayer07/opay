import jwt from "jsonwebtoken"

export const verifyAdminToken = (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({message: "Access denied"})
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        req.admin = decoded
        next()
        
    } catch (err) {
        res.status(401).json({message: "Invalid token"})
    }
}