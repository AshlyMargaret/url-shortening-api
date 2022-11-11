import React from 'react'
import './ShortLink.css'
import {useState} from 'react'
import copy from "copy-to-clipboard"; 


function ShortLink(props) {

  console.log("props.data",props.data);
   

  //  const [links, setLinks] = useState([props.data]);
  //  console.log("links",links);
   const [copySuccess, setCopySuccess] = useState(false);


    const copyFunc = (id)=>{
      if(id === props.data.id){
        copy(props.data.shortenLink)
        setCopySuccess(true)   
      }
      else{
        setCopySuccess(false)
      }
        
    }


    // const removeFunc = (id)=>{
      
    //      console.log("clicked for dlte",id)
    //      const dlteObject =  links.filter((object)=>{
    //       if(id === object.id){
    //          console.log("deleted");
    //          return object
              
    //       }
    //       else{
    //         console.log("not deleted");
    //         return null
    //       }
    //      })   
    //      setLinks(dlteObject)            
    // }
   
   
  return (
    
    <div className='shortLink'>
      <div className="resultsShortlink" id={props.data.id}>
          <div className="urlLink">{props.data.inputUrl}</div>
          <div className="urlShortLink">{props.data.shortenLink}</div>              
            <button onClick={()=>{
              copyFunc(props.data.id)
            }}>{copySuccess ? 'Copied!' : 'Copy'}</button>
            <button onClick={props.data.removeItem}>Clear</button>  
         </div>
       
    </div>
    
 
  )
}

export default ShortLink



// console.log("e.target.id",e.target);
// console.log("props.data.id",props.data.id);
// if(props.data.id == e.target.id)
// {
//   setCopySuccess(true)
//   copy(props.data.shortenLink)   
//   e.target.style.background = "hsl(257, 27%, 26%)";
// }
    
//   else{
//     setCopySuccess(false)
//   }
   
// }}
// >
// {copySuccess ? 'Copied!' : 'Copy'}