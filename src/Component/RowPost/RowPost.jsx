import React from 'react'
import './RowPost.css'
import Brand from '../../images/icon-brand-recognition.svg'

function RowPost() {
  return (
    <div className='rowPost'>
        <div className="imageSec">
            <img src={Brand} alt="Brand" />
        </div>
        <div className="rowPostTitle">
            <h3>Brand Recognition</h3>
        </div>
        <div className="rowPostPara">
            <p>Boost your brand recognition with each click. Generic links don’t 
               mean a thing. Branded links help instil confidence in your content.</p>
        </div>

    </div>
  )
}

export default RowPost