import React, { useState } from 'react'
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

function AddMoney() {

    const [amount, setAmount] = useState("")

    const [balance, setBalance] = useState(null)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) =>{//cleaner code by ai

        const value = e.target.value;

        if(!/^\d*$/.test(value))return;

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
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Deposit Money</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddMoney}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Amount</Label>
                <Input type="text" inputMode='numeric'
                placeholder='Input amount' name='amount'
                value={amount} onChange={handleChange}/>
            </div>
          </div> <br />
        <Button type="submit" className="w-full">
          Deposit
        </Button>

        {loading && <p style={{textAlign:"center", margin:15}}> Adding money...</p>}
        </form>
      </CardContent>
    </Card>

    </div>
    </>
  )
}

        // <div className="add-money-container">
        //     <form onSubmit={handleAddMoney} >
        //     <input style={{padding: "10px 2px"}} type="text" inputMode='decimal'
        //         placeholder='Input amount'
        //         value={amount} onChange={handleChange} />{" "} <br />
        //     <button style={{padding: "10px 2px", marginLeft:"40px", marginTop:"5px", width:"100px"}} type='submit'>Add Money</button>
        //     </form>
        //     {balance !== null && <p>New Balance: ₦{balance}</p>}
        //     {loading && <p>Adding money...</p>}
        // </div>

export default AddMoney