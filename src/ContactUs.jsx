import React from 'react';
import { NavLink } from 'react-router-dom';

function ContactUs() {
    return (
        <div className="col-md-10 container-fluid">
            <div className="row">
                <div className="col-md-6 container-fluid my-2">
                <h2 className="text-center text-secondary">Contact Us</h2>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"  />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"  />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <NavLink onClick={()=>{alert('Thanks for Submiting.... Our team will contact to you as soon as possible.')}} to="/" className="btn btn-primary navlink">Submit</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
