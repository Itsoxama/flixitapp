import React from 'react'
import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import banner from '../../images/aa.png'

import ReactPaginate from 'react-paginate';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import logo from "../../images/Flixit.png"
import bannerx from '../../images/image3.png'
import { GoStar } from 'react-icons/go'
import { useEffect } from 'react'
import axios from 'axios'

import * as ft from '../apis'
var fitter = 'no'
var ftype = ""
function Items({ currentItems }) {
   return (
    <>

      {fitter === 'no' && currentItems.map((val) => (
        <>
          <div className="personprofile" onClick={e => window.location.pathname = `profile/${val._id}`}>
            <img src={val.profileimage} alt="" />
            <div className="info">
              <h1>{val.name}</h1>
              <h2>{val.bio.substring(0, 70)}....</h2>
              <h2>{val.services}</h2>
            </div>
            {val.review &&
              <>

                <div className="stars">
                  {val.review >= 1 ?
                    <GoStar className='got gots' />
                    : <GoStar className='got' />
                  }
                  {val.review >= 2 ?
                    <GoStar className='got gots' />
                    : <GoStar className='got' />
                  } {val.review >= 3 ?
                    <GoStar className='got gots' />
                    : <GoStar className='got' />
                  } {val.review >= 4 ?
                    <GoStar className='got gots' />
                    : <GoStar className='got' />
                  } {val.review >= 5 ?
                    <GoStar className='got gots' />
                    : <GoStar className='got' />
                  }



                </div>
              </>

            }

          </div>

        </>
      ))}
      {fitter === 'profession' && currentItems.map((val) => (
        val.profession === ftype &&
        <>
          <div className="personprofile" onClick={e => window.location.pathname = `profile/${val._id}`}>
            <img src={val.profileimage} alt="" />
            <div className="info">
              <h1>{val.name}</h1>
              <h2>{val.bio}</h2>
              <h2>{val.services}</h2>
            </div>
            <div className="stars">

              <GoStar className='got gots' />
              <GoStar className='got gots' />
              <GoStar className='got gots' />
              <GoStar className='got' />
              <GoStar className='got' />

            </div>

          </div>

        </>
      ))}
      {fitter === 'services' && currentItems.map((val) => (
        val.service === ftype &&
        <>
          <div className="personprofile" onClick={e => window.location.pathname = `profile/${val._id}`}>
            <img src={val.profileimage} alt="" />
            <div className="info">
              <h1>{val.name}</h1>
              <h2>{val.bio}</h2>
              <h2>{val.services}</h2>
            </div>
            <div className="stars">
              <GoStar className='got gots' />
              <GoStar className='got gots' />
              <GoStar className='got gots' />
              <GoStar className='got' />
              <GoStar className='got' />

            </div>

          </div>

        </>
      ))}








    </>
  );
}
const Mapprofiles = ({ props }) => {
  const [prop, setprop] = useState(props[0].users)
  const [pageselect, setpageselect] = useState(1)
  var itemsPerPage = 5
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  var currentItems = prop.slice(itemOffset, endOffset);

  var pageCount = Math.ceil(prop.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setpageselect(event.selected + 1)
    var newOffset = (event.selected * itemsPerPage) % prop.length;
    console.log(


      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  useEffect(() => { 
    console.log("props")

    if(fitter==='no'){

       currentItems = props[0].users.slice(itemOffset, endOffset);

       pageCount = Math.ceil(props[0].users.length / itemsPerPage);
    }
    else if(fitter==='profession'){
      
      currentItems = prop.slice(itemOffset, endOffset);

      pageCount = Math.ceil(prop.length / itemsPerPage);
      setprop([]);
      props[0].users.forEach(element => {

        console.log(element)

        if(element.profession===ftype){
          setprop(prop => [...prop, element]);



        }
        
      });
    }
    else if(fitter==='services'){

      
      currentItems = prop.slice(itemOffset, endOffset);

      pageCount = Math.ceil(prop.length / itemsPerPage);
      setprop([]);
      props[0].users.forEach(element => {

        console.log(element)

        if(element.service===ftype){
          setprop(prop => [...prop, element]);



        }
        
      });
    }



    console.log(props)
    return () => {

    }
  }, [fitter,ftype])

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={`Next Page ${pageselect}   of ${pageCount} P`}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="revious Page"
        renderOnZeroPageCount={null}
      />

    </>
  )
}

const Search = () => {
  const [data2, setdata2] = useState()

  const [s, sets] = useState(0)
  useEffect(() => {
    axios.get(`${ft.api}api/signup/getallusers`).then(res => {
      console.log(res.data.users)
      setdata2(res.data)


    })



    return () => {

    }
  }, [])

  const [filter, setfilter] = useState('no')
  const [filtertype, setfiltertype] = useState('')
  function applyfilter(filters, ft) {


    setfilter(filters)
    setfiltertype(ft)
    fitter = filters
    ftype = ft
    console.log(fitter)
    console.log(ft)



  }


  function gotolink(val) {
    window.location.pathname = `/profile/${val}`

  }
  const [i, seti] = useState(1)
  return (
    <>
      {data2 &&
        <div className="login">
          <div className="profile1x">
            <img src={banner} className='bannerx' alt="" />
            <div className="profilesignup">
              <div className="searchprofiles">
                <div className="searchprofiles1">

                  <input onChange={e => setfiltertype(e.target.value)} type="text" placeholder='Treatment' />

                  <input type="text" placeholder='Location' />

                  <button onClick={e => applyfilter('services', filtertype)} >Search</button>
                </div>
                <div className="searchprofiles2">
                  <div className="filters">
                    <h1>Filters</h1>
                    <h3>Professions</h3>
                    <p onClick={e => applyfilter('profession', 'Hairdresser')} >• <p>Hairdresser</p> </p>
                    <p onClick={e => applyfilter('profession', 'Barber')}>• <p>Barber</p> </p>
                    <p onClick={e => applyfilter('profession', 'Beauty therapist')}>• <p>Beauty therapist</p> </p>
                    <h3>Services</h3>
                    <p onClick={e => applyfilter('services', 'Hair')}>• <p>Hair</p> </p>
                    <p onClick={e => applyfilter('services', 'Cut')}>• <p>Cut</p> </p>
                    <p onClick={e => applyfilter('services', 'Colour')}>• <p>Colour</p> </p>
                    <p onClick={e => applyfilter('services', 'Nails')}>• <p>Nails</p> </p>
                    <p onClick={e => applyfilter('services', 'Brazilians')}>• <p>Brazilians</p> </p>
                    <p onClick={e => applyfilter('services', 'Brazilians')}>• <p>etc..</p> </p>
                    <h3>Locations</h3>
                    <p onClick={e => applyfilter('no', 'Brazilians')}>• <p>Will travel</p> </p>
                    <p onClick={e => applyfilter('no', 'Brazilians')}>• <p>Won't travel</p> </p>


                  </div>

                  <div className="displayprofiles">

                    {data2 && i === 1 &&
                      <Mapprofiles props={[data2, filter, filtertype]} />


                    }
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

            </div>

          </div>
        </div>

      }
    </>
  )
}

export default Search