import React from 'react'

import banner from '../../images/banner2.png'
const Choosesignup = () => {
    return (
        <div className="login">
            <div className="profile1x">
                <img src={banner} className='bannerx' alt="" />
                <div className="profile2x prof3x">
                    <h4>Signup</h4>

                    <h3>Your one set closer to growing your client based,
                        Just choose the option that best suits you</h3>
                    <div className="plans">
                        <div className="plan1">
                            <h1>Standard profile</h1>
                            <h2>Included in the standard profile page:</h2>
                            <p>• <p>Profile picture</p> </p>
                            <p>• <p>2 image</p> </p>
                            <p>• <p>Standard appreance on search page</p> </p>
                            <p>• <p>Messaging functionality</p> </p>
                            <h6>Cost:Free</h6>
<button onClick={e=>window.location.pathname='/client-signup'}>Sign up</button>

                        </div>
                        
                        <div className="plan1">
                            <h1>Premium profile</h1>
                            <h2>Included in Premium profile page:</h2>
                            <p>• <p>Profile picture</p> </p>
                            <p>• <p>10 image</p> </p>
                            <p>• <p>Header image</p> </p>
                            <p>• <p>Premium placement on search pages</p> </p>
                            
                            <p>• <p>Featured listing on front page</p> </p>
                            
                            <p>• <p>Messaging Functionality</p> </p>
                            <h5>Cost : £4.99 per month</h5>
                            <h3>Cancel any time</h3>

                            <button onClick={e=>window.location.pathname='/signup'}>Sign up</button>

                        </div>
                    </div>
                  



                </div>

            </div>
        </div>
    )
}

export default Choosesignup
