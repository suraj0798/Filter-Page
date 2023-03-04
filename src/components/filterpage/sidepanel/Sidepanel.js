import React from 'react'
import { categoryList, ratingList } from '../../../constants/Constancts'
import FilterListToggle from '../../common/filterListToggle/FilterListToggle'

const Sidepanel = ({selectedCtegory,selectToggle, selectedRating,selectRating}) => {
  return (
    <div>
      {/* categary filter */}
      <div className="inputGroup">
        <p className="label"></p>
        <FilterListToggle options={categoryList} value={selectedCtegory} selectToggle={selectToggle}/>
      </div>
      {/* cusines filter  */}
      {/* price range filter */}
      {/* star rating filter */}
       <div className="inputGroup">
        <p className="label"></p>
        <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating}/>
      </div>
    </div>
  )
}

export default Sidepanel