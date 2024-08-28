import React from 'react'
import { Link } from 'react-router-dom'

export default function Cartitem({product,handleQuantity,handleDelet}) {
  return (
    <div className='flex gap-10 
    items-center max-w-4xl shadow-xl mt-8 p-2 mx-auto border-solid'>
    <Link to={`/product/${product.id}`}  >
    <img  className=" h-40" src={product.image} />
    </Link>
    <div><h3>{product.title}</h3>
               <p className='text-xl font-bold mt-3 px-5'>${product.price}</p>
               <select value={product.qty} 
               onChange={(e)=>{handleQuantity(
                product.id, +e.target.value)}}  className='m-2'>
                {[...Array(10).keys().map((num)=>{
                    return(
                        <option key={num+1} value={num+1}>
                         {num+1}       
                        </option>
                    )
                })]}
               
            </select>
            <button className='mt-3 bg-green-500 p-2 rounded-md'>Place order</button>
               <button onClick={()=>{handleDelet(product.id)}} className='mt-3 ml-2'>🗑️</button>
               </div>

 
       </div>
  )
}
