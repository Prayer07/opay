import React from 'react'
import { Link } from 'react-router-dom'
import bell from "../assets/bell.png"
import headphones from "../assets/headphones.png"
import scanner from "../assets/scanner.png"
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'
import plus from "../assets/plus2.png"

function Homepage() {
  return (
    <>
    <div className="homepage">
      <div className="homepage-container" style={{paddingBottom:30}} >
        <nav>
          <div className="logo">
            <p style={{fontSize:"16px"}}>Hi <Link to={"/login"}> <button style={{fontSize:"14px", fontWeight:"bold"}} >Login</button> </Link> </p>
          </div>
          <div className="img">
          <img src={headphones} alt='bell' width={16} height={16} />
          <img src={scanner} alt='bell' width={16} height={16} />
          <img src={bell} alt='bell' width={16} height={16} />
          </div>
        </nav>
        <Money bal = "****" demo = {"Add Money"} plus = {plus}/>
        <Withdraw/>
        <Bills/>
      </div>
    </div>
    </>
  )
}

export default Homepage