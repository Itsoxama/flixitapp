import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import banner from '../../images/banner2.png'
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

import * as ft from '../apis'
const Login = () => {



  const [cookies, setCookie] = useCookies(['id','profile_type']);
useEffect(() => {
  var id=cookies.id
  if(id&&cookies.profile_type==='premium'){
window.location.pathname='premium-profile'

  }
  else if(id&&cookies.profile_type==='normal'){
window.location.pathname='profile'
  }
  else{
    
  }

  return () => {
    
  }
}, [])


  function login() {




    axios.post(`${ft.api}api/signup/auth`, {
      email: email,
      pass: pass
    }).then(res => {
      if (res.data === 'invalid') {
        alert('Invalid Username or password')
      }
      else {
        window.location.pathname = '/premium-profile'

        setCookie('id', res.data.User._id, { path: '/' });
        setCookie('profile_type', 'premium', { path: '/' });

      }
    })


  }
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  return (

    <div className="login">
      <div className="profile1x">
        <img src={banner} className='bannerx' alt="" />
        <div className="profile2x">
          <h1>Login</h1>
          <input onChange={e => setemail(e.target.value)} autoComplete={false} type="text" placeholder='Username' />

          <input onChange={e => setpass(e.target.value)} type="password" placeholder='Password' autoComplete="new-password" />
          <button onClick={e => login()}>Login</button>
          <p>Not been to the site before? You can create a profile <strong onClick={e => window.location.pathname = '/client-signup'} className='st'>Signup</strong></p>


        </div>

      </div>
    </div>
  )
}

export default Login