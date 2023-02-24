import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { API_BASE_URLS } from '../assets/Helper/constant';
import { Logo } from '../assets/icons/Logo';
import Footer from './Footer';

const Privacy = () => {
  const [privacyData, setPrivacyData] = useState();
  console.log(privacyData, 'privacyData');
  const parameter = window.location.pathname;

  const fetchData = () => {
    return fetch(`${API_BASE_URLS.baseUrl_V1}/accounts/privacy`)
      .then((response) => response.json())
      .then((data) => {
        setPrivacyData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  return (
    // <>
    //   <div className='text-center'>
    //     <div className='py-3'>
    //       <Logo />
    //     </div>
    //   </div>
    //   <hr className='m-0 pb-3' />
    //   <div className='container privacy-text'>
    //     <div className='header-text' style={{ textAlign: 'center' }}>
    //       <strong className='term-main-text poppins-semibold'>{privacyData?.data[0]?.title}</strong>
    //     </div>
    //     <div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Information We Collect</h4>
    //         <p className='text-justify poppins-regular'>
    //           It is always up to you whether to disclose personally identifiable information to us, although if you elect not to do so, we reserve the right not to register you as
    //           a user or provide you with any products or services. This website collects various types of information, such as:
    //         </p>
    //       </div>
    //       <ul className='ml-5 '>
    //         <li>
    //           <p className='text-justify poppins-regular'>
    //             Voluntarily provided information which may include your name, date of birth, address, email address, billing and/or credit card information etc. which may be used
    //             when you purchase products and/or services and to deliver the services you have requested.
    //           </p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>
    //             Information automatically collected when visiting our website, which may include cookies, third party tracking technologies, and server logs.
    //           </p>
    //         </li>
    //       </ul>
    //       <div>
    //         <p className='text-justify poppins-regular'>
    //           Please rest assured that this site will only collect personal information that you knowingly and willingly provide to us by way of completed membership forms and
    //           emails. It is the intent of this site to use personal information only for the purpose for which it was requested, and any additional uses specifically provided for
    //           on this Policy.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold '>Why We Collect Information and For How Long</h4>
    //         <p className='text-justify poppins-regular'>We are collecting your data for several reasons:</p>
    //       </div>
    //       <ul className='ml-5'>
    //         <li>
    //           <p className='text-justify poppins-regular'>To identify and protect the User based on policies requirements to play onboardingbutler;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>To ensure User experience and access to onboardingbutler complies with regulations and laws;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>To fulfill our legitimate interest in improving User experience on our website and application; and</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>
    //             To send you promotional emails about Brawls or other onboardingbutler related content containing information we think you may like when we have your consent to do
    //             so;
    //           </p>
    //         </li>
    //       </ul>

    //       <div>
    //         <p className='text-justify poppins-regular'>
    //           The data we collect from you will be stored for no longer than necessary. The length of time we retain said information will be determined based upon the following
    //           criteria: the length of time your personal information remains relevant; the length of time it is reasonable to keep records to demonstrate that we have fulfilled our
    //           duties and obligations; any limitation periods within which claims might be made; any retention periods prescribed by law or recommended by regulators, professional
    //           bodies or associations; the type of contract we have with you, the existence of your consent, and our legitimate interest in keeping such information as stated in
    //           this Policy.
    //         </p>
    //       </div>

    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Use of Information Collected</h4>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties other with our
    //           advertisers with whom onboardingbutler has a signed agreement.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need
    //           and request. At times, we may find it necessary to use personally identifiable information to verify User’s identity or as a means to keep you informed of other
    //           possible products and/or services that may be available to you from www.onboardingprofilen.dk
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or potential
    //           future services that may be offered.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC may find it beneficial to all our customers to share specific data with our trusted partners in an effort to conduct statistical analysis,
    //           provide you with email and/or postal mail, deliver support and/or arrange for deliveries to be made. Those third parties shall be strictly prohibited from making use
    //           of your personal information, other than to deliver those services which you requested, and as such they are required, in accordance with this agreement, to maintain
    //           the strictest of confidentiality with regards to all your information.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC uses various third-party social media features including but not limited to Facebook, Instagram, Twitter and other interactive programs. These
    //           may collect your IP address and require cookies to work properly. These services are governed by the privacy policies of the providers and are not within
    //           onboardingbutler LLC’s control.
    //         </p>
    //       </div>
    //       <br />
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Disclosure of Information</h4>
    //         <p className='text-justify poppins-regular'>onboardingbutler LLC may not use or disclose the information provided by you except under the following circumstances:</p>
    //       </div>
    //       <ul className='ml-5'>
    //         <li>
    //           <p className='text-justify poppins-regular'>as necessary to provide services or products you have ordered;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>in other ways described in this Policy or to which you have otherwise consented;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>in the aggregate with other information in such a way so that your identity cannot reasonably be determined;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>
    //             as required by law, or in response to a subpoena, search warrant, or other request from a court of competent jurisdiction;
    //           </p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>to outside auditors who have agreed to keep the information confidential;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>as necessary to enforce the Terms and Conditions of Service;</p>
    //         </li>
    //         <li>
    //           <p className='text-justify poppins-regular'>as necessary to maintain, safeguard, and preserve all the rights and property of onboardingbutler LLC.</p>
    //         </li>
    //       </ul>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Non-Marketing Purposes</h4>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC greatly respects your privacy. We do maintain and reserve the right to contact you if needed for non-marketing purposes (such as bug alerts,
    //           security breaches, account issues, and/or changes in onboardingbutler LLC products and services). In certain circumstances, we may use our website, push
    //           notifications, text messaging, or email to post a notice.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Children under the age of 13</h4>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC’s website is not directed to, and does not knowingly collect personal identifiable information from, children under the age of eighteen (18). If
    //           it is determined that such information has been inadvertently collected on anyone under the age of eighteen (18), we shall immediately take the necessary steps to
    //           ensure that such information is deleted from our system’s database, or in the alternative, that verifiable parental consent is obtained for the use and storage of
    //           such information. Anyone under the age of eighteen (18) must seek and obtain parent or guardian permission to use this website.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Unsubscribe or Opt-Out</h4>
    //         <p className='text-justify poppins-regular'>
    //           All users and visitors to our website have the option to discontinue receiving communications from us by way of email or newsletters. To discontinue or unsubscribe
    //           from our website please send an email that you wish to unsubscribe to www.onboardingprofilen.dk. If you wish to unsubscribe or opt-out from any third-party websites,
    //           you must go to that specific website to unsubscribe or opt-out. onboardingbutler LLC will continue to adhere to this Policy with respect to any personal information
    //           previously collected.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Links to Other Websites</h4>
    //         <p className='text-justify poppins-regular'>
    //           Our website does contain links to advertisers and other websites. onboardingbutler LLC does not claim nor accept responsibility for any privacy policies, practices
    //           and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of
    //           every website that collects personally identifiable information. This Privacy Policy Agreement applies only and solely to the information collected by our website.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Notice to European Union Users</h4>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC’s operations are located primarily in the United States. If you provide information to us, the information will be transferred out of the
    //           European Union (EU) and sent to the United States. (The adequacy decision on the EU-US Privacy became operational on August 1, 2016. This framework protects the
    //           fundamental rights of anyone in the EU whose personal data is transferred to the United States for commercial purposes. It allows the free transfer of data to
    //           companies that are certified in the US under the Privacy Shield.) By providing personal information to us, you are consenting to its storage and use as described in
    //           this Policy.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Your Rights as a Data Subject</h4>
    //         <p className='text-justify poppins-regular'>
    //           Under the regulations of the General Data Protection Regulation (“GDPR”) of the EU you have certain rights as a Data Subject. These rights are as follows:
    //         </p>
    //       </div>

    //       <ul className='ml-5'>
    //         <li>
    //           <span className='poppins-semibold'>The right to be informed:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means we must inform you of how we intend to use your personal data and we do this through the terms of this Policy.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right of access:</span>
    //           <p className='text-justify poppins-regular'>
    //             this means you have the right to request access to the data we hold about you and we must respond to those requests within one month. You can do this by sending an
    //             email to www.onboardingprofilen.dk.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right to rectification:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means that if you believe some of the date, we hold is incorrect, you have the right to have it corrected. You can do this by logging into your account with
    //             us, or by sending us an email with your request.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right to erasure:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means you can request that the information we hold be deleted, and we will comply unless we have a compelling reason not to, in which case you will be informed
    //             of same. You can do this by sending an email to www.onboardingprofilen.dk.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right to restrict processing:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means you can change your communication preferences or opt-out of certain communications. You can do this by sending an email to www.onboardingprofilen.dk.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right of data portability:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means you can obtain and use the data we hold for your own purposes without explanation. If you wish to request a copy of your information, contact us at
    //             www.onboardingprofilen.dk.
    //           </p>
    //         </li>
    //         <li>
    //           <span className='poppins-semibold'>The right to object:</span>
    //           <p className='text-justify poppins-regular'>
    //             This means you can file a formal objection with us regarding our use of your information with regard to third parties, or its processing where our legal basis is
    //             our legitimate interest in it. To do this, please send an email to www.onboardingprofilen.dk.
    //           </p>
    //         </li>
    //       </ul>
    //       <p className='text-justify poppins-regular'>
    //         In addition to the rights above, please rest assured that we will always aim to encrypt and anonymize your personal information whenever possible. We also have
    //         protocols in place in the unlikely event that we suffer a data breach and we will contact you if your personal information is ever at risk. For more details regarding
    //         our security protections see the section below or visit our website at www.onboardingprofilen.dk.
    //       </p>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Security</h4>
    //         <p className='text-justify poppins-regular'>
    //           onboardingbutler LLC takes precautions to protect your information. When you submit sensitive information via the website, your information is protected both online
    //           and offline. Wherever we collect sensitive information (e.g. credit card information), that information is encrypted and transmitted to us in a secure way. You can
    //           verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the webpage.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to
    //           perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers and servers in which we
    //           store personally identifiable information are kept in a secure environment. This is all done to prevent any loss, misuse, unauthorized access, disclosure or
    //           modification of the user’s personal information under our control.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           The company also uses Secure Socket Layer (SSL) for authentication and private communications to build users’ trust and confidence in the internet and website use by
    //           providing simple and secure access and communication of credit card and personal information. In addition, onboardingbutler LLC is a licensee of TRUSTe.
    //         </p>
    //       </div>
    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>Acceptance of Terms</h4>
    //         <p className='text-justify poppins-regular'>
    //           By using this website, you are hereby accepting the terms and conditions stipulated within the Privacy Policy Agreement. If you are not in agreement with our terms
    //           and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website following the posting of any updates or changes
    //           to our terms and conditions shall mean that you agree and acceptance of such changes.
    //         </p>
    //       </div>
    //       <div>
    //         <h4 className='term-modal-color poppins-semibold'>How to Contact Us</h4>
    //         <p className='text-justify poppins-regular'>
    //           If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone
    //           number or mailing address.
    //         </p>
    //         <p className='text-justify poppins-regular'>The data controller responsible for your personal information for the purposes of GDPR compliance is:</p>
    //       </div>

    //       <div className='mt-3'>
    //         <h4 className='term-modal-color poppins-semibold'>GDPR Disclosure:</h4>
    //         <p className='text-justify poppins-regular'>
    //           If you answered “yes” to the question Does your website comply with the General Data Protection Regulation (“GDPR”)? then the Privacy Policy above includes language
    //           that is meant to account for such compliance. Nevertheless, in order to be fully compliant with GDPR regulations your company must fulfill other requirements such as:
    //           (i) doing an assessment of data processing activities to improve security; (ii) have a data processing agreement with any third party vendors; (iii) appoint a data
    //           protection officer for the company to monitor GDPR compliance; (iv) designate a representative based in the EU under certain circumstances; and (v) have a protocol in
    //           place to handle a potential data breach. For more details on how to make sure your company is fully compliant with GDPR, please visit the official website at
    //           https://gdpr.eu. FormSwift and its subsidiaries are in no way responsible for determining whether or not your company is in fact compliant with GDPR and takes no
    //           responsibility for the use you make of this Privacy Policy or for any potential liability your company may face in relation to any GDPR compliance issues.
    //         </p>
    //       </div>
    //       <div className='my-3'>
    //         <h4 className='term-modal-color poppins-semibold'>COPPA Compliance Disclosure:</h4>
    //         <p className='text-justify poppins-regular'>
    //           This Privacy Policy presumes that your website is not directed at children under the age of 13 and does not knowingly collect personal identifiable information from
    //           them or allow others to do the same through your site. If this is not true for your website or online service and you do collect such information (or allow others to
    //           do so), please be aware that you must be compliant with all COPPA regulations and guidelines in order to avoid violations which could lead to law enforcement actions,
    //           including civil penalties.
    //         </p>
    //         <p className='text-justify poppins-regular'>
    //           In order to be fully compliant with COPPA your website or online service must fulfill other requirements such as: (i) posting a privacy policy which describes not
    //           only your practices, but also the practices of any others collecting personal information on your site or service â€” for example, plug-ins or ad networks; (ii)
    //           include a prominent link to your privacy policy anywhere you collect personal information from children; (iii) include a description of parental rights (e.g. that you
    //           won’t require a child to disclose more information than is reasonably necessary, that they can review their child’s personal information, direct you to delete it, and
    //           refuse to allow any further collection or use of the child’s information, and the procedures to exercise their rights); (iv) give parents “direct notice” of your
    //           information practices before collecting information from their children; and (v) obtain the parents’ “verifiable consent” before collecting, using or disclosing
    //           personal information from a child. For more information on the definition of these terms and how to make sure your website or online service is fully compliant with
    //           COPPA please visit https://www.ftc.gov/tips-advice/business-center/guidance/childrens-online-privacy-protection-rule-six-step-compliance. FormSwift and its
    //           subsidiaries are in no way responsible for determining whether or not your company is in fact compliant with COPPA and takes no responsibility for the use you make of
    //           this Privacy Policy or for any potential liability your company may face in relation to any COPPA compliance issues.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </>
    <>
      <div className='text-center'>
        <div className='py-3'>
          <Logo />
        </div>
      </div>
      <hr className='m-0 pb-3' />
      <div className='container privacy-text'>
        <h3 className='poppins-bold' style={{ textAlign: 'center' }}>
          <strong className='term-main-text poppins-semibold '>{privacyData?.data[0]?.title}</strong>
        </h3>
        <br />
        {/* <h6 className='text-justify poppins-regular'>{privacyData?.data[0]?.body}</h6> */}
        <div className='privacy-data' dangerouslySetInnerHTML={{ __html: privacyData?.data[0]?.body }} />
      </div>
      <div className='postion-absolute mt-5' style={{ bottom: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
