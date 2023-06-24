import React from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-white second-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="flex-nav">
                        <div className="nav-img">
                            <img src={require("../Assets/R.png")} alt="" />
                        </div>

                        <div className="collapse navbar-collapse  nav-right" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link inner-text-nav" to="/login">Login <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link inner-text-nav" to="/customerService">Customer Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link inner-text-nav" to="/plans">Plans</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar