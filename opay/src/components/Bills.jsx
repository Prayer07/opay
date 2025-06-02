import React from 'react'
import airtime from "../assets/wifi.png"
import data from "../assets/data.png"
import tv from "../assets/tv.png"
import light from "../assets/light.png"
import money from "../assets/money.png"
import checkIn from "../assets/check-mark.png"
import pay from "../assets/pay.png"
import more from "../assets/more.png"

function Bills() {
  return (
    <>
    <div className="bills">
      <div className="bills-container">
        <div className="icon1">
          <img src={airtime} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"7px", textAlign:"center"}}>Airtime</p>
        </div>
        <div className="icon2">
          <img src={data} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"7px", textAlign:"center"}}>Data</p>
        </div>
        <div className="icon3">
          <img src={tv} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"8px", textAlign:"center"}}>TV</p>
        </div>
        <div className="icon4">
          <img src={light} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"8px", textAlign:"center"}}>Electricity</p>
        </div>
        <div className="icon1">
          <img src={money} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px",marginLeft:"8px",  textAlign:"center"}}>Refer & Earn</p>
        </div>
        <div className="icon2">
          <img src={checkIn} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"8px", textAlign:"center"}}>Check-In</p>
        </div>
        <div className="icon3">
          <img src={pay} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"9px", textAlign:"center"}}>Financial</p>
        </div>
        <div className="icon4">
          <img src={more} alt='contact' width={15} height={15} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"8px", marginLeft:"9px", textAlign:"center"}}>More</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bills