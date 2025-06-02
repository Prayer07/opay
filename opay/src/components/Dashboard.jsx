import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bell from "../assets/bell.png"
import headphones from "../assets/headphones.png"
import scanner from "../assets/scanner.png"
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'
import Logout from './Logout'

function Dashboard() {

  const [user, setUser] = useState({
    fname: "",
    balance: 0,
  })

    useEffect(() =>{
        const phone = localStorage.getItem("phone")
        if(phone){
            fetch(`http://localhost:3000/user/${phone}`)
            .then(res => res.json())
            .then(data => {
              setUser({
              fname: data.fname,
              balance: data.balance,
              })
            })
            .catch(err => console.error("Error loading user data:", err))
        }
    }, [])

  return (
    <>
    <div className="homepage">
      <div className="homepage-container">
        <nav>
          <div className="logo">
            <p style={{fontSize:"12px"}}>Hi, {user.fname} </p>
          </div>
          <div className="img">
          <img src={headphones} alt='bell' width={13} height={13} />
          <img src={scanner} alt='bell' width={13} height={13} />
          <img src={bell} alt='bell' width={13} height={13} />
          </div>
        </nav>
        <Money bal = {`₦${user.balance}`} />
        <Withdraw/>
        <Bills/>
        <Logout/>
      </div>
    </div>
    </>
  )
}

export default Dashboard