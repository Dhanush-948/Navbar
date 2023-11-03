import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to ="/home"><i>Home</i></Link><br></br>
        <Link to ="/about">About</Link><br></br>
        <Link to ="/phone">Phone</Link>
        

    </div>
  )
}

export default Navbar