import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../assets/styles/Register.css';
import { Icn_lock } from '../assets/icons/Icn_lock';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URLS } from '../assets/Helper/constant';
import { toast } from 'react-toastify';
// import { loginMicrosoftWithHeader } from '../components/Contexts/AuthContexts';
import COUNTRYLIST from '../Country_Nationality_List.json';

const ValidationErrors = {
  empty: {
    company: 'Company Required',
    country: 'Select one option',
    tnc: 'You must accept our Terms & Conditions',
  },
  invalid: {
    company: '',
    country: '',
    tnc: '',
  },
};

const Callback = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth0();
  const { loginMicrosoft, loginMicrosoftWithHeader } = useAuth();
  const [verified, setVerified] = useState(false);
  const [url, setUrl] = useState(null);
  const [values, setValues] = useState({
    user_type: '1',
    company: '',
    country: '',
    language: 'English',
  });

  const [errors, setErrors] = useState({
    user_type: '',
    company: '',
    country: '',
  });

  const { company, country, language } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const tempErrors = { ...errors };
    Object.keys(values).map((key) => {
      if (!values[key]) {
        tempErrors[key] = ValidationErrors.empty[key];
      }
    });
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((obj) => !!obj).length > 0) {
      return false;
    }
    let payload = {
      ...values,
      email: user?.email,
      first_name: user?.name,
    };
    const response = await loginMicrosoft(payload);

    if (response?.data) {
      let url = response?.data?.data?.company?.domains[0]?.domain;
      setVerified(true);
      setUrl(`${url}/`);
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  const handleClick = async () => {
    let payload = {
      first_name: JSON.parse(localStorage.getItem('user'))?.user?.first_name,
      last_name: JSON.parse(localStorage.getItem('user'))?.user?.last_name,
      email: JSON.parse(localStorage.getItem('user'))?.user?.email,
      user_type: JSON.parse(localStorage.getItem('user'))?.user?.user_type,
      country: JSON.parse(localStorage.getItem('user'))?.user?.country,
      language: JSON.parse(localStorage.getItem('user'))?.user?.language,
    };

    const domainn = JSON.parse(localStorage.getItem('user')).user?.company?.name;
    const response = await loginMicrosoftWithHeader(payload, JSON.parse(localStorage.getItem('user')).user?.company?.name);
    window.location = `https://${domainn?.split('.')[0]}.${API_BASE_URLS.ssobaseurl}/login?email=${payload.email}&type=sso&user_type=${payload.user_type}`;
    // window.location = `https://${domainn?.split('.')[0]}.onboardingbutler.com/login?email=${payload.email}&type=sso&user_type=${payload.user_type}`;

    // if (response.status == 200) {
    //   if (response?.user?.user_type == 2) {
    //     window.location = 'https://' + url + '/poc';
    //   } else {
    //     window.location = 'https://' + url + '/dashlayout';
    //   }
    // }
  };

  const SuccessPopup = () => (
    <div className='registerCont d-flex align-content-center'>
      <div className='popup p-4'>
        <h1 className='text-center'>Account created!</h1>
        <p className='text-center'>You can now log in to your new account using the address</p>
        <button className='btn btn-success m-auto d-flex justify-content-center' onClick={handleClick}>
          {url}
        </button>
      </div>
    </div>
  );

  return verified ? (
    SuccessPopup()
  ) : (
    <div className='registerCont'>
      <div className='container '>
        <div className='row justify-content-center align-items-center' style={{ height: '624px' }}>
          <div className='col-12 col-md-6'>
            <div className='form-action p-4 my-5'>
              <h2 className='text-center poppins-semibold mb-3 ac_text'>Create Your Account</h2>
              <form className='form_datas'>
                <div className='form-outline mb-2'>
                  <label className='form-label poppins-regular'>Company*</label>
                  <div className='input-group mb-3' data-toggle='tooltip' data-placement='top' title='Please enter in small letter'>
                    {/* <span className='CellComment'>Please enter in small letter</span> */}
                    <div className='input-group-prepend'>
                      <span className='input-group-text ' id='basic-addon1'>
                        <Icn_lock />
                      </span>
                    </div>
                    <input type='text' className='form-control register_control' name='company' value={company} placeholder='' onChange={handleChange} />
                  </div>
                  {errors.company && (
                    <p className='text-danger' style={{ margin: '-15px 9px', fontSize: '13px' }}>
                      {errors.company}
                    </p>
                  )}
                </div>
                <div className=' form-outline mb-2'>
                  <label className='form-label poppins-regular'>Domain</label>
                  <input
                    className='form-control register_control form-control-md'
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
                      <label className='form-label poppins-regular'>Country</label>
                      <select
                        className='select form-control register_control'
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
                      <label className='form-label poppins-regular'>Language</label>
                      <select className='select form-control register_control' name='language' value={language} onChange={handleChange}>
                        <option value='English'>English</option>
                        <option value='Danish'>Danish </option>
                        <option value='French'>French </option>
                        <option value='Italian'>Italian </option>
                        <option value='Spanish'>Spanish </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                  <button className='btn btn-block btn-md signbtn poppins-regular' onClick={handleRegister}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callback;
