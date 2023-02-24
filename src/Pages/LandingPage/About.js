import React from 'react';
import '../../assets/styles/About.css';
import Dot from '../../assets/images/Dot.png';
import About_banner from '../../assets/images/About_banner.jpg';
import About_Member_Img from '../../assets/images/About_Member_Img.png';
import BookaDemo from '../../components/BookaDemo';
// import SampleResume from '../../assets/files/sample.pdf';

const About = () => {
  return (
    <div>
      <div className='container my-5' id='WhatWeDo'>
        <div className='row About_Body justify-content-between align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12 my-5 About_Banner'>
            <div className='banner_image '>
              <div className='Abt_Dot_img'>
                <img src={Dot} className='dot_img' />
              </div>
              <div className='Banner_img'>
                <img src={About_banner} className='img-fluid banner ' />
              </div>
              {/* <div className='about_Member_Img'>
                <img src={About_Member_Img} className='member_img' />
              </div> */}
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 my-5 About_Title'>
            <div className='About_txt'>
              <h1 className='poppins-bold mb-4'>Powered by Motivation</h1>
              {/* <h3 className='poppins-semibold mb-4'>We have asked managers what onboarding of new employees really looks like ...</h3> */}
              <p className='poppins-regular powered-text mb-4'>
                OnboardingButler is <span>uniquely designed to help you, as the hiring manager, to be constantly focused</span> and motivated to solve the tasks around Good
                Onboarding Management.
                <br />
                <br />
                In the OnboardingButler Pathfinder Information System you will find a <span>number of real-time informations</span> telling you in detail how it goes with the
                different onboarding processes you're working with.
                <br />
                <br />
                Delivering suggestions to how to even further strengthen your onboarding management.
                <br />
                <br />
                Always forward-looking - always supportive - all the time based on deep onboarding professionalism.
              </p>
              <div className='About_btn pt-4'>
                <a href='https://butler-media.fra1.digitaloceanspaces.com/document.pdf' target='_blank' className='btn-onboarding-public poppins-medium' download='file'>
                  Download Brochure
                </a>
                <BookaDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
