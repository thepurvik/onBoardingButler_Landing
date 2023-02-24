import React from 'react';

export const CustomCarousel = ({ data = [] }) => {
  return (
    <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active'></li>
        <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
        <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        {data.map((content, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            {content}
          </div>
        ))}
      </div>
      <a className='carousel-control-prev' href='#carouselExampleCaptions' role='button' data-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a className='carousel-control-next' href='#carouselExampleCaptions' role='button' data-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};
