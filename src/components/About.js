import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground}></img>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage}></img>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'> Food Is An Important Part Of A Balanced diet</h1>
            <p className='primary-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Corrupti doloremque quis quaerat,soluta magnam delectus nemo minus! 
            </p>
            <p className='primary-text'>
            Id reprehenderit beatae exercitationem architecto
            , veritatis minus eaque cum, hic possimus vel earum.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> Video</button>
            </div>
        </div>
    </div>
  )
}

export default About