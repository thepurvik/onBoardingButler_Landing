import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API_BASE_URLS } from '../../assets/Helper/constant';
import '../../assets/styles/OtpVerification.css';

const OtpVerification = () => {
  const [verified, setVerified] = useState(false);
  const [iframeVal, setIframeVal] = useState('');
  const [otp, setOtp] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  });
  const [counter, setCounter] = useState(60);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const domain = localStorage.getItem('domain');

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleOtpInput = (e, item, i) => {
    const CurrentElement = document.getElementById(item);

    if (CurrentElement?.value?.length == 1) {
      const NextElement = document.getElementById(item.replace(item.charAt(item.length - 1), (i + 2).toString()));

      NextElement?.focus();
    }

    if (e.key == 'Backspace') {
      const PreviousElement = document.getElementById(item.replace(item.charAt(item.length - 1), i.toString()));

      PreviousElement?.focus();
    }
  };
  const handleVerification = async () => {
    const data = {
      email: user.email || '',
      otp: Number(Object.values(otp).join('')),
    };

    const body = {
      url: `${API_BASE_URLS.baseUrl_V1}/accounts/emailverify`,
      options: {
        method: 'post',
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json',
          company: user.company,
        },
      },
    };

    fetch(body.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        company: user.company,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setVerified(true);
        }
        if (response.status === 400) {
          toast.error('Invalid OTP');
        }
      })
      .catch((error) => toast.error(error?.response?.data?.message));
  };

  const resendOtp = () => {
    if (counter != 0) return;
    const data = {
      email: user.email,
    };

    axios
      .post(`${API_BASE_URLS.baseUrl_V1}/accounts/resendotp`, data, {
        headers: {
          'Content-Type': 'application/json',
          company: user.company,
        },
      })
      .then(function (response) {
        setCounter(30);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const autoRedirect = () => {
    // window.location = `http://tech.localhost:3000/poc/login?email=hetal@mailinator.com&password=Test@1234`;
    window.location = `https://${domain?.split('.')[0]}.${API_BASE_URLS.ssobaseurl}/login?email=${user.email}&password=${user.password}`;
    // window.location = `https://${domain?.split('.')[0]}.onboardingbutler.com/login?email=${user.email}&password=${user.password}`;
  };

  const SuccessPopup = () => (
    <div className='registerCont d-flex align-content-center'>
      <div className='popup p-4'>
        <h1 className='text-center'>Account created!</h1>
        <p className='text-center'>You can now log in to your new account using the address</p>
        <button className='btn btn-success m-auto d-flex justify-content-center' onClick={() => autoRedirect()}>
          {domain}
        </button>
        {/* <iframe src={iframeVal} style={{ height: '1000px', width: '1000px' }} /> */}
      </div>
    </div>
  );

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  };

  const OTP_Screen = () => (
    <div className='Otp_verify'>
      <div className='row Otp_Body m-0'>
        <div className='col-12 Otp_Txt'>
          <h1>Verification</h1>
          <h6>An OTP to verify your account will be sent on this Email ID: &nbsp;{user.email}</h6>
          <div className='row justify-content-center Otp_Box'>
            {Object.keys(otp).map((item, i) => (
              <input
                key={item}
                autocomplete='off'
                type='.'
                onInput={maxLengthCheck}
                className='Otp_BodyBox text-dark'
                value={otp[item]}
                maxLength={1}
                id={item}
                placeholder='-'
                onChange={(e) => {
                  let temp = { ...otp };
                  temp[item] = e.target.value;
                  setOtp(temp);
                }}
                onKeyUp={(e) => {
                  handleOtpInput(e, item, i);
                }}
              />
            ))}
          </div>
          <h5>
            <div>Have You Not Received The One-Time-</div>
            <div>
              Password ? &nbsp;
              <span onClick={() => resendOtp()} style={{ opacity: counter != 0 && 0.5 }}>
                Please Resend
              </span>
              <span style={{ color: '#CC3E2F', fontWeight: 'bold' }}>&nbsp; 00 : {counter < 10 ? `0${counter}` : counter}</span>
            </div>
          </h5>
          <button className='btn btn-block obb-general-btn' disabled={counter == 0} onClick={() => handleVerification()}>
            Verify One-Time Password
          </button>
        </div>
      </div>
    </div>
  );
  return verified ? SuccessPopup() : OTP_Screen();
};

export default OtpVerification;
