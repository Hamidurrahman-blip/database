import React, { useContext } from 'react'
import Cartitem from '../component/Cartitem'
import Appcontext from '../context/Appcontext'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Cartpage() {
const appcontext=useContext(Appcontext);

let {cartitems}=appcontext

if (cartitems.length === 0) {
    return (
      <div className='max-w-xl mx-auto mt-12 shadow-lg p-6'>
        <p>No Items In Cart!! Click Me To Go <Link to="/" 
        className='bg-red-300'>Homepage</Link></p>
      </div>
    )
}
const cartTotal = cartitems.reduce((acc, item) => {
    return acc + (item.price) * (item.qty)
  }, 0)

  const handleQuantity=(id,newqty)=>{
const updatecartitem=appcontext.cartitems.map((item)=>{
    if(item.id===id){
        return{...item, qty:newqty}
    }
    return item
})
appcontext.setcartitems(updatecartitem)
console.log(appcontext.cartitems)
toast.success("Quantity updatetd succesfully")
  }

  const handleDelet=(id)=>{
    const newcart=cartitems.filter((item)=>{
        return(
            item.id!==id
        )
    })
    alert("Do you want to remove this item")
    appcontext.setcartitems(newcart)
    toast.success("item deleted")
  }


    return (
    <div>
<h1> total : {cartTotal}</h1>
        {cartitems.map((item)=>{
return(
    <Cartitem handleDelet={handleDelet} handleQuantity={handleQuantity} product={item } key={item.id}></Cartitem>
)
        })}
        
    </div>
  )
}
