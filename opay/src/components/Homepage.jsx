import React from 'react'
import { Link } from 'react-router-dom'
import bell from "../assets/bell.png"
import headphones from "../assets/headphones.png"
import scanner from "../assets/scanner.png"
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'

function Homepage() {
  return (
    <>
    <div className="homepage">
      <div className="homepage-container">
        <nav>
          <div className="logo">
            <p style={{fontSize:"12px"}}>Hi <Link to={"/login"}> <button style={{fontSize:"12px", fontWeight:"bold"}} >Login</button> </Link> </p>
          </div>
          <div className="img">
          <img src={headphones} alt='bell' width={13} height={13} />
          <img src={scanner} alt='bell' width={13} height={13} />
          <img src={bell} alt='bell' width={13} height={13} />
          </div>
        </nav>
        <Money bal = "****"/>
        <Withdraw/>
        <Bills/>
      </div>
    </div>
    </>
  )
}

export default Homepage