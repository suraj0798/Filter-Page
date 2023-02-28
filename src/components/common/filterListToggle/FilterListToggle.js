import React from 'react'
import './FilterListToggle.css';
import fashion from 'E:/suraj/filter-page/src/images/fashion.png'


const FilterListToggle = () => {

  return(
    <div className='buttonsGroup'>
        
       <button type="button"><img className='buttonIcon' src= {fashion} alt='img'/>Fashion</button>
       <button type="button" aria-label='Mobiles'>📱Mobiles</button>
       <button type="button">💻Electronics</button>
       <button type="button">Home</button>
       <button type="button">Appliances</button>
       <button type="button">Personal Care</button>
       <button type="button">Toys & Baby</button>
       <button type="button">Furniture</button>
       <button type="button">Sports</button>
       <button type="button">Grocery</button>
       <button type="button">Nutrition & More</button>
       <button type="button">Bikes & Cars</button>
    </div>
  )
}

export default FilterListToggle