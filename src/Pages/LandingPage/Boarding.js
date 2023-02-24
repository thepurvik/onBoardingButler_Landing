import React, { useEffect } from 'react';
import '../../assets/styles/Boarding.css';
import { FiPhoneCall } from 'react-icons/fi';
import Email_icon from '../../assets/icons/Email.svg';
import HrPhoto from '../../assets/images/Hr Recuirment.jpg';
import HrPhotoResponsive from '../../assets/images/Hr_Recuirment_Responsive.png';
import { useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../assets/API/axiosInstances';
import { API_BASE_URLS } from '../../assets/Helper/constant';
import { toast } from 'react-toastify';
import { validateEmail } from '../../assets/Helper/utils';

const ValidationErrors = {
  empty: {
    email: 'Email id is Required',
  },
  invalid: {
    email: 'Invalid Email',
  },
};

const Boarding = () => {
  const [values, setValues] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: '',
  });

  const { email } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleClick = async () => {
    const tempErrors = { ...errors };
    Object.keys(values).map((key) => {
      if (!values[key]) {
        tempErrors[key] = ValidationErrors.empty[key];
      } else {
        if (key == 'email' && !validateEmail(values[key])) {
          tempErrors.email = ValidationErrors.invalid.email;
        }
      }
    });
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((obj) => !!obj).length > 0) {
      return false;
    }

    // if (values !== '') {
    let payload = {
      email: email,
    };
    await axios
      .post(`${API_BASE_URLS.baseUrl_V1}/dashboard/structure/Subscribing_Mail`, payload)
      .then(function (response) {
        setValues('');
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        toast.error('Enter a valid email address.');
        throw new Error(error?.response?.data?.messages[0]?.message || error?.response?.data?.detail);
      });
    // }
  };

  return (
    <div className='container position-relative my-5' id='contact'>
      <div className='row align-items-center Boarding_Body'>
        <div className='col-lg-6 col-md-12 col-12 '>
          <h1 className='poppins-bold'>Shall We Talk Together</h1>
          <h1 className='poppins-bold'>About Where The Case May</h1>
          <h1 className='poppins-bold'>Lie With You?</h1>
          <p className='poppins-regular my-3'>
            OnboardingButler collects, analyzes and displays large amounts of many types of data about a company's onboarding practices, with the clear aim of creating reflection
            and conversations between managers and employees in and around onboarding processes in completely new ways.
          </p>
          <div className='row my-4'>
            <div className='col-md-8 form-outline'>
              <input
                type='email'
                className='form-control form-control-md p-4'
                placeholder='Your Email'
                name='email'
                value={email}
                style={{ border: errors.email && '1px solid #cc3e2f' }}
                onChange={handleChange}
              />
              {errors.email && (
                <p className='text-danger' style={{ margin: '0px 9px', fontSize: '13px' }}>
                  {errors.email}
                </p>
              )}
            </div>
            <div className='col-md-4 Boarding_btn'>
              {/* handleClick() */}
              <button className='btn-onboarding-public poppins-medium my-0' onClick={() => handleClick()} style={{ opacity: values !== '' ? '1' : '0.9' }}>
                Yes Please !
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-12 m-auto'>
          <div className='volume'>
            <FiPhoneCall className='volume-img' />
          </div>
          <div className='Boarding_Img'>
            <img src={HrPhoto} className='rounded img d-md-block d-none' width='400px' height='560px' />
            <img src={HrPhotoResponsive} className='rounded img d-md-none d-block' />
          </div>
          <div className='audio'>
            <img src={Email_icon} alt='' className='audio-img' />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Boarding;
