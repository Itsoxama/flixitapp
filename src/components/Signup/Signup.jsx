




import React from 'react'
import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import banner from '../../images/banner3.png'
import axios from 'axios'
import firebase from 'firebase'

import * as ft from '../apis'
const Signup = () => {
  const [services, setservices] = useState('services2')
  const [services2, setservices2] = useState('services2')
  const [i, seti] = useState(0)
  const [j, setj] = useState(0)
  function openservices() {
    if (i === 0) {
      setservices('services')
      seti(1)
    }
    else {
      seti(0)
      setservices('services2')
    }

  }
  function openservices2() {
    if (j === 0) {
      setservices2('services')
      setj(1)
    }
    else {
      setj(0)
      setservices2('services2')
    }

  }

  function setservicesa(val) {
    setservices('services2')

    setservice(val)


  }

  function setservicesaa(val) {

    setservices2('services2')
    setprofession(val)


  }
  const [file, setfile] = useState()

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [location, setlocation] = useState("")
  const [phone, setphone] = useState("")
  const [service, setservice] = useState("Select One")
  const [servicesx, setservicesx] = useState("")
  const [bio, setbio] = useState("")
  const [profession, setprofession] = useState("Select One")
  const [imageupload, setimageupload] = useState([])
  const [profileimage, setprofileimage] = useState("asdasdasd")
  const [bannerimage, setbannerimage] = useState("asdasdasd")
  const [qualifications, setqualifications] = useState("asdasdasd")
  const [files, setfiles] = useState()
  const [qualfile, setqualfile] = useState()
  const [profile, setprofile] = useState()
  function createprofile(e) {
   
    e.preventDefault();
    setcf("asd")
    var a = new Date()
    var b = a.getTime().toString()

    var uploadTask = firebase.storage().ref().child(`${b}`).put(file);

    uploadTask.on('state_changed',
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
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
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('banner available at', downloadURL);

          var uploadTask2 = firebase.storage().ref().child(`${b}+asd3`).put(profile);

          uploadTask2.on('state_changed',
            (snapshot2) => {
              var progress = (snapshot2.bytesTransferred / snapshot2.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot2.state) {
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
              uploadTask2.snapshot.ref.getDownloadURL().then((downloadURL2) => {
                console.log('profile available at', downloadURL2);

                var uploadTask3 = firebase.storage().ref().child(`${b}+as`).put(qualfile);

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



                      function uploadImageAsPromise (imageFile,index) {
                        return new Promise(function (resolve, reject) {
                           
                    
                          var uploadTask4 =  firebase.storage().ref().child(`${new Date().getTime().toString()}`).put(imageFile);

                            //Update progress bar
                            uploadTask4.on('state_changed',
                                function progress(snapshot5){
                                    var percentage = snapshot5.bytesTransferred / snapshot5.totalBytes * 100;
                                    
                                },
                                function error(err){
                    
                                },
                                function complete(){
                                  uploadTask4.snapshot.ref.getDownloadURL().then((downloadURL4) => {
                                    console.log('qual available at', downloadURL4);
                                    imageupload.push(downloadURL4)



                                    if(index===files.length-1){
                        


                                      axios.post(`${ft.api}api/signup/add`, {
                                        name: name,
                                        phone: phone,
                                        
                                        review:5,
                                        reviewCount:1,
                                        location: location,
                                        service: service,
                                        profession: profession,
                                        bio: bio,
                                        services: servicesx,
                                        bannerimage: downloadURL,
                                        profileimage: downloadURL2,
                                        imageupload: imageupload,
                                        qualifications: downloadURL3,
                                        email: email,
                                        password: '12345678',
                                      }).then(res => {
                                        console.log(res)
                                        window.location.pathname='login'

                                      })
                                      
                                      
                                      
                                                            }
                                      


                                  })
              
              
                                }
                            );
                        });
                    }


                     for (var k = 0; k < files.length; k++) {




                      uploadImageAsPromise(files[k],k);




                      }








                    });
                  }
                );















              });
            }
          );








        });
      }
    );


  }
  const [cf, setcf] = useState("Create Profile")
const [bi, setbi] = useState('Upload banner - *Dimension')
const [pi, setpi] = useState('Profile image upload ')
const [iu, setiu] = useState('Image upload - Max image1 (5)')
const [uq, setuq] = useState('Upload image of qualifications')


