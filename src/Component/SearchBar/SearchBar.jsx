import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='searchBar'>
     <input type="text" placeholder='Shorten a link here...'/>
     <button>Shorten It</button>
    </div>
  )
}

export default SearchBar