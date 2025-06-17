import mongoose from "mongoose";

const transactionsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["withdrawal", "transfer", "received", "deposit"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    to: String,
    from: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const OpaySchema = mongoose.Schema (
    {
        fname: {
            type: String,
            require: [true, "Enter first name"],
        },

        lname: {
            type: String,
            require: [true, "Enter last name"]
        },

        phone: {
            type: String,
            require: [true, "Enter Phone number"],
            unique: true
        },

        password: {
            type: String,
            require: [true, "Enter password"]
        },
        balance:{
            type: Number,
            default: 0
        },
        transactions: [transactionsSchema],

        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

const Opay = mongoose.model("Opay", OpaySchema)

export default Opay;

