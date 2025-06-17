import React from 'react'
import contact from "../assets/contact.png"
import bank from "../assets/bank.png"
import arrowUp from "../assets/right-up.png"
import { Link } from 'react-router-dom'
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

function Withdraw() {
  return (
    <>
    <div className="Withdraw">
      <Card>
        <div className="withdraw-container">

        
      <Card>
        <CardContent>
          <div className="add">
            <Link to={"/add-money"}>
            <Button>
              Deposit
            </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="Transfer">
            <Link to={"/transfer"}>
            <Button>
              Transfer
            </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      </div>
      </Card>
    </div>
    </>
  )
}


        // <div className="Withdraw-container">
        //     <div className="icon2">
        //         <Link to={"/add-money"} style={{color:"black", textDecoration:"none"}}>
        //         <img src={bank} alt='contact'/>
        //         <p>Deposit</p>
        //         </Link>
        //     </div>
        //     <div className="icon3">
        //       <Link to={"/transfer"} style={{color:"black", textDecoration:"none"}}>
        //         <img src={arrowUp} alt='contact'/>
        //         <p>Transfer</p>
        //       </Link>
        //     </div>
        // </div>

export default Withdraw