function filex(val) {
  setfile(val)
  setbi('Image uploaded')
  
}
function filex2(val) {
  setprofile(val)
  setpi('Image uploaded')
  
}

function filex3(val) {
  setfiles(val)
  setiu('Image uploaded')
  
}

function filex4(val) {
  setqualfile(val)
  setuq('Image uploaded')
  
}



  return (
    <div className="login">
      <div className="profile1x">
        <img src={banner} className='bannerx' alt="" />
        <form onSubmit={createprofile} className="profilesignup">
          <div className="profilesignup2">
            <div className="signup1">
              <h1>Name</h1>
              <input required={true} onChange={e => setname(e.target.value)} type="text" placeholder='Name' />
              <h1>Email</h1>
              <input required={true} onChange={e => setemail(e.target.value)} type="email" placeholder='Email' />

              <h1>Contact Number</h1>
              <input required={true} type="text" onChange={e => setphone(e.target.value)} placeholder='Contact Number' />

              <h1>Services</h1>
              <span >
                <h1 onClick={e => openservices('services')}>{service}</h1>
                <MdArrowDropDown className='md' onClick={e => openservices('services')} />

                <div className={services}>
                  <h1 onClick={e => setservicesa('Womens cut')}>Womens cut</h1>
                  <h1 onClick={e => setservicesa('Mens cut')} >Mens cut</h1>
                  <h1 onClick={e => setservicesa('Colour')} >Colour</h1><h1 onClick={e => setservicesa('Brazilian blowdry')} >Brazilian blowdry</h1>
                  <h1 onClick={e => setservicesa('Brow waxing / threading')} >Brow waxing / threading</h1>
                  <h1 onClick={e => setservicesa('Massage')} >Massage</h1>
                  <h1 onClick={e => setservicesa('Nails')} >Nails</h1>
                  <h1 onClick={e => setservicesa('Pedicure')} >Pedicure</h1>
                  <h1 onClick={e => setservicesa('Fake tanning')} >Fake tanning</h1><h1>Occasion styling</h1>


                </div>
              </span>

              <h1>Profession</h1>

              <span>
                <h1 onClick={e => openservices2('services')}>{profession}</h1>
                <MdArrowDropDown onClick={e => openservices2('services')} className='md' />

                <div className={services2}>
                  <h1 onClick={e => setservicesaa('Hairdresser')}>Hairdresser</h1>
                  <h1 onClick={e => setservicesaa('Barber')} >Barber</h1>
                  <h1 onClick={e => setservicesaa('Beauty therapist')} >Beauty therapist</h1>

                </div>
              </span>

              <h1>Location</h1>
              <input required={true} onChange={e => setlocation(e.target.value)} type="text" placeholder='Location address' />

              <h1>Bio</h1>
              <textarea onChange={e => setbio(e.target.value)} type="text" placeholder='Type here...' />
              <div className="choose choosex2">
                <input type="checkbox" />
                <h1>Accept terms and condiitions</h1>
              </div>
              <div className="choose choosex2">
                <input type="checkbox" />
                <h1>Accept GDPR</h1>
              </div>


            </div>
            <div className="signup2">

              <h1>Services</h1>
              <textarea onChange={e => setservicesx(e.target.value)} type="text" placeholder='Type here...' />

              <h1>Banner Image</h1>
              <button>{bi} <input required={true} onChange={e => filex(e.target.files[0])} type="file" /></button>


              <h1>Profile Image</h1>
              <button>{pi}<input required={true} onChange={e => filex2(e.target.files[0])} type="file" /></button>


              <h1>Image Upload</h1>
              <button>{iu}  <input required={true} multiple={true} onChange={e => filex3(e.target.files)} type="file" /></button>


              <h1>Qualifications</h1>
              <button>{uq} <input required={true} onChange={e => filex4(e.target.files[0])} type="file" /></button>

              <div className="choose choosex">
                <input type="checkbox" />
                <h1>Accept terms and condiitions</h1>
              </div>
              <div className="choose choosex">
                <input type="checkbox" />
                <h1>Accept GDPR</h1>
              </div>

            </div>


          </div>
          <button type='submit' className='btns' >

{cf==='Create Profile'?
<>{cf}</>:
<div class="lds-dual-ring"></div>

}
          </button>

        </form>

      </div>
    </div>
  )
}

export default Signup