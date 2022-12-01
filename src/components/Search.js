import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Search = () => {
  return (
    <div className='search-container'>
          <input type="text" className='search-box' placeholder='Search anything ...' />
      <i className='bi bi-search search-icon'></i>
    </div>
  )
}

export default Search