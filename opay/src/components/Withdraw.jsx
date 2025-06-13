import React from 'react'
import contact from "../assets/contact.png"
import bank from "../assets/bank.png"
import arrowUp from "../assets/right-up.png"
import { Link } from 'react-router-dom'

function Withdraw() {
  return (
    <>
    <div className="withdraw">
        <div className="withdraw-container">
            <div className="icon2">
                <Link to={"/add-money"} style={{color:"black", textDecoration:"none"}}>
                <img src={bank} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
                <p style={{fontSize:"14px", marginLeft:"13px", textAlign:"center"}}>Deposit</p>
                </Link>
            </div>
            <div className="icon3">
              <Link to={"/transfer"} style={{color:"black", textDecoration:"none"}}>
                <img src={arrowUp} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
                <p style={{fontSize:"14px", marginLeft:"13px", textAlign:"center"}}>Transfer</p>
              </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Withdraw