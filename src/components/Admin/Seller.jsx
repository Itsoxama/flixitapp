import React, { useState } from 'react'
import { useEffect } from 'react'
import { BiPencil } from 'react-icons/bi'
import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import { BsArrowLeft } from 'react-icons/bs'

import { MdArrowDropDown } from 'react-icons/md'
import banner from '../../images/banner3.png'
import axios from 'axios'
import firebase from 'firebase'
const Seller = ({ props }) => {
    const [services, setservices] = useState('services2')
    const [services2, setservices2] = useState('services2')
    const [o, seto] = useState(0)
    const [m, setm] = useState(0)
    function openservices() {
        if (o === 0) {
            setservices('services')
            seto(1)
        }
        else {
            seto(0)
            setservices('services2')
        }

    }
    function openservices2() {
        if (m === 0) {
            setservices2('services')
            setm(1)
        }
        else {
            setm(0)
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



                                            function uploadImageAsPromise(imageFile, index) {
                                                return new Promise(function (resolve, reject) {


                                                    var uploadTask4 = firebase.storage().ref().child(`${new Date().getTime().toString()}`).put(imageFile);

                                                    //Update progress bar
                                                    uploadTask4.on('state_changed',
                                                        function progress(snapshot5) {
                                                            var percentage = snapshot5.bytesTransferred / snapshot5.totalBytes * 100;

                                                        },
                                                        function error(err) {

                                                        },
                                                        function complete() {
                                                            uploadTask4.snapshot.ref.getDownloadURL().then((downloadURL4) => {
                                                                console.log('qual available at', downloadURL4);
                                                                imageupload.push(downloadURL4)



                                                                if (index === files.length - 1) {



                                                                    axios.post('http://localhost:4000/api/signup/add', {
                                                                        name: name,
                                                                        phone: phone,

                                                                        review: 5,
                                                                        reviewCount: 1,
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
                                                                        window.location.reload()

                                                                    })



                                                                }



                                                            })


                                                        }
                                                    );
                                                });
                                            }


                                            for (var k = 0; k < files.length; k++) {




                                                uploadImageAsPromise(files[k], k);




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


    var headers = [
        { label: "Name", key: "name" },
        { label: "    ", key: "     " },

        { label: "Email", key: "email" },

        { label: "    ", key: "     " },
        { label: "Service", key: "service" },

        { label: "    ", key: "     " },
        { label: "Number", key: "phone" },

        { label: "    ", key: "     " },
        { label: "Profession", key: "profession" },
    ];
    const [prop, setprop] = useState(props)
    const [pageselect, setpageselect] = useState(1)
    var itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    var endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    var currentItems = prop.slice(itemOffset, endOffset);

    var pageCount = Math.ceil(prop.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setpageselect(event.selected + 1)
        var newOffset = (event.selected * itemsPerPage) % prop.length;

        setItemOffset(newOffset);
    };
    useEffect(() => {
        endOffset = itemOffset + itemsPerPage;

        currentItems = prop.slice(itemOffset, endOffset);

        pageCount = Math.ceil(prop.length / itemsPerPage);

        return () => {

        }
    }, [itemOffset, itemsPerPage, prop])

    function deleteUsers(val) {




    }
    const [i, seti] = useState(0)
    const [j, setj] = useState(0)
    const [afilter, setafilter] = useState('adminfilters2')

    function showfilter() {
        if (i === 0 && j === 0) {
            setafilter('adminfilters')
            seti(1)
        } else if (i === 1 && j === 0) {
            setafilter('adminfilters2')
            seti(0)
        }


    }
    function applyfilter() {

        if (ftype === 'profession') {

            setprop([])
            console.log(ftype)
            props.forEach(val => {
                if (val.profession === filter) {

                    setprop(prop => [...prop, val]);
                }

            });
        }
        else if (ftype === 'service') {
            setprop([])
            console.log(ftype)
            props.forEach(val => {
                if (val.service === filter) {
                    console.log(val)
                    setprop(prop => [...prop, val]);
                }

            });
        }
        else if (ftype === 'no') {
            setprop(props)
        }
        setafilter('adminfilters2')
        setj(0)
        seti(0)



    }
    function apply(ftype, filter) {
        setfilter(filter)
        setftype(ftype)

    }



    const [filter, setfilter] = useState('Barber')
    const [ftype, setftype] = useState('no')

    function searchit() {
        if (search.length > 0) {
            setprop([])
            prop.forEach(val => {
                if (val.name.toLowerCase().search(search.toLowerCase()) >= 0) {
                    console.log(val)
                    setprop(prop => [...prop, val]);
                }

            });
        }

    }
    const [update, setupdate] = useState(false)
    function editprofile(
        name,
        email,
        number,
        service,
        profession,
        location,
        bio,
        services

    ) {
        setname(name)
        setemail(email)
        setphone(number)
        setservice(service)
        setprofession(profession)
        setlocation(location)
        setbio(bio)
        setservicesx(services)
        setk(1)
        setupdate(true)





    }
    useEffect(() => {

        if (ftype && ftype === 'no') {
            setprop(props)
        }
        return () => {

        }
    }, [ftype])

    const [search, setsearch] = useState('val')
    const [k, setk] = useState(0)
    function deleted(val) {
        axios.post('http://localhost:4000/api/signup/delete', {
            _id: val
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
                window.location.reload()
            }
        })

    }

    function setsk() {
        setupdate(false)
        setk(0)

    }
    function setsk2() {
        
        setname('')
        setemail('')
        setphone('')
        setservice('')
        setprofession('')
        setlocation('')
        setbio('')
        setservicesx('')

        setk(1)
    }

    return (
        <div className="customers">
            {k === 0 &&
                <>
                    <div className="bartop"><div className="bartopbtns">

                        <button onClick={e => setsk2()}>Add User</button>
                        <button>
                            <CSVLink

                                filename={"Sellers.csv"}
                                className='s3s' data={prop} headers={headers}>
                                Export List
                            </CSVLink>
                        </button>
                    </div>
                        <div className="sfilters">

                            <input type='text' onChange={e => setsearch(e.target.value)} placeholder='Search' />
                            <button onClick={e => searchit()}>Search</button>
                            <button onClick={e => showfilter()}>Filters


                                <div onMouseEnter={e => setj(1)} onMouseLeave={e => setj(0)} className={afilter}>
                                    <h3>By Profession</h3>
                                    <p onClick={e => apply('profession', 'Barber')}><input checked={filter === 'Barber'} type="radio" /> Barbers</p>
                                    <p onClick={e => apply('profession', 'Hairdresser')}><input checked={filter === 'Hairdresser'} type="radio" /> Hairdresser</p>
                                    <p onClick={e => apply('profession', 'Beauty therapist')}><input checked={filter === 'Beauty therapist'} type="radio" /> Beauty therapist</p>
                                    <h3>By Service</h3>
                                    <p onClick={e => apply('service', 'Hair')}><input checked={filter === 'Hair'} type="radio" /> Hair</p>
                                    <p onClick={e => apply('service', 'Cut')} ><input checked={filter === 'Cut'} type="radio" /> Cut</p>
                                    <p onClick={e => apply('service', 'Colour')} ><input checked={filter === 'Colour'} type="radio" /> Colour</p>
                                    <p onClick={e => apply('service', 'Nails')} ><input checked={filter === 'Nails'} type="radio" /> Nails</p>
                                    <p onClick={e => apply('service', 'Brazilians')} ><input checked={filter === 'Brazilians'} type="radio" /> Brazilians</p>
                                    <div className="btx">
                                        <button className='aply' onClick={e => applyfilter()}>Apply</button>
                                        <button className='cancel' onClick={e => setftype('no')}>Clear</button>

                                    </div>

                                </div>
                            </button>


                        </div>
                    </div>

                    <div className="userstable">
                        <div className="subtable">
                            <div className="toprow toprow2">
                                <p className='pindex' >index</p>
                                <p className='pimage' >Profile image</p>
                                <p className='pname' >Name</p>
                                <p className='pemail' >Email</p>
                                <p className='pphone' >Phone</p>
                                <p className='pservice' >Service</p>
                                <p className='pprofession' >Profession</p>
                                <p className='pbio' >Bio</p>

                                <p className='pservices' >Services</p>
                                <p className='pphone' >Action</p>





                            </div>

                            {currentItems.length >= 1
                                ? currentItems.map((val, index) => (
                                    <>
                                        <div className="toprow toprow3">
                                            <p className='pindex' >{index + 1}</p>
                                            <p className='pimage' ><img src={val.profileimage} alt="" /> </p>
                                            <p className='pname' >{val.name}</p>
                                            <p className='pemail' >{val.email}</p>
                                            <p className='pphone' >{val.phone}</p>
                                            <p className='pservice' >{val.service}</p>
                                            <p className='pprofession' >{val.profession}</p>
                                            <p className='pbio' >{val.bio.substring(0, 25)}...</p>
                                            <p className='pservices' >{val.service}</p>
                                            <p className='pphone' ><BiPencil
                                                onClick={e => editprofile(
                                                    val.name,
                                                    val.email,
                                                    val.phone,
                                                    val.service,
                                                    val.profession,
                                                    val.location,
                                                    val.bio,
                                                    val.services
                                                )} className='ai1' /> <AiFillDelete onClick={e => deleted(val._id)} className='ai2' /> <AiFillEye onClick={e => window.location.pathname = `profile/${val._id}`} className='ai3' /> </p>





                                        </div>
                                    </>


                                ))

                                :
                                <p className='ppp'>No Items to display</p>}

                        </div>
                    </div>
                    <div className="pagin">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={`Next Page`}

                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}

                            pageCount={pageCount}
                            previousLabel="Previous Page"
                            renderOnZeroPageCount={null}

                        />
                    </div></>

            }
            {k === 1 &&
                <>

                    <button onClick={e => setsk(0)} className='backbtn'><BsArrowLeft /> Back</button>
                    <form onSubmit={createprofile} className="profilesignup profiless">

                        <div className="profilesignup2 profilessx">
                            <div className="signup1">

                                <h1 className='doblack'>Name</h1>
                                <input className='doblack' value={name} required={true} onChange={e => setname(e.target.value)} type="text" placeholder='Name' />
                                <h1 className='doblack'>Email</h1>
                                <input className='doblack' value={email} required={true} onChange={e => setemail(e.target.value)} type="email" placeholder='Email' />

                                <h1 className='doblack'>Contact Number</h1>
                                <input value={phone} className='doblack' required={true} type="text" onChange={e => setphone(e.target.value)} placeholder='Contact Number' />

                                <h1 className='doblack'>Services</h1>
                                <span >
                                    <h1 className='doblack' onClick={e => openservices('services')}>{service}</h1>
                                    <MdArrowDropDown className='md doblack' onClick={e => openservices('services')} />

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

                                <h1 className='doblack'>Profession</h1>

                                <span>
                                    <h1 className='doblack' onClick={e => openservices2('services')}>{profession}</h1>
                                    <MdArrowDropDown onClick={e => openservices2('services')} className='md doblack' />

                                    <div className={services2}>
                                        <h1 onClick={e => setservicesaa('Hairdresser')}>Hairdresser</h1>
                                        <h1 onClick={e => setservicesaa('Barber')} >Barber</h1>
                                        <h1 onClick={e => setservicesaa('Beauty therapist')} >Beauty therapist</h1>

                                    </div>
                                </span>

                                <h1 className='doblack'>Location</h1>
                                <input value={location} className='doblack' required={true} onChange={e => setlocation(e.target.value)} type="text" placeholder='Location address' />

                                <h1 className='doblack'>Bio</h1>
                                <textarea value={bio} className='doblack' onChange={e => setbio(e.target.value)} type="text" placeholder='Type here...' />
                                <div className="doblack choose choosex2">
                                    <input type="checkbox" />
                                    <h1 className='doblack'>Accept terms and condiitions</h1>
                                </div>
                                <div className="choose choosex2">
                                    <input type="checkbox" />
                                    <h1 className='doblack'>Accept GDPR</h1>
                                </div>


                            </div>
                            <div className="signup2">

                                <h1 className='doblack'>Services</h1>
                                <textarea value={servicesx} className='doblack' onChange={e => setservicesx(e.target.value)} type="text" placeholder='Type here...' />

                                <h1 className='doblack'>Banner Image</h1>
                                <button>{bi} <input required={true} onChange={e => filex(e.target.files[0])} type="file" /></button>


                                <h1 className='doblack'>Profile Image</h1>
                                <button>{pi}<input required={true} onChange={e => filex2(e.target.files[0])} type="file" /></button>


                                <h1 className='doblack'>Image Upload</h1>
                                <button>{iu}  <input required={true} multiple={true} onChange={e => filex3(e.target.files)} type="file" /></button>


                                <h1 className='doblack'>Qualifications</h1>
                                <button>{uq} <input required={true} onChange={e => filex4(e.target.files[0])} type="file" /></button>

                                <div className="choose choosex">
                                    <input type="checkbox" />
                                    <h1 className='doblack' >Accept terms and condiitions</h1>
                                </div>
                                <div className="choose choosex">
                                    <input type="checkbox" />
                                    <h1 className='doblack' >Accept GDPR</h1>
                                </div>

                            </div>


                        </div>
                        {!update ?
                            <button type='submit' className='btns' >

                                {cf === 'Create Profile' ?
                                    <>{cf}</> :
                                    <div class="lds-dual-ring"></div>

                                }
                            </button> :
                            <span className='btns' >

                                Update Profile
                            </span>


                        }


                    </form>
                </>

            }


        </div>




    )
}

export default Seller