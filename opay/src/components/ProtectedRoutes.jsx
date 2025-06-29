import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    const token = sessionStorage.getItem("token")

    if(!token){
        return <Navigate to={"/login"}/>
    }

  return children
}
