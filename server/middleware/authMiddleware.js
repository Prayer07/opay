import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({message: "No token provided"})
    
    jwt.verify(token, JWT_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({message: "Invalid or expired token"})

        req.user = user
        next()
    })
} 

