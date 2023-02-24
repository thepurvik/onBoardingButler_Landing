import React from 'react';
import '../../assets/styles/Reviews.css';
import Reviews_img from '../../assets/images/Review_img.jpg';
import { Star } from '../../assets/icons/Star';
import Default from '../../assets/images/default.jpg';

const Reviews = () => {
  return (
    <div>
      <div className='container Review_Body'>
        <h1 className='poppins-bold mb-2'>Quotes</h1>
        <p className='poppins-regular ml-2 mb-2'>We have asked managers what onboarding of new employees actually looks like ...</p>
        <div className='row align-items-center justify-content-between Reviews_heading m-0'>
          <div className='col-lg-3 col-md-3 col-sm-12 col-12 Reviews_Body'>
            <div className='Reviews_innerPart m-0'>
              {/* <div className='Review_Banner_img  col-lg-4'>
                <img src={Default} alt='review_img' className=' img-fluid Reviews_img' />
              </div> */}
              {/* <div className='Review_Banner pr-1 col-lg-8'> */}
              <div className='Review_Banner p-2'>
                <div className='Rating'>
                  {Array.from({ length: 5 }, (v, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className='pt-2'>
                  <p className='poppins-regular'>
                    We only have people on loan, so we must give them the best framework so that they can achieve as much as possible in the time they are employed - for the
                    benefit of us and for the benefit of them.
                  </p>
                  <h6 className='pt-4 poppins-bold'>CEO, Production company</h6>
                  {/* <p className='poppins-regular'>Student</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 col-12 Reviews_Body'>
            <div className='Reviews_innerPart m-0'>
              <div className='Review_Banner p-2'>
                <div className='Rating'>
                  {Array.from({ length: 5 }, (v, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className='pt-2'>
                  <p className='poppins-regular'>
                    Sometimes I ask myself if we do enough to give our new employee a chance to flourish in this amazing company? And often I have to just answer 'Maybe', because I
                    actually don't have a solid gut feeling.
                  </p>
                  <h6 className='pt-4 poppins-bold'>Manager, IT company </h6>
                  {/* <p className='poppins-regular'>Student</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-12 col-12 Reviews_Body'>
            <div className='Reviews_innerPart m-0'>
              <div className='Review_Banner p-2'>
                <div className='Rating'>
                  {Array.from({ length: 5 }, (v, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className='pt-2'>
                  <p className='poppins-regular'>
                    In an ideal world, I would actually like to have a better overview and more control over it. So I do not have to worry all the time about things going as they
                    should and my new employee getting off to a good start.
                  </p>
                  <h6 className='pt-4 poppins-bold'>Team Leader, IT company</h6>
                  {/* <p className='poppins-regular'>Student</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

// {
//   <div className='col-lg-4 col-md-12 col-sm-12 Reviews_Part'>
//             {/* <div className='row align-items-center m-0'> */}
//             <div className='Reviews_SecondPart m-0'>
//               <div className='Review_icon'>
//                 {Array.from({ length: 4 }, (v, i) => (
//                   <Star key={i} />
//                 ))}
//                 <div className='pt-2'>
//                   <p className='poppins-regular'>
//                     Sometimes I ask myself if we do enough to give our new employee a chance to flourish in this amazing company? And often I have to just answer 'Maybe', because I
//                     actually don't have a solid gut feeling.
//                   </p>
//                   <div className='media'>
//                     {/* <img src={Default} alt='review_img' className='align-self-center mr-3 rounded-circle w-25 h-25' /> */}
//                     <div className='media-body align-self-center'>
//                       <h6 className='pt-0 mb-1 mt-3 poppins-bold'>Manager, IT company </h6>
//                       {/* <p className='poppins-regular mb-0'>Student</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='col-lg-4 col-md-12 col-sm-12 Reviews_Part'>
//             <div className='Reviews_SecondPart m-0'>
//               <div className='Review_icon2 px-1 '>
//                 {Array.from({ length: 4 }, (v, i) => (
//                   <Star key={i} />
//                 ))}
//                 <div className='pt-2'>
//                   <p className='poppins-regular'>
//                     In an ideal world, I would actually like to have a better overview and more control over it. So I do not have to worry all the time about things going as they
//                     should and my new employee getting off to a good start.
//                   </p>
//                   <div className='media'>
//                     {/* <img src={Default} alt='review_img' className='align-self-center mr-3 rounded-circle w-25 h-25' /> */}
//                     <div className='media-body align-self-center'>
//                       <h6 className='pt-0 mb-1 mt-3 poppins-bold'>Team Leader, IT company</h6>
//                       {/* <p className='poppins-regular mb-0'>Student</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* </div> */}
//           </div>
// }
