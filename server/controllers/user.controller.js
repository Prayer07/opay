import dotenv from "dotenv"
import Opay from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { connectedUsers } from "../utils/socketStore.js";

dotenv.config()

const signup = async (req, res) =>{        

        const {fname, lname, phone, password} = req.body

        try {

            const existingUser = await Opay.findOne({phone})

            if (existingUser){
                return res.status(400).json({message: "Phone number already exists"})
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
    
            const newUser = new Opay({
                fname,
                lname,
                phone,
                password: hashedPassword,
                balance:0,
            })    
            
            await newUser.save()
    
            res.status(201).json({message: "Signup Successfully"})
    
        } catch (err) {
            // console.error("Error signing up:", err)
            res.status(500).json({message: "Something went wrong"})
        }
}

const login = async (req, res) =>{
    const {phone, password} = req.body

    try {
        const user = await Opay.findOne({phone})
        const isMatch = await bcrypt.compare(password, user.password)

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid email or password"})
        }

        const token = jwt.sign(
            {phone: user.phone}, process.env.JWT_TOKEN_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        res.status(200).json({
            token,
            user: {
                fname: user.fname,
                phone: user.phone,
                balance: user.balance
            }
        })

        // res.status(200).json({message: "Login successfully"})

    } catch (err) {
        // console.error("Login error: ", err)
        res.status(500).json({message: "Server error"})
    }
}

const dashboard = async (req, res) =>{
    try {
        const user = await Opay.findOne({phone: req.user.phone})

        if(!user){
            return res.status(404).json({message: "User not found"})
        } 

            res.status(200).json({
                fname: user.fname,
                phone: user.phone,
                balance:user.balance,
            });

    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const addMoney = async (req, res) =>{
    const {amount} = req.body;
    const userPhone = req.user.phone

    try {
        const user = await Opay.findOne({phone: userPhone})

        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        user.balance += parseFloat(amount);
        await user.save()

        res.json({message: " Funds added successfully ", balance: user.balance})

    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

const withdraw = async (req, res) =>{
    const {amount} = req.body;
    
    const phone = req.user.phone

    if(!phone || !amount || Number(amount) <= 0){
        return res.status(404).json({message: "Invalid withdrawal request"})
    }

    try {
        const user = await Opay.findOne({phone})

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        if(user.balance < amount){
            return res.status(404).json({message: "Insufficient balance"})
        }

        user.balance -= Number(amount);

        user.transactions.push({
            type: "withdrawal",
            amount: Number(amount),
            date: new Date()
        })

        await user.save();

        res.status(200).json({message: `₦${amount} withdrawn successfully`, balance: user.balance})


    } catch (error) {
    res.status(500).json({message:"Something went wrong"})
    }

}

const transfer = async (req, res) =>{
    const io = req.app.get('io')

    const {receiverPhone, amount} = req.body

    const senderPhone = req.user.phone

    if(!receiverPhone || !amount) {
        return res.status(400).json({message: "All fields are required"})
    }

    if(senderPhone === receiverPhone){
        return res.status(400).json({message:"Theft 😅 You cannot send money to yourself"})
    }

    try {
        const sender = await Opay.findOne({phone: senderPhone})
        const receiver = await Opay.findOne({phone: receiverPhone})

        if (!sender){
            return res.status(404).json({message: "Sender not found"})
        }

        if (!receiver){
            return res.status(404).json({message: "Receiver not found"})
        }

        if (sender.balance < amount){
            return res.status(400).json({message: "Insufficient balance"})
        }

        //perform transfer
        sender.balance -= Number(amount)
        receiver.balance += Number(amount)

        sender.transactions.push({
            type: "transfer",
            amount: Number(amount),
            from: senderPhone,
            date: new Date()
        })

        receiver.transactions.push({
            type: "received",
            amount: Number(amount),
            from: senderPhone,
            date: new Date()
        })

        await sender.save()
        await receiver.save()

        const senderSocketId = connectedUsers.get(senderPhone)
        const receiverSocketId = connectedUsers.get(receiverPhone)

        if (senderSocketId){
            io.to(senderSocketId).emit("refreshUserData")
            console.log("📥 Receiver socket ID:", receiverSocketId)
        }

        if (receiverSocketId){
            io.to(receiverSocketId).emit("refreshUserData")
            console.log("📤 Sender socket ID:", senderSocketId) 
        }




        res.status(200).json({message: "Transfer Successful", newBalance: sender.balance})

    } catch (err) {
        res.status(500).json({message: "Transfer failed"})
    }
}

const userInfo = async (req, res) =>{

    const userPhone = req.user.phone

    try {
        const user = await Opay.findOne({phone: userPhone})

        if(!user){
            return res.status(404).json({message: "User not found"})
        } 

            res.json({
                fname: user.fname,
                phone: user.phone,
                balance:user.balance,
            });

    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const getTransactions = async (req, res) =>{
    try {
        const user = await Opay.findOne({phone: req.user.phone})

        if(!user) return res.status(404).json({message: "User not found"})

        res.status(200).json({transactions: user.transactions.reverse()})

    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

export {signup,login,dashboard,addMoney,withdraw,transfer,userInfo,getTransactions}