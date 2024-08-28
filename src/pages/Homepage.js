import React, { useEffect, useState } from 'react'
import Cartcad from '../component/Cartcad';

export default function Homepage() {
   const allproductsurl='https://fakestoreapi.com/products'
   const [allproduct,setallproduct]=useState([])
   
   async function getallproducts(){
    const response= await fetch(allproductsurl);
    const data= await response.json();
    setallproduct(data);
   }
   useEffect(()=>{
    getallproducts()
   },[])
  return (
    <div className='cartcard'>
      {allproduct.map((product)=>{
        return( 
        <Cartcad product={product} key={product.id}></Cartcad>
)      })}


    </div>
  )
}
