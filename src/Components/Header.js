import React from 'react'
import './Header.css'

export default function Header({setInputState}) {
  // console.log(setInputState)
  function manageInput(e){
    let {value}=e.target
    console.log(value)
    setInputState(value)
  }
  return (
    <>
      <nav className='header'>
          <div className='logo'>
            <img className='amazon_logo' src='Image/amazon_logo11.png'/>
          </div>
          <input className='search_bar' type="search" placeholder="Search your product" onChange={manageInput}/>
        
        
          <img className='cart_logo' src='Image/new_cart.png'/>
       
        
      </nav>
    </>
  )
}
