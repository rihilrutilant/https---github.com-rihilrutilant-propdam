import React from 'react'
import '../Style/Login.css'
import Footer from './Footer'
import Navbar from './Navbar'
function Register() {
    return (
        <>
            <Navbar />
            <div className="container123">
                <div className='logo1234'>
                    <img src={require('../Assets/R.png')} alt="" srcset="" />
                </div>
                <div className='form-width '>
                    <form>
                        <div>
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Email address" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Mobile Number" requireda />
                        </div>
                        <div className=''>
                            <button className='reigster-btn'>register</button>
                        </div>
                        <div className=''>
                            <button className='login-btn'>login</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register