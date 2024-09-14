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
/* singup modal*/
const [isModalOpen,setIsModalOpen]=useState(false)
const handleOpenModal=()=>{
  setIsModalOpen(true);
}
const handleCloseModal=()=>{
  setIsModalOpen(false);
}
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
    text-black border-b-4 border-blue-500 hover:bg-red-200 mr-28'>cart</Link>

<button className='bg-blue-600 w-20 rounded-lg' onClick={handleOpenModal}>SIGNUP</button>
<button className='bg-blue-600 w-20 rounded-lg'>LOGIN</button>
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

    {isModalOpen && (
      <div className='modal-overlay  transition ease-in-out delay-150
      ' onClick={handleCloseModal}>
        <div className='modal-box2 rounded-sm w-2/5 relative' onClick={e=>e.stopPropagation()}>
          <div className=' border-gray-300   m-5'>
            <h1 className='font-semibold text-5xl text-center'>Sign Up</h1>
            <p className='mt-5  text-center'>Please fill this form to Ragister</p>
          </div>
          <form className=' flex p-2 flex-row md:flex-col mt-5 
justify-center items-start max-w-5xl mx-auto'>
<label className=' m-2 font-medium'>FULL NAME </label>
<input placeholder='Enter name' type='text' className=' Full Name 
bg-slate-300 border-2 h-11 w-11/12 block m-2 rounded-md' />
  <label className=' m-2 font-medium'>ENTER EMAIL </label>
  <input className=' email 
  bg-slate-300 border-2 h-11 w-11/12 block rounded-md m-2' placeholder='Enter email' type='email' />
  <label className=' m-2 font-medium' >PASSWORD </label>
  <input className=' password 
   border-2 w-11/12 h-11 bg-slate-300 block rounded-md m-1' placeholder='Password' type='email' />
<div className=' m-2 w-fit'>
<button className=' bg-red-500 w-56 text-2xl 
h-14 font-medium rounded-sm text-white ml-2'>Cancel</button>
<button className='submit bg-green-600 w-56 ml-2
h-14 text-2xl font-medium rounded-sm  text-white'>Sign up</button>
</div>
</form>
          </div>
        </div>

    )}
    
    </div>

    


  )
}
