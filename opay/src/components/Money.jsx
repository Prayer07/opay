import React from 'react'
import logo from "../assets/secure.png"
import next from "../assets/next.png"
import plus from "../assets/plus2.png"
import { Link } from 'react-router-dom'

function Money(props) {
  return (
    <>
    <div className="Money">
      <div className="dashboard">
        <div className="transaction">
          <div className="logo">
            <img src={logo} alt='logo' width={17} height={17} />
            <span style={{fontSize:"19px"}} >Available Balance</span>
          </div>
          <div className="other">
            <Link to={"/transactions"} style={{color:"black", textDecoration:"none"}}>
            <span style={{fontSize:"19px"}} >Transaction History</span>
            {/* <img src={next} alt='logo' width={15} height={15} /> */}
            </Link>
          </div>
        </div>
        <div className="balance">
          <div className="cash">
            <span style={{fontSize:"33px"}} >{props.bal}</span>
            {/* <img src={next} alt='logo' width={5} height={5} /> */}
          </div>
          <div className="add-money">
            <button style={{width:"100px", height:"35px"}}> 
              <img src={props.plus} alt='plus' width={10} height={10}/>
              <Link to={"/add-money"} style={{textDecoration:"none", fontSize:"13px", color:"green"}}>{props.add}</Link>
              {props.demo}
              </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Money