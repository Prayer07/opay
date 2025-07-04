import React from 'react'
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
import { Link } from 'react-router-dom'

function Bills() {
  return (
    <>
    <div className="Bills">
        <div className="bills">
          <Card>
        <p>
          <Link to={"/initialize-payment"}>
            <Button>
            <p>
              Airtime
            </p>
          </Button>
            </Link>
        </p>
        </Card>

      <Card>
        <p>
          <Button>
            Data
          </Button>
        </p>
      </Card>

      <Card>
        <p>
          <Button>
            TV
          </Button>
        </p>
      </Card>

      <Card>
        <p>
          <Button>
            Electricity
          </Button>
        </p>
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