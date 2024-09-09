import React from 'react';
import "./Hero.css"
import profile_image from "../../assets/myprofile.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/Hafiz_Areeb_Ahmed_CV_2024.pdf"

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1> <span>I’m Areeb Ahmed,</span> Software Engineer and Web Developer</h1>
        <p>I’m a Software Engineer with expertise in building dynamic web applications using JavaScript, React.js, and Node.js. Explore my portfolio to see my projects and let’s connect to discuss how I can help with your next development challenge</p>
        <div className="hero-action">
         <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink> </div>
         <div className="hero-resume"><a href={resume} download="Hafiz_Areeb_Ahmed_Resume">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
