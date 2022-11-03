import React from 'react'
import './Footer.css'
import FooterLogo from '../../images/logo.svg'
import faceBook from '../../images/icon-facebook.svg'
import Pintrest from '../../images/icon-pinterest.svg'
import Twitter from '../../images/icon-twitter.svg'
import Instagram from '../../images/icon-instagram.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={FooterLogo} alt="FooterLogo" />
        </div>
        <div className="featuresBox">
           <ul className='featuresBoxUl'>
            <li className='mainLi'><a className='aBold' href="">Features</a></li>
            <li><a href="">Link Shortening</a></li>
            <li><a href="">Branded Links</a></li>
            <li><a href="">Analytics</a></li>
           </ul>
        </div>
        <div className="resourcesBox">
        <ul className='featuresBoxUl'>
            <li className='mainLi'><a className='aBold' href="">Resources</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Support</a></li>
           </ul>
        </div>
        <div className="companyBox">
        <ul className='featuresBoxUl'>
            <li className='mainLi'><a className='aBold' href="">Company</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact</a></li>
           </ul>
        </div>
        <div className="socialIcons">
            <div><img src={faceBook} alt="" /></div>
            <div><img src={Pintrest} alt="" /></div>
            <div><img src={Twitter} alt="" /></div>
            <div><img src={Instagram} alt="" /></div>           
        </div>

    </div>
  )
}

export default Footer