import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Searchbar.css'

const Searchbar = ({value, changeInput}) => {
  return (
    <div className='searchBarWapper'>
      <SearchIcon className="searchBarIcon"/>
      <input type= "text" placeholder='Search' value={value} onChange= {changeInput}/>
    </div>
  )
}

export default Searchbar