import React from 'react'
import { Link } from 'react-router-dom'
import Money from './Money'
import Withdraw from './Withdraw'
import Bills from './Bills'
import AnimatedCounter from './AnimatedCounter'
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

function Homepage() {
  return (
    <>
      <div className="Dashboard" >
        {/* <div className="dashboard-container">
        <Card> */}
        <CardHeader>
          <CardTitle> Hi, <Link to={"/login"}><Button>Login</Button></Link> </CardTitle>
        </CardHeader>

        <CardContent>
          <Money bal={"****"} />
        </CardContent>
        
        <CardContent>
          <Withdraw/>
        </CardContent>

        <CardContent>
          <Bills/>
        </CardContent>
      {/* </Card>
      </div> */}

        <footer>
            <p>
              mmm
            </p>
        </footer>

      </div>
    </>
  )
}

export default Homepage