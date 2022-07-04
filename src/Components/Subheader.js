import React from 'react'
import './Subheader.css'
import { Link } from 'react-router-dom'

export default function Subheader() {
  return (
    <>
      <nav className='navbar'>
        <Link to="/"><div className='element'>Home</div></Link>
        <Link to="/shirt"><div className='element'>Shirt</div></Link>
        <Link to="/pant"><div className='element'>Pant</div></Link>
          
          
      </nav>
    </>
  )
}
