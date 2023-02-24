import React, { useState } from 'react';
import '../../assets/styles/Contact.css';
import { RiPhoneLine } from 'react-icons/ri';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URLS } from '../../assets/Helper/constant';
import { validateCompany, validateEmail, validatePwd, validName } from '../../assets/Helper/utils';

const TempValues = {
  message: '',
  email: '',
  subject: '',
  username: '',
};
const ValidationErrors = {
  empty: {
    email: 'Email id is Required',
    username: 'Name is Required',
    subject: 'Subject is Required',
    message: 'Message is Required',
  },
  invalid: {
    message: '',
    username: '',
    email: 'Invalid Email',
    subject: '',
  },
};

const Contact = () => {
  const [values, setValues] = useState({
    message: '',
    username: '',
    email: '',
    subject: '',
  });

  const [errors, setErrors] = useState({
    message: '',
    username: '',
    email: '',
    subject: '',
  });
  const { message, username, email, subject } = values;

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
        if (key == 'username' && !validName(values[key])) {
          tempErrors.username = ValidationErrors.invalid.username;
        }
        if (key == 'email' && !validateEmail(values[key])) {
          tempErrors.email = ValidationErrors.invalid.email;
        }
      }
    });
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((obj) => !!obj).length > 0) {
      return false;
    }

    let payload = {
      msg: message,
      email: email,
      subject: subject,
      name: username,
    };
    await axios
      .post(`${API_BASE_URLS.baseUrl_V1}/dashboard/structure/Contact_MailAPI`, payload)
      .then((response) => {
        setValues(TempValues);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        toast.error('Enter a valid email address.');
        throw new Error(error?.response?.data?.messages[0]?.message || error?.response?.data?.detail);
      });
  };

  return (
    <div className='container Contact_Box my-5'>
      <div className='row py-5'>
        <div className='col-lg-6 col-md-12 col-12 mt-4 Contact_body'>
          <h1 className='poppins-bold'>We Believe That</h1>
          <h1 className='poppins-bold'>Onboarding Of Employees In General Can Be</h1>
          <h1 className='poppins-bold'>Improved</h1>
          <p className='mt-5 poppins-regular'>
            We develop OnboardingButler to be able to process and enrich data about the entire pre- and onboarding process so advanced and to such to high level of service that the
            information become really useful for all managers in their daily work to make onboarding as good as possible.
          </p>
          {/* <div className='row my-4'>
            <div className=' col-lg-5 col-md-12'>
              <div className='d-flex align-items-center font-icons'>
                <div className='font'>
                  <RiPhoneLine />
                </div>
                <div className='font_txt'>
                  <p className='mb-0 poppins-regular'>Phone</p>
                  <h6 className='poppins-semibold'>
                    <a href='tel:+45404329668' className='poppins-semibold text-black contact-link'>
                      +45404329668
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className=' col-lg-7 col-md-12'>
              <div className='d-flex align-items-center font-icons'>
                <div className='font'>
                  <HiOutlineMailOpen />
                </div>
                <div className='font_txt'>
                  <p className='mb-0 poppins-regular'>Email</p>
                  <h6 className='poppins-semibold'>
                    <a href='mailto:info@boardingButler.com' className='poppins-semibold text-black contact-link'>
                      info@boardingButler.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className='col-lg-6 col-md-12 col-12 Contact_Text'>
          <form>
            <div>
              <fieldset className='form-group'>
                <label id='fieldTitle' className='poppins-regular'>
                  Message
                </label>
                <textarea
                  rows='10'
                  className='form-control'
                  placeholder='Message'
                  name='message'
                  style={{ border: errors.message && '1px solid #cc3e2f' }}
                  value={message}
                  ng-model='myTextarea'
                  required
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className='text-danger' style={{ margin: '0px 9px', fontSize: '13px' }}>
                    {errors.message}
                  </p>
                )}
              </fieldset>
            </div>
            <div className='row mb-4'>
              <div className='col-md-6'>
                <div className='form-outline'>
                  <label className='form-label poppins-regular'>Name</label>
                  <input
                    className='form-control form-control-md p-4'
                    type='text'
                    id='name'
                    name='username'
                    value={username}
                    placeholder='Name'
                    style={{ border: errors.username && '1px solid #cc3e2f' }}
                    onChange={handleChange}
                  />
                </div>
                {errors.username && (
                  <p className='text-danger' style={{ margin: '0px 9px', fontSize: '13px' }}>
                    {errors.username}
                  </p>
                )}
              </div>
              <div className='col-md-6'>
                <div className='form-outline'>
                  <label className='form-label poppins-regular'>Email</label>
                  <input
                    className='form-control form-control-md p-4'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    style={{ border: errors.email && '1px solid #cc3e2f' }}
                    placeholder='Email'
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className='text-danger' style={{ margin: '0px 9px', fontSize: '13px' }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className='form-outline mb-4'>
              <label className='form-label poppins-regular'>Subject</label>
              <input
                className='form-control form-control-md p-4'
                type='text'
                id='subject'
                name='subject'
                value={subject}
                style={{ border: errors.subject && '1px solid #cc3e2f' }}
                placeholder='Subject'
                onChange={handleChange}
              />
              {errors.subject && (
                <p className='text-danger' style={{ margin: '0px 9px', fontSize: '13px' }}>
                  {errors.subject}
                </p>
              )}
            </div>
            <div className='Form_btn'>
              <button className='btn-onboarding-public poppins-medium my-0' type='button' onClick={() => handleClick()}>
                Yes Please
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
