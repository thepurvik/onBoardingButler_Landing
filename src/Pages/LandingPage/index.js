import React from 'react';
import HeroBanner from './HeroBanner';
import About from './About';
import Reviews from './Reviews';
import Challanges from './Challanges';
import Boarding from './Boarding';
import Contact from './Contact';
import CounterUpPage from './CounterUpPage';

const LandingPage = () => {
  return (
    <div className='landingSection'>
      <HeroBanner />
      <About />
      <Reviews />
      <Contact />
      <Challanges />
      <CounterUpPage />
      <Boarding />
    </div>
  );
};

export default LandingPage;
