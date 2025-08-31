import React from 'react'
import './Navbar.css'
import hey from './hey.svg'
import menu_open from './menu_open.svg'
import menu_close from './menu_close.svg'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <img src={hey} alt="" />
        <ul className="nav-menu">
            <li className='nav-btn'>Home</li>
            <li className='nav-btn'>About Me</li>
            <li className='nav-btn'>Skills</li>
            <li className='nav-btn'>Projects</li>
            <li className='nav-btn'>Contact</li> 
        </ul>
        <div className="nav-connect">Get in Touch</div>
    </div>
  )
}

export default Navbar