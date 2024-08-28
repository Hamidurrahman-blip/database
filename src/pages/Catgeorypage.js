import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cartcad from '../component/Cartcad'

export default function Catgeorypage() {
  const categoryurl="https://fakestoreapi.com/products/category/"
const [catgeoryitem,setallcatgeoryitem]=useState([])
let {id}=useParams()
console.log(id)
async function getallcatgeory(){
  const response=await fetch(categoryurl+id)
  const data= await response.json()
  setallcatgeoryitem(data)
}
useEffect(()=>{ getallcatgeory()},[id])
  return (
    <div className=' cartcard  mx-auto p-8 md:p-6 lg:p-0'>
      {catgeoryitem.map((product)=>{
        return(
          <Cartcad product={product} key={product.id}/>
        )
      })}
    </div>
  )
}
