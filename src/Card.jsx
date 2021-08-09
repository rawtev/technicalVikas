import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <div className="col-md-4 d-inline-block container-fluid mb-4">
                <div className="card row mx-auto">
                    <img src={props.url} className="card-img-top mt-2" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{props.title}</strong></h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="/" className="btn btn-primary navlink">Know more</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
