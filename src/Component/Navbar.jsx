import React from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/CustomerService">Customer Service</Link></li>
                    <li><Link to="/plans">Plans</Link></li>
                </ul>
                <Link to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
            </div>
        </nav>
    )
}

export default Navbar