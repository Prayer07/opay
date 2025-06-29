import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

function Money(props) {
  return (
    <>
      <div className="Money">
        <Card>
          <div className="money-container">
          <CardContent>
            <div className="trans">
              <p>Available balance</p>
              <Link to={"/transactions"}>
              <p id='transaction'>Transaction History</p>
              </Link>
            </div>

            <div className="money">
              <p>{props.bal}</p>
              {/* <Link to={"/add-money"}>
                <Button>
                  Add money
                </Button>
              </Link> */}
            </div>
          </CardContent>
      </div>
        </Card>
      </div>
    </>
  )
}

    // <div className="Money">
    //   <div className="Dashboard">
    //     <div className="Transaction">
    //       <div className="logo">
    //         <img src={logo} alt='logo'/>
    //         <span>Available Balance</span>
    //       </div>
    //       <div className="other">
    //         <Link to={"/transactions"} style={{color:"black", textDecoration:"none"}}>
    //         <span>Transaction History</span>
    //         {/* <img src={next} alt='logo' width={15} height={15} /> */}
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="balance">
    //       <div className="cash">
    //         <span>{props.bal}</span>
    //         {/* <img src={next} alt='logo' width={5} height={5} /> */}
    //       </div>
    //       <div className="add-money">
    //         <Button> 
    //           <img src={props.plus} alt='plus'/>
    //           <Link to={"/add-money"} style={{textDecoration:"none", fontSize:"13px", color:"green"}}>{props.add}</Link>
    //           {props.demo}
    //           </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

export default Money