import React, { useState } from 'react'
import { useEffect } from 'react'

import logo from  "../../images/Flixit.png"
import Customers from './Customers'
import axios from 'axios'
import Seller from './Seller'
const Admin = () => {
  const [i, seti] = useState(0)
  const [Users, setUsers] = useState()
  const [Sellers, setSellers] = useState()
useEffect(() => {
  axios.get('http://localhost:4000/api/signup/getallusers').then((res)=>{

    setUsers(res.data.users)
    
  axios.get('http://localhost:4000/api/client/getallusers').then((res2)=>{
    console.log(res2.data)
    setSellers(res2.data.users)
  })
  })

  return () => {
    
  }
}, [])



  return (
    <div className="admin">
      <div className="admin1">
        <img src={logo}  alt="" />
        
        <h1 onClick={e=>seti(0)}>Sellers</h1>
        <h1 onClick={e=>seti(1)}>Customers</h1>
        <h1>Reports</h1>
        <h1>Reviews</h1>
        <h1>Featured Profiles</h1>
        <h1>Logout</h1>

      </div>
      <div className="admin2">
        {Sellers&&i===0&&
        <Seller props={Users} />

        }
        {Sellers&&i===1&&
        <Customers props={Sellers} />

        }




      </div>

    </div>
  )
}

export default Admin