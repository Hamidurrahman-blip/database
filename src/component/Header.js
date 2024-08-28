import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartpage from '../pages/Cartpage'
import Slider from "react-slick";

export default function Header() {
 const Catgeoryurl="https://fakestoreapi.com/products/categories/"
 const [catgeory,setallcatgeory]=useState([])
 async function getallcatgeory(){
    const response=await fetch(Catgeoryurl)
    const data=await response.json()
    setallcatgeory(data)
 }
 useEffect(()=>{
    getallcatgeory()
 },[])

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

 return (
  <div >


<header className='header  h-14 flex  justify-between items-center
     text-white text-center px-12' >
<Link to="/"><img src='shopping.jpg' alt='image'  className=" ml-4 headimg "/></Link>
<div className='flex gap-8 '>
    {catgeory.map((item)=>{
return(
    <Link to={`catgeorypage/${item}`} key={item} className='capitalize
    text-black border-b-8 hover:bg-red-200'>
        {item}
    
    
    </Link>
)

    })} 
<Link to="/cartpage" className='capitalize
    text-black border-b-8 hover:bg-red-200'>cart</Link>
</div>

    </header>

    <Slider {...settings} className='mb-0' >
      <div  className=' sliders bg-center bg-top' >
      </div>
      <div  className=' sliders2 bg-center bg-top'>
        
      </div>
      <div  className=' sliders3 bg-center bg-top'>
        
      </div>
      <div  className=' sliders4 bg-center bg-top'>
       
      </div>
      <div  className=' sliders5 bg-center bg-top'>
        
      </div>
      <div  className=' slider6 bg-center bg-top'>

      </div>
    </Slider>

    </div>

  )
}
