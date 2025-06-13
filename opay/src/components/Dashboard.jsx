import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bell from "../assets/bell.png"
import headphones from "../assets/headphones.png"
import scanner from "../assets/scanner.png"
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'
import Logout from './Logout'
import plus from "../assets/plus2.png"

function Dashboard() {

  const [user, setUser] = useState({
    fname: "",
    phone: "",
    balance: "",
  })

  useEffect(() =>{
    const fetchUser = async () =>{
      const token = sessionStorage.getItem("token")

      try {
        const res = await fetch("http://localhost:3000/user-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await res.json()

        if(res.ok){
          setUser(data)
        }else{
          alert(data.message || "Unauthorized")
        }

      } catch (err) {
        console.log(err)
        alert("Error fetching user")
      }
    }

    fetchUser()

  }, [])


  return (
    <>
    <div className="homepage">
      <div className="homepage-container">
        <nav>
          <div className="logo">
            <p style={{fontSize:"20px"}}>Hi, {user.fname? `${user.fname}` : "User"} </p>
          </div>
          <div className="img">
          <img src={headphones} alt='bell' width={20} height={20} />
          <img src={scanner} alt='bell' width={20} height={20} />
          <img src={bell} alt='bell' width={20} height={20} />
          </div>
        </nav>
        <Money bal = {user.balance? `₦${user.balance}.00`: "0.00"} plus={plus} add = { "Add money" }/>
        <Withdraw/>
        <Bills/>
        <Logout/>
      </div>
    </div>
    </>
  )
}

export default Dashboard