import React from 'react'
import './ShortLink.css'
import {useState} from 'react'
import copy from "copy-to-clipboard"; 


function ShortLink(props) {

    const [copySuccess, setCopySuccess] = useState([]);

  return (
    <div className='shortLink'>
      <div className="resultsShortlink"  >
          <div className="urlLink">{props.data.inputUrl}</div>
          <div className="urlShortLink">{props.data.shortenLink}</div>              
          <button id={props.data.id} onClick={(e)=>{
              console.log("shortLink.text:",props.data.shortenLink);
              copy(props.data.shortenLink);
              setCopySuccess([...copySuccess,props.data.id]);
              e.target.style.background = "hsl(257, 27%, 26%)";  
                  
          }}>{copySuccess.includes(props.data.id) ? 'Copied!' : 'Copy'}</button>
         </div>
    </div>
  )
}

export default ShortLink