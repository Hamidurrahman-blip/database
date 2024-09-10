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
    dots: false,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [scrollPosition, setScrollPosition] = useState(false);

   const handleScroll = ()=> {
      if(window.scrollY>=500){
       setScrollPosition(true)
      }
    else{
    setScrollPosition(false)
      }
    }
        window.addEventListener('scroll',handleScroll);
 return (
  <div  >


<header className={ scrollPosition ?' header active absolute top-0 h-14 flex justify-between items-center text-white text-center px-12'
:" header  absolute top-0 h-14 flex justify-between items-center text-white text-center px-12"}  >
<Link to="/" className='mix-blend-multiply'><img src='logo2 .png' alt='image'  className=" ml-4 headimg "/></Link>
<div className='flex gap-8 '>
    {catgeory.map((item)=>{
return(
    <Link to={`catgeorypage/${item}`} key={item} className='capitalize
    text-black border-b-4 border-blue-500 hover:bg-red-200'>
        {item}
    
    
    </Link>
)

    })} 
<Link to="/cartpage" className='capitalize
    text-black border-b-4 border-blue-500 hover:bg-red-200'>cart</Link>
</div>

    </header>

    <Slider {...settings} className='mb-0 relative' >
      <div  className=' bg-cover sliders bg-center bg-top' >
      </div>
      <div  className=' bg-cover sliders2 bg-center bg-top'>
        
      </div>
      <div  className=' bg-cover  sliders3 bg-center bg-top'>
        
      </div>
      <div  className=' bg-cover  sliders4 bg-center bg-top'>
       
      </div>
      <div  className=' bg-cover  sliders5 bg-center bg-top'>
        
      </div>
      <div  className=' bg-cover  slider6 bg-center bg-top'>

      </div>
    </Slider>

    </div>

  )
}
