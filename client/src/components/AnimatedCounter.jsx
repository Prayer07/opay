import CountUp from 'react-countup'
import React from 'react'

function AnimatedCounter({bal}) {
  return (
    <>
    <CountUp end={bal} prefix="₦"/>
    </>
  )
}

export default AnimatedCounter