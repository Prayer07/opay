import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Transfer() {

    const [receiverPhone, setReceiverPhone] = useState("")
    const [amount, setAmount] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChangeReceiver = (e) =>{
        const value = e.target.value;
        
            if(!/^\d*\.?\d*$/.test(value))return;

        setReceiverPhone(value)
    }
    const handleChangeAmount = (e) =>{
        const value = e.target.value;
        
            if(!/^\d*\.?\d*$/.test(value))return;

        setAmount(value)
    }

    const handleTransfer = async (e) =>{
        e.preventDefault()

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
                <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Transfer Money</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Receiver's Number</Label>
                    <Input type="text" inputMode='numeric' pattern='[0-9]{10}'
                    placeholder="Input Receiver's Number" name='receiverPhone' maxLength={10}
                    value={receiverPhone} onChange={handleChangeReceiver}/>
                </div>
              </div> <br />
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Amount</Label>
                    <Input type="text" inputMode='numeric'
                    placeholder='Input amount' name='amount'
                    value={amount} onChange={handleChangeAmount}/>
                </div>
              </div> <br />
            <Button type="submit" className="w-full">
              Transfer
            </Button>
            {loading && <p style={{textAlign:"center", margin:15}}>Processing transfer...</p>}
            </form>
          </CardContent>
        </Card>

    </div>
    </>
  )
}

        // <div className="transfer-container">
        //         <input type="text" placeholder="Receiver Phone Number" value={receiverPhone} onChange={(e) => setReceiverPhone(e.target.value)} /> <br />
        //         <input style={{padding: "10px 2px"}} type="text" inputMode='decimal'placeholder='Input amount'value={amount} onChange={handleChange} /><br />
        //         <button onClick={handleTransfer}>Transfer</button>
        //         {loading && <p style={{textAlign:"center"}}>Processing transfer...</p>}
        // </div>
