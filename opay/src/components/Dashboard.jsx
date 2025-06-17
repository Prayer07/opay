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
import {io} from "socket.io-client"
import AnimatedCounter from './AnimatedCounter'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const socket = io("http://localhost:3001")

function Dashboard() {

  const [user, setUser] = useState({
    fname: "",
    phone: "",
    balance: "",
  })

  useEffect(() =>{
      const token = sessionStorage.getItem("token")
      if(!token) return

        const base64PayLoad = token.split('.')[1]
        const phone = JSON.parse(atob(base64PayLoad)).phone

        console.log("Registering socket for", phone)
        socket.emit("register", phone)

        fetchUserData()

        socket.on("refreshUserData", () =>{
          console.log("Refreshing user data due to socket event")
          fetchUserData()
        })

      return () =>{
        socket.off("refreshUserData")        
        socket.disconnect()
      } 

  }, [])

  const fetchUserData = async () => {

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

  return (
    <>
      <div className="Dashboard" >
        <div className="dashboard-container">
        <Card>
        <CardHeader>
          <CardTitle><h4>Hi, {user.fname? `${user.fname}` : "User"} </h4></CardTitle>
        </CardHeader>

        <CardContent>
          <Money bal={<AnimatedCounter bal={user.balance}/>} plus={plus} add = { "Add money" }/>
        </CardContent>

        <CardContent>
          <Withdraw/>
        </CardContent>

        <CardContent>
          <Bills/>
        </CardContent>
      </Card>
      </div>
      </div>
    </>
  )
}
    // <div className="homepage">
    //   <div className="homepage-container">
    //     <nav>
    //       <div className="logo">
    //         <p>Hi, {user.fname? `${user.fname}` : "User"} </p>
    //       </div>
    //       {/* <div className="img">
    //       <img src={headphones} alt='bell'/>
    //       <img src={scanner} alt='bell'/>
    //       <img src={bell} alt='bell'/>
    //       </div> */}
    //     </nav>
    //     <Money bal={<AnimatedCounter bal={user.balance}/>} plus={plus} add = { "Add money" }/>
        // {/* <Withdraw/> */}
    //     {/* <Bills/> */}
    //     <Logout/>
    //   </div>
    // </div>
export default Dashboard