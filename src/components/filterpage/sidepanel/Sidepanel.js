import React from 'react'
import { categoryList } from '../../../constants/Constancts'
import Filterlisttoggle from '../../common/filterListToggle/FilterListToggle'

const Sidepanel = ({selectedCategory, selectToggle}) => {
  return (
    <div>Sidepanel
      {/* categary filter */}
      <div className="inputGroup">
        <p className="label">Category</p>
        <Filterlisttoggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
      </div>
      {/* cusines filter  */}
      {/* price range filter */}
      {/* star rating filter */}
    </div>
  )
}

export default Sidepanel