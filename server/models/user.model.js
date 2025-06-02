import mongoose from "mongoose";
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
    },
    {
        timestamps: true,
    }
)

const Opay = mongoose.model("Opay", OpaySchema)

export default Opay;

