import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Home() {
    return (
        <>
        <div className="col-md-10 container-fluid">
                <div className="row common my-5">
                    <div className="container-fluid row d-flex align-items-center">
                        <div className="col-md-6 container-fluid ">
                            <p className="">Welcome to the Home page of <span className="text-primary">Technical Vikas</span></p>
                            <h5 className="text-secondary">We are the best web development startup</h5>
                            <NavLink to="/services" className="btn btn-primary navlink mt-4">Get Started</NavLink>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2 justify-content-center">
                            <img className="img-fluid animated my-5" src="https://miro.medium.com/max/1280/0*403q_TPRme3B-LqJ.jpg" alt="random"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
