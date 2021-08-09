import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className=" w-100 bg-white text-center">
            <div className="row">
                <p>© {year} Technical Vikas | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
