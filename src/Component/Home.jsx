import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Style/Home.css"
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import data from "../data";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'
import { useNavigate } from 'react-router'

const Home = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor1, setBackgroundColor1] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor2, setBackgroundColor2] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor3, setBackgroundColor3] = useState('rgba(255, 255, 255, 0.8)');
  const [backgroundColor4, setBackgroundColor4] = useState('rgba(255, 255, 255, 0.8)');

  const handleClick = () => {
    setBackgroundColor('#FDA94F');
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4(true);
  };

  const handleClick1 = () => {
    setBackgroundColor(true);
    setBackgroundColor1('#FDA94F');
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4(true);
  };

  const handleClick2 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2('#FDA94F');
    setBackgroundColor3(true);
    setBackgroundColor4(true);
  };

  const handleClick3 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3('#FDA94F');
    setBackgroundColor4(true);
  };

  const handleClick4 = () => {
    setBackgroundColor(true);
    setBackgroundColor1(true);
    setBackgroundColor2(true);
    setBackgroundColor3(true);
    setBackgroundColor4('#FDA94F');
  };


  const images = [
    'https://i.imgur.com/SLhqvuO.jpeg',
    'https://i.imgur.com/ha5D75D.jpeg',
  ];

  const des = [
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort,',
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort',
  ]

  const handleInputChange = (selectedOption) => {

    if (selectedOption?.length >= 1) {
      setisMenuOpen(true)
    }
    else {
      setisMenuOpen(false)
    }
  };

  const options = data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const navigate = useNavigate();
  const filterPage = () => {
    navigate('/filter')
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="main-div-home">
        <div className='banner-img'>
          <img src={require("../Assets/banner.jpg")} alt=" " />
        </div>
        <div style={{ width: "100" }}>
          <div className="center-btns">
            <div style={{ backgroundColor: backgroundColor }} onClick={handleClick} className='all-btns' to='/'>BUY</div>
            <div style={{ backgroundColor: backgroundColor1 }} onClick={handleClick1} className='all-btns' to="#rent">RENT/LEASE</div>
            <div style={{ backgroundColor: backgroundColor2 }} onClick={handleClick2} className='all-btns' to="/">PROJECTS</div>
            <div style={{ backgroundColor: backgroundColor3 }} onClick={handleClick3} className='all-btns' to="/">BUILDERS</div>
            <div style={{ backgroundColor: backgroundColor4 }} onClick={handleClick4} className='all-btns' to="/">DEALERS</div>
          </div>
        </div>
        <div className="bottom-side">
          <form className="display-flex-bottom" onSubmit={filterPage}>
            <div className="dropdown" id="valueItemDrop">
              <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                All Property Types <i className="fa-solid fa-angle-down"></i>
              </button>
              <ul className="dropdown-menu dp" aria-labelledby="dLabel">
                <li className="checkbox form-group">
                  <input type="checkbox" id="valuePot" value="Value Pot" name="Value Pot" />
                  <label className='lebel123' htmlFor="valuePot">Flat/Apartment</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="payback" value="Payback" name="Payback" />
                  <label className='lebel123' htmlFor="payback">Builder Floor</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="writeOff" value="Write-off" name="Write-off" />
                  <label className='lebel123' htmlFor="writeOff">Villa</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="offset" value="Offset" name="Offset" />
                  <label className='lebel123' htmlFor="offset">Land</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">House</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Ready to move offices</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Shops & Retail</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Warehouse</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Factory & Manufacturing</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Bare shell offices</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Commercial/Inst. Land</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Industrial Land/Plots</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Cold Storage</label>
                </li>
                <li className="checkbox form-group">
                  <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                  <label className='lebel123' htmlFor="genValuePot">Hotel/Resorts</label>
                </li>
              </ul>
            </div>
            <div className='upper-home'>
              <div className='search-p'>
                <Select
                  options={options}
                  onInputChange={handleInputChange}
                  // placeholder="Select a location"
                  isSearchable
                  menuIsOpen={isMenuOpen}
                  isMulti
                  required
                />
              </div>
              <button className='search'>Search</button>
            </div>
          </form>
        </div>
        <ImageSlider images={images} des={des} />
      </div>
      <Footer />
    </>
  )
}

export default Home