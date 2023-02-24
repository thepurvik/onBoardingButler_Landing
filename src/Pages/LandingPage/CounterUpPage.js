import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <div className='col-lg-12 text-center mt-5 Counter-box'>
        <div className='mb-5'>
          <h1>The Problems With Onboarding Are Well Known</h1>
        </div>
        <div className='mb-5'>
          <h2 className='poppins-bold'>{counterOn && <CountUp start={0} end={8} duration={5} />} months</h2>
          <p className='poppins-regular'>It typically takes up to 8 months for a newly hired employeeto reach full productivity</p>
        </div>
        <div className=''>
          <h2 className='poppins-bold'>{counterOn && <CountUp start={0} end={28} duration={7} />} %</h2>
          <p className='poppins-regular'>28% of external hires fail within the first year. </p>
        </div>
      </div>
      <div></div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
