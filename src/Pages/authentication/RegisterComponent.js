import React, { useState } from 'react';
import '../../assets/styles/Register.css';
import { Icn_lock } from '../../assets/icons/Icn_lock';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validateCompany, validateEmail, validatefirst_name, validatePwd, validName } from '../../assets/Helper/utils';
import mslogo from '../../assets/images/ms_logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from '../../components/Modal';
import { Logo } from '../../assets/icons/Logo';
import { API_BASE_URLS } from '../../assets/Helper/constant';
import ReCAPTCHA from 'react-custom-google-recaptcha';
import { toast } from 'react-toastify';
import COUNTRYLIST from '../../Country_Nationality_List.json';

const ValidationErrors = {
  empty: {
    first_name: 'First name Required',
    last_name: 'Last name Required',
    email: 'Email id Required',
    password: 'Password Required',
    company: 'Company Required',
    country: 'Select one option',
    tnc: 'You must accept our Terms & GDPR',
  },
  invalid: {
    first_name: 'Special characters and numeric characters are not allowed',
    last_name: 'Special characters and numeric characters are not allowed',
    email: 'Invalid Email',
    password: 'Password must be of 8 to 10 characters; including 1 uppercase & 1 lowercase letter, 1 numeric character & 1 special character (@#$/_-!&*).',
    company: 'Company should contain only alphabets and numeric!',
    country: '',
    tnc: '',
  },
};

