import React from 'react';
import Navbar from '../Components/Common/Navbar';
import Slider from '../Components/Slider';
import Services from '../Components/Services';
import CalltoAction from '../Components/CallToAction';
import CalltoActionSmall from '../Components/CallToActionSmall';
import About from '../Components/About';
import Footer from '../Components/Common/Footer';
import Prices from '../Components/Prices';
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import News from '../Components/News';


function HomepageOne() {


  return (
    <>
    <Navbar />
    <Slider />
    <About/>
    <CalltoAction />
    <Services />
    <Portfolio />
    <Prices />
    <CalltoActionSmall />
    <News />
    <Contact />
    <Footer />
    </>

  )
}

export default HomepageOne
