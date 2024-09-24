import React, { useEffect, useState } from 'react'
import { Link, redirect, useAsyncValue } from 'react-router-dom'
import cartpage from '../pages/Cartpage'
import Slider from './Sliders';
import { setuser } from './UserSlice';
import { useDispatch } from 'react-redux';

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
/* login modal*/
const [isLoginModalOpen,setIsLoginModalOpen]=useState(false)
const handleLoginOpenModal=()=>{
  setIsLoginModalOpen(true);
}
const handleCloseLoginModal=()=>{
  setIsLoginModalOpen(false);
}

const [Name,SetName]=useState("")
const [Email,SetEmail]=useState("")
const [Password,SetPassword]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault();
localStorage.setItem("user",JSON.stringify({Name:Name,Email:Email,Password:Password}))
  handleCloseModal()
}
// const dispatch=useDispatch()
// const handleSubmit=(e)=>{
//   console.log(Name,Email,Password )
//   e.preventDefault()
//   dispatch(setuser({
//     name:Name,
//     email:Email,
//     password:Password,

// //   }))
//   handleCloseModal()
//   }
  const[LoginData,SetLoginData]=useState([{Email:"",Password:""}])
const[storeddata,setstoreddata]=useState([{}])
useEffect(
  ()=>{
setstoreddata(JSON.parse(localStorage.getItem("user")))
  },[LoginData]
)
const handleLogin=(e)=>{
e.preventDefault();


if(LoginData.Email==storeddata.Email && LoginData.Password==storeddata.Password ) {

console.log("this is store data",storeddata)
SetLoginData({Email:"",Password:""})
}
else{
  console.log("wrong credantial")
  console.log(LoginData.Email)
}
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
<button onClick={handleLoginOpenModal} className='bg-blue-600 w-20 rounded-lg'>LOGIN</button>
</div>
    </header>
<Slider/>

    {isModalOpen && (
      <div className='modal-overlay  transition ease-in-out delay-150
      ' onClick={handleCloseModal}>
        <div className='modal-box2 rounded-sm w-2/5 relative' onClick={e=>e.stopPropagation()}>
          <div className=' border-gray-300   m-5'>
            <h1 className='font-semibold text-5xl text-center'>Sign Up</h1>
            <p className='mt-5  text-center'>Please fill this form to Ragister</p>
          </div>
          {/* singupform */}
          <form className=' flex p-2 flex-row md:flex-col mt-5 
justify-center items-start max-w-5xl mx-auto' onSubmit={handleSubmit}>
<label className=' m-2 font-medium'>FULL NAME </label>
<input placeholder='Enter name' type='text' className=' Full Name 
bg-slate-300 border-2 h-11 w-11/12 block m-2 rounded-md' value={Name}
onChange={(e)=>SetName(e.target.value)} />
  <label className=' m-2 font-medium'>ENTER EMAIL </label>
  <input className=' email 
  bg-slate-300 border-2 h-11 w-11/12 block rounded-md m-2' placeholder='Enter email' type='email' 
  value={Email} onChange={(e)=>SetEmail(e.target.value)}/>
  <label className=' m-2 font-medium' >PASSWORD </label>
  <input className=' password 
   border-2 w-11/12 h-11 bg-slate-300 block rounded-md m-1' placeholder='Password' type='password'
   onChange={(e)=>SetPassword(e.target.value)} value={Password} />
<div className=' m-2 w-fit'>
<button className=' bg-red-500 w-56 text-2xl 
h-14 font-medium rounded-sm text-white ml-2' onClick={handleCloseModal}>Cancel</button>
<button className='submit bg-green-600 w-56 ml-2
h-14 text-2xl font-medium rounded-sm  text-white' type='submit'>Sign up</button>
</div>
</form>
          </div>
        </div>

    )}
{/* singupform */}
{isLoginModalOpen && (
      <div className='modal-overlay  transition ease-in-out delay-150
      ' onClick={handleCloseLoginModal}>
        <div className='modal-box2 rounded-sm w-2/5 relative' onClick={e=>e.stopPropagation()}>
          <div className=' border-gray-300   m-5'>
            <h1 className='font-semibold text-5xl text-center'>Login</h1>
            <p className='mt-5  text-center'>Please Enter Your Id and Password</p>
          </div>
          <form method='post' className=' flex p-2 flex-row md:flex-col mt-5 
justify-center items-start max-w-5xl mx-auto' onSubmit={handleLogin}>
<label className=' m-2 font-medium'>Email </label>
  <input className=' email 
  bg-slate-300 border-2 h-11 w-11/12 block rounded-md m-2' 
  placeholder='Enter email' type='email' value={LoginData.Email} onChange={ (e)=>SetLoginData({...LoginData, Email:e.target.value})} />
  <label className=' m-2 font-medium' >PASSWORD </label>
  <input className=' password 
   border-2 w-11/12 h-11 bg-slate-300 block rounded-md m-1' placeholder='Password' 
   type='password' value={LoginData.Password} onChange={(e)=>SetLoginData({...LoginData, Password:e.target.value})} />
<div className=' m-2 w-fit'>
<button className=' bg-red-500 w-56 text-2xl 
h-14 font-medium rounded-sm text-white ml-2'onClick={()=>{
  handleCloseLoginModal()
}}>Cancel</button>
<button className='submit bg-green-600 w-56 ml-2
h-14 text-2xl font-medium rounded-sm  text-white' value="submit" type="submit"
>Login</button>
</div>
</form>
          </div>
        </div>

    )}
    
    </div>

    


  )
}
