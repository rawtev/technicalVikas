import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Services from './Services';

function DisplayWebsite() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/services" component={Services} />
            </Switch>
            <Footer />
        </>
    )
}

export default DisplayWebsite;
