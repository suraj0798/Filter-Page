import React, {useState} from 'react'
import './List.css'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ListItems from '../../../constants/Constancts';

const List = () => {
  const [listData, setListData] = useState(ListItems);
  return (
    <div className='cardBox'>List
      {listData.map((values) => {
        const {/*id*/ title,price,image,rating,description} = values;
        return(
          <>
           <div className="listCard" /*key={id}*/ >
        <div className="container">
        <div className="card">
            <div className="content-1">
                <div className="logo-img">
                    {/* <img src="https://i.postimg.cc/vBJtjtRC/nike-logo.png" alt=""/> */}
                    
                </div>
                <img src={image} alt=""/>
                
            </div>
            <div className="content-2">
                <div className="branding">
                    <span>{title}</span>
                    <span></span>
                    <span>NEW</span>
                    <h4>{description}</h4>
                </div>
                <div className="ratings">
                    {rating}
                    {/* <span><i><StarOutlineRoundedIcon/></i></span>
                    <span><i><StarOutlineRoundedIcon/></i></span>
                    <span><i><StarOutlineRoundedIcon/></i></span>
                    <span><i><StarOutlineRoundedIcon/></i></span>
                    <span><i><StarOutlineRoundedIcon/></i></span> */}
                </div>
                <div className="price">
                    <span>Rs. {price}</span>
                </div>
            </div>
        </div>
    </div>
        </div>
          </>
        )
      })}
      
      </div>
    
  )
}

export default List