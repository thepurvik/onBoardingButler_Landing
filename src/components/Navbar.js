import React from 'react';
import '../assets/styles/Navbar.css';
import { Logo } from '../assets/icons/Logo.js';
import OBB_Red_Logo_Dark from '../assets/images/OBB_Red_Logo_Dark.png';
import { TiSocialLinkedin } from 'react-icons/ti';
import BookaDemo from './BookaDemo';

const NavTabData = [
  { Link: '#', Label: 'HOME' },
  { Link: '#challange', Label: 'THE CHALLENGE' },
  { Link: '#WhatWeDo', Label: 'WHAT WE DO' },
  { Link: '#contact', Label: 'CONTACT' },
  // { Link: '#', Label: 'ABOUT US' },
];

const NavbarComp = () => {
  return (
    <div className='container py-4 mb-5'>
      <nav className='navbar navbar-expand-lg navbar-light  justify-content-between align-items-center p-0'>
        <div className='col-lg-4 col-md-4 col-4 d-flex justify-content-between m-0 p-0'>
          <div className='main-logo navbar-brand'>
            <img src={OBB_Red_Logo_Dark} />
          </div>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='col-lg-8 col-md-8 d-flex Navbar_Items p-0'>
          <div className='collapse navbar-collapse justify-content-around m-0 p-0' id='navbarNav'>
            {NavTabData.map((obj, i) => (
              <ul className='navbar-nav' key={i}>
                <li className='nav-item active pr-4'>
                  <a className='nav-link poppins-medium p-0' href={obj.Link}>
                    {obj.Label}
                  </a>
                </li>
              </ul>
            ))}
            {/* <ul className='navbar-nav'>
              <li className='nav-item dropdown '>
                <a
                  className='nav-link dropdown-toggle text-dark poppins-medium p-0'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  CONTACT
                </a>
                <div className='dropdown-menu Home_Navbar' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item  poppins-medium' href='#'>
                    Contact1
                  </a>
                  <a className='dropdown-item  poppins-medium' href='#'>
                    Contact2
                  </a>
                  <a className='dropdown-item  poppins-medium' href='#'>
                    Contact3
                  </a>
                </div>
              </li>
            </ul> */}
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <div className='social-icon-rounded'>
                  <a href='https://www.linkedin.com/company/onboardingbutler/' target='_blank' className='social_Icon nav-link'>
                    <TiSocialLinkedin />
                  </a>
                </div>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item '>
                <div className='btn-link Navbar_btn'>
                  <BookaDemo />
                  <a href='/register' className='btn-onboarding-public poppins-medium ml-3 nav-link'>
                    Sign Up
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <a class='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Dropdown
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li class='nav-item'>
              <a class='nav-link disabled' href='#'>
                Disabled
              </a>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
            <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav> */}
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <NavbarComp />
    </div>
  );
};

export default Navbar;
