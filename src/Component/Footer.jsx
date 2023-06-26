import React from "react";
import "../Style/Footer.css";
import a1 from "../Assets/Play.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import a2 from "../Assets/ios.png";
import p1 from "../Assets/R.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-f">
      <div className="inner-main-fpart">
        <img className="logo" src={p1} alt="" />
        <div className="m-in">
          <h3 className="in-text">FOLLOW US :</h3>
          <div className="in-fb">
            <Link>
              {" "}
              <button className="fb">
                <FaFacebookF />
              </button>{" "}
            </Link>
          </div>
          <div className="in-insta">
            <Link>
              <button className="insta">
                <FaInstagram />
              </button>
            </Link>
          </div>
          <div className="in-yt">
            <Link>
              <button className="yt">
                <FaYoutube />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* footer inner part */}
      {/* <div className="inner-info container-fluid">
        <div className="Propdam-part">
          <h3 className="p-h3">Propdam</h3>
          <p>Mobile Apps</p>
          <p>Our Services</p>
          <p>Price Trends</p>
          <p>Builder in India</p>
          <p>Area Converter</p>
          <p>Articles</p>
          <p>Customer Services</p>
          <p>Sitemap</p>
        </div>
        <div className="Company-part">
          <h3 className="p-h3">Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Carrers with us</p>
          <p>Terms & Conditions</p>
          <p>Request Info</p>
          <p>Feedback</p>
          <p>Report a problem</p>
          <p>Testimonials</p>
          <p>Privacy Policy</p>
          <p>Summons/Notices</p>
          <p>Grievances</p>
          <p>Safety Guide</p>
        </div>
        <div className="Contact-us-part">
          <h3 className="p-h3">Contact Us</h3>
          <p>Toll Free - 0000 41 9909</p>
          <p>Email: Info@propdam.com</p>
          <img className="play-f-img" src={a1} alt="" /> <br />
          <img className="play-f-img" src={a2} alt="" />
          <p>
            All trademarks are the property <br /> of their respective owners.
          </p>
          <p>
            All rights reserved - Secure <br /> Nurture Pvt Ltd.
          </p>
        </div>
        <div className="Subscribe-part">
          <h3 className="p-h3">Subscribe</h3>
          <div className="sub-inner">
            <p>
              Subscribe to our newsletter and stay updated on the latest price
              and special offers!
            </p>
            <input
              className="in1"
              type="text"
              placeholder="Enter Email Address...."
            />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Footer;
