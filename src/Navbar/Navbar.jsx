import React, { useState } from 'react'
import './Navbar.css'
import pixa from '../23346.png'
import Search from '../Search/Search'
function Navbar() {
  const[dis,setDis]=useState(false)
  return (
    <div className='wrap'>
      <div className="combo">
      <div className="Navbar">
        <div className="left">
          <img src={pixa} alt="" />
        </div>
        <div className="right">
          <li>Explore</li>
          <li>Login</li>
          <li id='join'>Join</li>
          <li id='upload'><i class="fa-solid fa-upload"></i>Upload</li>
        </div>
        <div className="mob" onClick={()=>setDis(!dis)}>
        <i class="fa-solid fa-grip-lines"></i>
          <div className={dis?"block":"none"}>
              <li>Explore</li>
              <li>Login</li>
              <li>Join</li>
              <li>Upload</li>
          </div>
        </div>
      </div>
      <Search />
      </div>
    </div>
  )
}

export default Navbar