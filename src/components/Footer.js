import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='footer-icons'>
         <BsTwitter/>
         <BsFacebook/>
            <BsYoutube/>
            <SiLinkedin/>
        </div>
    </div>
    <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Career</span>
            <span>Testimonial</span>
            <span>Work</span>
        </div>
        <div className='footer-section-columns'>
            <span>244-44443-333</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
        </div>
        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy</span>
        </div>
    </div>
     </div>
  )
}

export default Footer