import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "../Style/Home.css"
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import data from "../data.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const images = [
    'https://i.imgur.com/SLhqvuO.jpeg',
    'https://i.imgur.com/ha5D75D.jpeg',
  ];

  const des = [
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort, and every detail is meticulously crafted for the discerning hometown.',
    'Luxury living awaits in our exquisite real estate flats, where elegance meets comfort',
  ]

  const [search, setSearch] = useState("");

  const [selectedValues, setSelectedValues] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleDropdownChange = (event) => {
    const { value, options } = event.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedValues(selectedOptions);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
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
          <div className="display-flex-bottom">
            <div className="dropdown" id="valueItemDrop">
              <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                All Residential
              </button>
              <ul className="dropdown-menu" aria-labelledby="dLabel">
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
              </ul>
            </div>
            <input type="text" className='search-p' placeholder='Select Property Type' value={search}
              onChange={(e) => setSearch(e.target.value)} />
            <button className='search'>Search</button>
          </div>
          <div className="all-data">
            {data
              ?.filter((list) => {
                return search?.toLowerCase().startsWith("s") || search?.toLowerCase().startsWith("d")
                  ? list?.name.toLowerCase().includes(search)
                  : false;
              })

              ?.map((list) => {
                return (
                  <div className="box" key={list?.id}>
                    <span style={{ cursor: "pointer" }}> {list?.name} </span>
                  </div>
                );
              })}
          </div>
        </div>
        <ImageSlider images={images} des={des} />
      </div>
      <Footer />
    </>
  )
}

export default Home