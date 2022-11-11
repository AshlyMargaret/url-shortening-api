import React from 'react'
import './SearchBar.css'
import {useState,useEffect} from 'react'
import axios from '../../axios'
import ShortLink from '../ShortLink/ShortLink'

const getLocalStorage = () => {
  let links = localStorage.getItem("Shorten-Url")

  if (links) {
      return JSON.parse(links)
  } else {
      return []
  }
}


function SearchBar() {

 
  const [shortLinks, setShortLinks] = useState(getLocalStorage())

  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("Shorten-Url",JSON.stringify(shortLinks))
 }, [shortLinks])

 


   const shortLink = (url)=>{  
     axios.get(`v2/shorten?url=${url}`).then((response)=>{
      const shorten = response.data.result.short_link
      setShortLinks([...shortLinks,{ id:Date.now(), shortenLink:shorten , inputUrl:url} ])   

     })       
   }
 

      const removeItem = (id) => {
       console.log("I am clicked:id:",id);
       const newShortLinks = shortLinks.filter((object)=>{
        if(object.id !== id){
         return object
        }
        
       })
       console.log("shortLinks",shortLinks);
       console.log("newShortLinks",newShortLinks);
       setShortLinks(newShortLinks)
    }

    

  return (
    <div className='searchBar'>
     <div className='searchBarSec'>
     <input className={`${url === "" ? "error" : ""}`}
              type="link"
              name="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."/>
                       
     <button onClick={()=>{
      shortLink(url)
     }}>Shorten It</button>
      {url === "" && <div className="error-msg">please add a link</div>}
     </div>  
     
     {
      shortLinks.map((object,index)=>{  
        return(
          <ShortLink key= {index} data={object} removeItem={removeItem}  />
            )
         })
     }
    

    </div>

  )
 
}

export default SearchBar