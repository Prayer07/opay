import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function TransactionHistory() {

    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        const fetchTransactions = async () =>{
            const token = sessionStorage.getItem("token")
            if(!token) return alert("Login required")

                setLoading(true)

            try {
                const res = await fetch("https://opay-server-inky.vercel.app/transactions", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                const data = await res.json()

                if(res.ok){
                    setTransactions(data.transactions)
                }else{
                    alert(data.message)
                }

            } catch (error) {
                alert("Error fetching transaction history")
            }finally{
                setLoading(false)
            }
        }

        fetchTransactions()

    },[])

  return (
    <>
    <div className="transHistory">
        <h1>Transaction History</h1>
        <Card>
        <CardContent>
            {transactions.length === 0 ? (
        <p>No transactions yet</p>
    ) : (
        <ul>
            {transactions.map((tx, index) => (
                <li key={index}>
                    <strong>{tx.type.toUpperCase()}</strong> - ₦{tx.amount}
                    {tx.to && ` →  ${tx.to}`}
                    {tx.from && ` ← ${tx.from}`}
                    <br />
                    <small>{new Date(tx.date).toLocaleDateString()} at </small>
                    <small>{new Date(tx.date).getHours() < 10 ? "0" + new Date(tx.date).getHours() : new Date(tx.date).getHours() }</small>: 
                    <small>{new Date(tx.date).getMinutes() < 10 ? "0" + new Date(tx.date).getMinutes() : new Date(tx.date).getMinutes() }</small>:
                    <small>{new Date(tx.date).getSeconds() < 10 ? "0" + new Date(tx.date).getSeconds() : new Date(tx.date).getSeconds()}</small>
                </li>
            ))}
        </ul>
    ) }
    {loading && <p>Loading....</p>}
        </CardContent>
    </Card>
    </div>
    </>
  )
}

export default TransactionHistory