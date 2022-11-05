import React from 'react'
import './SearchBar.css'
import {useState} from 'react'
import axios from 'axios'
import copy from "copy-to-clipboard"; 

function SearchBar() {

 
  const [shortLinks, setShortLinks] = useState([])

  const [copySuccess, setCopySuccess] = useState([]);

  const [url, setUrl] = useState("");


 


   const shortLink = (url)=>{  
    console.log(copySuccess);
    console.log(typeof(copySuccess)); 
     axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response)=>{
      const shorten = response.data.result.short_link
      setShortLinks([...shortLinks,{ id:Date.now(), shortenLink:shorten , inputUrl:url} ]) 
      // console.log("shortLinks:",shortLinks)    
     }) 
       
   }


  return (
    <div className='searchBar'>
     <div className='searchBarSec'>
     <input type="text"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."/>
                       
     <button onClick={()=>{
      shortLink(url)
     }}>Shorten It</button>
     </div>
    

     {
      shortLinks.map((shortLink,index)=>{

       
        return(
          <div className="resultsShortlink" key={index} >
          <div className="urlLink">{shortLink.inputUrl}</div>
          <div className="urlShortLink">{shortLink.shortenLink}</div>
               
          <button id={shortLink.id} onClick={(e)=>{
              console.log("shortLink.text:",shortLink.shortenLink);
              copy(shortLink.shortenLink);
              setCopySuccess([...copySuccess,shortLink.id]);
              e.target.style.background = "hsl(257, 27%, 26%)";  
                  
          }}>{copySuccess.includes(shortLink.id) ? 'Copied!' : 'Copy'}</button>
         </div>
         )         
        }       
        )     
      }  
    </div>

  )
}

export default SearchBar