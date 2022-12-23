import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ck.css"
import gh from "../../images/slide1.png"

import gh2 from "../../images/slide2.png"

import gh3 from "../../images/slide3.png"
import { useEffect } from "react";
const Sliderx = ({props}) => {
  useEffect(() => {
    console.log(props)
  
    return () => {
      
    }
  }, [])
  
  const settings = {
    
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    
    
  };
  
  return (
    <>
    <div className="slideritem slideritem2 sliderotem">
      
      <Slider  {...settings}  arrows={true} autoplay={true}
      autoplaySpeed={2000}
   >


    {
      props.map((val)=>(
       
        
        <div className='asda asdza'>
                
                <img src={val} alt="" />
             
              </div>
  
      ))
    }

            </Slider>


    </div>
   
    </>
  )
}

export default Sliderx
