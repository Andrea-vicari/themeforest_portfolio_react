import React from 'react';

// import NavbarOffCanvas from './Components/Common/NavbarOffCanvas';
import NavbarFixedTop from './Components/Common/NavbarFixedTop';
import Slider from './Components/Slider';
import HeroIntro from './Components/HeroIntro';
import Services from './Components/Services';
import CalltoAction from './Components/CallToAction';
import CalltoActionSmall from './Components/CallToActionSmall';
// import AboutMe from './Components/AboutMe';
// import Footer from './Components/Common/Footer';
import FooterTwoColumns from './Components/Common/FooterTwoColumns';
import Prices from './Components/Prices';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import PortfolioOverlay from './Components/PortfolioOverlay';
import News from './Components/News';
import Features from './Components/Features';

function App() {


  return (
    <>
    <NavbarFixedTop />
    <HeroIntro />
    <AboutMe/>
    <CalltoAction />
    <Services />
    <Portfolio />
    <Prices />
    <CalltoActionSmall />
    <Features />
    <Contact />
    <FooterTwoColumns />
    </>

  )}

export default App
