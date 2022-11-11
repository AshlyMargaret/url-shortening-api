import React from 'react'
import './ShortLink.css'
import {useState} from 'react'
import copy from "copy-to-clipboard"; 


function ShortLink(props) {

  console.log("props.data",props.data);
   
   const [copySuccess, setCopySuccess] = useState("");


    const copyFunc = (id)=>{
      if(id === props.data.id){
        copy(props.data.shortenLink)
        setCopySuccess(id)   
      }
      else{
        setCopySuccess("")
      }
        
    }
  
   
  return (
    
    <div className='shortLink'>
      <div className="resultsShortlink" id={props.data.id}>
          <div className="urlLink">{props.data.inputUrl}</div>
          <div className="urlShortLink">{props.data.shortenLink}</div>              
            <button onClick={()=>{
              copyFunc(props.data.id)
            }}>{copySuccess == props.data.id ? 'Copied!' : 'Copy'}</button>
            <button onClick={()=>{
              props.removeItem(props.data.id)
            }}>Delete</button>  
         </div>
       
    </div>
    
 
  )
}

export default ShortLink


