import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Login() {

  const [user, setUser] = useState({
    phone:"",
    password: ""
  })

  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

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

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
      })

      const data = await res.json()

      if(res.ok){
        setMessage("Login Successfully")
        localStorage.setItem("isLoggedIn","true")
        localStorage.setItem("phone", user.phone)
        // localStorage.setItem("fname", user.fname)
        navigate("/dashboard")
      }else{
        setError(data.message || "Login failed")
      }

    } catch (err) {
      console.error(err)
      setError("Server error. Try again")
    }
  }

  return (
    <>
    <div className="login">
      <div className="login-container">
        <div className="box">
          <h1 style={{textAlign:"center"}} >Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" className='number' inputMode='numeric' pattern='[0-9]{11}' placeholder='Phone No' name='phone' value={user.phone} onChange={handleChange} maxLength={11} /> <br />
            <input type="password" className='number' inputMode='numeric' pattern='[0-9]{6}' placeholder='6 digit password' name='password' value={user.password} onChange={handleChange} maxLength={6} /> <br />
            <button>Login</button>
            {error && <p style={{color:"red"}}> {error} </p>}
            {message && <p style={{color:"green"}}> {message} </p>}
          </form>
          <p><Link to={"/signup"} >Don't have an account?...SignUp</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login