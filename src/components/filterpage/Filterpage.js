import React, { useState } from 'react'
import "./Filterpage.css"
import Searchbar from './searchbar/Searchbar'
import Sidepanel from './sidepanel/Sidepanel'
import List from './list/List'

const Filterpage = () => {
  const [selectedCategory, setSelectedCategory]= useState (null)
  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);
  
  return (
    <div className='filterPage'>
      {/* {Search bar component} */}
      <Searchbar/>
      <div className="sidePanelListWrpper">
        <div className="sidePanelWrapper">
          {/* {side panel component} */}
          <Sidepanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory}/>
        </div>
        <div className="listWrapper">
          {/* {list and empty view} */}
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Filterpage