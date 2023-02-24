import React from 'react';
import { Vector } from '../../assets/icons/Vector';
import Element_img from '../../assets/images/Elements.png';
import '../../assets/styles/Challanges.css';

const Challanges = () => {
  return (
    <>
      <div className='container' id='challange'>
        <div className='row'>
          <div className='col-12 Challanges_body'>
            <div className='img_elments'>
              {Array.from({ length: 4 }, () => (
                <img src={Element_img} className='element_img' />
              ))}
            </div>
            <div className='Challanges_txt'>
              <h1 className='poppins-bold'>What Challenge Are We Solving?</h1>
              <p className='poppins-regular text-black text-md-center text-left'>
                Employee onboarding processes of today are a fragmented palette of really many micro-work tasks, which are irregularly distributed from time to time from among
                managers and employees (internally and externally).
                <br />
                <br />
                In reality as a secondary work task, decoupled the core task. In many ways an extremely complex process.
                <br />
                <br />
                And although the employee onboarding process is thus truly one of the most risky, vulnerable and consequential corporate work processes, it is also one of the least
                coherent digitized core processes in a company, and intelligent automation and system support are not developed at the same level as many others of the company's
                work processes may otherwise is.
                <br />
                <br />
                That’s a hugely challenging paradox - and one OnboardingButler aims to solve.
              </p>
              {/* <button className='btn-onboarding-public poppins-medium my-0' onClick={() => (window.location = '#')}>
                Start Now
                <span className='vector_icon'>
                  <Vector />
                </span>
              </button> */}
            </div>
            <div className='img_elments1'>
              {Array.from({ length: 4 }, () => (
                <img src={Element_img} alt='element_img1' className='element_img' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challanges;
