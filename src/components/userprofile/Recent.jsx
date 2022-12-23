import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import logo from "../../images/Flixit.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from '../../images/girl.png'
import girl2 from '../../images/girl2.png'
import girl3 from '../../images/girl3.png'
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

const Recent = () => {

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

        <div className="bannerimg">
            <img src={girl2} className="girl2" alt="" />
            <img src={girl3} className="girl3" alt="" />
            <img src={girl} className="girl" alt="" />
            <h6>Marcus</h6>
            <h1>Bio</h1>
            <h2>This text is taken from the profile set up page labelled ‘BIO’</h2>
       
        </div>
        <div className="recent">
            <h1>Recent Activity</h1>
            <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div>
            <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div>
            <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div> <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div> <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div>
            <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
            </div> <div className="subrecent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper pulvinar eros, a lacinia tellus </p>
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

export default Recent