// import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';
import ReCAPTCHA from 'react-custom-google-recaptcha';

// const TEST_SITE_KEY = '6LeiwwkhAAAAAEbKSIwXBK6ZauPLm5xPfqwhXYBD';
// const DELAY = 1000;

// class Captcha extends React.Component {
//   constructor(props, ...args) {
//     super(props, ...args);
//     this.state = {
//       callback: 'not fired',
//       value: '[empty]',
//       load: false,
//       expired: 'false',
//       isVerified: false,
//     };
//     this._reCaptchaRef = React.createRef();
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ load: true });
//     }, DELAY);
//   }

//   handleChange = (value) => {
//     this.setState({ value });
//     this.setState({ isVerified: true });
//     // if value is null recaptcha expired
//     if (value === null) this.setState({ expired: 'true' });
//   };

//   asyncScriptOnLoad = () => {
//     this.setState({ callback: 'called!' });
//   };

//   render() {
//     const { value, callback, load, expired } = this.state || {};
//     return (
//       <div className='captcha'>
//         {/* <h1>
//           <a href='https://github.com/dozoisch/react-google-recaptcha' target='_blank'>
//             react-google-recaptcha
//           </a>
//           : 2.1.0
//         </h1> */}
//         {/* <h2>
//           NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate callback
//         </h2> */}
//         {/* <h3>Recaptcha loaded callback: {callback}</h3> */}
//         {/* <h5>Recaptcha value: {value}</h5> */}
//         {/* <h5>Expired: {expired}</h5> */}
//         {load && (
//           <ReCAPTCHA
//             style={{ display: 'inline-block' }}
//             theme='light'
//             ref={this._reCaptchaRef}
//             sitekey={TEST_SITE_KEY}
//             onChange={this.handleChange}
//             asyncScriptOnLoad={this.asyncScriptOnLoad}
//           />
//         )}
//       </div>
//     );
//   }
// }
// export default Captcha;

function Captcha() {
  return (
    <div className='captcha_custom'>
      <ReCAPTCHA
        sitekey='6LeiwwkhAAAAAEbKSIwXBK6ZauPLm5xPfqwhXYBD'
        hl='en'
        // onChange={callback}
        // theme={colorTheme}
      />
    </div>
  );
}
export default Captcha;
