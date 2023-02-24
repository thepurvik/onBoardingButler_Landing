import React from 'react';
import '../assets/styles/Footer.css';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { Footer_Logo } from '../assets/icons/Footer_Logo';
import OBB_Red_Logo_White from '../assets/images/OBB_Red_Logo_White.png';
import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
  return (
    <div>
      <div className='container-fluid Footer_body'>
        <div className='container m-auto'>
          <div className='row '>
            <div className='col-lg-4 col-md-4 col-12 '>
              <div className=' my-3 Footer_txt '>
                <div className='d-flex Logo_Body'>
                  <img src={OBB_Red_Logo_White} />
                </div>
                {/* <div className='my-3'>
                  <p className='text-light-grey poppins-regular mb-1'>Phone hours:Monday to Thursday from kl.</p>
                  <p className='text-light-grey poppins-regular mb-1'>09:00 to 16:00 Friday from kl.09:00 to 16:00</p>
                </div> */}
              </div>
            </div>
            <div className='col-lg-8 col-md-8 col-12 p-0'>
              <div className='d-flex Footer_Media'>
                <div className='col-lg-5 my-3 Footer_Contact'>
                  <h4 className='poppins-bold text-white'>Contact</h4>
                  <p className='mt-4 poppins-regular text-light-grey'>OnboardingButler ApS</p>
                  <p className='my-1 poppins-regular text-light-grey'>Solbjaerget 45</p>
                  <p className='my-1 poppins-regular text-light-grey'>DK – 3460 Birkeroed</p>
                  <p className='my-1 poppins-regular text-light-grey'>Denmark</p>
                  <p className='my-1 poppins-regular text-light-grey'>info@onboardingbutler.com</p>
                  <p className='my-1 poppins-regular text-light-grey'> CVR – Central Business Register: 43010646</p>
                  {/* <h6 className='poppins-semibold text-white'>info@gmail.com</h6> */}
                </div>
                <div className='col-lg-3 my-3 Footer_links'>
                  <h4 className='poppins-bold text-white'>Links</h4>
                  <div>
                    <a href='#' className='poppins-semibold text-white'>
                      Home
                    </a>
                    {/* <a href='/privacy' className='poppins-semibold text-white'>
                      Privacy Policy
                    </a> */}
                    <a href='#challange' className='poppins-semibold text-white'>
                      The Challenge
                    </a>
                    <a href='#WhatWeDo' className='poppins-semibold text-white'>
                      What We Do
                    </a>
                    <a href='#contact' className='poppins-semibold text-white'>
                      Contact
                    </a>
                  </div>
                </div>
                <div className='col-lg-4 my-3 Social_Icon'>
                  <h4 className='poppins-bold text-white'>Socials</h4>
                  <div className='footer-icon-rounded'>
                    <a href='https://www.linkedin.com/company/onboardingbutler/' target='_blank' className='Footer_Icon'>
                      <TiSocialLinkedin />
                    </a>
                    {/* <a href='#' className='Footer_Icon'>
                      <FiFacebook />
                    </a>
                    <a href='#' className='Footer_Icon'>
                      <FiTwitter />
                    </a>
                    <a href='#' className='Footer_Icon'>
                      <BsWhatsapp />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// testing git 2

export default Footer;
