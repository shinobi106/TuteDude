import React, { useState } from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='navbar'>
        <div className='logo'>
            <Link className='link' to="/"><img src='/img/logo.png' alt='logo'/></Link>
        </div>
        <div className='links'>
            <span>My Assignment</span>
            <span>Chat with Mentor</span>
            <div className='profile'>
                <img className='pro' src='/img/proicon.png' alt='pro'/>
                <span className={menu && "main"} onClick={()=> setMenu(!menu)}>ProfileName</span>
                <img className={menu? "up" : "down"} src='/img/down.png' alt='down'/>
                <img className='downwhite' src='/img/downwhite.png' alt='down'/>
                {menu && <div className='dropdown'>
                  <span>Arnav Tyagi</span>
                </div>}
            </div>
        </div>
    </div>
  )
}
