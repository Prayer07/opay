import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'
import Logout from './Logout'
import AnimatedCounter from './AnimatedCounter'
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
import ChangePassword from './ChangePassword'

function Dashboard() {

  const [user, setUser] = useState({
    fname: "",
    phone: "",
    balance: "",
  })

  // useEffect(() =>{
  //     const token = sessionStorage.getItem("token")
  //     if(!token) return

  //       const base64PayLoad = token.split('.')[1]
  //       const phone = JSON.parse(atob(base64PayLoad)).phone

  //       console.log("Registering socket for", phone)
  //       socket.emit("register", phone)

  //       fetchUserData()

  //       socket.on("refreshUserData", () =>{
  //         console.log("Refreshing user data due to socket event")
  //         fetchUserData()
  //       })

  //     return () =>{
  //       socket.off("refreshUserData")        
  //       socket.disconnect()
  //     } 

  // }, [])

  const fetchUserData = async () => {

    const token = sessionStorage.getItem("token")

        try {
        const res = await fetch("https://opay-server-inky.vercel.app/user-info", {
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
        {/* <div className="dashboard-container"> */}
        {/* <Card> */}
        <CardHeader>
          <CardTitle>
            <nav>
              <p>Hi, {user.fname? `${user.fname}` : "User"}</p>
              <Logout/>
              {/* <Link to={"/change-password"}><span>ChangePassword</span></Link> */}
            </nav>
          </CardTitle> 
        </CardHeader>

        <CardContent>
          <Money bal={<AnimatedCounter bal={user.balance}/>} add = { "Add money" }/>
        </CardContent>

        <CardContent>
          <Withdraw/>
        </CardContent>

        {/* <CardContent>
          <Bills/>
        </CardContent> */}

      {/* </Card> */}
      {/* </div> <br /> */}
        <footer>
            <p>
              mmm
            </p>
        </footer>
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