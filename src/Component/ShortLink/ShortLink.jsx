import React from 'react'
import './ShortLink.css'
import {useState} from 'react'
import copy from "copy-to-clipboard"; 


function ShortLink(props) {

   
    const [copySuccess, setCopySuccess] = useState(false);
   
   
  return (
    
    <div className='shortLink'>
      <div className="resultsShortlink"  >
          <div className="urlLink">{props.data.inputUrl}</div>
          <div className="urlShortLink">{props.data.shortenLink}</div>              
          <button  onClick={(e)=>{
              setCopySuccess(true)
              copy(props.data.shortenLink)   
              e.target.style.background = "hsl(257, 27%, 26%)";  
               
          }}>          
            {copySuccess ? 'Copied!' : 'Copy'}</button>
            <button id={props.data.id} onClick={props.removeItem}>Clear</button>  
         </div>
       
    </div>
    
 
  )
}

export default ShortLink