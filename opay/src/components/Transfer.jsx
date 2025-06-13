import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Transfer() {

    const [receiverPhone, setReceiverPhone] = useState("")
    const [amount, setAmount] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChange = (e) =>{
        const value = e.target.value;

        if(!/^\d*\.?\d*$/.test(value))return;

        setAmount(value)
    }

    const handleTransfer = async () =>{

        const token = sessionStorage.getItem("token")

        if(!token) return alert("You must be logged in")

        setLoading(true)

        try {
            const res = await fetch("http://localhost:3000/transfer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({receiverPhone, amount })
            })

            const data = await res.json()

            if (res.ok){
                alert(data.message)
                setAmount("")
                setReceiverPhone("")
                navigate("/dashboard")
                
            }else{
                alert(data.message || "Transfer failed")
            }

        } catch (err) {
            alert("Error during transfer")
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    <div className="transfer1">
        <div className="transfer-container">
                <input type="text" placeholder="Receiver Phone Number" value={receiverPhone} onChange={(e) => setReceiverPhone(e.target.value)} /> <br />
                <input style={{padding: "10px 2px"}} type="text" inputMode='decimal'placeholder='Input amount'value={amount} onChange={handleChange} /><br />
                <button onClick={handleTransfer}>Transfer</button>
                {loading && <p style={{textAlign:"center"}}>Processing transfer...</p>}
        </div>
    </div>
    </>
  )
}
