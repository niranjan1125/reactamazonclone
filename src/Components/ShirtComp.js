import React from 'react'
import './Card.css'

export default function ShirtComp({data}) {
  return (
    <div className='card_container'>
    {
      data.map((ele)=>{
        return(
          <div className='container'>
        <div className='imageframe'>
            <img className='image' src={ele.image}/>
        </div>
        <div className='details'>
            <div className='brand_details'>
               <div id='brand'>Brand :</div>
               <div id='brand_name'>{ele.brand}</div>
            </div>
            <div className='price'>
                <div id='price_ask'>Price :</div>
                <div id='price_ans'>{ele.price}</div>
            </div>
            <div className='stock'>
                <div id='stock_details'>Stock :</div>
                <div id='stock_ans'>{ele.stock}</div>
            </div>
            <button className='btn'>Add to Cart</button>
        </div>
    </div>
        )
        
    
      })
    }
    </div>  
  )
}
