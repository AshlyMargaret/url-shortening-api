import React from 'react'
import './Header.css'
import Logo from '../../images/logo.svg'

function Header() {
  return (
    <div className='header'>
        <div className="leftSideHeaderSec">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navSec">
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </div>
        </div>
        <div className="righrSideHeaderSec">
            <button className='headerLoginBtn'>Login</button>
            <button className='headerSignUpbtn'>Sign Up</button>
        </div>

    </div>
  )
}

export default Header