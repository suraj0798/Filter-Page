import React, { useState } from 'react'
import './FilterListToggle.css';
import ListItems from '../../../constants/Constancts';




const FilterListToggle = () => {
  const [data, setdata] = useState(ListItems);
  const handleCategoryClick = (itemCategory) => {
    const result = ListItems.filter((currentData) => {
      return currentData.category === itemCategory;
    });
    setdata(result);
  }
  
  return(
    <div className='buttonsGroup'>
        
       <button type="button" onClick={() => handleCategoryClick('fashion')}>
        <img className='buttonIcon' src= "./images/fashion.png"  alt='img' />
        <label className='buttonLabel'>Fashion</label>
      </button>
       <button type="button"><img className='buttonIcon' src= "./images/mobile.png" alt='img'/><label className='buttonLabel'>Mobiles</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/electronic.png" alt='img'/><label className='buttonLabel'>Electronics</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/home.png"  alt='img'/><label className='buttonLabel'>Home</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/appliance.png" alt='img'/><label className='buttonLabel'>Appliances</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/personalcare.png" alt='img'/><label className='buttonLabel'>Personal Care</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/toy.png" alt='img'/><label className='buttonLabel'>Toys & Baby</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/furniture.png" alt='img'/><label className='buttonLabel'>Furniture</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/sports.png" alt='img'/><label className='buttonLabel'>Sports</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/grocery.png" alt='img'/><label className='buttonLabel'>Grocery</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/nutrition.png" alt='img'/><label className='buttonLabel'>Nutrition & More</label></button>
       <button type="button"><img className='buttonIcon' src= "./images/vehicle.png" alt='img'/><label className='buttonLabel'>Bikes & Cars</label></button>
    </div>
  )
}

export default FilterListToggle