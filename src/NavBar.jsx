import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function NavBar() {
    return (
        <>
            <div className="col-md-10 container-fluid align-items-center">
                <div className="row my-3">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">Technical Vikas</NavLink>
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu-active" className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink activeClassName="menu-active" className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink activeClassName="menu-active" className="nav-link" to="/aboutus">About Us</NavLink>
                                    </li>
                                    <li  className="nav-item">
                                        <NavLink activeClassName="menu-active" className="nav-link" to="/contactus">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar;
