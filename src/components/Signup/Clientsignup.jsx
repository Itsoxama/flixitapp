import React, { useState } from 'react'
import banner from '../../images/banner3.png'
import firebase from 'firebase'

import * as ft from '../apis'
import axios from 'axios'
const Clientsignup = () => {

  const [email, setemail] = useState("")
const [pass, setpass] = useState("")
const [name, setname] = useState("")
const [bio, setbio] = useState("")
const [location, setlocation] = useState("")
const [profileimage, setprofileimage] = useState("")
const [phone, setphone] = useState("")
const [file, setfile] = useState()
  function subform(e) {

    e.preventDefault();
    var a= new Date
    var b = a.getTime().toString()
    var uploadTask3 = firebase.storage().ref().child(`${b}+as`).put(file);

    uploadTask3.on('state_changed',
      (snapshot3) => {
        var progress = (snapshot3.bytesTransferred / snapshot3.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot3.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask3.snapshot.ref.getDownloadURL().then((downloadURL3) => {
          console.log('qual available at', downloadURL3);
          axios.post(`${ft.api}api/client/add`,{
            name:name,
            email:email,
            password:"12345678",
            phone:phone,
            location:location,
            profileimage:downloadURL3,
            bio:bio

          }).then((res)=>{
            console.log(res)
            window.location.pathname='client-login'
          })










        });
      }
    );
  }
  function setfilex(val) {
 setfile(val)
 setimageload("Image Uploaded")   
  }
  const [imageload, setimageload] = useState("Profile image upload")
  return (
    <div className="login">
         <div className="profile1x">
        <img src={banner} className='bannerx' alt="" />
        <form onSubmit={subform} className="profilesignup profex procex">
            <div className="profilesignup2  ">
                <div className="signup1">
                    <h1>Name</h1>
                    <input onChange={e=>setname(e.target.value)} required={true} type="text" placeholder='Name' />
                    <h1>Email</h1>
                    <input onChange={e=>setemail(e.target.value)} required={true} type="email" placeholder='Email' />
                    
                    <h1>Contact Number</h1>
                    <input onChange={e=>setphone(e.target.value)} required={true} type="text" placeholder='Contact Number' />
                    
                   
                    <h1>Location</h1>
                    <input onChange={e=>setlocation(e.target.value)} style={{marginBottom:'18px'}} type="text" placeholder='Location address' />
                    
                    <div className="choose">
                        <input required={true} type="checkbox" />
                        <h1>Accept terms and condiitions</h1>
                    </div>
                    <div className="choose">
                        <input required={true} type="checkbox" />
                        <h1>Accept GDPR</h1>
                    </div>

                  
                </div>
                <div className="signup2">

                    
                    <h1>Profile Image</h1>
                    <button>{imageload} <input onChange={e=>setfilex(e.target.files[0])} required={true} type="file" /></button>
               
                    <h1>Bio</h1>
                    <textarea onChange={e=>setbio(e.target.value)} required={true} type="text"   placeholder='Type here...' />
                    
                  
                    
               

                </div>


            </div>
            <button type='submit' className='btns'>Create Profile</button>


        </form>

      </div>
    </div>
  )
}

export default Clientsignup