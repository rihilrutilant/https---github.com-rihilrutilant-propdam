import React, { useState } from 'react';
import axios from 'axios';
import apiConst from '../ApiKeys';

const Demo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      moblie: mobile,
      otp: otp
    };

    axios.post(apiConst.signup, userData)
      .then(response => {
        console.log('User data stored successfully:', response.data);
        // Perform any additional actions or show success message
      })
      .catch(error => {
        console.error('Error storing user data:', error);
        // Handle error or show error message
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="moblie" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
