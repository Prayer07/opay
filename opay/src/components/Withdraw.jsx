import React from 'react'
import contact from "../assets/contact.png"
import bank from "../assets/bank.png"
import arrowUp from "../assets/right-up.png"

function Withdraw() {
  return (
    <>
    <div className="withdraw">
        <div className="withdraw-container">
            <div className="icon1">
                <img src={contact} alt='contact' width={20} height={20} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
                <p style={{fontSize:"9px", marginLeft:"18px", textAlign:"center"}}>To OPay</p>
            </div>
            <div className="icon2">
                <img src={bank} alt='contact' width={20} height={20} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
                <p style={{fontSize:"9px", marginLeft:"18px", textAlign:"center"}}>To Bank</p>
            </div>
            <div className="icon3">
                <img src={arrowUp} alt='contact' width={20} height={20} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
                <p style={{fontSize:"9px", marginLeft:"18px", textAlign:"center"}}>Withdraw</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Withdraw