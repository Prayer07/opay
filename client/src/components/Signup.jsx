import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

function Signup() {

  const [user, setUser] = useState(
    {
      fname:"",
      lname:"",
      phone:"",
      password:""
    }
  );

  const [message, setMessage] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>{

    const {name, value} = e.target;

    if(name === "password"){
      if(!/^\d*$/.test(value))return
    }

        if(name === "phone"){
      if(!/^\d*$/.test(value))return;
    }

    console.log(e.target.value);
    console.log(e.target.name);
    setUser({...user, [e.target.name]: e.target.value});
  }


  const validate = () =>{
    const newError = {};
    
    if(!user.fname.trim()){
      newError.fname = "First name required"
    }

    if(!user.lname.trim()){
      newError.lname = "Last name required"
    }

    if(!user.phone.trim()){
      newError.phone = "Phone Number required"
      // setError({message:"Phone number already registered"})
    }

    if(!user.password.trim()){
      newError.password = "Password required"
    }else if(!/^\d{6}$/.test(user.password)){
      newError.password = "Password must be exactly 6 digits"
    }


    return newError
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const newError  = validate()
    setMessage(newError)

    if(Object.keys(newError).length > 0){
      return
    }

    setLoading(true)

    try {
      const res = await fetch("http://localhost:3000/signup",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(user),
      })

      const data = await res.json()

      if(res.ok){
        alert(data.message)
        navigate("/login")
      }else{
        setMessage({general: data.message})
      }

    } catch (err) {
      console.error(err)
      setMessage({general: "Something went wrong"})
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
            <div className="login">
              <Card className="w-full max-w-sm login-card">
              <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>
                  Fill in all fields to create account
                </CardDescription>
                <CardAction>
                  <Link to={"/login"}>
                  <Button>Login</Button>
                  </Link>
                </CardAction>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">First Name</Label>
                      <Input type="text" placeholder='FirstName' onChange={handleChange}
                      name='fname' value={user.fname} />
                      <p style={{color:"red"}}> {message.fname} </p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Last Name</Label>
                      <Input type="text" placeholder='LastName' onChange={handleChange}
                      name='lname' value={user.lname} />
                      <p style={{color:"red"}}> {message.lname} </p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Phone Number</Label>
                      <Input type="text" inputMode='numeric' pattern='[0-9]{10}'
                      placeholder='Phone No' name='phone'
                      value={user.phone} onChange={handleChange} maxLength={10} />
                      <p style={{color:"red"}}>{message.phone}</p>
                      <p style={{color:"red"}} > {message.general} </p>

                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input type="password" inputMode='numeric' pattern='[0-9]{6}' 
                      placeholder='6 digit password' name='password' value={user.password}
                      onChange={handleChange} maxLength={6} />
                      <p style={{color:"red"}}>{message.password}</p>
                    </div>
                  </div>
                  {loading && <p style={{color:"white", textAlign:"center", paddingTop:"15px"}}> loading... </p>} <br />
                    <Button type="submit"  className="w-full">
                      Create account
                    </Button> <br />
                </form>
              </CardContent>
            </Card>
          </div>      
    </>
  )
}

{/* <div className="signup">
      <div className="signup-container">
        <div className="box" style={{marginTop:"10px"}} >
        <h1 style={{textAlign:"center"}} >Sign up</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='FirstName' onChange={handleChange} name='fname' value={user.fname} /> <br />
          <p> {message.fname} </p>

          <input type="text" placeholder='LastName' onChange={handleChange} name='lname' value={user.lname} /> <br />
          <p> {message.lname} </p>

          <input className='number' type="text" inputMode='numeric' pattern='[0-9]{10}' placeholder='Phone No.' onChange={handleChange} name='phone' value={user.phone} maxLength={10} /> <br />
          <p> {message.phone} </p>
          <p style={{color:"red"}} > {message.general} </p>

          <input className='number' type="password" inputMode='numeric' pattern='[0-9]{6}' placeholder='6 digit password' onChange={handleChange} name='password' value={user.password} maxLength={6} /> <br />
          <p> {message.password} </p>

          <button>Create Account</button>
        </form>
        <p style={{textAlign:"center", fontSize:"15px", marginBottom:"10px"}} ><Link to={"/login"} style={{paddingRight:"24px"}} >Already have an account?...Login</Link></p>
        
        </div>
      </div>
    </div> */}

export default Signup