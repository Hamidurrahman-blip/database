import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Appcontext from '../context/Appcontext'
import toast from 'react-hot-toast'

export default function Productpage() {
  const appcontext=useContext(Appcontext)  
  const producturl="https://fakestoreapi.com/products/"
  const [categories,setallcategories]=useState({})
  const {id}=useParams()
console.log(appcontext)
  async function productcategory(){
    const response=await fetch(producturl+id)
    const data= await response.json()
    setallcategories(data)
  }
  useEffect(()=>{
    productcategory()
  },[id])

//   useEffect(()=>{
// const cartload=localStorage.getItem('cartitems')
// if(cartload){
//   appcontext.setcartitems(JSON.parse(cartload))
// }
// },[])

// useEffect(()=>{
//     localStorage.setItem('cartitems', JSON.stringify(appcontext.cartitems))
//   },[appcontext.cartitems])
  function handlecartadd(){
//appcontext.setcartitems([...appcontext.cartitems,categories])
const existingcartindex=appcontext.cartitems.findIndex(item=>item.id===categories.id)
if(existingcartindex>=0){
  
  const updatecartitem=[...appcontext.cartitems]

  updatecartitem[existingcartindex]={
    ...updatecartitem[existingcartindex],
    qty:updatecartitem[existingcartindex].qty +1
}
appcontext.setcartitems(updatecartitem)
toast.success("Quantity added in cart")
}
else{
  appcontext.setcartitems(
    [...appcontext.cartitems,{...categories,qty:1}])
    toast.success(`${categories.title} added to cart`)
}  
}
  
  return (
<div className=' flex border-2 
flex-col md:flex-row mt-12 
justify-center items-center max-w-5xl mx-auto'>
    <img className='w-1/4 mx-auto' src={categories.image} alt={categories.title} />

    <div className='p-20 flex flex-wrap justify-center'>
      <h3 className='text-3xl font-bold text-teal-500 mb-2'>{categories.title}</h3>
      <p className=''>{categories.description}</p>
      <div className='flex justify-between items-center mt-12'>
      <p className=' text-3xl font-bold bg-slate-400 py-2 rounded-md px-5 me-8' >${categories.price}</p>
      <p className='bg-slate-400 rounded-md px-5 py-3 text-xl font-bold'>{categories?.rating?.rate}<span className='text-2xl mx-1'>★</span> </p>
      </div>
      <button onClick={handlecartadd} className='bg-blue-500
       w-full mt-8 hover:bg-blue-800 transition-all
        hover:text-white rounded-lg h-8' >Add to cart</button>
    </div>

  </div>
  )
}
