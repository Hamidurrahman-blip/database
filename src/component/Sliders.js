import React from 'react'
import Slider from "react-slick";

export default function sliders() {
    var settings = {
        dots: false,
      
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:500,
        cssEase:"linear"
      };
  return (
    <div>
        
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
