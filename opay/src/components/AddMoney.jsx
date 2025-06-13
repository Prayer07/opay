import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMoney() {

    const [amount, setAmount] = useState("")

    const [balance, setBalance] = useState(null)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) =>{//cleaner code by ai

        const value = e.target.value;

        if(!/^\d*\.?\d*$/.test(value))return;

        setAmount(value)
    }

    const handleAddMoney = async (e) =>{
        e.preventDefault();
        const token = sessionStorage.getItem("token");

        if(amount == "" || isNaN(amount) || Number(amount) <= 0 ){
            alert("Please enter a valid amount");
            return;
        }

        setLoading(true)
        
        try {
            
            const res = await fetch("http://localhost:3000/add-money", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({amount})
        });

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.message || "Something went wrong" )
        }

        alert(data.message);
        setBalance(data.balance)
        setAmount("")
        navigate("/dashboard")

        } catch (err) {
            alert(err.message || "Failed to add money");
        }finally{
            setLoading(false)
        }

    }

  return (
    <>
    <div className="add-money1">
        <div className="add-money-container">
            <form onSubmit={handleAddMoney} >
            <input style={{padding: "10px 2px"}} type="text" inputMode='decimal'
                placeholder='Input amount'
                value={amount} onChange={handleChange} />{" "} <br />
            <button style={{padding: "10px 2px", marginLeft:"40px", marginTop:"5px", width:"100px"}} type='submit'>Add Money</button>
            </form>
            {balance !== null && <p>New Balance: ₦{balance}</p>}
            {loading && <p>Adding money...</p>}
        </div>
    </div>
    </>
  )
}

export default AddMoney