import React from 'react'
import airtime from "../assets/wifi.png"
import data from "../assets/data.png"
import tv from "../assets/tv.png"
import light from "../assets/light.png"
import money from "../assets/money.png"
import checkIn from "../assets/check-mark.png"
import pay from "../assets/pay.png"
import more from "../assets/more.png"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Bills() {
  return (
    <>
    <div className="Bills">
        <div className="bills">          
          <Card>
        <CardContent>
          <p>
          <Button>
            Airtime
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            Data
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            TV
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            Electricity
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            Refer & Earn
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            Check In
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            Financial
          </Button>
          </p>
        </CardContent>
        </Card>

        <Card>
        <CardContent>
          <p>
          <Button>
            More
          </Button>
          </p>
        </CardContent>
        </Card>
        </div>

    </div>
    </>
  )
}

{/* <div className="Bills-container">

        <div className="bills-container1">
          <div className="icon">
          <img src={airtime} alt='contact'/>
          <p>Airtime</p>
          </div>
          <div className="icon">
          <img src={data} alt='contact' />
          <p>Data</p>
          </div>
          <div className="icon">
          <img src={tv} alt='contact' />
          <p>Television</p>
          </div>
          <div className="icon">
          <img src={light} alt='contact' />
          <p>Electricity</p>
          </div>
        </div> 


        <div className="bills-container2">
          <div className="icon">
          <img src={money} alt='contact' />
          <p>Refer & <br /> Earn</p>
          </div>
          <div className="icon">
          <img src={checkIn} alt='contact' />
          <p>Check-In</p>
          </div>
          <div className="icon">
          <img src={pay} alt='contact' />
          <p>Financial</p>
          </div>
          <div className="icon">
          <img src={more} alt='contact'/>
          <p>More</p>
          </div>
        </div>


      </div> */}

export default Bills