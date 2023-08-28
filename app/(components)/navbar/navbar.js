import React from 'react'
import Link from "next/link"
export default function Navebar() {
  return (
   
  <div>
    <div className="container-ab">
      <div className="row">
        <div className="col"><Link rel="stylesheet" href={"./"} >Home</Link></div>
        <div className="col"><Link rel="stylesheet" href={"./About"} >About us</Link></div>
        <div className="col"><Link rel="stylesheet" href={"./Contact "} >Contact us</Link></div>
        <div className="col"><Link rel="stylesheet" href={"./porfolio"} >Portfolio</Link></div>
        <div className="col"><Link rel="stylesheet" href={"./services "} >Services</Link></div>
      </div>
    </div>
  </div>

  )
}
