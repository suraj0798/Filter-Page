import React from 'react'
import { categoryList } from '../../../constants/Constancts'
import FilterListToggle from '../../common/filterListToggle/FilterListToggle'

const Sidepanel = () => {
  return (
    <div>
      {/* categary filter */}
      <div className="inputGroup">
        <p className="label">Category</p>
        <FilterListToggle/>
      </div>
      {/* cusines filter  */}
      {/* price range filter */}
      {/* star rating filter */}
    </div>
  )
}

export default Sidepanel