const RegisterComponent = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [isRegister, setIsRegister] = useState(false); //TODO: Remove this after full functionality
  const [showPwd, setShowPwd] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isCaptcha, setIsCaptcha] = useState(false);
  const [errorCaptcha, setErrorCaptcha] = useState('');

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: '1',
    company: '',
    country: '',
    language: 'English',
    tnc: false,
  });
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: '',
    company: '',
    country: '',
    tnc: '',
  });

  const { first_name, last_name, email, password, company, country, language, tnc } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const register = async (body) => {
    try {
      const response = await axios.post(`${API_BASE_URLS.baseUrl_V1}/accounts/customer`, body);
      const { company, ...rest } = response.data.data;
      return response.data.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const tempErrors = { ...errors };
    Object.keys(values).map((key) => {
      if (!values[key]) {
        tempErrors[key] = ValidationErrors.empty[key];
      } else {
        if (key == 'first_name' && !validName(values[key])) {
          tempErrors.first_name = ValidationErrors.invalid.first_name;
        }
        if (key == 'last_name' && !validName(values[key])) {
          tempErrors.last_name = ValidationErrors.invalid.last_name;
        }
        if (key == 'email' && !validateEmail(values[key])) {
          tempErrors.email = ValidationErrors.invalid.email;
        }
        if (key == 'password' && !validatePwd(values[key])) {
          tempErrors.password = ValidationErrors.invalid.password;
        }
        if (key == 'company' && !validateCompany(values[key])) {
          tempErrors.company = ValidationErrors.invalid.company;
        }
        if (captchaValue == null) {
          setIsCaptcha(true);
          setErrorCaptcha('Captcha Required');
        }
      }
    });
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((obj) => !!obj).length > 0 || captchaValue == null) {
      return false;
    }

    const response = await register(values);
    if (response) {
      localStorage.setItem('currentUser', JSON.stringify({ ...response, company: values?.company }));
      localStorage.setItem('domain', response?.company?.domains[0]?.domain);
      setValues({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        company: '',
        tnc: false,
      });
      navigate('/otpverification');
    }
  };

  const handelRegisterWithPopup = async () => {
    await loginWithRedirect();
  };

  function keyPressListener(e) {
    e = e || window.event;

    let key = e.keyCode;

    if (key === 32) {
      e.preventDefault();
    }
  }
  const onChangeCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const RegisterForm = () => {
    return (
      <div className='container poppins-regular d-flex align-items-center justify-content-center'>
        <div className='' style={{ width: '550px' }}>
          <div className='form-action p-4 mx-auto '>
            <h2 className='text-center font-weight-bold mb-3 ac_text poppins-semibold'>Create Your Account</h2>
            <form className='form_datas'>
              <div className='row'>
                <div className='col-md-6 '>
                  <div className='form-outline mb-2'>
                    <label className='form-label'>First Name*</label>
                    <input
                      className='form-control register_control form-control-md obb-general-input'
                      type='first_name'
                      id='first_name'
                      name='first_name'
                      placeholder='First Name'
                      values={first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && (
                      <p className='text-danger' style={{ margin: '2px 9px', fontSize: '13px' }}>
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-outline mb-2'>
                    <label className='form-label'>Last Name*</label>
                    <input
                      className='form-control register_control form-control-md obb-general-input'
                      type='last_name'
                      id='last_name'
                      name='last_name'
                      placeholder='Last Name'
                      values={last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && (
                      <p className='text-danger' style={{ margin: '2px 9px', fontSize: '13px' }}>
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='form-outline mb-2'>
                <label className='form-label Poppins-Regular'>Your Email*</label>
                <input
                  className='form-control register_control form-control-md obb-general-input'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  values={email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className='text-danger' style={{ margin: '2px 9px', fontSize: '13px' }}>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className='form-outline mb-2'>
                <label className='form-label'>Password*</label>&nbsp;
                <span style={{ fontSize: '11px' }}>(@#$/_-!&*)</span>
                {/* <p style={{ fontSize: '10px' }}>(@#$/_-!&*)</p> */}
                <div className='input-group mb-3 register_control'>
                  <input
                    type={showPwd ? 'text' : 'password'}
                    id='password'
                    name='password'
                    values={password}
                    onChange={handleChange}
                    maxLength={10}
                    className='form-control obb-general-input border-right-0'
                    placeholder='Password'
                  />
                  <div className='input-group-append' id='btnShowPwd'>
                    <button className='btn' onClick={() => setShowPwd(!showPwd)} type='button'>
                      {!showPwd ? <BsEyeFill /> : <BsFillEyeSlashFill />}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className='text-danger' style={{ margin: '-15px 9px', fontSize: '13px' }}>
                    {errors.password}
                  </p>
                )}
              </div>
              <div className='form-outline mb-2'>
                <label className='form-label'>Company*</label>&nbsp;
                <span style={{ fontSize: '11px' }}>(Company should contain only alphabets and numeric!)</span>
                <div className='input-group mb-3' data-toggle='tooltip' data-placement='top' title='Please enter in small letter'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text ' id='basic-addon1' style={{ borderRadius: '40px 0px 0px 40px' }}>
                      <Icn_lock />
                    </span>
                  </div>
                  <input
                    type='text'
                    onKeyDown={(e) => keyPressListener(e)}
                    className='form-control register_control obb-general-input pl-1'
                    name='company'
                    value={company}
                    placeholder=''
                    onChange={handleChange}
                  />
                </div>
                {errors.company && (
                  <p className='text-danger' style={{ margin: '-15px 9px', fontSize: '13px' }}>
                    {errors.company}
                  </p>
                )}
              </div>
              <div className=' form-outline mb-2'>
                <label className='form-label'>Domain</label>
                <input
                  className='form-control register_control form-control-md obb-general-input'
                  name='domain'
                  type='domain'
                  id='domain'
                  placeholder={`${API_BASE_URLS.ssobaseurl}`}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className='row'>
                <div className='col-md-6 mb-2'>
                  <div className='form-outline mb-2'>
                    <label className='form-label'>Country</label>
                    <select
                      className='select form-control register_control obb-general-input'
                      name='country'
                      value={country}
                      onChange={(e) => {
                        if (e.target.value !== 'select') {
                          handleChange(e);
                        }
                      }}
                    >
                      <option selected>Select your Country</option>
                      {COUNTRYLIST.map((row, i) => (
                        <option>{row?.en_short_name}</option>
                      ))}
                    </select>
                  </div>
                  {errors.country && (
                    <p className='text-danger' style={{ margin: '-9px 11px', fontSize: '14px' }}>
                      {errors.country}
                    </p>
                  )}
                </div>
                <div className='col-md-6 mb-2'>
                  <div className='form-outline mb-2'>
                    <label className='form-label'>Language</label>
                    <select className='select form-control register_control obb-general-input' name='language' value={language} onChange={handleChange}>
                      <option value='English'>English</option>
                      <option value='Danish'>Danish </option>
                      <option value='French'>French </option>
                      <option value='Italian'>Italian </option>
                      <option value='Spanish'>Spanish </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='form-check d-flex align-items-center justify-content-center ml-2 mb-1 '>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='tnc'
                  id=''
                  onClick={() => {
                    setErrors({ ...errors, tnc: '' });
                    setValues({ ...values, tnc: !values.tnc });
                  }}
                  checked={values.tnc}
                />
                <div className='modal fade' id='myModal'>
                  <div className='modal-dialog' style={{ maxWidth: '75%' }}>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h6 className='modal-title m-auto'>
                          <Logo />
                        </h6>
                        <button type='button' className='close m-0' data-dismiss='modal'>
                          &times;
                        </button>
                      </div>
                      <div className='modal-body'>
                        <Modal />
                      </div>
                      <div className='modal-footer'>
                        <button type='button' className='btn btn-danger' data-dismiss='modal'>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <label className='mt-2'>
                  I accept the standard
                  <a href='#' data-toggle='modal' data-target='#myModal' className='term'>
                    &nbsp; Terms & GDPR
                  </a>
                </label>
              </div>
              {errors.tnc && (
                <p className='text-danger' style={{ margin: '0 10px', fontSize: '13px' }}>
                  {errors.tnc}
                </p>
              )}
              <div className='captcha_custom'>
                <ReCAPTCHA
                  sitekey='6LeiwwkhAAAAAEbKSIwXBK6ZauPLm5xPfqwhXYBD'
                  hl='en'
                  onChange={(e) => {
                    onChangeCaptcha(e);
                    setErrorCaptcha('');
                  }}
                />
              </div>
              {isCaptcha && (
                <p className='text-danger' style={{ margin: '0 10px', fontSize: '13px' }}>
                  {errorCaptcha}
                </p>
              )}
              <div className='d-flex justify-content-center mt-3'>
                <button className='btn-block btnSubmit' onClick={handleRegister}>
                  Sign Up
                </button>
              </div>
            </form>
            <div className='d-flex align-items-center justify-content-center  my-2'>
              <div className='w-25'>
                <hr className='bg-dark' />
              </div>
              <span className='mx-4'>OR</span>
              <div className='w-25'>
                <hr className='bg-dark' />
              </div>
            </div>
            <button className='btn btn-block btn-white microsoft_btn obb-general-btn' onClick={handelRegisterWithPopup}>
              <img src={mslogo} alt='microsoft' className='img-fluid mx-2' />
              Sign up with Microsoft Account
            </button>
          </div>
        </div>
      </div>
    );
  };
  const SuccessPopup = () => (
    <div className='popup p-4'>
      <h1 className='text-center'>Account created!</h1>
      <p className='text-center'>You can now log in to your new account using the address</p>
      <button className='btn btn-success m-auto d-flex justify-content-center'>tbs.boardon.io/admin</button>
    </div>
  );
  return (
    <div className='registerCont d-flex align-content-center'>
      {!isRegister && RegisterForm()}
      {isRegister && SuccessPopup()}
    </div>
  );
};
export default RegisterComponent;
