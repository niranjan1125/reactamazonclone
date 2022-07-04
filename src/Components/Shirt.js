import React from 'react'
import data from '../Components/Data'
import ShirtComp from '../Components/ShirtComp'

export default function Shirt() {
  let shirtData =data.filter(ele=>ele.type=="shirt")
  return (
    <ShirtComp data={shirtData}/>
  )
}
