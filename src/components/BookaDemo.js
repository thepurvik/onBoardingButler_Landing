import React from 'react';

const BookaDemo = () => {
  return (
    <div className='d-inline-block'>
      <a
        href={`mailto:info@onboardingbutler.dk?subject=Booking an OnboardingButler Demo&body=Please tell us when you would like to see OnboardingButler – and also share your contact information, and we will make sure to revert to you as fast as we can.%0D%0AName:%0D%0AMobile phone:%0D%0APosition:%0D%0ACompany: %0D%0AWhere did you hear about OnboardingButler?%0D%0A%0D%0A Thanks`}
        className='btn-onboarding-public poppins-medium nav-link'
      >
        Book a Demo
      </a>
    </div>
  );
};

export default BookaDemo;
