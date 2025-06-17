import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import Opay from "../models/user.model.js"
import Admin from "../models/admin.model.js"
import dotenv from "dotenv"

dotenv.config()

export const adminLogin = async (req, res) =>{
    const {username, phone, password} = req.body
    try {
        const admin = await Admin.findOne({username})
        if(!admin) return res.status(400).json({message: "Invalid credentials"})

        if (phone !== process.env.ADMIN_PHONE) return res.status(403).json({message: "Access denied"})

        const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD)
        if (!isMatch) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign({adminId: "admin._id"}, process.env.JWT_TOKEN_SECRET, {expiresIn: "1h"})
        res.json({token})

    } catch (err) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await Opay.find().select("-password")
        res.json({users})

    } catch (err) {
        res.status(500).json({message: "Server error"})
    }
}

export const getAllTransactions = async (req, res) =>{
    try {
        const users = await Opay.find().select("phone transactions")
        const allTx = users.flatMap(user => 
        user.transactions.map(tx => ({phone: user.phone, ...tx})))
        res.json(allTx.reverse())
    } catch (err) {
        res.status(500).json({message: "Error fetching transactions"})
    }

}

export const deleteUsers = async (req, res) => {
    const {phone} = req.params

    try {
        const user = await Opay.findOneAndDelete({phone})
        if(!user) return res.status(404).json({message: "User not found"})
        res.json({message: "User deleted successfully"})
    } catch (err) {
        res.status(500).json({message: "Server error"})
    }
}

export const updateUserBalance = async (req, res) => {
    const {phone} = req.body
    const {amount} = req.body

    const user = await Opay.findOne({phone})
    if(!user) return res.status(404).json({message: "User not found"})

    user.balance = Number(amount)
    await user.save()
    res.json({message: "Balance updated", balance: user.balance})
}

export const creditUser = async (req, res) =>{
    const {phone, amount} = req.body
    try {
        const user = await Opay.find({phone})
        if (!user) return res.status(404).json({message: "User not found"})

        user.balance += Number(amount)
        user.transactions.push({type: "admin_credit", amount:Number(amount), date: new Date()})
        res.json({message: "User credited", balance: user.balance})
    } catch (err) {
        res.status(500).json({message: "Something went wrong"})
    }

}

export const debitUser = async (req, res) => {
    const {phone, amount} = req.body
    try {
        const user = await Opay.findOne({phone})
        if(!user) return res.status(404).json({message: "User not found"})
        if(user.balance < amount) return res.status(400).json({message: "Insufficient balance"})
        
        user.balance -= Number(amount)
        user.transactions.push({type: "admin_debit", amount: Number(amount), date: new Date()})
        await user.save()

        res.json({message: "User debited", balance: user.balance})

    } catch (err) {
        res.status(500).json({message: "Something went wrong"})
    }

}
