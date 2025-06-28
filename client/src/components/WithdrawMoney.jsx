import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function WithdrawMoney() {

  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleWithdraw = async () =>{
    const token = sessionStorage.getItem("token")

    if(!token) return alert("You must be logged in")

    setLoading(true)

    try {
      const res = await fetch("https://opay-server-inky.vercel.app/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({amount})
      })

      const data = await res.json()

      if(res.ok){
        alert(data.message)
        setAmount("")
        navigate("/dashboard")
      }else{
        alert(data.message || "Withdraw failed")
      }

    } catch (error) {
      alert("Error withdrawing funds")
    }finally{
      setLoading(false)
    }

  }

    const handleChange = (e) =>{

    const {name, value} = e.target;

    if(name === "password"){
      if(!/^\d*$/.test(value))return;
    }

        if(name === "phone"){
      if(!/^\d*$/.test(value))return;
    }

    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className="withdraw-money">
        <div className="withdraw-money-container">
            <h1>withdraw</h1>
            <input type="text" inputMode='numeric' pattern='[0-9]' placeholder='Enter amount' name='amount' value={amount} onChange={handleChange}/> <br />
            <button onClick={handleWithdraw}>Withdraw</button>
            {loading && <p>Processing withdrawal...</p>}
        </div>
    </div>
    </>
  )
}

export default WithdrawMoney