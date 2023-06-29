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
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Login</li></NavLink>
                    <NavLink to="/CustomerService" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Customer Service</li></NavLink>
                    <NavLink to="/plans" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Plans</li></NavLink>
                </ul>
                <Link style={{ zIndex: "0" }} to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
            </div>
        </nav>
    )
}

export default Navbar