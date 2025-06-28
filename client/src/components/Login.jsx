import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
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

function Login() {

  const [user, setUser] = useState({
    phone:"",
    password: ""
  })

  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>{

    const {name, value} = e.target;

    if(name === "password"){
      if(!/^\d*$/.test(value))return;
    }

        if(name === "phone"){
      if(!/^\d*$/.test(value))return;
    }

    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    setMessage("")

    if (!user.phone || !user.password){
      setError("All fields are required")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("https://opay-server-inky.vercel.app/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
      })

      const data = await res.json()

      if(res.ok){
        setMessage("Login Successfully")
        sessionStorage.setItem("token", data.token)
        // sessionStorage.setItem("user", JSON.stringify(data.user))
        navigate("/dashboard")
      }else{
        setError(data.message || "Login failed")
      }

    } catch (err) {
      console.error(err)
      setError("Server error. Try again")
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    <div className="login">
      <Card className="w-full max-w-sm login-card">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your Phone number below to login to your account
        </CardDescription>
        <CardAction>
          <Link to={"/signup"}>
          <Button>Create Account</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Phone Number</Label>
              <Input type="text" inputMode='numeric' pattern='[0-9]{10}'
              placeholder='Phone No' name='phone'
              value={user.phone} onChange={handleChange} maxLength={10} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input type="password" inputMode='numeric' pattern='[0-9]{6}' 
              placeholder='6 digit password' name='password' value={user.password}
              onChange={handleChange} maxLength={6} />
            </div>
          </div>

            {error && <p style={{color:"red"}}> {error} </p>}
            {message && <p style={{color:"green"}}> {message} </p>}
            {loading && <p style={{color:"white", textAlign:"center", paddingTop:"15px"}}> loading... </p>} <br />

            <Button type="submit"  className="w-full">
              Login
            </Button> <br />
        </form>
      </CardContent>
    </Card>
    </div>
    
    </>
  )
}

export default Login