import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import logo from  "../../images/Flixit.png"

import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
const Header = () => {

  const [j, setj] = useState(0)
  
  const [cookies, setCookie,removeCookie] = useCookies(['id','profile_type']);
  useEffect(() => {
    if(window.location.pathname.search('admin')>=0){
      setheader('header2')
    }
    if(cookies.id){
      setj(1)


    }
    else{
      setj(0)
    }
  
    return () => {
      
    }
  }, [])
  function remove() {
    for(var h=0;h<2;h++)
    if(h===0){

      removeCookie('id')
    }
    else{
      window.location.reload()

    }
    
  }
  const [fixedmenu, setfixedmenu] = useState('fixedmenu2')
  const [i, seti] = useState(0)
  function setfixedmenu2() {
    if(i===0){
      setfixedmenu('fixedmenu')
      seti(1)
    }
    else{
      seti(0)

      setfixedmenu('fixedmenu2')
    }
    
  }
  const [header, setheader] = useState('header')
  return (
    
<div className={header}>
  <div  className={fixedmenu}>
    <div className="slidemenu">
      <h1 onClick={e=>window.location.pathname='/'} >Home</h1>
      <h1 onClick={e=>window.location.pathname='/search'}>Search</h1>
      {j===0?
      <>
      <h1 onClick={e=>window.location.pathname='/client-signup'}>Client sign up</h1>
      <h1 onClick={e=>window.location.pathname='/client-login'}>Client login</h1>
      <h1 onClick={e=>window.location.pathname='/select-plan'}>Professional sign up</h1>
      <h1 onClick={e=>window.location.pathname='/login'}>Professional login
</h1></>:
<>

<h1 onClick={e=>window.location.pathname='/premium-profile'}>Profile</h1>
<h1 onClick={e=>remove()}>Sign out</h1>
</>

      }

    </div>
  </div>
  <div className="subheader">
   <img onClick={e=>window.location.pathname='/'} style={{cursor:'pointer'}}  src={logo} alt="" />
   <FiMenu className='fim' onClick={e=>setfixedmenu2('fixedmenu')} />

  </div>

</div>

  )
}

export default Header