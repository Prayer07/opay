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
      <div className="bills-container" style={{margin:30}} >

        <div className="bill-container1">
          <div className="icon1">
          <img src={airtime} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"20px"}}>Airtime</p>
          </div>
          <div className="icon2">
          <img src={data} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"29px"}}>Data</p>
          </div>
          <div className="icon3">
          <img src={tv} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"33px"}}>TV</p>
          </div>
          <div className="icon4">
          <img src={light} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"18px"}}>Electricity</p>
          </div>
        </div> 


        <div className="bill-container2">
          <div className="icon">
          <img src={money} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"8px",}}>Refer & Earn</p>
          </div>
          <div className="icon2">
          <img src={checkIn} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"20px"}}>Check-In</p>
          </div>
          <div className="icon3">
          <img src={pay} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"20px"}}>Financial</p>
          </div>
          <div className="icon4">
          <img src={more} alt='contact' width={35} height={35} style={{backgroundColor:"rgb(185, 247, 217)", marginTop:"4px" , padding:"4px", borderRadius:"5px"}} />
          <p style={{fontSize:"11px", marginLeft:"27px"}}>More</p>
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Bills