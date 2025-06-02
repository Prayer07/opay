import Opay from "../models/user.model.js";


const signup = async (req, res) =>{        
        try {
            const {fname, lname, phone, password} = req.body

            const existingUser = await Opay.findOne({phone})
            if (existingUser){
                return res.status(400).json({message: "Phone number already exists"})
            }
    
            const newUser = new Opay({
                fname,
                lname,
                phone,
                password,
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

        if(!user || user.password !==password){
            return res.status(400).json({message: "Invalid email or password"})
        }

        res.json({
            fname: user.fname,
            phone: user.phone,
            balance: user.balance,
        });

        // res.status(200).json({message: "Login successfully"})

    } catch (err) {
        // console.error("Login error: ", err)
        res.status(500).json({message: "Server error"})
    }
}

const userInfo = async (req, res) =>{
    try {
        const user = await Opay.findOne({phone: req.params.phone})

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

const trans = async (req, res) =>{
    const {senderPhone, amount} = req.body;

    try {
        const user = await User.findOne({phone: senderPhone})

        if(!user || user.balance < amount){
            return res.status(400).json({message: "Insufficient funds"})
        }

        user.balance -= amount;
        await user.save();

        res.json({message: "Transfer successful", balance: user.balance})

    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export {signup,login,userInfo,trans}