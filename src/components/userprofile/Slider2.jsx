import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ck.css"
import gh from "../../images/slide1.png"

import gh2 from "../../images/slide2.png"

import gh3 from "../../images/slide3.png"
const Sliderx2 = () => {
  
  const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:false,

    slidesToScroll: 1,
    
    
  };
  
  return (
    <>
    <div className="slideritem slideritem3">
      
      <Slider {...settings} autoplay={true} arrows={true} 
      autoplaySpeed={2000}
   >
              <div className='asda'>
                <img src={gh} alt="" />
             
              </div>
              <div className='asda'>
                
              <img src={gh2} alt="" />
     

              </div>
              <div className='asda'>
                
              <img src={gh3} alt="" />
                    
              </div>
              <div className='asda'>                
                                <img src={gh} alt="" />
              
              </div>

            </Slider>


    </div>
   
    </>
  )
}

export default Sliderx2
