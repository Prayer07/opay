import React from 'react'
import logo from "../assets/secure.png"
import next from "../assets/next.png"
import plus from "../assets/plus2.png"

function Money(props) {
  return (
    <>
    <div className="Money">
      <div className="dashboard">
        <div className="transaction">
          <div className="logo">
            <img src={logo} alt='logo' width={10} height={10} />
            <span style={{fontSize:"10px"}} >Available Balance</span>
          </div>
          <div className="other">
            <span style={{fontSize:"10px"}} >Transaction History</span>
            <img src={next} alt='logo' width={5} height={5} />
          </div>
        </div>
        <div className="balance">
          <div className="cash">
            <span style={{fontSize:"10px"}} >{props.bal}</span>
            <img src={next} alt='logo' width={5} height={5} />
          </div>
          <div className="add-money">
            <button> <img src={plus} alt='logo' width={7} height={7} /> Add Money </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Money