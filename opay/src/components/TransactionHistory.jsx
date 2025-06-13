import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function TransactionHistory() {

    const [transactions, setTransactions] = useState([])

    useEffect(() =>{
        const fetchTransactions = async () =>{
            const token = sessionStorage.getItem("token")
            if(!token) return alert("Login required")

            try {
                const res = await fetch("http://localhost:3000/transactions", {
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
            }
        }

        fetchTransactions()

    },[])

  return (
    <>
    <h2>Transaction History</h2>
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
    </>
  )
}

export default TransactionHistory