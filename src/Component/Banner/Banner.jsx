import React from 'react'
import './Banner.css'
import IllustrationImage from '../../images/illustration-working.svg'

function Banner() {
  return (
    <div className='banner'>
        <div className="bannerTextArea">
          <div className="bannerTitle">
            <h1>More than just shorter links</h1>
          </div>
          <div className="bannerPara">
            <p>Build your brand’s recognition and get detailed insights 
               on how your links are performing.</p>
          </div>
          <div className="getStartedBtn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="bannerImageArea">
         <img src={IllustrationImage} alt="IllustrationImage" />
        </div>
    </div>
  )
}

export default Banner