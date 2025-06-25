import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons"



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
        <Button onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Button>
      </div>
    </div>
    </>
  )
}

export default Logout