import React from 'react';
import '../../assets/styles/HeroBanner.css';
import VideoContainer from '../LandingPage/VideoContainer';
import HeroBanner_Img from '../../assets/images/HeroBanner_Img.png';
import BookaDemo from '../../components/BookaDemo';

const HeroBanner = () => {
  // var project1 = setInterval(data1, 10);
  // var project2 = setInterval(data2, 100);
  // var project3 = setInterval(data3, 5);
  // let count1 = 1;
  // let count2 = 1;
  // let count3 = 1;

  // function data1() {
  //   count1++;
  //   document.querySelector('#counter1').innerHTML = count1;
  //   if (count1 == 200) {
  //     clearInterval(project1);
  //   }
  // }

  // function data2() {
  //   count2++;
  //   document.querySelector('#counter2').innerHTML = count2;
  //   if (count2 == 12) {
  //     clearInterval(project2);
  //   }
  // }

  // function data3() {
  //   count3++;
  //   document.querySelector('#counter3').innerHTML = count3;
  //   if (count3 == 425) {
  //     clearInterval(project3);
  //   }
  // }

  return (
    <div>
      <div className='container my-3'>
        <div className='row homebody justify-content-between align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12 hometitleTxt'>
            <h1 className='homeTxt poppins-bold'>Employee Onboarding</h1>
            <h1 className='homeTxt poppins-bold'>Management and</h1>
            <h1 className='homeTxt poppins-bold'>Intelligence Solution</h1>
            <p className='my-3 poppins-regular'>Rethink your employee onboarding</p>
            {/* <p className='my-3 homeparagraph poppins-regular'>Employee Onboarding performed with significant precision</p> */}
            <h6 className='mt-3 poppins-bold'>Ensure productivity for all your new hires.</h6>
            <p className='mb-3 poppins-regular'>We help you reduce failed hire rates while shortening time to productivity.</p>
            <div className='my-5 Home_btn'>
              <BookaDemo />
            </div>

            {/* <div className='row  my-5 SocialIcon'>
              <a href='#' className='IconBorder'>
                <FiFacebook />
              </a>
              <a href='#' className='IconBorder'>
                <FiTwitter />
              </a>
              <a href='#' className='IconBorder'>
                <BsWhatsapp />
              </a>
              <a href='#' className='IconBorder'>
                <BsInstagram />
              </a>
            </div> */}
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 homeImage mt-md-0 mt-5'>
            {/* <div className='banner_image row'>
              <div className='Dot_img'>
                <img src={Dot} className='dot_img' />
              </div>
              <img src={Banner_img} className='img-fluid banner_img1' />
              <div className='Element_img'>
                {Array.from({ length: 4 }, () => (
                  <img src={Element_img} className='element_img1' />
                ))}
              </div>
            </div> */}
            {/* <div className='HeroBanner_Img text-center'>
              <img src={HeroBanner_Img} alt='Banner_Img' />
            </div> */}
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/LzsGfLtGwnQ?autoplay=1&mute=1&playlist=LzsGfLtGwnQ&loop=1`}
              frameBorder="0"
              // allow="autoplay; encrypted-media;"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loop
            />
            {/* <VideoContainer
              data={<video width='100%' height='360' autoPlay muted loop src='https://butler-media.fra1.digitaloceanspaces.com/obb_civica_version.mp4' controls></video>}
            /> */}
            {/* <div className='d-flex justify-content-around col-lg-12 banner_box text-center mt-5'>
              <div className='col-lg-4'>
                <h1 className='poppins-bold' id='counter1'>
                  200+
                </h1>
                <p className='poppins-regular'>Satisfied Clients</p>
              </div>
              <div className='col-lg-4'>
                <h1 className='poppins-bold' id='counter2'>
                  12+
                </h1>
                <p className='poppins-regular'>Years of experience</p>
              </div>
              <div className='col-lg-4'>
                <h1 className='poppins-bold' id='counter3'>
                  425+
                </h1>
                <p className='poppins-regular'>Project completed</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
