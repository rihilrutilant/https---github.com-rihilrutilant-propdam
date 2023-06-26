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
    <>
      <section>
        <div className="main-f">
          <div className="footer_top">
            <div className="container-fluid">
              <div className="inner-main-fpart">
                <img className="p_logo" src={p1} alt="" />
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
            </div>
          </div>
          {/* footer inner part */}
          <div className="inner-info container-fluid">
            <div className="Propdam-part">
              <h3 className="p-h3">Propdam</h3>
              <Link>
                <p>Mobile Apps</p>
              </Link>
              <Link>
                <p>Our Services</p>
              </Link>
              <Link>
                <p>Price Trends</p>
              </Link>
              <Link>
                <p>Builder in India</p>
              </Link>
              <Link>
                <p>Area Converter</p>
              </Link>
              <Link>
                <p>Articles</p>
              </Link>
              <Link>
                <p>Customer Services</p>
              </Link>
              <Link>
                <p>Sitemap</p>
              </Link>
            </div>
            <div className="Company-part">
              <h3 className="p-h3">Company</h3>
              <Link>
                <p>About Us</p>
              </Link>
              <Link>
                <p>Contact Us</p>
              </Link>
              <Link>
                <p>Carrers with us</p>
              </Link>
              <Link>
                <p>Terms & Conditions</p>
              </Link>
              <Link>
                <p>Request Info</p>
              </Link>
              <Link>
                <p>Feedback</p>
              </Link>
              <Link>
                <p>Report a problem</p>
              </Link>
              <Link>
                <p>Testimonials</p>
              </Link>
              <Link>
                <p>Privacy Policy</p>
              </Link>
              <Link>
                <p>Summons/Notices</p>
              </Link>
              <Link>
                <p>Grievances</p>
              </Link>
              <Link>
                <p>Safety Guide</p>
              </Link>
            </div>
            <div className="Contact-us-part">
              <h3 className="p-h3">Contact Us</h3>
              <p>Toll Free - 0000 41 9909</p>
              <p>Email: Info@propdam.com</p>
              <img className="play-f-img" src={a1} alt="" /> <br />
              <img className="play-f-img" src={a2} alt="" />
              <p>
                All trademarks are the property <br /> of their respective
                owners.
              </p>
              <p>
                All rights reserved - Secure <br /> Nurture Pvt Ltd.
              </p>
            </div>
            <div className="Subscribe-part">
              <h3 className="p-h3">Subscribe</h3>
              <div className="sub-inner">
                <p>
                  Subscribe to our newsletter and stay updated on the latest
                  price and special offers!
                </p>
                <input
                  className="in1"
                  type="text"
                  placeholder="Enter Email Address...."
                />
                <button className="sub-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
