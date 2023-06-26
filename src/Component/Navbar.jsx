import React from 'react'
import "../Style/Navbar.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><NavLink to="/login" activeClassName='active'>Login</NavLink></li>
                    <li><NavLink to="/CustomerService" activeClassName='active'>Customer Service</NavLink></li>
                    <li><NavLink to="/plans" activeClassName='active'>Plans</NavLink></li>
                </ul>
                <Link to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
            </div>
        </nav>
    )
}

export default Navbar