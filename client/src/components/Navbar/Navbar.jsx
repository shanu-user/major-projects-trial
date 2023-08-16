import React from 'react'
import "./Navbar.css"
import logo from "../../images/profile-logo.png"
const Navbar = () => {
  return (
    <div className="navbar">
            <img src={logo} className="logo-img" alt=""></img>
       {/* <div className="logo">
        </div> */}
    </div>
  )
}

export default Navbar
