import React from 'react'
import banner from '../../images/banner.png'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Slider from "react-slick";
import slide1 from '../../images/slide1.png'
import slide3 from '../../images/slide3.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import logo from "../../images/Flixit.png"
import men from '../../images/men.png'
import { CgClose } from 'react-icons/cg'
import men1 from '../../images/man2.png'
import men2 from '../../images/man.jpg'
import "slick-carousel/slick/slick.css";
import { GoStar } from 'react-icons/go'
import "slick-carousel/slick/slick-theme.css";
import Sliderx from './Slider';
import Sliderx2 from './Slider2';
import girl from '../../images/girl.png'
import girl2 from '../../images/girl2.png'
import * as ft from '../apis'
import girl3 from '../../images/girl3.png'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {AiTwotoneStar} from 'react-icons/ai'
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


const Openprofile = () => {

  const [contact, setcontact] = useState("contactdiv2")
  const [cookies, setCookie] = useCookies(['id', 'profile_type']);
  const [user, setuser] = useState()
  const [sender, setsender] = useState('')
  useEffect(() => {
    var id = cookies.id
    var type = cookies.profile_type

    var a = window.location.pathname.split('/')
    axios.post(`${ft.api}api/signup/find`, {
      id: a[2].replace('?', '')
    }).then(res => {
      console.log(res.data.User)
      setuser(res.data.User)
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
  const [revi, setrevi] = useState('revi2')
  const [bg1, setbg1] = useState('grey')
  const [bg2, setbg2] = useState('grey')
  const [bg3, setbg3] = useState('grey')
  const [bg4, setbg4] = useState('grey')
  const [bg5, setbg5] = useState('grey')

function givestr(val) {
  if(val===1){
    setbg1('yellow')
    setbg2('grey')
    setbg3('grey')
    setbg4('grey')
    setbg5('grey')


  }
  else if (val===2){
    setbg2('yellow')
    
    setbg1('yellow')
    setbg3('grey')
    setbg4('grey')
    setbg5('grey')
  } 
  
  else if (val===3){ setbg3('yellow')
  
  setbg2('yellow')
  setbg1('yellow')
  setbg4('grey')
  setbg5('grey')
    
  }
   else if (val===4){ setbg4('yellow')
   
   setbg1('yellow')
   setbg2('yellow')
   setbg3('yellow')
   setbg5('grey')
    
  }
   else if (val===5){ setbg5('yellow')
    
   setbg1('yellow')
   setbg2('yellow')
   setbg3('yellow')
   setbg4('yellow')
  }


  
}
const [message, setmessage] = useState('')
function submitreview(val) {
  console.log(val)
  axios.post(`${ft.api}api/signup/update`,{
  _id:val,
  name:'sadasdsad',
  }).then(res=>{
    console.log(res)
  })
  
}
  return (
    <>
      {user &&
        <div className="profile">

          <div className={contact}>



            <div className="j">

              <CgClose className='cgc' onClick={e => setcontact('contactdiv2')} />
              <h1>Contact Number</h1>
              <p>{user.phone}</p>
              <h1>Address</h1>
              <p>{user.location}</p>

            </div>


          </div>
          <div className={revi}>



            <div className="j jkio">

              <CgClose className='cgc' onClick={e => setrevi('revi2')} />
              <h1>Submit Review</h1>
              <div className="strp">
                <AiTwotoneStar   onMouseEnter={e=>givestr(1)} fontSize={30} style={{ cursor:'pointer',   color:bg1}} />
                <AiTwotoneStar   onMouseEnter={e=>givestr(2)} fontSize={30} style={{ cursor:'pointer',   color:bg2}} />
                <AiTwotoneStar   onMouseEnter={e=>givestr(3)} fontSize={30} style={{ cursor:'pointer',   color:bg3}} />
                <AiTwotoneStar   onMouseEnter={e=>givestr(4)} fontSize={30} style={{ cursor:'pointer',   color:bg4}} />
                <AiTwotoneStar   onMouseEnter={e=>givestr(5)} fontSize={30} style={{ cursor:'pointer',   color:bg5}} />


              </div>
              <h1>Message</h1>
              <textarea onChange={e=>setmessage(e.target.value)}  cols="30" rows="10"></textarea>
              <button onClick={e=>submitreview(user._id)}>Submit</button>

            </div>


          </div>

          <div className="bannerimg">
            <img src={user.bannerimage} className="girl2" alt="" />

            {/*<img src={girl3} className="girl3" alt="" />
        */


            }
            <img src={user.profileimage} className="girl" alt="" />
            <h1>{user.name}</h1>
            <h2>{user.bio}</h2>
            <div className="profilebtns">
              <button onClick={e => setcontact('contactdiv')}>Contact me</button>
              <button  onClick={e => setrevi('revi')}>Leave Review</button>
            </div>
          </div>


          <div className="parentprofilex3 propox">

            <div className="profilex5 propox">
              <Sliderx props={user.imageupload} />
              <Sliderx2 />


            </div>
          </div>
          <div className="serviceprofile">
            <h1>Services</h1>
            <h2> {user.services}</h2>
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

      }
    </>
  )
}

export default Openprofile