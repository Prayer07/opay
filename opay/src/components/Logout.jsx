import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {

    const navigate = useNavigate()
    
    const handleLogout = () =>{
        sessionStorage.clear()
        navigate("/login")
    }

  return (
    <>
    <div className="logout">
      <div className="logout-container">
        <button onClick={handleLogout} >Logout</button>
      </div>
    </div>
    </>
  )
}

export default Logout