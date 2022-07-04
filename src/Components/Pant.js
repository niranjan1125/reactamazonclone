import React from 'react'
import data from '../Components/Data'
import PantComp from './PantComp'

export default function Pant() {
  let pantData = data.filter(ele=>ele.type=="pant")
  return (
    <PantComp data={pantData}/>
  )
}
