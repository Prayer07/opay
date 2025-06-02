import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {

    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("fname")
        navigate("/login")
    }

  return (
    <>
    <div className="logout">
    <button onClick={handleLogout} >Logout</button>
    </div>
    </>
  )
}

export default Logout