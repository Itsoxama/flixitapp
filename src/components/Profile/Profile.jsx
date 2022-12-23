import React, { useState } from 'react'
import "./Profile.css"
import banner from '../../images/banner.png'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Slider from "react-slick";
import slide1 from '../../images/slide1.png'

import * as ft from '../apis'
import slide3 from '../../images/slide3.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import logo from "../../images/Flixit.png"
import men from '../../images/men.png'
import axios from 'axios';
import men1 from '../../images/man2.png'
import men2 from '../../images/man.jpg'
import "slick-carousel/slick/slick.css";
import { GoStar } from 'react-icons/go'
import "slick-carousel/slick/slick-theme.css";
import Sliderx from './Slider';
import Sliderx2 from './Slider2';
import { useEffect } from 'react';
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='asd2'
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="asd"
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}


const Profile = () => {
const [userProfiles, setuserProfiles] = useState()  
  useEffect(() => {
    axios.get(`${ft.api}api/signup/getallusers`).then(res=>{
      console.log(res.data.users)
   setuserProfiles(res.data.users)
    
    
    })
    
      
    
      return () => {
        
      }
    }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  
  const settings3 = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
        }
      },]
    
  };
  const settings2 = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
        }
      },]
  };
  
  return (
    <div className="profile">
      <div className="profile1">
        <img src={banner} className='banner' alt="" />
        <div className="profile2">
          <h1>Find the right <strong className='free'>Freelance</strong> health and beauty professional for you</h1>

          <div className="search">
            <input type="text" placeholder='Search your treatment' />
            <button onClick={e=>window.location.pathname='search'}>Search</button>
          </div>
        </div>

      </div>
      <div className="profilex2">

        <Slider {...settings}>
        
          {userProfiles&&userProfiles.map((val)=>(
            <>
              <div className="sliderdata">
            <img src={val.profileimage} alt="" />
            <div className="slidecontent">
              <h1>{val.name}
              </h1>
              <p>{val.bio}</p>
            </div>
          </div>
            </>
          ))

          }




        </Slider>
      </div>
    <div className="parentprofilex3">
    <div className="profilex3">
        <div className="profiledet">
          <div className="profiledet1">
            <h1>Flixit</h1>
            <p>Helping you connect with the very best freelance health and beauty professionals in a time and place that suites you</p>
          </div>
          <span>

          </span>
          <div className="profiledet2">
            <h1>Location
            </h1>

            <p>Dont fancy going out? bring the health and beauty to you
            </p>
          </div>

          <span>

          </span>
          <div className="profiledet3">
            <h1>Budget</h1>
            <p>With a wide range of health and beauty professionals we’re sure you can find the right price for the service you want
            </p>
          </div>
        </div>

      </div>
    </div>
      <div className="profilex4">
        <div className="subprofilex4">
          <h1>New to Flixit? <br />
            Sign up is easy</h1>


          <div className="sub2profile">
            <div className="div1">
              <h1>For Customers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tell</p>
              <button onClick={e=>window.location.pathname='/client-signup'}>Sign up</button>

            </div>
            <span></span>

            <div className="div2">
              <h1>For Sellers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tell</p>
              <button onClick={e=>window.location.pathname='/signup'}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="parentprofilex3">

      <div className="profilex5">
        <h1>Popular Services</h1>
     <Sliderx />
     <Sliderx2 />

     
      </div>
      </div>
      <div className="profilex6">
        <div className="subprofilex6">
          <div className="circle">
            <RiDoubleQuotesR className='ri' />
          </div>
          <div className="stars">
            <GoStar className='gs' />

            <GoStar className='gs' />

            <GoStar className='gs' />

            <GoStar className='gs' />
            <GoStar className='gs' />

          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus interdum ac. Nullam sit amet mauris a urna blandit viverra. Duis eget nibh erat. Morbi eget pellentesque augue. Vestibulum faucibus at elit vel iaculis. Etiam at nisl diam. Donec in dui sed nibh sollicitudin rhoncus. Nunc non ultrices risus.</p>

          <h1>Philippa</h1>
        </div>

      </div>
      <div className="footer">
        <div className="subfooter">
          <div className="toppart">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="footerlinks1">
              <h1>Home</h1>
              <h1>Listing</h1>
              <h1>Profile</h1>
            </div>
            <div className="footerlinks2">
              <h1>Terms & Conditions</h1>
              <h1>Privacy & Cookies Notice</h1>
              <h1>GDPR Statement</h1>

            </div>
            <div className="social">
              <h1>Follow us on</h1>
              <div className="socialicon">
                <FaFacebookF className='ff' />
                <FaInstagram className='ff' />
              </div>

            </div>
          </div>
          <div className="botpart">
            <h1>For all enquires please email: Customer@Flixit.co.uk</h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile