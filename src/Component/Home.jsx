import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Style/Home.css"
import { NavLink } from 'react-router-dom'

// import Footer from './Footer'

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor1, setBackgroundColor1] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor2, setBackgroundColor2] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor3, setBackgroundColor3] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor4, setBackgroundColor4] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor5, setBackgroundColor5] = useState('rgba(255, 255, 255, 0.8)');

  const handleClick = () => {
    setBackgroundColor('#FDA94F');
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4(true);
    setBackgroundColor5(true);
  };

  const handleClick1 = () => {
    setBackgroundColor(true);
    setBackgroundColor1('#FDA94F');
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4(true);
    setBackgroundColor5(true);
  };

  const handleClick2 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2('#FDA94F');
    setBackgroundColor3(true);
    setBackgroundColor4(true);
    setBackgroundColor5(true);
  };

  const handleClick3 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3('#FDA94F');
    setBackgroundColor4(true);
    setBackgroundColor5(true);
  };

  const handleClick4 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4('#FDA94F');
    setBackgroundColor5(true);
  };

  const handleClick5 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4(true);
    setBackgroundColor5('#FDA94F');
  };

  return (
    <>
      <Navbar />
      <div className="main-div-home">
        <div className='banner-img'>
          <img src={require("../Assets/banner.jpg")} alt=" " />
        </div>
        <div className="center-btns">
          <div style={{ backgroundColor: backgroundColor }} onClick={handleClick} className='all-btns' to='/'>BUY</div>
          <div style={{ backgroundColor: backgroundColor1 }} onClick={handleClick1} className='all-btns' to="#rent">RENT/LEASE</div>
          <div style={{ backgroundColor: backgroundColor2 }} onClick={handleClick2} className='all-btns' to="/">PROJECTS</div>
          <div style={{ backgroundColor: backgroundColor3 }} onClick={handleClick3} className='all-btns' to="/">BUILDERS</div>
          <div style={{ backgroundColor: backgroundColor4 }} onClick={handleClick4} className='all-btns' to="/">DEALERS</div>
          <div style={{ backgroundColor: backgroundColor5 }} onClick={handleClick5} className='all-btns' to="/">PROPERTY TYPES</div>
        </div>
        <div className="bottom-side">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home