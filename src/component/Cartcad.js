import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Appcontext from '../context/Appcontext';
import toast from 'react-hot-toast';
import { FaStar } from "react-icons/fa";

export default function Cartcad({product}) {
const appcontext=useContext(Appcontext)
const producturl="https://fakestoreapi.com/products/"

const [isModalOpen, setIsModalOpen] = useState(false);
const [productt,setallproductt]=useState({})

const {id}=useParams()
console.log(appcontext)
async function productcategory(){
  const response=await fetch(producturl+product.id)
  const data= await response.json()
  setallproductt(data)
}
useEffect(()=>{
  productcategory()
},[id])


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

function handlecartadd(){

const existingcartindex=appcontext.cartitems.findIndex(item=>item.id===product.id)

if(existingcartindex>=0){
  const updatecartitem=[...appcontext.cartitems]

  updatecartitem[existingcartindex]={
    ...updatecartitem[existingcartindex],
    ...updatecartitem[existingcartindex].qty+1
  }
  appcontext.setcartitems(updatecartitem)
  toast.success("quantity added to cart")
}
else{
appcontext.setcartitems(
  [...appcontext.cartitems,{...productt,qty:1}])
  toast.success(`${productt.title}  added to cart`)
}
}
  

  return (    
<div className='singlecart shadow-2xl mt-8'>

    
 <img  className="images w-1/2 " src={product.image} />
            <h3 className='h-8'>{product.title}</h3>
            <div className='productdec mt-8'>
                <p className='text-xl text-teal-700 mt-3'>
                  ${product.price}</p>

                <p className="bg-teal-500 mt-3 px-4 py-1 text-sm rounded-full">{product.rating.rate}<span><FaStar /></span></p>
   
    </div>
    <div className='singlecart2'>
        <p>
          <button className='bg-teal-200 p-2' onClick={handleOpenModal}>Quick View</button>
        </p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay transition ease-in-out delay-150" onClick={handleCloseModal}>
          <div className="modal-box relative" onClick={e => e.stopPropagation()}>
          <div className=' flex border-2 flex-col md:flex-row mt-12 
justify-center items-center max-w-5xl mx-auto'>
          <img  className="images w-1/2 " src={product.image} />


            <p className='p-4'>{product.description}</p>  
           
          </div>
          <button className='bg-blue-500
       w-full mt-8 hover:bg-blue-800 transition-all
        hover:text-white rounded-lg h-8' onClick={handlecartadd} >Add to cart</button>
    <Link to={`/product/${product.id}`}>
      <button className='bg-teal-500
       w-full mt-2 hover:bg-red-800 transition-all
        hover:text-white rounded-lg h-8'> View </button>  </Link>
  
          <button className="bg-teal-200 p-2 left absolute top-0 right-0" onClick={handleCloseModal}>Close</button>
   
  
        </div>
        </div>
      )}
    {/* <div className=' singlecart2 transition duration-900 ease-in-out'>
   <p> 
<button class="btn"onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button></p>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
     
    </div> */}
    
    {/* </Link> */}
    </div>
  )

}
