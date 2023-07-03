import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Login.css'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import apiConst from "../GlobalConst/ApiKeys"
import axios from 'axios';

function Register() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [showOtpInput, setShowOtpInput] = useState(false);
    const [mobile, setmobile] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);


    //------------------ Verify OTP --------------------- 
    const handleChange = (e, index) => {
        const value = e.target.value;
        setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;
            return newOtp;
        });
        if (value !== '') {
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text/plain').slice(0, 4);
        const newOtp = [...otp];
        for (let i = 0; i < pasteData.length; i++) {
            newOtp[i] = pasteData[i];
        }
        setOtp(newOtp);
    };


    const handleSendOtp = (e) => {
        e.preventDefault();
        setShowOtpInput(true);

        var data = JSON.stringify({
            "mobile": mobile,
            "name":name,
        });
        console.log(data);

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: apiConst.send_otp_to_user_register,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const GetMobileNo = (e) => {
        setmobile(e.target.value)
    }

    const GetEmail = (e) => {
        setEmail(e.target.value)
    }

    const GetName = (e) => {
        setName(e.target.value)
    }

    const VerifyOtp = (e) => {
        e.preventDefault();
        console.log(mobile)
        console.log(otp.join(''))
        alert("Your otp ok")
        SetToken()
    }

    const SetToken = () => {
        localStorage.setItem('token', '<PASSWORD>')
    }

    function handleKeyDown(event) {
        const maxLength = 10;
        const inputValue = event.target.value;

        if (inputValue.length >= maxLength && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    function onlyOneOtp(event) {
        const maxLength = 1;
        const inputValue = event.target.value;

        if (inputValue.length >= maxLength && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    return (
        <>
            <Navbar />
            <div className="container123">
                <div className='logo1234'>
                    <img src={require('../Assets/R.png')} alt="" />
                </div>
                <div className='form-width '>
                    <form onSubmit={handleSendOtp}>
                        <input className='txt-mo' type="text" placeholder="Name" onChange={GetName} />
                        <input className='txt-mo' type="email" placeholder="Email address" onChange={GetEmail} />
                        <input
                            className='txt-mo'
                            onChange={GetMobileNo}
                            required
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter Mobile Number"
                            onKeyDown={handleKeyDown}
                        />

                        {showOtpInput ?
                            <>
                                <div className='input-otp'>
                                    <input
                                        type="number"
                                        required
                                        value={otp[0]}
                                        onChange={(e) => handleChange(e, 0)}
                                        onPaste={handlePaste}
                                        ref={(ref) => (inputRefs.current[0] = ref)}
                                        onKeyDown={onlyOneOtp}
                                    />
                                    <input
                                        type="number"
                                        required
                                        value={otp[1]}
                                        onChange={(e) => handleChange(e, 1)}
                                        onPaste={handlePaste}
                                        ref={(ref) => (inputRefs.current[1] = ref)}
                                        onKeyDown={onlyOneOtp}
                                    />
                                    <input
                                        type="number"
                                        required
                                        value={otp[2]}
                                        onChange={(e) => handleChange(e, 2)}
                                        onPaste={handlePaste}
                                        ref={(ref) => (inputRefs.current[2] = ref)}
                                        onKeyDown={onlyOneOtp}
                                    />
                                    <input
                                        type="number"
                                        maxLength="1"
                                        required
                                        value={otp[3]}
                                        onChange={(e) => handleChange(e, 3)}
                                        onPaste={handlePaste}
                                        ref={(ref) => (inputRefs.current[3] = ref)}
                                        onKeyDown={onlyOneOtp}
                                    />
                                </div>
                                <button onClick={VerifyOtp} className='sentopt-btn'>Verify OTP</button>
                            </>
                            :
                            <div className='send-otp-login'>
                                <button type='submit' className='sentopt-btn'>Sent otp</button>
                            </div>
                        }
                    </form>
                    <div className=''>
                        <Link to='/login'><button className='login-btn'>Login</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register