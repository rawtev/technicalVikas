import React from 'react';
import Card from './Card';
import data from './ServiceCard';

function Services() {
    console.log(data);
    return (
        <div className="col-md-10 container-fluid">
            <div className="row my-2">
                <h2 className="text-center text-secondary">Our Services</h2>
            </div>
            <div className="container-fluid">
                {
                    data.map((elem, ind) => {
                        return (
                            <Card
                                key={ind}
                                title={elem.title}
                                url={elem.url}
                                desc={elem.desc}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Services;
