import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
    <div className='work-section-top'>
    <p className='primary-subheading'>Testimonial</p>
          <h1 className='primary-heading'>What They Are Saying</h1>
          <p className='primary-text'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reiciendis? Velit beatae eius, ex ea nesciunt fugiat possimus
     in, doloribus officia aperiam non nemo placeat delectus quibusdam rem tempora ratione!</p>
     </div>
        <div className='testimonial-section-bottom'>
            <img  src={ProfilePic} alt='profile pic'/>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reiciendis? 
            Velit beatae eius, ex ea nesciunt fugiat possimus
            in, doloribus officia aperiam non nemo 
         placeat delectus quibusdam rem tempora ratione!   
            </p>
            <div className='testimonials-stars-container'>
            <AiFillStar/> 
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <h2> John Doe  </h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials