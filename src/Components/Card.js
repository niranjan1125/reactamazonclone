import React, { useState } from 'react'
import './Card.css'
import data from './Data'

export default function Card({inputState}) {
  let filteredData=data.filter(ele=>ele.type.includes(inputState.toLowerCase()))
  
  return (
    
    <>
    <div className='card_container'>
    {
      filteredData.length==0?
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
        
    
      }):filteredData.map((ele)=>{
        return (
         
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
    </>
  
  )
}
